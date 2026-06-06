# Balance with Shree - Project Audit and Scalability Plan

Audit date: 2026-06-06

## 1. Current Project Shape

The repository is currently a wrapper workspace with the real Vite React app nested inside `balance-with-shree/`.

Current high-level structure:

```text
.
├── package.json                    # wrapper scripts only
├── package-lock 2.json              # duplicate/stray lockfile
├── dist/                            # build output at repo root
└── balance-with-shree/
    ├── package.json                 # actual app package
    ├── package-lock.json
    ├── vite.config.ts
    ├── vercel.json
    ├── dist/                        # app build output
    ├── public/
    └── src/
        ├── Routes/
        ├── assets/
        ├── components/
        ├── config/
        ├── data/
        ├── hooks/
        ├── pages/
        ├── styles/
        └── utils/
```

The app is a React 18 + Vite + TypeScript site using `styled-components`, `react-router-dom`, `framer-motion`, `gsap`, EmailJS, Lucide icons, and Cloudinary-hosted media.

## 2. Verification Results

Commands run:

```bash
npm --prefix balance-with-shree run lint
npm --prefix balance-with-shree run build
cd balance-with-shree && npm exec -- tsc -b --pretty false
```

Results:

- ESLint passed.
- Vite production build passed.
- Strict TypeScript project check failed with real errors.

Important implication: the current production build can succeed even when the TypeScript project has broken contracts. `vite build` transpiles the app, but it is not catching the full `tsconfig` project errors.

## 3. Highest Priority Fixes

### P0 - Add TypeScript Checking to CI/Build

Current app script only runs Vite:

- `balance-with-shree/package.json:6-10`

Recommended scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "typecheck": "tsc -b --pretty false",
    "lint": "eslint .",
    "build": "npm run typecheck && vite build",
    "preview": "vite preview",
    "check": "npm run lint && npm run typecheck"
  }
}
```

Why: this prevents hidden type errors from shipping or reappearing when unused components are imported later.

### P0 - Fix Type Errors

The explicit TypeScript check currently reports multiple categories:

- `buildWhatsAppUrl` infers only the default literal message type because its parameter default comes from an `as const` object. See `balance-with-shree/src/data/contact.ts:1-23`. The function should accept `message: string = contactMessages.general`.
- `Button` spreads props after setting `to` and `type`, causing overwrite/type errors. See `balance-with-shree/src/components/Button/index.tsx:61-103`.
- Video review component passes video objects into `<video src>`, not string URLs. See `balance-with-shree/src/components/Yoga/YogaVideoReviews.tsx:13-21` and `:47-63`.
- Certification carousel treats certificate objects as strings. See `balance-with-shree/src/components/ExperienceLearning/index.tsx:23-39` and `:137-145`.
- `NodeJS.Timeout` is used in browser code. See `balance-with-shree/src/components/ExperienceLearning/index.tsx:55`. Prefer `ReturnType<typeof setInterval>`.
- Styled prop typo uses `align` instead of `$align`. See `balance-with-shree/src/components/JouneyTimeline/style.tsx:78-95`.
- Uppercase `.JPG` imports are not covered by current asset declarations. See `balance-with-shree/src/data/media.ts:18-20`.
- Some stale components no longer match shared component props, for example `Services` with `PackageDetails`.

### P0 - Decide What to Do With Build Output

There are two `dist` folders:

- `dist/`
- `balance-with-shree/dist/`

Recommendation: do not commit Vite build output unless deployment specifically requires it. Vercel can build from source. Add both `dist/` paths to ignore rules and remove committed build artifacts after confirming deployment settings.

### P1 - Remove Duplicate/Stray Workspace Files

Issues:

- `package-lock 2.json` is a duplicate/stray lockfile.
- Root `.DS_Store`, nested `.DS_Store`, `src/.DS_Store`, and `src/assets/.DS_Store` exist.
- Empty component folders exist: `src/components/ThemeToggle` and `src/components/HomeGallery`.
- Nested app README is still the default Vite template.

Recommended cleanup:

- Keep one package root strategy: either nested app with wrapper scripts, or move the app to the repository root.
- Remove duplicate lock/build/system files.
- Replace template README with project-specific setup, environment, deploy, and content-editing instructions.

### P1 - Reduce Oversized Page Components

Large files are carrying too many responsibilities:

- `src/pages/YogaPage/YogaLanding.tsx` is about 995 lines.
- `src/pages/HomePage/HomeLanding.tsx` is about 834 lines.
- Page style files are also large, for example `HomeLanding.styles.ts` and `YogaLanding.styles.ts`.

Example issue: `YogaLanding.tsx` contains pricing data, session option data, carousel behavior, certificate preview behavior, WhatsApp message creation, and page rendering in one file. See `balance-with-shree/src/pages/YogaPage/YogaLanding.tsx:94-270`.

Recommendation: split each page into page-owned sections, page-owned data, and shared feature components.

### P1 - Centralize Business Data

Some data is centralized in `src/data`, but some still lives in page files:

- Yoga benefits, yoga types, pricing plans, private session options, prenatal session options.
- Home package rows, service rows, benefits.
- CTA text and WhatsApp message composition.

Recommendation: move domain data to feature-level data files so pricing, offers, testimonials, and media can be updated without editing page logic.

### P1 - Clean Stale/Unused Components

Several component folders appear older than the current page implementations:

- `PricingPlans`
- `Services`
- `Herosection`
- `ExperienceLearning`
- `JouneyTimeline` spelling issue
- `YogaVideoReviews`
- `YogaCategory` page is present but not routed

Recommendation: run a component inventory and either:

- promote useful pieces into shared/feature components,
- fix and route them,
- or delete/archive them.

Keeping broken unused files increases future risk because they look reusable but fail type checking.

## 4. Architecture Problems to Fix for Long-Term Scale

### 4.1 Folder Organization Is Mixed by Type, Not Feature

Current structure separates `pages`, `components`, and `data`, but the app behavior is feature/domain based: home, yoga, nutrition, ayurveda, about, contact. Over time, a global `components` folder becomes hard to maintain because page-specific components, reusable UI, modals, forms, and old components all live together.

Better rule:

- Shared UI goes in `shared/`.
- Domain-specific code goes in `features/`.
- Route entry pages stay small in `pages/`.

### 4.2 Styling Is Too Fragmented and Too Page-Specific

The app uses `styled-components`, which is fine, but each large page has a huge `.styles.ts` file. This makes it hard to reuse layout primitives and hard to keep spacing, card, grid, and typography consistent.

Recommendation:

- Keep global tokens in `src/shared/styles/theme.ts`.
- Keep shared primitives like `Container`, `Section`, `SectionHeading`, `Card`, `Grid` in `src/shared/ui`.
- Keep page-section styles beside the section component, not in one massive page stylesheet.

### 4.3 Data and UI Types Are Not Strong Enough

The current `siteMedia` object is useful, but media objects and strings are mixed. That caused errors where components expected `string` but received `{ src, alt, title }`.

Recommendation:

- Create explicit types: `ImageAsset`, `VideoAsset`, `CertificateAsset`, `Plan`, `Testimonial`.
- Use these types in data files and components.
- Avoid mixed shapes in arrays.

### 4.4 Route Naming and Folder Naming Need Normalization

Current examples:

- `Routes/` uses capital letter.
- `ErrorBoundry.tsx` is misspelled.
- `WhatsupFloating` should be `WhatsAppFloating`.
- `JouneyTimeline` should be `JourneyTimeline`.
- Asset folder `Ayurveda/` uses capital letter while others are lowercase.

Recommendation: standardize lowercase folders and correct component names before the app grows.

### 4.5 Environment and Deployment Need Clear Ownership

EmailJS config is now environment-driven, which is good. The next step is documenting required variables and making runtime failures user-friendly.

Recommendation:

- Keep `.env.example`.
- Add setup instructions to README.
- Keep `VITE_*` names only for values safe to expose in browser code.
- Add a contact fallback path when EmailJS is missing or fails, such as visible WhatsApp/mail links.

## 5. Recommended Long-Term Folder Structure

Target structure if the app remains nested:

```text
balance-with-shree/
├── public/
│   ├── favicon.svg
│   ├── logo.png
│   └── reviews/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── AppRoutes.tsx
│   │   ├── providers.tsx
│   │   └── ErrorBoundary.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── YogaPage.tsx
│   │   ├── NutritionPage.tsx
│   │   ├── AyurvedaPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   ├── features/
│   │   ├── home/
│   │   │   ├── components/
│   │   │   ├── data.ts
│   │   │   └── types.ts
│   │   ├── yoga/
│   │   │   ├── components/
│   │   │   ├── data.ts
│   │   │   ├── pricing.ts
│   │   │   └── types.ts
│   │   ├── nutrition/
│   │   │   ├── components/
│   │   │   ├── data.ts
│   │   │   └── types.ts
│   │   ├── ayurveda/
│   │   │   ├── components/
│   │   │   ├── data.ts
│   │   │   └── types.ts
│   │   ├── about/
│   │   │   ├── components/
│   │   │   ├── data.ts
│   │   │   └── types.ts
│   │   └── contact/
│   │       ├── ContactForm.tsx
│   │       ├── contact.service.ts
│   │       ├── data.ts
│   │       └── types.ts
│   ├── shared/
│   │   ├── assets/
│   │   ├── config/
│   │   │   └── env.ts
│   │   ├── hooks/
│   │   │   ├── useCarousel.ts
│   │   │   ├── useReducedMotion.ts
│   │   │   └── useReveal.ts
│   │   ├── layout/
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   └── ScrollToTop.tsx
│   │   ├── media/
│   │   │   ├── media.data.ts
│   │   │   └── media.types.ts
│   │   ├── styles/
│   │   │   ├── GlobalStyles.ts
│   │   │   ├── styled.d.ts
│   │   │   └── theme.ts
│   │   └── ui/
│   │       ├── Button/
│   │       ├── Modal/
│   │       ├── Card.tsx
│   │       ├── Container.tsx
│   │       └── SectionHeading.tsx
│   ├── tests/
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

If you want the cleanest long-term repo, move the Vite app to the repository root instead of keeping the nested folder. That removes wrapper scripts, duplicate lockfiles, and deployment ambiguity.

## 6. Suggested Page Breakdown

### Home

Current `HomeLanding.tsx` should become:

```text
features/home/
├── components/
│   ├── HomeHero.tsx
│   ├── PackagesSummary.tsx
│   ├── ServicesOverview.tsx
│   ├── AboutPreview.tsx
│   ├── TestimonialsCarousel.tsx
│   ├── VideoReviewsCarousel.tsx
│   ├── CertificationsCarousel.tsx
│   └── HomeFinalCta.tsx
├── data.ts
└── types.ts
```

### Yoga

Current `YogaLanding.tsx` should become:

```text
features/yoga/
├── components/
│   ├── YogaHero.tsx
│   ├── YogaBenefits.tsx
│   ├── YogaTypes.tsx
│   ├── YogaPricing.tsx
│   ├── SessionOptionSelector.tsx
│   ├── TransformationsCarousel.tsx
│   ├── YogaGallery.tsx
│   ├── YogaVideoReviews.tsx
│   ├── CertificationsCarousel.tsx
│   └── YogaFinalCta.tsx
├── data.ts
├── pricing.ts
└── types.ts
```

### Contact

```text
features/contact/
├── ContactPageContent.tsx
├── ContactForm.tsx
├── ContactDetails.tsx
├── contact.service.ts
├── data.ts
└── types.ts
```

The EmailJS call should live in `contact.service.ts`, not directly inside the form component.

## 7. Shared Hooks Worth Extracting

Repeated carousel/swipe code appears in large page files. Extract:

- `useCarousel({ length })` for previous/next/index logic.
- `useSwipeNavigation({ onPrevious, onNext })` for touch handling.
- `useBodyScrollLock(isLocked)` for modal body overflow.
- `useReducedMotion()` for GSAP/framer behavior.

This will reduce copy-paste logic in Home, Yoga, About, and certificate/video sections.

## 8. Build, Quality, and Tooling Recommendations

Add:

- `typecheck` script.
- `check` script combining lint and typecheck.
- Root script forwarding `typecheck` and `check`.
- Type-aware ESLint once current type errors are fixed.
- Optional: Vitest + React Testing Library for contact form and pricing helpers.
- Optional: Playwright smoke tests for routes `/`, `/about`, `/yoga`, `/nutrition`, `/ayurveda`, `/contact`.

Minimum smoke tests:

- All routes render without console errors.
- Navbar links work.
- Mobile drawer opens/closes.
- Contact form validates required fields.
- WhatsApp CTA URLs contain encoded message text.
- Pricing session selectors update displayed price.

## 9. Performance and Asset Recommendations

Build output shows two SVG leaf assets over 2 MB each:

- `left leaf.svg`
- `right leaf.svg`

These are used as fixed global background layers in `GlobalStyles`. They likely contain embedded raster data inside SVG. Replace them with optimized WebP/PNG or simplified SVG assets.

Other asset recommendations:

- Keep images lowercase with consistent extensions.
- Avoid uppercase `.JPG` imports or add module declarations for them.
- Use Cloudinary transformations consistently for remote images.
- Add explicit width/height or aspect-ratio for image-heavy sections to reduce layout shift.
- Avoid committing generated `dist` unless deployment requires it.

## 10. Recommended Migration Order

Do this in phases to avoid a risky rewrite.

### Phase 1 - Safety and Cleanup

1. Fix TypeScript errors.
2. Add `typecheck` and make `build` run it.
3. Remove or fix stale unused components.
4. Clean duplicate lockfiles, `.DS_Store`, empty folders, and build output policy.
5. Replace Vite README with project README.

### Phase 2 - Shared Foundations

1. Move `App`, routes, providers, and error boundary into `src/app`.
2. Move `Navbar`, `Footer`, `ScrollToTop`, `Button`, `Modal`, and primitives into `src/shared`.
3. Add shared media/data types.
4. Add carousel/body-scroll/reduced-motion hooks.

### Phase 3 - Feature Refactor

1. Refactor Home into feature sections.
2. Refactor Yoga into feature sections and move pricing to `features/yoga/pricing.ts`.
3. Refactor Nutrition, Ayurveda, About, and Contact.
4. Keep route page files thin.

### Phase 4 - Test and Deployment Hardening

1. Add unit tests for pure helpers and pricing.
2. Add route smoke tests.
3. Add Vercel deployment notes.
4. Audit accessibility and mobile layouts.
5. Optimize heavy assets.

## 11. Definition of a Good Final State

The project is in a scalable state when:

- `npm run check` passes.
- `npm run build` fails if TypeScript fails.
- Route page files are small composition files.
- Shared UI is reusable and typed.
- Feature-specific code lives under `features/<domain>`.
- No broken unused components remain.
- No generated build output or OS metadata is tracked.
- README explains setup, env vars, scripts, deployment, and content/media editing.
- Pricing, testimonials, certificates, media, and contact data are editable from clear data files.


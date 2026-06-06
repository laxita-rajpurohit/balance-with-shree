# Phase 9 - Final Hardening & Repository Cleanup Audit

This document summarizes the final state of the Balance with Shree repository and identifies remaining cleanup tasks.

## 1. Final Structure Audit

The project has transitioned to a feature-domain architecture:

- `src/app`: Main app entry, global styles, and route orchestration.
- `src/shared`: Reusable UI primitives, layout components, centralized data, and shared types.
- `src/features`: Domain-specific components (Home, Yoga, Nutrition, etc.) and specialized services.
- `src/pages`: Composition layer for the router, mapping features to URLs.
- `src/stale`: Isolated legacy code, explicitly excluded from the build.

**Remaining Risks:**
- **Relative Imports**: Many components use deeply nested relative paths (e.g., `../../../../shared/ui`).
- **Global State**: Modal visibility is still managed at the page level (intentional for conversion flow).

## 2. Stale Deletion Readiness

The following items are isolated in `src/stale/` and have been verified as **unreferenced** by the active codebase:
- All components in `src/stale/components/`.
- `src/stale/pages/YogaCategory`.
- `src/pages/HomePage/style.tsx` (Leftover file identified during audit).

**Recommendation**: It is safe to permanently delete the `src/stale` directory and the leftover style file.

## 3. Dist Tracking Audit

Build artifacts are currently **tracked by git**, which is not recommended for production repositories.
- `dist/`
- `balance-with-shree/dist/`

**Cleanup Action**:
Run the following command to remove them from the index (preserving local files):
```bash
git rm -r --cached dist balance-with-shree/dist
```

## 4. Path Alias Feasibility

Introducing path aliases would significantly improve code readability.
**Recommended Aliases**:
- `@app` -> `src/app`
- `@shared` -> `src/shared`
- `@features` -> `src/features`
- `@pages` -> `src/pages`
- `@assets` -> `src/assets`

## 5. Dependency Audit

The following dependencies are candidates for removal:
- `next-cloudinary`: Unused in this Vite project.
- `framer-motion`: Only used in isolated stale components.

## 6. Asset Performance Audit

The background leaf assets are excessively large for SVGs:
- `left leaf.svg`: 2.1MB
- `right leaf.svg`: 2.1MB

**Recommendation**: These should be optimized using a tool like SVGO or converted to a high-quality WebP with a transparent background to reduce initial load time by ~4MB.

## 7. Final Project Health Status

- **Linting**: Passed
- **Type Check**: Passed
- **Production Build**: Successful (~1.9s build time)
- **Architecture**: Scalable and domain-organized.

## 8. Summary of Isolated Stale Files (Phase 3D/9A)

The following files are now fully isolated and verified for deletion:
- `src/stale/` (Entire directory)
- `src/pages/HomePage/style.tsx` (Unreferenced styled component file)

## 9. Cleanup Actions Requiring Explicit Approval

1.  **Delete Stale Code**: Remove `src/stale/` and `src/pages/HomePage/style.tsx`.
2.  **Un-track Build Folders**: Run `git rm -r --cached dist balance-with-shree/dist`.
3.  **Prune Dependencies**: Uninstall `next-cloudinary` and `framer-motion`.
4.  **Optimize Leaf Assets**: Convert 2.1MB SVGs to WebP or optimize vectors.


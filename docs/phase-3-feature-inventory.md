# Phase 3 - Feature Inventory

This document tracks the classification and migration plan for components currently residing in `src/components/`.

## Component Inventory

| Component | Current Path | Recommended Destination | Migration Risk | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Ayurveda** | `src/stale/components/Ayurveda` | - | Low | **Isolated**. Superseded by `AyurvedaLanding`. |
| **AyurvedaPreview** | `src/stale/components/AyurvedaPreview` | - | Low | **Isolated**. Not used in current HomeLanding. |
| **Contact** | `src/stale/components/Contact` | - | Low | **Isolated**. |
| **ContactUs** | `src/stale/components/ContactUs` | - | Low | **Isolated**. Superseded by `ContactLanding`. |
| **ExperienceLearning** | `src/stale/components/ExperienceLearning` | - | Low | **Isolated**. Certificate carousel logic is now inline. |
| **FinalCTA** | `src/stale/components/FinalCTA` | - | Low | **Isolated**. |
| **Herosection** | `src/stale/components/Herosection` | - | Low | **Isolated**. Audit mentions it is broken/unused. |
| **Holistic** | `src/stale/components/Holistic` | - | Low | **Isolated**. |
| **HomeYoga** | `src/stale/components/HomeYoga` | - | Low | **Isolated**. |
| **Journey** | `src/stale/components/Journey` | - | Low | **Isolated**. |
| **JourneyTimeline** | `src/stale/components/JourneyTimeline` | - | Low | **Isolated**. Superseded by inline code in `AboutLanding`. |
| **NutritionPage** | `src/stale/components/NutritionPage` | - | Low | **Isolated**. Contains sub-components like `Pricing`, `HeroSection` not used by `NutritionLanding`. |
| **NutritionPreview** | `src/stale/components/NutritionPreview` | - | Low | **Isolated**. |
| **Philosophy** | `src/stale/components/Philosophy` | - | Low | **Isolated**. Superseded by styled component in `AboutLanding`. |
| **PricingPlans** | `src/stale/components/PricingPlans` | - | Low | **Isolated**. |
| **PrivacyPolicy** | `src/shared/ui/PrivacyPolicy` | `src/shared/ui/PrivacyPolicy` | Low | **Migrated**. Used in `Footer`. |
| **ProgramsPreview** | `src/stale/components/ProgramsPreview` | - | Low | **Isolated**. |
| **Services** | `src/stale/components/Services` | - | Low | **Isolated**. Audit mentions it is broken/unused. |
| **TermsConditions** | `src/shared/ui/TermsConditions` | `src/shared/ui/TermsConditions` | Low | **Migrated**. Used in `Footer`. |
| **ui/primitives.tsx** | `src/stale/components/ui` | `src/shared/ui/primitives.tsx` | Medium | **Isolated**. Used by some stale components; might contain useful fragments. |
| **WorkWithMeCTA** | `src/stale/components/WorkWithMeCTA` | - | Low | **Isolated**. |
| **Yoga** | `src/stale/components/Yoga` | - | Low | **Isolated**. Superseded by `YogaLanding`. |
| **YogaCategory** | `src/stale/pages/YogaCategory` | `src/stale/pages/YogaCategory` | Low | **Isolated**. Not routed. |

## Phase 3D isolation completed

The following stale items have been moved to `src/stale/` to clean up the active development workspace.

**Moved to `src/stale/components/`:**
- `Ayurveda`, `AyurvedaPreview`, `Contact`, `ContactUs`, `ExperienceLearning`, `FinalCTA`, `Herosection`, `Holistic`, `HomeYoga`, `Journey`, `JourneyTimeline`, `NutritionPage`, `NutritionPreview`, `Philosophy`, `PricingPlans`, `ProgramsPreview`, `Services`, `WorkWithMeCTA`, `Yoga`, `ui`

**Moved to `src/stale/pages/`:**
- `YogaCategory`

**Configuration Changes:**
- Updated `balance-with-shree/tsconfig.app.json` to exclude `src/stale` from compilation. This prevents broken relative imports in stale files from failing the build or typecheck.

## Classification Summary

- **Shared UI migrated**: `PrivacyPolicy`, `TermsConditions`.
- **Feature-specific components**: None currently active in `src/components/`.
- **Stale/Isolated**: 20 items successfully isolated to `src/stale/`.

## High-Risk Components

- **ui/primitives.tsx**: Isolated. If any parts of this are needed later, they should be surgically extracted to `src/shared/ui/`.

## Recommended Next Steps

1. **Phase 3E**: Begin breaking down the massive landing pages (e.g., `YogaLanding.tsx`, `HomeLanding.tsx`) into domain-specific components under `src/features/`.

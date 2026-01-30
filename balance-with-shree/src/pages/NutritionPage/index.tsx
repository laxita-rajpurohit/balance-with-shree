// NutritionPage.tsx

import { NutritionBenefits } from "../../components/NutritionPage/Benefits";
import { NutritionBio } from "../../components/NutritionPage/Bio";
import { NutritionHero } from "../../components/NutritionPage/HeroSection";
import { NutritionPricing } from "../../components/NutritionPage/Pricing";
import ClientReviews from "../../components/NutritionPage/Review";
// import { PageWrapper } from "../../components/NutritionPage/style";

const NutritionPage = () => (
  <>
    <NutritionHero />
    <NutritionBenefits />
    <NutritionBio />
    <ClientReviews />
    <NutritionPricing />
  </>
);

export default NutritionPage;

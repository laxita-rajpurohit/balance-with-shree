import YogaHero from "../../components/Yoga/yogaHero";
import YogaCategories from "../../components/Yoga/yogaCategories";
import YogaGallery from "../../components/Yoga/yogaGallery";
import YogaTransformations from "../../components/Yoga/yogaTransformations";
import YogaVideoReviews from "../../components/Yoga/YogaVideoReviews";

import YogaTypes from "../../components/Yoga/YogaTypes";
import PricingPlans from "../../components/PricingPlans";

export default function YogaPage() {
  return (
    <>
      <YogaHero />
      <YogaCategories />
      <YogaTypes />
      <PricingPlans />
      <YogaGallery />
      <YogaTransformations />
      <YogaVideoReviews />
    </>
  );
}

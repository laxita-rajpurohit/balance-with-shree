import YogaHero from "../../components/Yoga/yogaHero";
import YogaCategories from "../../components/Yoga/yogaCategories";
import YogaGallery from "../../components/Yoga/yogaGallery";
import YogaTransformations from "../../components/Yoga/yogaTransformations";
import YogaVideoReviews from "../../components/Yoga/YogaVideoReviews";

import YogaTypes from "../../components/Yoga/YogaTypes";

export default function YogaPage() {
  return (
    <>
      <YogaHero />
      <YogaCategories />
      <YogaTypes />
      <YogaGallery />
      <YogaTransformations />
      <YogaVideoReviews />
    </>
  );
}

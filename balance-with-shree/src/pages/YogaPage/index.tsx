import YogaHero from "../../components/Yoga/yogaHero";
import YogaCategories from "../../components/Yoga/yogaCategories";
import YogaGallery from "../../components/Yoga/yogaGallery";
import YogaTransformations from "../../components/Yoga/yogaTransformations";
import YogaVideoReviews from "../../components/Yoga/YogaVideoReviews";
import YogaCTA from "../../components/Yoga/yogaCTA";

export default function YogaPage() {
  return (
    <>
      <YogaHero />
      <YogaCategories />
      <YogaGallery />
      <YogaTransformations />
      <YogaVideoReviews />
      <YogaCTA />
    </>
  );
}

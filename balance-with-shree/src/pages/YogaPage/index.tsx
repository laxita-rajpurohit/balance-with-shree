import YogaCategories from "../../components/Yoga/yogaCategories";
import YogaCTA from "../../components/Yoga/yogaCTA";
import YogaGallery from "../../components/Yoga/yogaGallery";
import YogaHero from "../../components/Yoga/yogaHero";
import YogaVideoReviews from "../../components/Yoga/YogaVideoReviews";

export default function YogaPage() {
  return (
    <>
      <YogaHero />
      <YogaCategories />
      <YogaGallery />
      <YogaVideoReviews />
      {/* <YogaReviews /> */}
      <YogaCTA />
    </>
  );
}

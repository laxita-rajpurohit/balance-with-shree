import {
  YogaHeroSection,
  YogaHeroOverlay,
  YogaHeroContent,
  YogaHeroTitle,
  YogaHeroSub,
} from "./style";

export default function YogaHero() {
  return (
    <YogaHeroSection
      $bgImage={
        "https://res.cloudinary.com/drjzugsyo/image/upload/v1771264109/yogaimage2_vid0yc.jpg"
      }
    >
      <YogaHeroOverlay />
      <YogaHeroContent>
        <YogaHeroSub>YOGA</YogaHeroSub>
        <YogaHeroTitle>
          Move with Awareness.
          <br />
          Build Strength with Ease.
        </YogaHeroTitle>
      </YogaHeroContent>
    </YogaHeroSection>
  );
}

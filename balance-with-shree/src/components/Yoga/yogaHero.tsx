import {
  YogaHeroSection,
  YogaHeroOverlay,
  YogaHeroContent,
  YogaHeroTitle,
  YogaHeroSub,
} from "./style";

export default function YogaHero() {
  return (
    <YogaHeroSection>
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

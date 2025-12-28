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
        <YogaHeroSub>Yoga at Balance with Shree</YogaHeroSub>
        <YogaHeroTitle>
          Yoga Designed for <br /> Every Phase of Life
        </YogaHeroTitle>
      </YogaHeroContent>
    </YogaHeroSection>
  );
}

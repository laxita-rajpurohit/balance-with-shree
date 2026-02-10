import {
  YogaHeroSection,
  YogaHeroOverlay,
  YogaHeroContent,
  YogaHeroTitle,
  YogaHeroSub,
} from "./style";
import yogaImage from "../../assets/yogaimage2.jpeg";
export default function YogaHero() {
  return (
    <YogaHeroSection $bgImage={yogaImage}>
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

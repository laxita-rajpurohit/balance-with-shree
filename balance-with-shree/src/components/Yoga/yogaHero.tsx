import {
  YogaHeroSection,
  YogaHeroOverlay,
  YogaHeroContent,
  YogaHeroTitle,
  YogaHeroSub,
} from "./style";
import { siteMedia } from "../../data/media";

export default function YogaHero() {
  return (
    <YogaHeroSection $bgImage={siteMedia.yoga.hero}>
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

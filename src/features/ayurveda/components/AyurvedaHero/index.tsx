import type { ResponsiveImageAsset } from "../../../../shared/types/media";
import {
  Hero,
  HeroVisual,
  HeroPicture,
  HeroImage,
  HeroWash,
} from "./styles";

interface AyurvedaHeroProps {
  heroWatercolor: ResponsiveImageAsset;
}

export const AyurvedaHero = ({ heroWatercolor }: AyurvedaHeroProps) => {
  return (
    <Hero>
      <HeroVisual>
        <HeroPicture>
          <source
            media="(min-width: 768px)"
            srcSet={heroWatercolor.desktop}
          />
          <HeroImage
            src={heroWatercolor.mobile}
            alt={heroWatercolor.alt}
            loading="eager"
            decoding="async"
          />
        </HeroPicture>
        <HeroWash />
      </HeroVisual>
    </Hero>
  );
};

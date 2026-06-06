import type { ResponsiveImageAsset } from "../../../../shared/types/media";
import {
  Hero,
  HeroVisual,
  HeroPicture,
  HeroImage,
  HeroShade,
} from "./styles";

interface YogaHeroProps {
  heroWatercolor: ResponsiveImageAsset;
}

export const YogaHero = ({ heroWatercolor }: YogaHeroProps) => {
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
        <HeroShade />
      </HeroVisual>
    </Hero>
  );
};

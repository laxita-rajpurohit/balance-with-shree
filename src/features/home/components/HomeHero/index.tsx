import { useState } from "react";
import { CalendarDays, Sparkles } from "lucide-react";
import type { ResponsiveImageAsset } from "../../../../shared/types/media";
import { siteMedia } from "../../../../shared/data/media";
import {
  HeroSection,
  HeroVisual,
  HeroPicture,
  HeroImage,
  HeroShade,
  HeroButtons,
  HeroGlassButton,
  HeroButtonIcon,
} from "./styles";

interface HomeHeroProps {
  onExplorePackages: () => void;
  onBookSession: () => void;
}

export const HomeHero = ({ onExplorePackages, onBookSession }: HomeHeroProps) => {
  const [useFallbackHero, setUseFallbackHero] = useState(false);
  const watercolorHero = siteMedia.home.homeHeroWatercolorIllustration as ResponsiveImageAsset;

  const heroAlt =
    watercolorHero?.alt ??
    "Watercolor illustration of a woman meditating in front of mountains and a glowing moon";

  const mobileHeroSrc =
    !useFallbackHero && watercolorHero
      ? watercolorHero.mobile
      : siteMedia.home.heroSlides[0];

  const desktopHeroSrc =
    !useFallbackHero && watercolorHero
      ? watercolorHero.desktop
      : siteMedia.home.heroSlides[0];

  return (
    <HeroSection>
      <HeroVisual>
        <HeroPicture>
          {!useFallbackHero && watercolorHero ? (
            <source media="(min-width: 768px)" srcSet={desktopHeroSrc} />
          ) : null}
          <HeroImage
            src={mobileHeroSrc}
            alt={heroAlt}
            loading="eager"
            decoding="async"
            onError={() => setUseFallbackHero(true)}
          />
        </HeroPicture>
        <HeroShade />

        <HeroButtons>
          <HeroGlassButton onClick={onExplorePackages}>
            <HeroButtonIcon>
              <Sparkles size={18} strokeWidth={1.9} />
            </HeroButtonIcon>
            <span>Explore Packages</span>
          </HeroGlassButton>

          <HeroGlassButton onClick={onBookSession}>
            <HeroButtonIcon>
              <CalendarDays size={18} strokeWidth={1.9} />
            </HeroButtonIcon>
            <span>Book a Session</span>
          </HeroGlassButton>
        </HeroButtons>
      </HeroVisual>
    </HeroSection>
  );
};

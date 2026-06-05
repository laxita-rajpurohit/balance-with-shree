import {
  ButtonsRow,
  Description,
  HeadingBlock,
  HeroCard,
  HeroImageFrame,
  HeroPicture,
  Img,
  SoftBadge,
  Wrapper,
  CarouselContainer,
} from "./style";
import { Button } from "../Button";
import { useInView } from "react-intersection-observer";
import { AnimatedContent } from "./style";
import { useState } from "react";
import { Modal } from "../Modal";
import { PackageDetails } from "../PackageDetails";
import { SessionSelector } from "../SessionSelector";
import { siteMedia } from "../../data/media";

const fallbackHeroImage = siteMedia.home.heroSlides[0];

export const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [packagesOpen, setPackagesOpen] = useState(false);
  const [sessionOpen, setSessionOpen] = useState(false);
  const [useFallbackHero, setUseFallbackHero] = useState(false);

  const watercolorHero = siteMedia.home.homeHeroWatercolorIllustration;
  const heroAlt = watercolorHero?.alt ?? "Balance with Shree home hero image";
  const mobileHeroSrc =
    !useFallbackHero && watercolorHero
      ? watercolorHero.mobile
      : fallbackHeroImage;
  const desktopHeroSrc =
    !useFallbackHero && watercolorHero
      ? watercolorHero.desktop
      : fallbackHeroImage;

  return (
    <Wrapper ref={ref}>
      <CarouselContainer>
        <HeroPicture>
          {!useFallbackHero && watercolorHero ? (
            <source media="(min-width: 768px)" srcSet={desktopHeroSrc} />
          ) : null}
          <Img
            src={mobileHeroSrc}
            alt={heroAlt}
            loading="eager"
            decoding="async"
            onError={() => setUseFallbackHero(true)}
          />
        </HeroPicture>
      </CarouselContainer>

      <AnimatedContent $visible={inView}>
        <HeroCard>
          <SoftBadge>Yoga • Nutrition • Ayurveda</SoftBadge>

          <HeadingBlock>
            <h1>Find balance that feels calm, sustainable, and deeply personal.</h1>
          </HeadingBlock>

          <Description>
            Through yoga, nutrition, and mindful living, I help you find
            balance that supports your body, your food habits, and your
            everyday life.
          </Description>

          <ButtonsRow>
            <Button variant="primary" size="lg" onClick={() => setPackagesOpen(true)}>
              Explore Packages
            </Button>

            <Button variant="secondary" size="lg" onClick={() => setSessionOpen(true)}>
              Book a Session
            </Button>

            <Modal isOpen={packagesOpen} onClose={() => setPackagesOpen(false)}>
              <PackageDetails
                title="Wellness Packages"
                packages={[
                  {
                    title: "Group Yoga (Online / Offline)",
                    note: "✔ Fees for group sessions are fixed.",
                  },
                  {
                    title: "Private Yoga (Personal Training)",
                    note: "✔ Private sessions are customised based on individual needs.",
                  },
                  {
                    title: "Prenatal Yoga (Private)",
                    note: "✔ Special cases are discussed after consultation.",
                  },
                ]}
                cta="Start Your Journey"
              />
            </Modal>

            <Modal isOpen={sessionOpen} onClose={() => setSessionOpen(false)}>
              <SessionSelector onSelect={() => setSessionOpen(false)} />
            </Modal>
          </ButtonsRow>
        </HeroCard>

        <HeroImageFrame>
        </HeroImageFrame>
      </AnimatedContent>
    </Wrapper>
  );
};

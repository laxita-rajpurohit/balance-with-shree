import { Button } from "../../../../shared/ui/Button";
import type { ImageAsset } from "../../../../shared/types/media";
import {
  Hero,
  HeroGrid,
  HeroImageWrap,
  HeroImage,
  HeroContent,
  SectionEyebrow,
  SectionTitle,
  HeroMeta,
  Divider,
  SectionBody,
  HeroActions,
} from "./styles";

interface AboutHeroProps {
  heroImage: ImageAsset;
  onScrollToPhilosophy: () => void;
  onBookSession: () => void;
}

export const AboutHero = ({
  heroImage,
  onScrollToPhilosophy,
  onBookSession,
}: AboutHeroProps) => {
  return (
    <Hero>
      <HeroGrid>
        <HeroImageWrap>
          <HeroImage
            src={heroImage.src}
            alt={heroImage.alt}
            loading="eager"
            decoding="async"
          />
        </HeroImageWrap>

        <HeroContent>
          <SectionEyebrow>About Balance with Shree</SectionEyebrow>
          <SectionTitle as="h1">Hi, I am Dhanashree</SectionTitle>
          <HeroMeta>
            a Clinical Nutritionist & Yoga Therapist, and the founder of
            Balance with Shree.
          </HeroMeta>
          <Divider>
            <span>✦</span>
          </Divider>
          <SectionBody>
            I help people build a healthy relationship with food, movement,
            and their bodies — not through extreme diets or quick fixes, but
            through simple, sustainable, and mindful lifestyle changes.
          </SectionBody>
          <SectionBody>
            From dance and acrobatics to yoga and mindful living, movement
            has always been my way of connecting with myself. During a pause
            in life, I found clarity through yoga and nutrition—building
            strength, balance, and discipline from within.
          </SectionBody>
          <SectionBody>
            Balance with Shree was born from this personal transformation—a
            space where yoga, nutrition, and mindful living come together in
            a practical, sustainable way.
          </SectionBody>

          <HeroActions>
            <Button size="lg" onClick={onScrollToPhilosophy}>
              My Approach
            </Button>
            <Button variant="secondary" size="lg" onClick={onBookSession}>
              Book a Session
            </Button>
          </HeroActions>
        </HeroContent>
      </HeroGrid>
    </Hero>
  );
};

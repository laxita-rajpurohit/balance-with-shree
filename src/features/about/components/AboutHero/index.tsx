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
            I am passionate about helping people build a healthier relationship
            with food, movement, and their bodies—not through restrictive diets
            or quick fixes, but through sustainable habits that support
            long-term well-being.
          </SectionBody>
          <SectionBody>
            Over the past 5+ years, I have had the privilege of guiding 1000+
            individuals on their wellness journeys. With a Master’s degree in
            Clinical Nutrition & Dietetics and training in yoga and yoga
            therapy, I take a holistic approach that combines nutrition,
            movement, and mindful living.
          </SectionBody>
          <SectionBody>
            Through Balance With Shree, I aim to make healthy living practical,
            enjoyable, and sustainable, helping individuals create positive
            changes that last a lifetime.
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

import { ArrowRight } from "lucide-react";
import { siteMedia } from "../../../../shared/data/media";
import {
  AboutCard,
  AboutImageWrap,
  AboutImage,
  AboutContent,
  SectionEyebrow,
  AboutTitle,
  DecorativeDivider,
  AboutText,
  AboutLink,
} from "./styles";

export const AboutPreview = () => {
  return (
    <AboutCard>
      <AboutImageWrap>
        <AboutImage
          src={siteMedia.home.homeAboutDhanashree.src}
          alt={siteMedia.home.homeAboutDhanashree.alt}
          loading="lazy"
          decoding="async"
        />
      </AboutImageWrap>

      <AboutContent>
        <SectionEyebrow>
          Clinical Nutritionist & Yoga Therapist
        </SectionEyebrow>
        <AboutTitle>Hi, I am Dhanashree</AboutTitle>
        <DecorativeDivider>
          <span>✦</span>
        </DecorativeDivider>
        <AboutText>
          a Clinical Nutritionist & Yoga Therapist, and the founder of
          Balance with Shree. I help people build a healthy relationship
          with food, movement, and their bodies — not through extreme
          diets or quick fixes, but through simple, sustainable, and
          mindful lifestyle changes.
        </AboutText>
        <AboutText>
          Through yoga, nutrition, and mindful living, I help you find
          balance that feels calm, sustainable, and deeply personal.
        </AboutText>
        <AboutLink to="/about">
          Read more <ArrowRight size={16} />
        </AboutLink>
      </AboutContent>
    </AboutCard>
  );
};

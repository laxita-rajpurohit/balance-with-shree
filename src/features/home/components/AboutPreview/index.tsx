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
         I am passionate about helping people build a healthier relationship with food, movement, 
         and their bodies—not through restrictive diets or quick fixes, but through sustainable habits that support long-term well-being.
        </AboutText>
        <AboutText>
         Over the past 5+ years, I have had the privilege of guiding 1000+ individuals on their wellness journeys. 
         With a Master’s degree in Clinical Nutrition & Dietetics and training in yoga and yoga therapy, 
         I take a holistic approach that combines nutrition, movement, and mindful living.
        </AboutText>
        <AboutLink to="/about">
          Read more <ArrowRight size={16} />
        </AboutLink>
      </AboutContent>
    </AboutCard>
  );
};

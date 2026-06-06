import type { LucideIcon } from "lucide-react";
import {
  Intro,
  SectionEyebrow,
  SectionTitle,
  Divider,
  SectionBody,
  CardSection,
  BenefitGrid,
  BenefitCard,
  BenefitBadge,
  BenefitTitle,
  BenefitText,
} from "./styles";

interface BenefitItemData {
  title: string;
  text: string;
  icon: LucideIcon;
}

interface YogaBenefitsProps {
  benefits: readonly BenefitItemData[];
}

export const YogaBenefits = ({ benefits }: YogaBenefitsProps) => {
  return (
    <>
      <Intro>
        <SectionEyebrow>Yoga with Balance</SectionEyebrow>
        <SectionTitle>A Practice Beyond Asanas</SectionTitle>
        <Divider>
          <span>✦</span>
        </Divider>
        <SectionBody>
          Yoga is a tool for balance, healing, and self-awareness. My
          sessions are thoughtfully designed to support mobility, strength,
          posture, breath, and mental clarity — while respecting your
          body’s limitations and needs.
        </SectionBody>
      </Intro>

      <CardSection>
        <BenefitGrid>
          {benefits.map(({ title, text, icon: Icon }) => (
            <BenefitCard key={title}>
              <BenefitBadge>
                <Icon size={18} strokeWidth={1.9} />
              </BenefitBadge>
              <BenefitTitle>{title}</BenefitTitle>
              <BenefitText>{text}</BenefitText>
            </BenefitCard>
          ))}
        </BenefitGrid>
      </CardSection>
    </>
  );
};

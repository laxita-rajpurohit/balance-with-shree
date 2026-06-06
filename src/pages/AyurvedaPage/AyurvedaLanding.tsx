import { Flower2, Leaf, Sparkles, type LucideIcon } from "lucide-react";
import { siteMedia } from "../../shared/data/media";
import {
  AyurvedaBenefits,
  AyurvedaFinalCta,
  AyurvedaHero,
  AyurvedaIntro,
  AyurvedaPricing,
  AyurvedaProcess,
  AyurvedaServices,
} from "../../features/ayurveda/components";
import {
  Column,
  Page,
  Stack,
} from "./AyurvedaLanding.styles";

type AyurvedaInclude = {
  title: string;
  icon: LucideIcon;
  items: readonly string[];
  note?: string;
  comingSoon?: boolean;
};

const includes: readonly AyurvedaInclude[] = [
  {
    title: "Ayurvedic Assessment",
    icon: Leaf,
    items: [
      "Prakriti (body constitution) & Vikriti (current imbalance) understanding",
      "Dosha evaluation: Vata, Pitta & Kapha",
      "Basic review of digestion, routine & stress patterns",
    ],
  },
  {
    title: "Dosha-Based Diet & Lifestyle Guidance",
    icon: Sparkles,
    items: [
      "Simple food suggestions according to dosha tendencies",
      "Daily routine (Dinacharya) guidance for better digestion, sleep & energy",
      "Practical, easy-to-follow habits",
    ],
  },
  {
    title: "Ayurvedic Therapies",
    icon: Flower2,
    items: [
      "Abhyanga",
      "Potli Abhyanga",
      "Shirodhara",
      "Panchakarma awareness & guidance (referral where appropriate)",
    ],
    note: "In-person Ayurvedic therapies will be introduced soon, including:",
    comingSoon: true,
  },
] as const;

const whoItsFor = [
  "Digestive discomfort & lifestyle-related issues",
  "Stress, anxiety & disturbed sleep",
  "Hormonal imbalance support (PCOS, menstrual health)",
  "Fatigue, stiffness & general wellbeing",
  "Preventive care & holistic balance",
] as const;

const consultationSteps = [
  "One-on-one personalised consultation",
  "Clear explanation in simple language",
  "Gentle, sustainable recommendations",
] as const;

export const AyurvedaLanding = () => {
  const heroWatercolor = siteMedia.ayurveda.heroWatercolor;

  return (
    <Page>
      <Column>
        <Stack>
          <AyurvedaHero heroWatercolor={heroWatercolor} />

          <AyurvedaIntro />

          <AyurvedaBenefits whoItsFor={whoItsFor} />

          <AyurvedaServices includes={includes} />

          <AyurvedaProcess consultationSteps={consultationSteps} />

          <AyurvedaPricing />

          <AyurvedaFinalCta />
        </Stack>
      </Column>
    </Page>
  );
};

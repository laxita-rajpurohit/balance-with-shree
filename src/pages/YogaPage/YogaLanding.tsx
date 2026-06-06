import { useState } from "react";
import {
  Flower2,
  HeartPulse,
  Leaf,
  Sparkles,
  Waves,
} from "lucide-react";
import { Modal } from "../../shared/ui/Modal";
import { SessionSelector } from "../../shared/ui/SessionSelector";
import {
  CertificationsCarousel,
  TransformationsCarousel,
  YogaBenefits,
  YogaFinalCta,
  YogaGallery,
  YogaHero,
  YogaPricing,
  YogaTypes,
  YogaVideoReviews,
} from "../../features/yoga/components";
import { siteMedia } from "../../shared/data/media";
import {
  Column,
  Page,
  Stack,
} from "./YogaLanding.styles";

const benefits = [
  {
    title: "Mindful Movement",
    text: "Yoga practiced with awareness, breath connection, and respect for your body’s limits.",
    icon: Leaf,
  },
  {
    title: "Strength & Stability",
    text: "Build functional strength and joint stability through safe alignment and gradual progress.",
    icon: HeartPulse,
  },
  {
    title: "Posture & Pain Care",
    text: "Support posture correction and manage back, neck, and joint discomfort mindfully.",
    icon: Waves,
  },
  {
    title: "Breath & Mindfulness",
    text: "Calm the nervous system and improve focus through conscious breath awareness.",
    icon: Flower2,
  },
  {
    title: "Progressive & Safe Practice",
    text: "Each session is designed to be sustainable, adaptive, and supportive of long-term wellbeing.",
    icon: Sparkles,
  },
] as const;

const yogaTypes = [
  "Hatha & Vinyasa Yoga",
  "Strength & flexibility-focused flows",
  "Therapeutic yoga for pain management",
  "Prenatal & postnatal yoga",
  "Beginners & lifestyle-based yoga",
] as const;

const certificates = siteMedia.about.certifications;

export const YogaLanding = () => {
  const [sessionOpen, setSessionOpen] = useState(false);

  const heroWatercolor = siteMedia.yoga.heroWatercolor;

  return (
    <Page>
      <Column>
        <Stack>
          <YogaHero heroWatercolor={heroWatercolor} />

          <YogaBenefits benefits={benefits} />

          <YogaTypes yogaTypes={yogaTypes} />

          <YogaPricing />

          <YogaGallery gallery={siteMedia.yoga.gallery} />

          <TransformationsCarousel
            transformations={siteMedia.yoga.transformations}
          />

          <YogaVideoReviews videos={siteMedia.yoga.videos} />

          <CertificationsCarousel certificates={certificates} />

          <YogaFinalCta onBookSession={() => setSessionOpen(true)} />
        </Stack>
      </Column>

      <Modal isOpen={sessionOpen} onClose={() => setSessionOpen(false)}>
        <SessionSelector onSelect={() => setSessionOpen(false)} />
      </Modal>
    </Page>
  );
};

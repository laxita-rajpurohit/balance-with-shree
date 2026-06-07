import { useState } from "react";
import {
  Apple,
  Flower2,
  HeartHandshake,
  HeartPulse,
  Leaf,
  MoonStar,
  Sparkles,
  SunMedium,
  Waves,
} from "lucide-react";
import { Modal } from "../../shared/ui/Modal";
import { PackageDetails } from "../../shared/ui/PackageDetails";
import { SessionSelector } from "../../shared/ui/SessionSelector";
import {
  AboutPreview,
  BenefitStrip,
  CertificationsSlider,
  HomeFinalCta,
  HomeHero,
  PackagesSummary,
  ServicesOverview,
  TestimonialSlider,
  VideoStories,
} from "../../features/home/components";
import { siteMedia } from "../../shared/data/media";
import { nutritionTestimonials } from "../../shared/data/reviews";
import {
  Column,
  Page,
  Stack,
} from "./HomeLanding.styles";

const packageItems = [
  { label: "Group Yoga", icon: Flower2 },
  { label: "Private Yoga", icon: HeartHandshake },
  { label: "Prenatal Yoga", icon: Sparkles },
] as const;

const yogaRows = [
  { label: "Therapeutic Yoga", icon: HeartPulse },
  { label: "Group Yoga", icon: Flower2 },
  { label: "Prenatal & Postnatal Yoga", icon: Sparkles },
] as const;

const nutritionRows = [
  { label: "Gut Health & Digestion", icon: Apple },
  { label: "Hormonal & Metabolic Balance", icon: HeartPulse },
  { label: "Sustainable Food Habits", icon: Leaf },
] as const;

const ayurvedaRows = [
  { label: "Dosha Awareness & Body Constitution", icon: Leaf },
  { label: "Daily Routine (Dinacharya)", icon: SunMedium },
  { label: "Digestive & Metabolic Balance", icon: Waves },
  { label: "Stress & Hormonal Regulation", icon: MoonStar },
] as const;

const benefits = [
  { label: "Holistic Approach", icon: Leaf },
  { label: "Personalized Guidance", icon: HeartPulse },
  { label: "Sustainable Wellness", icon: Sparkles },
] as const;

export const HomeLanding = () => {
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [sessionOpen, setSessionOpen] = useState(false);

  const testimonials = nutritionTestimonials;
  const certificates = siteMedia.about.certifications;

  return (
    <Page>
      <Column>
        <Stack>
          <HomeHero
            onExplorePackages={() => setPackagesOpen(true)}
            onBookSession={() => setSessionOpen(true)}
          />

          <AboutPreview />

          <ServicesOverview
            yogaRows={yogaRows}
            nutritionRows={nutritionRows}
            ayurvedaRows={ayurvedaRows}
          />

          <PackagesSummary packageItems={packageItems} />

          <BenefitStrip benefits={benefits} />

          <TestimonialSlider testimonials={testimonials} />

          <VideoStories videos={siteMedia.yoga.videos} />

          <CertificationsSlider certificates={certificates} />

          <HomeFinalCta onBookSession={() => setSessionOpen(true)} />
        </Stack>
      </Column>

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
    </Page>
  );
};

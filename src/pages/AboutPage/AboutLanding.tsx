import { useEffect, useRef, useState } from "react";
import { Modal } from "../../shared/ui/Modal";
import { SessionSelector } from "../../shared/ui/SessionSelector";
import {
  AboutCertifications,
  AboutFinalCta,
  AboutHero,
  AboutJourneyTimeline,
  AboutPhilosophy,
} from "../../features/about/components";
import { journeyTimelineItems } from "../../shared/data/journeyTimeline";
import { siteMedia } from "../../shared/data/media";
import {
  Column,
  Page,
  Stack,
} from "./AboutLanding.styles";

const certificates = siteMedia.about.certifications;

const philosophyChips = [
  {
    title: "Balance, not perfection",
    body: "Health is not about extremes or rigid rules.",
  },
  {
    title: "Nourishment, not restriction",
    body: "Food, movement, and care should feel supportive.",
  },
  {
    title: "Sustainable choices",
    body: "Small, consistent changes create real wellbeing.",
  },
  {
    title: "Mind, body, and soul",
    body: "A holistic approach matters just as much as routine.",
  },
] as const;

export const AboutLanding = () => {
  const [sessionOpen, setSessionOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const philosophyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(mediaQuery.matches);

    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);

    return () => mediaQuery.removeEventListener("change", updateMotion);
  }, []);

  const aboutHero = siteMedia.about.aboutHeroDhanashree;
  const timelineItems = journeyTimelineItems;

  const scrollToPhilosophy = () => {
    philosophyRef.current?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <Page>
      <Column>
        <Stack>
          <AboutHero
            heroImage={aboutHero}
            onScrollToPhilosophy={scrollToPhilosophy}
            onBookSession={() => setSessionOpen(true)}
          />

          <AboutPhilosophy
            ref={philosophyRef}
            philosophyChips={philosophyChips}
          />

          <AboutJourneyTimeline timelineItems={timelineItems} />

          <AboutCertifications certificates={certificates} />

          <AboutFinalCta onBookSession={() => setSessionOpen(true)} />
        </Stack>
      </Column>

      <Modal isOpen={sessionOpen} onClose={() => setSessionOpen(false)}>
        <SessionSelector onSelect={() => setSessionOpen(false)} />
      </Modal>
    </Page>
  );
};

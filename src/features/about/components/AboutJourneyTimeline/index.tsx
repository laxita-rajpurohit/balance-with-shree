import { useEffect, useRef, useState } from "react";
import type { JourneyTimelineItem } from "../../../../shared/types/journey";
import {
  TimelineSection,
  TimelineIntro,
  SectionEyebrow,
  SectionTitle,
  SectionBody,
  TimelineTrack,
  TimelineLine,
  TimelineLineFill,
  TimelineList,
  TimelineItem,
  TimelineNode,
  TimelineCardWrap,
  TimelineCard,
  TimelineCardInner,
  TimelineIllustrationWrap,
  TimelineIllustration,
  TimelineText,
  TimelineLabel,
  TimelineParagraph,
} from "./styles";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

interface AboutJourneyTimelineProps {
  timelineItems: readonly JourneyTimelineItem[];
}

export const AboutJourneyTimeline = ({
  timelineItems,
}: AboutJourneyTimelineProps) => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [activeItems, setActiveItems] = useState<number[]>([0]);

  const timelineSectionRef = useRef<HTMLElement | null>(null);
  const timelineItemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(mediaQuery.matches);

    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);

    return () => mediaQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const timelineEl = timelineSectionRef.current;
    if (!timelineEl) return;

    let rafId = 0;

    const update = () => {
      const rect = timelineEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.28;
      const total = rect.height + viewportHeight * 0.38;
      const progressed = (start - rect.top) / total;
      setTimelineProgress(clamp(progressed, 0, 1));
      rafId = 0;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  useEffect(() => {
    const items = timelineItemRefs.current.filter(Boolean);
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setActiveItems((current) => {
          const next = new Set(current);

          entries.forEach((entry) => {
            const index = Number(
              (entry.target as HTMLElement).dataset.timelineIndex ?? "-1",
            );
            if (index < 0) return;

            if (entry.isIntersecting) {
              next.add(index);
            } else {
              next.delete(index);
            }
          });

          return Array.from(next).sort((a, b) => a - b);
        });
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.35,
      },
    );

    items.forEach((item) => observer.observe(item as Element));

    return () => observer.disconnect();
  }, []);

  const activeIndex = activeItems.length
    ? activeItems[activeItems.length - 1]
    : 0;
  const displayedTimelineProgress = reducedMotion ? 1 : timelineProgress;

  return (
    <TimelineSection ref={timelineSectionRef}>
      <TimelineIntro>
        <SectionEyebrow>My Journey</SectionEyebrow>
        <SectionTitle>The journey through a timeline:</SectionTitle>
        <SectionBody>
          A personal story of awareness, healing, and purpose — told through the
          real moments that shaped Balance with Shree.
        </SectionBody>
      </TimelineIntro>

      <TimelineTrack>
        <TimelineLine aria-hidden="true">
          <TimelineLineFill
            $progress={displayedTimelineProgress}
            $reducedMotion={reducedMotion}
          />
        </TimelineLine>

        <TimelineList>
          {timelineItems.map((item, index) => {
            const isActive = activeIndex >= index;
            const illustration = item.illustration ?? item.image;

            return (
              <TimelineItem
                key={item.id}
                ref={(element) => {
                  timelineItemRefs.current[index] = element;
                }}
                data-timeline-index={index}
                $side={item.side}
                $active={isActive}
              >
                <TimelineNode $active={isActive} />

                <TimelineCardWrap $side={item.side}>
                  <TimelineCard $active={isActive}>
                    <TimelineCardInner>
                      <TimelineIllustrationWrap>
                        <TimelineIllustration
                          src={illustration}
                          alt={item.alt}
                          loading="lazy"
                          decoding="async"
                        />
                      </TimelineIllustrationWrap>

                      <TimelineText>
                        <TimelineLabel>{item.label}</TimelineLabel>
                        {item.paragraphs.map((paragraph) => (
                          <TimelineParagraph key={paragraph}>
                            {paragraph}
                          </TimelineParagraph>
                        ))}
                      </TimelineText>
                    </TimelineCardInner>
                  </TimelineCard>
                </TimelineCardWrap>
              </TimelineItem>
            );
          })}
        </TimelineList>
      </TimelineTrack>
    </TimelineSection>
  );
};

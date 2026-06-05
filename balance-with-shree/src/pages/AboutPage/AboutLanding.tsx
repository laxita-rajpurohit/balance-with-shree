import { useEffect, useRef, useState, type MouseEvent, type TouchEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircleMore,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { SessionSelector } from "../../components/SessionSelector";
import { buildWhatsAppUrl, contactMessages } from "../../data/contact";
import { journeyTimelineItems } from "../../data/journeyTimeline";
import { siteMedia } from "../../data/media";
import {
  CertButton,
  CertCaption,
  CertControls,
  CertDot,
  CertDots,
  CertFrame,
  CertHeader,
  CertImage,
  CertImageWrap,
  CertSection,
  CertSlide,
  CertTrack,
  CertViewport,
  Column,
  Divider,
  FinalCta,
  FinalCtaActions,
  FinalCtaText,
  FinalCtaTitle,
  Hero,
  HeroActions,
  HeroContent,
  HeroGrid,
  HeroImage,
  HeroImageWrap,
  HeroMeta,
  Page,
  Philosophy,
  PhilosophyAccent,
  PhilosophyChip,
  PhilosophyCopy,
  PhilosophyGrid,
  SectionBody,
  SectionEyebrow,
  SectionTitle,
  Stack,
  TimelineCard,
  TimelineCardInner,
  TimelineCardWrap,
  TimelineIllustration,
  TimelineIllustrationWrap,
  TimelineIntro,
  TimelineItem,
  TimelineLabel,
  TimelineLine,
  TimelineLineFill,
  TimelineList,
  TimelineNode,
  TimelineParagraph,
  TimelineSection,
  TimelineText,
  TimelineTrack,
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

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const AboutLanding = () => {
  const [sessionOpen, setSessionOpen] = useState(false);
  const [certIndex, setCertIndex] = useState(0);
  const [previewCertIndex, setPreviewCertIndex] = useState<number | null>(null);
  const [previewZoom, setPreviewZoom] = useState(1);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [activeItems, setActiveItems] = useState<number[]>([0]);

  const philosophyRef = useRef<HTMLElement | null>(null);
  const timelineSectionRef = useRef<HTMLElement | null>(null);
  const timelineItemRefs = useRef<(HTMLElement | null)[]>([]);
  const certificateTouchStartX = useRef<number | null>(null);
  const certificateTouchStartY = useRef<number | null>(null);
  const skipCertificateClick = useRef(false);

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

  const aboutHero = siteMedia.about.aboutHeroDhanashree;
  const timelineItems = journeyTimelineItems;

  const scrollToPhilosophy = () => {
    philosophyRef.current?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  };

  const previousCert = () =>
    setCertIndex((current) =>
      current === 0 ? certificates.length - 1 : current - 1,
    );

  const nextCert = () =>
    setCertIndex((current) =>
      current === certificates.length - 1 ? 0 : current + 1,
    );

  const openCertificatePreview = (index: number) => {
    setPreviewCertIndex(index);
    setPreviewZoom(1);
  };

  const closeCertificatePreview = () => {
    setPreviewCertIndex(null);
    setPreviewZoom(1);
  };

  const zoomPreviewIn = () => {
    setPreviewZoom((current) => Math.min(3, Number((current + 0.25).toFixed(2))));
  };

  const zoomPreviewOut = () => {
    setPreviewZoom((current) => Math.max(1, Number((current - 0.25).toFixed(2))));
  };

  const handleCertificateTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    certificateTouchStartX.current = touch.clientX;
    certificateTouchStartY.current = touch.clientY;
    skipCertificateClick.current = false;
  };

  const handleCertificateTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (
      certificateTouchStartX.current === null ||
      certificateTouchStartY.current === null
    ) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - certificateTouchStartX.current;
    const deltaY = touch.clientY - certificateTouchStartY.current;

    certificateTouchStartX.current = null;
    certificateTouchStartY.current = null;

    if (Math.abs(deltaX) < 42 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    skipCertificateClick.current = true;

    if (deltaX > 0) {
      previousCert();
      return;
    }

    nextCert();
  };

  const handleCertificateClick = (
    event: MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    if (skipCertificateClick.current) {
      skipCertificateClick.current = false;
      event.preventDefault();
      return;
    }

    openCertificatePreview(index);
  };

  return (
    <Page>
      <Column>
        <Stack>
          <Hero>
            <HeroGrid>
              <HeroImageWrap>
                <HeroImage
                  src={aboutHero.src}
                  alt={aboutHero.alt}
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
                  I help people build a healthy relationship with food,
                  movement, and their bodies — not through extreme diets or
                  quick fixes, but through simple, sustainable, and mindful
                  lifestyle changes.
                </SectionBody>
                <SectionBody>
                  From dance and acrobatics to yoga and mindful living,
                  movement has always been my way of connecting with myself.
                  During a pause in life, I found clarity through yoga and
                  nutrition—building strength, balance, and discipline from
                  within.
                </SectionBody>
                <SectionBody>
                  Balance with Shree was born from this personal
                  transformation—a space where yoga, nutrition, and mindful
                  living come together in a practical, sustainable way.
                </SectionBody>

                <HeroActions>
                  <Button size="lg" onClick={scrollToPhilosophy}>
                    My Approach
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => setSessionOpen(true)}
                  >
                    Book a Session
                  </Button>
                </HeroActions>
              </HeroContent>
            </HeroGrid>
          </Hero>

          <Philosophy ref={philosophyRef} id="about-philosophy">
            <PhilosophyGrid>
              <PhilosophyCopy>
                <SectionEyebrow>My Philosophy</SectionEyebrow>
                <SectionTitle>Wellness, Without Extremes</SectionTitle>
                <Divider>
                  <span>✦</span>
                </Divider>
                <SectionBody>
                  Yoga is not just exercise. Nutrition is not just calories.
                  Health is not just physical.
                </SectionBody>
                <SectionBody>
                  I follow a holistic approach — working with the mind, body,
                  and soul.
                </SectionBody>
                <SectionBody>
                  No crash diets. No temporary fixes. No fear around food.
                </SectionBody>
                <SectionBody>
                  Just sustainable habits, mindful eating, and movement that
                  feels good — for life.
                </SectionBody>
                <SectionBody>
                  My goal is to help you feel comfortable in your body,
                  confident in your food choices, and connected to your health
                  — naturally and mindfully.
                </SectionBody>
              </PhilosophyCopy>

              <PhilosophyAccent>
                {philosophyChips.map((chip) => (
                  <PhilosophyChip key={chip.title}>
                    <strong>{chip.title}</strong>
                    <span>{chip.body}</span>
                  </PhilosophyChip>
                ))}
              </PhilosophyAccent>
            </PhilosophyGrid>
          </Philosophy>

          <TimelineSection ref={timelineSectionRef}>
            <TimelineIntro>
              <SectionEyebrow>My Journey</SectionEyebrow>
              <SectionTitle>The journey through a timeline:</SectionTitle>
              <SectionBody>
                A personal story of awareness, healing, and purpose — told
                through the real moments that shaped Balance with Shree.
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

          <CertSection>
            <CertHeader>
              <SectionEyebrow>Experience & Learning</SectionEyebrow>
              <SectionTitle>Professional Certifications</SectionTitle>
              <SectionBody>
                Real certificates from Dhanashree&apos;s professional learning,
                presented in a cleaner, easier-to-view format.
              </SectionBody>
            </CertHeader>

            <CertViewport>
              <CertTrack $index={certIndex}>
                {certificates.map((certificate, index) => (
                  <CertSlide key={certificate.title}>
                    <CertFrame
                      role="button"
                      tabIndex={0}
                      onClick={(event) => handleCertificateClick(event, index)}
                      onTouchStart={handleCertificateTouchStart}
                      onTouchEnd={handleCertificateTouchEnd}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          openCertificatePreview(index);
                        }
                      }}
                      aria-label={`Preview ${certificate.title}`}
                    >
                      <CertImageWrap>
                        <CertImage
                          src={certificate.src}
                          alt={certificate.alt}
                          loading="lazy"
                          decoding="async"
                        />
                      </CertImageWrap>
                      <CertCaption>{certificate.title}</CertCaption>
                    </CertFrame>
                  </CertSlide>
                ))}
              </CertTrack>
            </CertViewport>

            <CertControls>
              <CertButton
                type="button"
                onClick={previousCert}
                aria-label="Show previous certificate"
              >
                <ChevronLeft size={18} />
              </CertButton>
              <CertDots>
                {certificates.map((certificate, index) => (
                  <CertDot
                    key={certificate.title}
                    type="button"
                    onClick={() => setCertIndex(index)}
                    aria-label={`Show certificate ${index + 1}`}
                    $active={index === certIndex}
                  />
                ))}
              </CertDots>
              <CertButton
                type="button"
                onClick={nextCert}
                aria-label="Show next certificate"
              >
                <ChevronRight size={18} />
              </CertButton>
            </CertControls>
          </CertSection>

          <FinalCta>
            <FinalCtaTitle>Ready to begin your wellness journey?</FinalCtaTitle>
            <FinalCtaText>
              Start with a simple conversation and explore the support that
              feels right for you.
            </FinalCtaText>
            <FinalCtaActions>
              <Button size="lg" onClick={() => setSessionOpen(true)}>
                Book a Session
              </Button>
              <Button
                href={buildWhatsAppUrl(contactMessages.contactIntro)}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                icon={<MessageCircleMore size={18} strokeWidth={1.9} />}
              >
                Chat on WhatsApp
              </Button>
            </FinalCtaActions>
          </FinalCta>
        </Stack>
      </Column>

      <Modal isOpen={sessionOpen} onClose={() => setSessionOpen(false)}>
        <SessionSelector onSelect={() => setSessionOpen(false)} />
      </Modal>

      <Modal isOpen={previewCertIndex !== null} onClose={closeCertificatePreview}>
        {previewCertIndex !== null ? (
          <>
            <SectionTitle as="h2">
              {certificates[previewCertIndex].title}
            </SectionTitle>
            <CertControls>
              <CertButton
                type="button"
                onClick={zoomPreviewOut}
                aria-label="Zoom out certificate"
              >
                <ZoomOut size={18} />
              </CertButton>
              <SectionBody>Zoom {Math.round(previewZoom * 100)}%</SectionBody>
              <CertButton
                type="button"
                onClick={zoomPreviewIn}
                aria-label="Zoom in certificate"
              >
                <ZoomIn size={18} />
              </CertButton>
            </CertControls>
            <CertViewport>
              <CertFrame>
                <CertImageWrap
                  $preview
                  onDoubleClick={() =>
                    setPreviewZoom((current) => (current > 1 ? 1 : 2))
                  }
                >
                  <CertImage
                    src={certificates[previewCertIndex].src}
                    alt={certificates[previewCertIndex].alt}
                    $zoom={previewZoom}
                  />
                </CertImageWrap>
              </CertFrame>
            </CertViewport>
          </>
        ) : null}
      </Modal>
    </Page>
  );
};

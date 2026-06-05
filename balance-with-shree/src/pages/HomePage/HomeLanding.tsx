import { useRef, useState, type MouseEvent, type TouchEvent } from "react";
import {
  Apple,
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Flower2,
  HeartHandshake,
  HeartPulse,
  Leaf,
  MessageCircleMore,
  MoonStar,
  Sparkles,
  SunMedium,
  Waves,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { PackageDetails } from "../../components/PackageDetails";
import { SessionSelector } from "../../components/SessionSelector";
import { buildWhatsAppUrl, contactMessages } from "../../data/contact";
import { siteMedia } from "../../data/media";
import { nutritionTestimonials } from "../../data/reviews";
import {
  AboutCard,
  AboutContent,
  AboutImage,
  AboutImageWrap,
  AboutLink,
  AboutText,
  AboutTitle,
  BenefitIcon,
  BenefitItem,
  BenefitStrip,
  BenefitText,
  CarouselButton,
  CarouselControls,
  CarouselDot,
  CarouselDots,
  CertCaption,
  CertFrame,
  CertImage,
  CertImageWrap,
  CertSlide,
  CertTrack,
  CertViewport,
  Column,
  DecorativeDivider,
  FinalCta,
  FinalCtaActions,
  FinalCtaText,
  FinalCtaTitle,
  HeroButtonIcon,
  HeroButtons,
  HeroGlassButton,
  HeroImage,
  HeroPicture,
  HeroSection,
  HeroShade,
  HeroVisual,
  OfferBody,
  OfferCard,
  OfferGrid,
  OfferHeader,
  OfferImage,
  OfferImageWrap,
  OfferItem,
  OfferItemIcon,
  OfferItems,
  OfferItemText,
  OfferLink,
  OfferSection,
  OfferTitle,
  PackageGrid,
  PackageIcon,
  PackageItem,
  PackageLabel,
  PackagesCard,
  Page,
  QuoteMark,
  SectionBody,
  SectionEyebrow,
  SectionTitle,
  Stack,
  MediaHeader,
  MediaSection,
  TestimonialAvatar,
  TestimonialCard,
  TestimonialContent,
  TestimonialHandle,
  TestimonialHeader,
  TestimonialName,
  TestimonialSection,
  TestimonialText,
  VideoCard,
  VideoPlayer,
  VideoSlide,
  VideoTrack,
  VideoViewport,
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
  const [useFallbackHero, setUseFallbackHero] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [certIndex, setCertIndex] = useState(0);
  const [previewCertIndex, setPreviewCertIndex] = useState<number | null>(null);
  const [previewZoom, setPreviewZoom] = useState(1);

  const watercolorHero = siteMedia.home.homeHeroWatercolorIllustration;
  const testimonials = nutritionTestimonials;
  const certificates = siteMedia.about.certifications;
  const testimonialTouchStartX = useRef<number | null>(null);
  const testimonialTouchStartY = useRef<number | null>(null);
  const videoTouchStartX = useRef<number | null>(null);
  const videoTouchStartY = useRef<number | null>(null);
  const certificateTouchStartX = useRef<number | null>(null);
  const certificateTouchStartY = useRef<number | null>(null);
  const skipCertificateClick = useRef(false);
  const heroAlt =
    watercolorHero?.alt ??
    "Watercolor illustration of a woman meditating in front of mountains and a glowing moon";
  const mobileHeroSrc =
    !useFallbackHero && watercolorHero
      ? watercolorHero.mobile
      : siteMedia.home.heroSlides[0];
  const desktopHeroSrc =
    !useFallbackHero && watercolorHero
      ? watercolorHero.desktop
      : siteMedia.home.heroSlides[0];

  const showPreviousReview = () =>
    setReviewIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );

  const showNextReview = () =>
    setReviewIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );

  const handleTestimonialTouchStart = (
    event: TouchEvent<HTMLDivElement>,
  ) => {
    const touch = event.touches[0];
    testimonialTouchStartX.current = touch.clientX;
    testimonialTouchStartY.current = touch.clientY;
  };

  const handleTestimonialTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (
      testimonialTouchStartX.current === null ||
      testimonialTouchStartY.current === null
    ) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - testimonialTouchStartX.current;
    const deltaY = touch.clientY - testimonialTouchStartY.current;

    testimonialTouchStartX.current = null;
    testimonialTouchStartY.current = null;

    if (Math.abs(deltaX) < 42 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX > 0) {
      showPreviousReview();
      return;
    }

    showNextReview();
  };

  const showPreviousVideo = () =>
    setVideoIndex((current) =>
      current === 0 ? siteMedia.yoga.videos.length - 1 : current - 1,
    );

  const showNextVideo = () =>
    setVideoIndex((current) =>
      current === siteMedia.yoga.videos.length - 1 ? 0 : current + 1,
    );

  const handleVideoTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    videoTouchStartX.current = touch.clientX;
    videoTouchStartY.current = touch.clientY;
  };

  const handleVideoTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (videoTouchStartX.current === null || videoTouchStartY.current === null) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - videoTouchStartX.current;
    const deltaY = touch.clientY - videoTouchStartY.current;

    videoTouchStartX.current = null;
    videoTouchStartY.current = null;

    if (Math.abs(deltaX) < 42 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX > 0) {
      showPreviousVideo();
      return;
    }

    showNextVideo();
  };

  const showPreviousCertificate = () =>
    setCertIndex((current) =>
      current === 0 ? certificates.length - 1 : current - 1,
    );

  const showNextCertificate = () =>
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
      showPreviousCertificate();
      return;
    }

    showNextCertificate();
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
          <HeroSection>
            <HeroVisual>
              <HeroPicture>
                {!useFallbackHero && watercolorHero ? (
                  <source media="(min-width: 768px)" srcSet={desktopHeroSrc} />
                ) : null}
                <HeroImage
                  src={mobileHeroSrc}
                  alt={heroAlt}
                  loading="eager"
                  decoding="async"
                  onError={() => setUseFallbackHero(true)}
                />
              </HeroPicture>
              <HeroShade />

              <HeroButtons>
                <HeroGlassButton onClick={() => setPackagesOpen(true)}>
                  <HeroButtonIcon>
                    <Sparkles size={18} strokeWidth={1.9} />
                  </HeroButtonIcon>
                  <span>Explore Packages</span>
                </HeroGlassButton>

                <HeroGlassButton onClick={() => setSessionOpen(true)}>
                  <HeroButtonIcon>
                    <CalendarDays size={18} strokeWidth={1.9} />
                  </HeroButtonIcon>
                  <span>Book a Session</span>
                </HeroGlassButton>
              </HeroButtons>
            </HeroVisual>
          </HeroSection>

          <PackagesCard>
            <SectionTitle as="h2">Yoga Packages</SectionTitle>
            <DecorativeDivider>
              <span>✦</span>
            </DecorativeDivider>
            <SectionBody>
              Yoga packages available as group sessions, personalised private
              training, and specialised prenatal support — with guidance
              tailored to individual needs and consultation.
            </SectionBody>

            <PackageGrid>
              {packageItems.map(({ label, icon: Icon }) => (
                <PackageItem key={label}>
                  <PackageIcon>
                    <Icon size={17} strokeWidth={1.9} />
                  </PackageIcon>
                  <PackageLabel>{label}</PackageLabel>
                </PackageItem>
              ))}
            </PackageGrid>
          </PackagesCard>

          <OfferSection>
            <OfferHeader>
              <SectionEyebrow>What I Offer</SectionEyebrow>
              <SectionTitle as="h2">Yoga, Nutrition & Ayurveda</SectionTitle>
            </OfferHeader>

            <OfferGrid>
              <OfferCard>
                <OfferImageWrap>
                  <OfferImage
                    src={siteMedia.home.homeYogaServiceWatercolor.src}
                    alt={siteMedia.home.homeYogaServiceWatercolor.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </OfferImageWrap>

                <OfferTitle>Yoga that supports your body & life</OfferTitle>
                <OfferBody>
                  Yoga at Balance with Shree is therapeutic, mindful, and
                  deeply personalised. The focus is not on flexibility or
                  intensity, but on creating strength, stability, awareness,
                  and calm — in a way that supports your daily life.
                </OfferBody>
                <OfferItems>
                  {yogaRows.map(({ label, icon: Icon }) => (
                    <OfferItem key={label}>
                      <OfferItemIcon>
                        <Icon size={15} strokeWidth={1.9} />
                      </OfferItemIcon>
                      <OfferItemText>{label}</OfferItemText>
                    </OfferItem>
                  ))}
                </OfferItems>
                <OfferLink to="/yoga">
                  Explore Yoga <ArrowRight size={16} />
                </OfferLink>
              </OfferCard>

              <OfferCard>
                <OfferImageWrap>
                  <OfferImage
                    src={siteMedia.home.homeNutritionBowlWatercolor.src}
                    alt={siteMedia.home.homeNutritionBowlWatercolor.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </OfferImageWrap>

                <OfferTitle>Nourish with Awareness</OfferTitle>
                <OfferBody>
                  Personalised nutrition that supports digestion, hormones, and
                  energy — rooted in mindful eating, lifestyle balance, and
                  Indian home food.
                </OfferBody>
                <OfferItems>
                  {nutritionRows.map(({ label, icon: Icon }) => (
                    <OfferItem key={label}>
                      <OfferItemIcon>
                        <Icon size={15} strokeWidth={1.9} />
                      </OfferItemIcon>
                      <OfferItemText>{label}</OfferItemText>
                    </OfferItem>
                  ))}
                </OfferItems>
                <OfferLink to="/nutrition">
                  Explore Nutrition <ArrowRight size={16} />
                </OfferLink>
              </OfferCard>

              <OfferCard>
                <OfferImageWrap>
                  <OfferImage
                    src={siteMedia.home.homeAyurvedaMortarWatercolor.src}
                    alt={siteMedia.home.homeAyurvedaMortarWatercolor.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </OfferImageWrap>

                <OfferTitle>Ayurveda & Lifestyle Balance</OfferTitle>
                <OfferBody>
                  Ancient Ayurvedic wisdom adapted for modern life — helping
                  you understand your body’s constitution, improve digestion,
                  regulate stress, and build supportive daily routines in a
                  gentle, sustainable way.
                </OfferBody>
                <OfferItems>
                  {ayurvedaRows.map(({ label, icon: Icon }) => (
                    <OfferItem key={label}>
                      <OfferItemIcon>
                        <Icon size={15} strokeWidth={1.9} />
                      </OfferItemIcon>
                      <OfferItemText>{label}</OfferItemText>
                    </OfferItem>
                  ))}
                </OfferItems>
                <OfferLink to="/ayurveda">
                  Explore Ayurveda <ArrowRight size={16} />
                </OfferLink>
              </OfferCard>
            </OfferGrid>
          </OfferSection>

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

          <BenefitStrip>
            {benefits.map(({ label, icon: Icon }) => (
              <BenefitItem key={label}>
                <BenefitIcon>
                  <Icon size={18} strokeWidth={1.9} />
                </BenefitIcon>
                <BenefitText>{label}</BenefitText>
              </BenefitItem>
            ))}
          </BenefitStrip>

          <TestimonialSection>
            <TestimonialHeader>
              <SectionEyebrow>Client Love</SectionEyebrow>
              <SectionTitle as="h2">Real stories. Real support.</SectionTitle>
            </TestimonialHeader>

            <TestimonialCard
              onTouchStart={handleTestimonialTouchStart}
              onTouchEnd={handleTestimonialTouchEnd}
            >
              <TestimonialAvatar>
                <img
                  src={testimonials[reviewIndex].image}
                  alt={testimonials[reviewIndex].alt}
                  loading="lazy"
                  decoding="async"
                />
              </TestimonialAvatar>

              <TestimonialContent>
                <QuoteMark>“</QuoteMark>
                <TestimonialText>
                  {testimonials[reviewIndex].text}
                </TestimonialText>
                <TestimonialName>{testimonials[reviewIndex].name}</TestimonialName>
                {testimonials[reviewIndex].handle ? (
                  <TestimonialHandle>
                    {testimonials[reviewIndex].handle}
                  </TestimonialHandle>
                ) : null}
              </TestimonialContent>
            </TestimonialCard>

            <CarouselControls>
              <CarouselButton
                type="button"
                onClick={showPreviousReview}
                aria-label="Show previous testimonial"
              >
                <ChevronLeft size={18} />
              </CarouselButton>

              <CarouselDots>
                {testimonials.map((item, index) => (
                  <CarouselDot
                    key={item.name}
                    type="button"
                    onClick={() => setReviewIndex(index)}
                    aria-label={`Show home testimonial ${index + 1}`}
                    $active={reviewIndex === index}
                  />
                ))}
              </CarouselDots>

              <CarouselButton
                type="button"
                onClick={showNextReview}
                aria-label="Show next testimonial"
              >
                <ChevronRight size={18} />
              </CarouselButton>
            </CarouselControls>
          </TestimonialSection>

          <MediaSection>
            <MediaHeader>
              <SectionEyebrow>Client Stories</SectionEyebrow>
              <SectionTitle as="h2">Video reviews from real clients</SectionTitle>
            </MediaHeader>

            <VideoViewport>
              <VideoTrack $index={videoIndex}>
                {siteMedia.yoga.videos.map((video) => (
                  <VideoSlide key={video.id}>
                    <VideoCard
                      onTouchStart={handleVideoTouchStart}
                      onTouchEnd={handleVideoTouchEnd}
                    >
                      <VideoPlayer
                        controls
                        playsInline
                        preload="metadata"
                        poster={video.poster}
                        aria-label={video.alt}
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </VideoPlayer>
                    </VideoCard>
                  </VideoSlide>
                ))}
              </VideoTrack>
            </VideoViewport>

            <CarouselControls>
              <CarouselButton
                type="button"
                onClick={showPreviousVideo}
                aria-label="Show previous video review"
              >
                <ChevronLeft size={18} />
              </CarouselButton>

              <CarouselDots>
                {siteMedia.yoga.videos.map((video, index) => (
                  <CarouselDot
                    key={video.id}
                    type="button"
                    onClick={() => setVideoIndex(index)}
                    aria-label={`Show home video review ${index + 1}`}
                    $active={videoIndex === index}
                  />
                ))}
              </CarouselDots>

              <CarouselButton
                type="button"
                onClick={showNextVideo}
                aria-label="Show next video review"
              >
                <ChevronRight size={18} />
              </CarouselButton>
            </CarouselControls>
          </MediaSection>

          <MediaSection>
            <MediaHeader>
              <SectionEyebrow>Experience & Learning</SectionEyebrow>
              <SectionTitle as="h2">Professional Certifications</SectionTitle>
            </MediaHeader>

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

            <CarouselControls>
              <CarouselButton
                type="button"
                onClick={showPreviousCertificate}
                aria-label="Show previous home certificate"
              >
                <ChevronLeft size={18} />
              </CarouselButton>

              <CarouselDots>
                {certificates.map((certificate, index) => (
                  <CarouselDot
                    key={certificate.title}
                    type="button"
                    onClick={() => setCertIndex(index)}
                    aria-label={`Show home certificate ${index + 1}`}
                    $active={certIndex === index}
                  />
                ))}
              </CarouselDots>

              <CarouselButton
                type="button"
                onClick={showNextCertificate}
                aria-label="Show next home certificate"
              >
                <ChevronRight size={18} />
              </CarouselButton>
            </CarouselControls>
          </MediaSection>

          <FinalCta>
            <FinalCtaTitle>Ready to begin your wellness journey?</FinalCtaTitle>
            <FinalCtaText>
              Start with a simple conversation and explore the support that
              feels right for you.
            </FinalCtaText>
            <FinalCtaActions>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setSessionOpen(true)}
              >
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

      <Modal isOpen={previewCertIndex !== null} onClose={closeCertificatePreview}>
        {previewCertIndex !== null ? (
          <>
            <SectionTitle as="h2">
              {certificates[previewCertIndex].title}
            </SectionTitle>
            <CarouselControls>
              <CarouselButton
                type="button"
                onClick={zoomPreviewOut}
                aria-label="Zoom out certificate"
              >
                <ZoomOut size={18} />
              </CarouselButton>
              <SectionBody>Zoom {Math.round(previewZoom * 100)}%</SectionBody>
              <CarouselButton
                type="button"
                onClick={zoomPreviewIn}
                aria-label="Zoom in certificate"
              >
                <ZoomIn size={18} />
              </CarouselButton>
            </CarouselControls>
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

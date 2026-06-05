import { useRef, useState, type MouseEvent, type TouchEvent } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Flower2,
  HeartPulse,
  Leaf,
  MessageCircleMore,
  Sparkles,
  Waves,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { SessionSelector } from "../../components/SessionSelector";
import { buildWhatsAppUrl, contactMessages } from "../../data/contact";
import { siteMedia } from "../../data/media";
import {
  BenefitBadge,
  BenefitCard,
  BenefitGrid,
  BenefitText,
  BenefitTitle,
  BillingBadge,
  BillingOption,
  BillingToggle,
  CardSection,
  CarouselButton,
  CarouselControls,
  CarouselDot,
  CarouselDots,
  CertFrame,
  CertImage,
  CertImageWrap,
  CertSlide,
  CertTrack,
  CertViewport,
  Column,
  Divider,
  FinalCta,
  FinalCtaActions,
  FinalCtaText,
  FinalCtaTitle,
  GalleryCard,
  GalleryImage,
  GalleryScroll,
  Hero,
  HeroImage,
  HeroPicture,
  HeroShade,
  HeroVisual,
  Intro,
  MediaHeader,
  MediaSection,
  OriginalPrice,
  Page,
  PlanButtonWrap,
  PlanFeature,
  PlanFeatureIcon,
  PlanFeatures,
  PlanMeta,
  PlanName,
  PlanPrice,
  PlanPriceBlock,
  PricingCard,
  PricingGrid,
  PricingHeader,
  PricingSection,
  SectionBody,
  SectionEyebrow,
  SectionTitle,
  SessionChip,
  SessionChips,
  Stack,
  TransformFrame,
  TransformImage,
  TransformSlide,
  TransformTrack,
  TransformViewport,
  TypeDot,
  TypeItem,
  TypeText,
  TypesCard,
  TypesList,
  VideoCard,
  VideoPlayer,
  VideoSlide,
  VideoTrack,
  VideoViewport,
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

const plans = [
  {
    id: "foundation",
    name: "Group Session Plan",
    monthly: 1500,
    quarterly: 1500 * 3,
    highlight: false,
    meta: {
      monthly: "Mon–Fri • Online / Offline",
      quarterly: "Mon–Fri • Online / Offline",
    },
    features: [
      "Hatha, Ashtanga & Vinyasa Flow Yoga",
      "Pranayama, Meditation & Breathwork",
      "Face Yoga (selected days)",
      "Weight loss or weight gain support",
      "Improved flexibility & strength",
      "Daily energy & overall wellness",
    ],
  },
  {
    id: "holistic",
    name: "Private Session",
    monthly: 6999,
    quarterly: 6999 * 3,
    highlight: true,
    features: [
      "One-on-one private sessions with complete personal attention",
      "Hatha, Ashtanga & Vinyasa Flow Yoga (customized for you)",
      "Pranayama, meditation & breathing techniques",
      "Face yoga on selected days",
      "Posture correction & proper movement guidance",
      "Goal-focused training",
      "Therapeutic / medical yoga support",
      "Optional nutrition guidance",
      "Continuous progress tracking",
    ],
  },
  {
    id: "prenatal",
    name: "Prenatal & Postnatal Care – Personalized One-on-One Support",
    monthly: 8000,
    quarterly: 8000 * 3,
    highlight: false,
    features: [
      "Trimester-wise yoga practices",
      "Safe posture correction & body alignment",
      "Pranayama & breathwork for relaxation & stamina",
      "Garbhasanskar (mantras, bonding & mindfulness)",
      "Nutritional guidance (optional detailed plans)",
      "Emotional wellness & stress support",
      "Postnatal recovery & core strengthening",
      "Fully personalized sessions",
      "Continuous progress tracking",
    ],
  },
  {
    id: "prenatal-group",
    name: "Prenatal & Postnatal Group Care",
    monthly: 2800,
    quarterly: 2800 * 3,
    highlight: false,
    meta: {
      monthly: "Small groups (2–3 mothers)",
      quarterly: "Small groups (2–3 mothers)",
    },
    features: [
      "Trimester-wise safe yoga practices",
      "Gentle posture & body alignment support",
      "Pranayama & breathing techniques for relaxation & stamina",
      "Garbhasanskar (mantras, bonding & mindfulness)",
      "Basic nutritional guidance for pregnancy & recovery",
      "Emotional well-being & stress management",
      "Postnatal recovery & core strengthening",
      "Personal attention within small groups",
    ],
  },
] as const;

const privateSessionOptions = [
  { sessions: 12, price: 6000 },
  { sessions: 16, price: 8000 },
  { sessions: 20, price: 10000 },
] as const;

const prenatalSessionOptions = [
  { sessions: 12, price: 5000 },
  { sessions: 16, price: 6500 },
  { sessions: 20, price: 8000 },
] as const;

const certificates = siteMedia.about.certifications;

type Billing = "monthly" | "quarterly";
type Plan = (typeof plans)[number];

export const YogaLanding = () => {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [selectedSessions, setSelectedSessions] = useState(12);
  const [selectedPrenatalSessions, setSelectedPrenatalSessions] = useState(12);
  const [sessionOpen, setSessionOpen] = useState(false);
  const [transformIndex, setTransformIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [certIndex, setCertIndex] = useState(0);
  const [previewCertIndex, setPreviewCertIndex] = useState<number | null>(null);
  const [previewZoom, setPreviewZoom] = useState(1);
  const transformTouchStartX = useRef<number | null>(null);
  const transformTouchStartY = useRef<number | null>(null);
  const videoTouchStartX = useRef<number | null>(null);
  const videoTouchStartY = useRef<number | null>(null);
  const certificateTouchStartX = useRef<number | null>(null);
  const certificateTouchStartY = useRef<number | null>(null);
  const skipCertificateClick = useRef(false);

  const heroWatercolor = siteMedia.yoga.heroWatercolor;

  const handleWhatsApp = (plan: Plan) => {
    let message = "";
    let finalPrice = 0;

    if (plan.id === "holistic") {
      const selectedOption = privateSessionOptions.find(
        (option) => option.sessions === selectedSessions,
      );
      finalPrice = selectedOption?.price || 0;
      message = `Hi! I'm interested in the ${plan.name}.\nSessions: ${selectedSessions}\nPrice: ₹${finalPrice}`;
    } else if (plan.id === "prenatal") {
      const selectedOption = prenatalSessionOptions.find(
        (option) => option.sessions === selectedPrenatalSessions,
      );
      finalPrice = selectedOption?.price || 0;
      message = `Hi! I'm interested in the ${plan.name}.\nSessions: ${selectedPrenatalSessions}\nPrice: ₹${finalPrice}`;
    } else {
      const monthlyPrice = plan.monthly;
      const quarterlyOriginal = monthlyPrice * 3;
      const quarterlyDiscounted = Math.round(quarterlyOriginal * 0.9);
      finalPrice = billing === "monthly" ? monthlyPrice : quarterlyDiscounted;
      message = `Hi! I'm interested in the ${plan.name}.\nBilling: ${billing}\nPrice: ₹${finalPrice}`;
    }

    window.open(buildWhatsAppUrl(message), "_blank");
  };

  const showPreviousTransformation = () =>
    setTransformIndex((current) =>
      current === 0 ? siteMedia.yoga.transformations.length - 1 : current - 1,
    );

  const showNextTransformation = () =>
    setTransformIndex((current) =>
      current === siteMedia.yoga.transformations.length - 1 ? 0 : current + 1,
    );

  const handleTransformationTouchStart = (
    event: TouchEvent<HTMLDivElement>,
  ) => {
    const touch = event.touches[0];
    transformTouchStartX.current = touch.clientX;
    transformTouchStartY.current = touch.clientY;
  };

  const handleTransformationTouchEnd = (
    event: TouchEvent<HTMLDivElement>,
  ) => {
    if (
      transformTouchStartX.current === null ||
      transformTouchStartY.current === null
    ) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - transformTouchStartX.current;
    const deltaY = touch.clientY - transformTouchStartY.current;

    transformTouchStartX.current = null;
    transformTouchStartY.current = null;

    if (Math.abs(deltaX) < 42 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX > 0) {
      showPreviousTransformation();
      return;
    }

    showNextTransformation();
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
          <Hero>
            <HeroVisual>
              <HeroPicture>
                <source
                  media="(min-width: 768px)"
                  srcSet={heroWatercolor.desktop}
                />
                <HeroImage
                  src={heroWatercolor.mobile}
                  alt={heroWatercolor.alt}
                  loading="eager"
                  decoding="async"
                />
              </HeroPicture>
              <HeroShade />
            </HeroVisual>
          </Hero>

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

          <TypesCard>
            <SectionEyebrow>Types of Yoga</SectionEyebrow>
            <SectionTitle>Types of Yoga I Offer</SectionTitle>
            <SectionBody>
              Yoga sessions are customised based on your body, goals and health
              conditions.
            </SectionBody>
            <TypesList>
              {yogaTypes.map((type) => (
                <TypeItem key={type}>
                  <TypeDot>
                    <Leaf size={14} strokeWidth={1.9} />
                  </TypeDot>
                  <TypeText>{type}</TypeText>
                </TypeItem>
              ))}
            </TypesList>
          </TypesCard>

          <PricingSection>
            <PricingHeader>
              <SectionTitle>Choose Your Wellness Path</SectionTitle>
              <SectionBody>
                Simple, transparent pricing — switch to quarterly and save
                more.
              </SectionBody>
              <BillingToggle>
                <BillingOption
                  type="button"
                  $active={billing === "monthly"}
                  onClick={() => setBilling("monthly")}
                >
                  Monthly
                </BillingOption>
                <BillingOption
                  type="button"
                  $active={billing === "quarterly"}
                  onClick={() => setBilling("quarterly")}
                >
                  Quarterly
                  <BillingBadge>Save 10%</BillingBadge>
                </BillingOption>
              </BillingToggle>
            </PricingHeader>

            <PricingGrid>
              {plans.map((plan) => {
                if (plan.id === "holistic") {
                  const selectedOption = privateSessionOptions.find(
                    (option) => option.sessions === selectedSessions,
                  );
                  const basePrice = selectedOption?.price || 0;
                  const quarterlyOriginal = basePrice * 3;
                  const quarterlyDiscounted = Math.round(
                    quarterlyOriginal * 0.9,
                  );
                  const displayPrice =
                    billing === "monthly" ? basePrice : quarterlyDiscounted;

                  return (
                    <PricingCard key={plan.id} $highlight={plan.highlight}>
                      <PlanName>{plan.name}</PlanName>
                      <PlanPriceBlock>
                        {billing === "quarterly" ? (
                          <OriginalPrice>
                            ₹{quarterlyOriginal.toLocaleString("en-IN")}
                          </OriginalPrice>
                        ) : null}
                        <PlanPrice>
                          ₹{displayPrice.toLocaleString("en-IN")}
                          <span>
                            {billing === "monthly"
                              ? `${selectedSessions} sessions`
                              : `Total ${selectedSessions * 3} sessions`}
                          </span>
                        </PlanPrice>
                      </PlanPriceBlock>

                      <SessionChips role="radiogroup" aria-label="Private session options">
                        {privateSessionOptions.map((option) => (
                          <SessionChip
                            key={option.sessions}
                            type="button"
                            role="radio"
                            aria-checked={selectedSessions === option.sessions}
                            $active={selectedSessions === option.sessions}
                            onClick={() => setSelectedSessions(option.sessions)}
                          >
                            {option.sessions} Sessions
                          </SessionChip>
                        ))}
                      </SessionChips>

                      <PlanButtonWrap>
                        <Button fullWidth size="lg" onClick={() => handleWhatsApp(plan)}>
                          Begin Your Journey
                        </Button>
                      </PlanButtonWrap>

                      <PlanFeatures>
                        {plan.features.map((feature) => (
                          <PlanFeature key={feature}>
                            <PlanFeatureIcon>
                              <Check size={12} strokeWidth={2.4} />
                            </PlanFeatureIcon>
                            <span>{feature}</span>
                          </PlanFeature>
                        ))}
                      </PlanFeatures>
                    </PricingCard>
                  );
                }

                if (plan.id === "prenatal") {
                  const selectedOption = prenatalSessionOptions.find(
                    (option) => option.sessions === selectedPrenatalSessions,
                  );
                  const basePrice = selectedOption?.price || 0;
                  const quarterlyOriginal = basePrice * 3;
                  const quarterlyDiscounted = Math.round(
                    quarterlyOriginal * 0.9,
                  );
                  const displayPrice =
                    billing === "monthly" ? basePrice : quarterlyDiscounted;

                  return (
                    <PricingCard key={plan.id} $highlight={plan.highlight}>
                      <PlanName>{plan.name}</PlanName>
                      <PlanPriceBlock>
                        {billing === "quarterly" ? (
                          <OriginalPrice>
                            ₹{quarterlyOriginal.toLocaleString("en-IN")}
                          </OriginalPrice>
                        ) : null}
                        <PlanPrice>
                          ₹{displayPrice.toLocaleString("en-IN")}
                          <span>
                            {billing === "monthly"
                              ? `${selectedPrenatalSessions} sessions`
                              : `Total ${selectedPrenatalSessions * 3} sessions`}
                          </span>
                        </PlanPrice>
                      </PlanPriceBlock>

                      <SessionChips role="radiogroup" aria-label="Prenatal session options">
                        {prenatalSessionOptions.map((option) => (
                          <SessionChip
                            key={option.sessions}
                            type="button"
                            role="radio"
                            aria-checked={
                              selectedPrenatalSessions === option.sessions
                            }
                            $active={
                              selectedPrenatalSessions === option.sessions
                            }
                            onClick={() =>
                              setSelectedPrenatalSessions(option.sessions)
                            }
                          >
                            {option.sessions} Sessions
                          </SessionChip>
                        ))}
                      </SessionChips>

                      <PlanButtonWrap>
                        <Button fullWidth size="lg" onClick={() => handleWhatsApp(plan)}>
                          Begin Your Journey
                        </Button>
                      </PlanButtonWrap>

                      <PlanFeatures>
                        {plan.features.map((feature) => (
                          <PlanFeature key={feature}>
                            <PlanFeatureIcon>
                              <Check size={12} strokeWidth={2.4} />
                            </PlanFeatureIcon>
                            <span>{feature}</span>
                          </PlanFeature>
                        ))}
                      </PlanFeatures>
                    </PricingCard>
                  );
                }

                const monthlyPrice = plan.monthly;
                const quarterlyOriginal = monthlyPrice * 3;
                const quarterlyDiscounted = Math.round(quarterlyOriginal * 0.9);
                const displayPrice =
                  billing === "monthly" ? monthlyPrice : quarterlyDiscounted;
                const planMeta =
                  plan.meta?.[billing] ??
                  (billing === "monthly" ? "per month" : "per quarter");

                return (
                  <PricingCard key={plan.id} $highlight={plan.highlight}>
                    <PlanName>{plan.name}</PlanName>
                    <PlanPriceBlock>
                      {billing === "quarterly" ? (
                        <OriginalPrice>
                          ₹{quarterlyOriginal.toLocaleString("en-IN")}
                        </OriginalPrice>
                      ) : null}
                      <PlanPrice>
                        ₹{displayPrice.toLocaleString("en-IN")}
                        <span>
                          {billing === "monthly" ? "per month" : "per quarter"}
                        </span>
                      </PlanPrice>
                    </PlanPriceBlock>
                    <PlanMeta>{planMeta}</PlanMeta>
                    <PlanButtonWrap>
                      <Button fullWidth size="lg" onClick={() => handleWhatsApp(plan)}>
                        Begin Your Journey
                      </Button>
                    </PlanButtonWrap>
                    <PlanFeatures>
                      {plan.features.map((feature) => (
                        <PlanFeature key={feature}>
                          <PlanFeatureIcon>
                            <Check size={12} strokeWidth={2.4} />
                          </PlanFeatureIcon>
                          <span>{feature}</span>
                        </PlanFeature>
                      ))}
                    </PlanFeatures>
                  </PricingCard>
                );
              })}
            </PricingGrid>
          </PricingSection>

          <MediaSection>
            <MediaHeader>
              <SectionTitle>Practice Gallery</SectionTitle>
            </MediaHeader>
            <GalleryScroll>
              {siteMedia.yoga.gallery.map((image, index) => (
                <GalleryCard key={image}>
                  <GalleryImage
                    src={image}
                    alt={
                      index === 0
                        ? "Yoga practice in calm indoor space"
                        : index === 1
                          ? "Woman practicing yoga mindfully"
                          : "Holistic yoga and wellness session"
                    }
                    loading="lazy"
                    decoding="async"
                  />
                </GalleryCard>
              ))}
            </GalleryScroll>
          </MediaSection>

          <MediaSection>
            <MediaHeader>
              <SectionEyebrow>Real Proof</SectionEyebrow>
              <SectionTitle>Real Transformations</SectionTitle>
            </MediaHeader>
            <TransformViewport
              onTouchStart={handleTransformationTouchStart}
              onTouchEnd={handleTransformationTouchEnd}
            >
              <TransformTrack $index={transformIndex}>
                {siteMedia.yoga.transformations.map((image, index) => (
                  <TransformSlide key={image}>
                    <TransformFrame>
                      <TransformImage
                        src={image}
                        alt={
                          index === 0
                            ? "Yoga journey before transformation"
                            : index === 1
                              ? "Yoga practice after transformation"
                              : "Mind body balance through yoga"
                        }
                        loading="lazy"
                        decoding="async"
                      />
                    </TransformFrame>
                  </TransformSlide>
                ))}
              </TransformTrack>
            </TransformViewport>
            <CarouselControls>
              <CarouselButton
                type="button"
                onClick={showPreviousTransformation}
                aria-label="Show previous transformation"
              >
                <ChevronLeft size={18} />
              </CarouselButton>
              <CarouselDots>
                {siteMedia.yoga.transformations.map((image, index) => (
                  <CarouselDot
                    key={image}
                    type="button"
                    onClick={() => setTransformIndex(index)}
                    aria-label={`Show transformation ${index + 1}`}
                    $active={index === transformIndex}
                  />
                ))}
              </CarouselDots>
              <CarouselButton
                type="button"
                onClick={showNextTransformation}
                aria-label="Show next transformation"
              >
                <ChevronRight size={18} />
              </CarouselButton>
            </CarouselControls>
          </MediaSection>

          <MediaSection>
            <MediaHeader>
              <SectionTitle>Client Stories</SectionTitle>
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
                aria-label="Show previous client story"
              >
                <ChevronLeft size={18} />
              </CarouselButton>
              <CarouselDots>
                {siteMedia.yoga.videos.map((video, index) => (
                  <CarouselDot
                    key={video.id}
                    type="button"
                    onClick={() => setVideoIndex(index)}
                    aria-label={`Show client story ${index + 1}`}
                    $active={index === videoIndex}
                  />
                ))}
              </CarouselDots>
              <CarouselButton
                type="button"
                onClick={showNextVideo}
                aria-label="Show next client story"
              >
                <ChevronRight size={18} />
              </CarouselButton>
            </CarouselControls>
          </MediaSection>

          <MediaSection>
            <MediaHeader>
              <SectionTitle>Professional Certifications</SectionTitle>
            </MediaHeader>
            <CertViewport>
              <CertTrack $index={certIndex}>
                {certificates.map((certificate, index) => (
                  <CertSlide key={certificate.src}>
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
                    </CertFrame>
                  </CertSlide>
                ))}
              </CertTrack>
            </CertViewport>
            <CarouselControls>
              <CarouselButton
                type="button"
                onClick={showPreviousCertificate}
                aria-label="Show previous certificate"
              >
                <ChevronLeft size={18} />
              </CarouselButton>
              <CarouselDots>
                {certificates.map((certificate, index) => (
                  <CarouselDot
                    key={certificate.src}
                    type="button"
                    onClick={() => setCertIndex(index)}
                    aria-label={`Show certificate ${index + 1}`}
                    $active={index === certIndex}
                  />
                ))}
              </CarouselDots>
              <CarouselButton
                type="button"
                onClick={showNextCertificate}
                aria-label="Show next certificate"
              >
                <ChevronRight size={18} />
              </CarouselButton>
            </CarouselControls>
          </MediaSection>

          <FinalCta>
            <FinalCtaTitle>Ready to begin your yoga journey?</FinalCtaTitle>
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

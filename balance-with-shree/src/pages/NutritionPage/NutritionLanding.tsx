import { useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  Leaf,
  MessageCircleMore,
  Scale,
  Sun,
} from "lucide-react";
import { Button } from "../../components/Button";
import { buildWhatsAppUrl, contactMessages } from "../../data/contact";
import { siteMedia } from "../../data/media";
import {
  ApproachCard,
  ApproachGrid,
  ApproachImage,
  ApproachImageWrap,
  CarouselButton,
  CarouselControls,
  CarouselDot,
  CarouselDots,
  Checklist,
  ChecklistIcon,
  ChecklistItem,
  Column,
  DiscoveryActions,
  DiscoveryCard,
  DiscoveryItem,
  DiscoveryList,
  DiscoveryMeta,
  DiscoveryPrice,
  DiscoverySection,
  DiscoveryTitle,
  Divider,
  Hero,
  HeroImage,
  HeroPicture,
  HeroShade,
  HeroVisual,
  Intro,
  NoteText,
  Page,
  SectionBody,
  SectionEyebrow,
  SectionTitle,
  Stack,
  SupportBadge,
  SupportCard,
  SupportGrid,
  SupportText,
  SupportTitle,
  TestimonialAvatar,
  TestimonialCard,
  TestimonialContent,
  TestimonialHandle,
  TestimonialHeader,
  TestimonialName,
  TestimonialSection,
  TestimonialText,
  QuoteMark,
} from "./NutritionLanding.styles";

const supportCards = [
  {
    title: "Gut Health & Digestion",
    text: "Support digestion, reduce bloating and improve immunity.",
    icon: Leaf,
  },
  {
    title: "Sustained Energy",
    text: "Feel steady, balanced energy throughout the day — no crashes.",
    icon: Sun,
  },
  {
    title: "Weight Balance",
    text: "Healthy weight loss or weight gain through personalised planning.",
    icon: Scale,
  },
  {
    title: "Mindful Eating",
    text: "Develop a calm, positive relationship with food — without guilt.",
    icon: Heart,
  },
] as const;

const planChecklist = [
  "Weight loss, weight gain & body recomposition",
  "PCOS / PCOD & hormonal balance",
  "Diabetes, thyroid & metabolic health",
  "Pregnancy & women’s nutrition support",
  "Gut health, digestion & immunity",
  "Lifestyle & habit-based nutrition",
  "Vegetarian & egg-based meal planning",
  "Indian home-food focused diets (no exotic foods)",
] as const;

const testimonials = [
  {
    name: "Mandar Athavale",
    handle: "@athavalemandar",
    image: "/reviews/mander.jpeg",
    text: "Everyday yoga practice for the last 03 months has improved my body flexibility and concentration. Dhanashree guides well and helps improve each asana. I highly recommend her yoga sessions.",
  },
  {
    name: "Harshada Deo",
    handle: "@deoharshada",
    image: "/reviews/mander.jpeg",
    text: "Practicing yoga with Dhanashree has been an incredible experience. She ensures every asana is done comfortably and perfectly. Her sessions have helped me balance my PCOD problem and spondylitis.",
  },
  {
    name: "Mohini Sonak",
    handle: "@mohinisonak",
    image: "/reviews/mander.jpeg",
    text: "Daily yoga sessions have relieved my back pain and improved my flexibility. After yoga, my body feels energetic and I stay mentally fit throughout the day.",
  },
  {
    name: "Kavita Patel",
    handle: "",
    image: "/reviews/mander.jpeg",
    text: "Grateful for the incredible transformation in my health. After struggling with PCOD and medication, her personalized diet and yoga sessions worked wonders. In just 3 months, my cycle is back on track.",
  },
] as const;

export const NutritionLanding = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const heroWatercolor = siteMedia.nutrition.heroWatercolor;

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
                  fetchPriority="high"
                />
              </HeroPicture>
              <HeroShade />
            </HeroVisual>
          </Hero>

          <Intro>
            <SectionEyebrow>Nutrition with Balance</SectionEyebrow>
            <SectionTitle>More Than Just a Diet</SectionTitle>
            <Divider>
              <span>✦</span>
            </Divider>
            <SectionBody>
              I believe food should support both your practice and your
              lifestyle. My approach blends clinical nutrition, Ayurvedic
              wisdom, and mindful eating to help you build sustainable habits
              and lasting balance — without extreme dieting.
            </SectionBody>
          </Intro>

          <SupportGrid>
            {supportCards.map(({ title, text, icon: Icon }) => (
              <SupportCard key={title}>
                <SupportBadge>
                  <Icon size={18} strokeWidth={1.9} />
                </SupportBadge>
                <SupportTitle>{title}</SupportTitle>
                <SupportText>{text}</SupportText>
              </SupportCard>
            ))}
          </SupportGrid>

          <ApproachCard id="nutrition-approach">
            <ApproachGrid>
              <ApproachImageWrap>
                <ApproachImage
                  src={siteMedia.nutrition.bio}
                  alt="Personalised Nutrition Plans"
                  loading="lazy"
                  decoding="async"
                />
              </ApproachImageWrap>

              <div>
                <SectionEyebrow>Nutrition Approach</SectionEyebrow>
                <SectionTitle>Types of Diet Plans I Offer</SectionTitle>
                <SectionBody>
                  I create personalised clinical nutrition plans based on your
                  health condition, body needs and lifestyle — never
                  one-size-fits-all diets.
                </SectionBody>

                <Checklist>
                  {planChecklist.map((item) => (
                    <ChecklistItem key={item}>
                      <ChecklistIcon>
                        <Check size={12} strokeWidth={2.6} />
                      </ChecklistIcon>
                      <span>{item}</span>
                    </ChecklistItem>
                  ))}
                </Checklist>

                <NoteText>
                  Each plan is designed to be practical, culturally
                  appropriate and easy to follow — supporting healing from
                  within.
                </NoteText>
              </div>
            </ApproachGrid>
          </ApproachCard>

          <TestimonialSection>
            <TestimonialHeader>
              <SectionEyebrow>Client Love</SectionEyebrow>
              <SectionTitle>Real stories. Real transformations.</SectionTitle>
            </TestimonialHeader>

            <TestimonialCard>
              <TestimonialAvatar>
                <img
                  src={testimonials[reviewIndex].image}
                  alt={testimonials[reviewIndex].name}
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
                onClick={() =>
                  setReviewIndex((current) =>
                    current === 0 ? testimonials.length - 1 : current - 1,
                  )
                }
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
                    aria-label={`Show testimonial ${index + 1}`}
                    $active={reviewIndex === index}
                  />
                ))}
              </CarouselDots>

              <CarouselButton
                type="button"
                onClick={() =>
                  setReviewIndex((current) =>
                    current === testimonials.length - 1 ? 0 : current + 1,
                  )
                }
                aria-label="Show next testimonial"
              >
                <ChevronRight size={18} />
              </CarouselButton>
            </CarouselControls>
          </TestimonialSection>

          <DiscoverySection id="pricing-section">
            <SectionTitle>Start Your Journey</SectionTitle>
            <SectionBody>
              A simple first step towards balanced, sustainable health.
            </SectionBody>

            <DiscoveryCard>
              <DiscoveryTitle>Discovery Call</DiscoveryTitle>
              <DiscoveryMeta>
                30 Minutes • Online via Zoom / WhatsApp
              </DiscoveryMeta>
              <DiscoveryPrice>
                <span>₹</span>299
              </DiscoveryPrice>

              <DiscoveryList>
                <DiscoveryItem>
                  <ChecklistIcon>
                    <Check size={12} strokeWidth={2.6} />
                  </ChecklistIcon>
                  <span>Dietary pattern analysis</span>
                </DiscoveryItem>
                <DiscoveryItem>
                  <ChecklistIcon>
                    <Check size={12} strokeWidth={2.6} />
                  </ChecklistIcon>
                  <span>Goal-setting strategy</span>
                </DiscoveryItem>
                <DiscoveryItem>
                  <ChecklistIcon>
                    <Check size={12} strokeWidth={2.6} />
                  </ChecklistIcon>
                  <span>Personal Q&amp;A session</span>
                </DiscoveryItem>
              </DiscoveryList>

              <DiscoveryActions>
                <Button
                  href={buildWhatsAppUrl(contactMessages.nutritionDiscovery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  size="lg"
                >
                  Book My Session
                </Button>
                <Button
                  href={buildWhatsAppUrl(contactMessages.contactIntro)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                  fullWidth
                  icon={<MessageCircleMore size={18} strokeWidth={1.9} />}
                >
                  Chat on WhatsApp
                </Button>
              </DiscoveryActions>
            </DiscoveryCard>
          </DiscoverySection>
        </Stack>
      </Column>
    </Page>
  );
};

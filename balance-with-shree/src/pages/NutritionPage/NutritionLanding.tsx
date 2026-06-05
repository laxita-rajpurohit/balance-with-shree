import {
  Check,
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

export const NutritionLanding = () => {
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

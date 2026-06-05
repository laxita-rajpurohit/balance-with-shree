import { Check, Flower2, Leaf, Sparkles } from "lucide-react";
import { Button } from "../../components/Button";
import { buildWhatsAppUrl, contactMessages } from "../../data/contact";
import { siteMedia } from "../../data/media";
import {
  ApproachGrid,
  ApproachSection,
  AudienceChip,
  AudienceGrid,
  AudienceIcon,
  AudienceSection,
  Badge,
  BulletIcon,
  BulletItem,
  BulletList,
  CardHeader,
  CardSection,
  CardTitle,
  Column,
  DiscoveryAction,
  DiscoveryCard,
  DiscoveryItem,
  DiscoveryList,
  DiscoveryMeta,
  DiscoveryPrice,
  DiscoverySection,
  DiscoveryTitle,
  DisclaimerCard,
  DisclaimerLabel,
  DisclaimerText,
  Divider,
  Hero,
  HeroImage,
  HeroPicture,
  HeroVisual,
  HeroWash,
  IncludesCard,
  IncludesGrid,
  Intro,
  Page,
  SectionBody,
  SectionTitle,
  Stack,
  StatusBadge,
  StepCard,
  StepNumber,
  StepText,
  SupportingText,
} from "./AyurvedaLanding.styles";

const includes = [
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
              <HeroWash />
            </HeroVisual>
          </Hero>

          <Intro>
            <SectionTitle>Ayurveda for Natural Balance</SectionTitle>
            <Divider>
              <span>✦</span>
            </Divider>
            <SectionBody>
              Ayurveda helps you understand your body&apos;s unique
              constitution and lifestyle patterns to restore balance in a
              gentle and sustainable way.
            </SectionBody>
          </Intro>

          <CardSection>
            <SectionTitle>What This Includes</SectionTitle>

            <IncludesGrid>
              {includes.map(({ title, icon: Icon, items, note, comingSoon }) => (
                <IncludesCard key={title}>
                  <CardHeader>
                    <Badge $warm={comingSoon}>
                      <Icon size={18} strokeWidth={1.9} />
                    </Badge>
                    {comingSoon ? <StatusBadge>Coming Soon</StatusBadge> : null}
                  </CardHeader>

                  <CardTitle>{title}</CardTitle>

                  {note ? <SupportingText>{note}</SupportingText> : null}

                  <BulletList>
                    {items.map((item) => (
                      <BulletItem key={item}>
                        <BulletIcon $warm={comingSoon}>
                          <Check size={12} strokeWidth={2.6} />
                        </BulletIcon>
                        <span>{item}</span>
                      </BulletItem>
                    ))}
                  </BulletList>
                </IncludesCard>
              ))}
            </IncludesGrid>
          </CardSection>

          <AudienceSection>
            <SectionTitle>Who It&apos;s For</SectionTitle>

            <AudienceGrid>
              {whoItsFor.map((item) => (
                <AudienceChip key={item}>
                  <AudienceIcon>
                    <Check size={15} strokeWidth={2.4} />
                  </AudienceIcon>
                  <span>{item}</span>
                </AudienceChip>
              ))}
            </AudienceGrid>
          </AudienceSection>

          <ApproachSection id="consultation-approach">
            <SectionTitle>The Consultation Approach</SectionTitle>

            <ApproachGrid>
              {consultationSteps.map((step, index) => (
                <StepCard key={step}>
                  <StepNumber>{String(index + 1).padStart(2, "0")}</StepNumber>
                  <StepText>{step}</StepText>
                </StepCard>
              ))}
            </ApproachGrid>
          </ApproachSection>

          <DiscoverySection id="ayurveda-discovery">
            <SectionTitle>Book a Discovery Call</SectionTitle>
            <SectionBody>
              Not sure where to begin? Start with a short call to understand
              what you need.
            </SectionBody>

            <DiscoveryCard>
              <DiscoveryTitle>Ayurveda Discovery Call</DiscoveryTitle>
              <DiscoveryMeta>20 Minutes • Online via Zoom/WhatsApp</DiscoveryMeta>
              <DiscoveryPrice>
                <span>₹</span>300
              </DiscoveryPrice>

              <DiscoveryList>
                <DiscoveryItem>
                  <BulletIcon $warm>
                    <Check size={12} strokeWidth={2.6} />
                  </BulletIcon>
                  <span>Brief dosha &amp; lifestyle overview</span>
                </DiscoveryItem>
                <DiscoveryItem>
                  <BulletIcon $warm>
                    <Check size={12} strokeWidth={2.6} />
                  </BulletIcon>
                  <span>Clarity on your main concerns</span>
                </DiscoveryItem>
                <DiscoveryItem>
                  <BulletIcon $warm>
                    <Check size={12} strokeWidth={2.6} />
                  </BulletIcon>
                  <span>Recommendations on next best steps</span>
                </DiscoveryItem>
              </DiscoveryList>

              <DiscoveryAction>
                <Button
                  href={buildWhatsAppUrl(contactMessages.ayurvedaDiscovery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  size="lg"
                >
                  Book My Ayurveda Discovery Call
                </Button>
              </DiscoveryAction>
            </DiscoveryCard>
          </DiscoverySection>

          <DisclaimerCard>
            <DisclaimerLabel>Disclaimer</DisclaimerLabel>
            <DisclaimerText>
              Ayurvedic consultations and therapies are offered as supportive
              wellness practices and do not replace medical diagnosis or
              treatment. Panchakarma procedures are advised or referred only
              where clinically appropriate.
            </DisclaimerText>
          </DisclaimerCard>
        </Stack>
      </Column>
    </Page>
  );
};

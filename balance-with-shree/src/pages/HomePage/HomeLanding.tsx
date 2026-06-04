import { useState } from "react";
import {
  Apple,
  ArrowRight,
  CalendarDays,
  Flower2,
  HeartHandshake,
  HeartPulse,
  Leaf,
  MessageCircleMore,
  MoonStar,
  Sparkles,
  SunMedium,
  Waves,
} from "lucide-react";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { PackageDetails } from "../../components/PackageDetails";
import { SessionSelector } from "../../components/SessionSelector";
import { buildWhatsAppUrl, contactMessages } from "../../data/contact";
import { siteMedia } from "../../data/media";
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
  SectionBody,
  SectionEyebrow,
  SectionTitle,
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
  const [useFallbackHero, setUseFallbackHero] = useState(false);

  const watercolorHero = siteMedia.home.homeHeroWatercolorIllustration;
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
                  fetchPriority="high"
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
    </Page>
  );
};

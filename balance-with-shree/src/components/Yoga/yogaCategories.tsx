import { useNavigate } from "react-router-dom";
import {
  YogaSection,
  YogaContainer,
  YogaTitle,
  YogaSubText,
  YogaGrid,
  YogaCard,
  YogaCardTitle,
  YogaCardDesc,
  MobileStack,
  DesktopOnly,
} from "./style";

const categories = [
  {
    slug: "mindful-movement",
    title: "Mindful Movement",
    desc: "Yoga practiced with awareness, breath connection, and respect for your body’s limits.",
  },
  {
    slug: "strength-stability",
    title: "Strength & Stability",
    desc: "Build functional strength and joint stability through safe alignment and gradual progress.",
  },
  {
    slug: "posture-pain-care",
    title: "Posture & Pain Care",
    desc: "Support posture correction and manage back, neck, and joint discomfort mindfully.",
  },
  {
    slug: "breath-mindfulness",
    title: "Breath & Mindfulness",
    desc: "Calm the nervous system and improve focus through conscious breath awareness.",
  },
  {
    slug: "progressive-practice",
    title: "Progressive & Safe Practice",
    desc: "Each session is designed to be sustainable, adaptive, and supportive of long-term wellbeing.",
  },
];

export default function YogaCategories() {
  const navigate = useNavigate();

  return (
    <YogaSection>
      <YogaContainer>
        <YogaTitle>A Practice Beyond Asanas</YogaTitle>

        <YogaSubText>
          Yoga is a tool for balance, healing, and self-awareness. My sessions
          are thoughtfully designed to support mobility, strength, posture,
          breath, and mental clarity — while respecting your body’s limitations
          and needs.
        </YogaSubText>

        <MobileStack>
          {categories.map((item) => (
            <YogaCard key={item.slug}>
              <YogaCardTitle>{item.title}</YogaCardTitle>
              <YogaCardDesc>{item.desc}</YogaCardDesc>
            </YogaCard>
          ))}
        </MobileStack>

        <DesktopOnly>
          <YogaGrid>
            {categories.map((item) => (
              <YogaCard
                key={item.slug}
                onClick={() => navigate(`/yoga/${item.slug}`)}
              >
                <YogaCardTitle>{item.title}</YogaCardTitle>
                <YogaCardDesc>{item.desc}</YogaCardDesc>
              </YogaCard>
            ))}
          </YogaGrid>
        </DesktopOnly>
      </YogaContainer>
    </YogaSection>
  );
}

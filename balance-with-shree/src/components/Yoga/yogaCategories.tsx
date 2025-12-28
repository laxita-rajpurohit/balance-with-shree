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
    slug: "prenatal",
    title: "Prenatal Yoga",
    desc: "Gentle, safe movement supporting the mother and baby.",
  },
  {
    slug: "postnatal",
    title: "Postnatal Yoga",
    desc: "Restore strength, posture, and confidence after delivery.",
  },
  {
    slug: "fertility",
    title: "Yoga for Conceiving",
    desc: "Reduce stress and balance hormones naturally.",
  },
  {
    slug: "weight-loss",
    title: "Weight Loss Yoga",
    desc: "Mindful fat loss without strain or extremes.",
  },
  {
    slug: "overall-health",
    title: "Overall Health",
    desc: "A complete practice for strength, calm, and balance.",
  },
];

export default function YogaCategories() {
  const navigate = useNavigate();

  return (
    <YogaSection>
      <YogaContainer>
        <YogaTitle>Choose Your Yoga Path</YogaTitle>
        <YogaSubText>
          Each program is designed for a specific phase of life and wellness
          need. Choose what resonates with your body right now.
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

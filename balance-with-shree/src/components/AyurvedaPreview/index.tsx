import { Leaf, MoonStar, SunMedium, Waves } from "lucide-react";
import { Button } from "../Button";
import {
  Section,
  Container,
  Title,
  Desc,
  Points,
  Point,
  PointIcon,
  PointLabel,
} from "./style";

const ayurvedaPoints = [
  { label: "Dosha Awareness & Body Constitution", icon: Leaf },
  { label: "Daily Routines (Dinacharya)", icon: SunMedium },
  { label: "Digestive & Metabolic Balance", icon: Waves },
  { label: "Stress & Hormonal Regulation", icon: MoonStar },
] as const;

export const AyurvedaPreview = () => {
  return (
    <Section>
      <Container>
        <Title>Ayurveda & Lifestyle Balance</Title>

        <Desc>
          Ancient Ayurvedic wisdom adapted for modern life — helping you
          understand your body’s constitution, improve digestion, regulate
          stress, and build supportive daily routines in a gentle, sustainable
          way.
        </Desc>

        <Points>
          {ayurvedaPoints.map(({ label, icon: Icon }) => (
            <Point key={label}>
              <PointIcon>
                <Icon size={16} strokeWidth={1.9} />
              </PointIcon>
              <PointLabel>{label}</PointLabel>
            </Point>
          ))}
        </Points>

        <Button to="/ayurveda" variant="outline" style={{ marginTop: "32px" }}>
          Explore Ayurveda
        </Button>
      </Container>
    </Section>
  );
};

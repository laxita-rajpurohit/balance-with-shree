import { Container, Section } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Title, Desc, Points, Point, CTA } from "./style";

export const AyurvedaPreview = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        <Title>Ayurveda & Lifestyle Balance</Title>
        <Desc>
          Ancient wisdom adapted for modern living — to support digestion,
          hormones, and daily rhythm.
        </Desc>

        <Points>
          <Point>Dosha Awareness</Point>
          <Point>Daily Routines</Point>
          <Point>Digestive Balance</Point>
          <Point>Stress Regulation</Point>
        </Points>

        <CTA onClick={() => navigate("/ayurveda")}>Explore Ayurveda</CTA>
      </Container>
    </Section>
  );
};

import { useNavigate } from "react-router-dom";
import { Section, Container, Title, Desc, Points, Point, CTA } from "./style";

export const AyurvedaPreview = () => {
  const navigate = useNavigate();

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
          <Point>Dosha Awareness & Body Constitution</Point>
          <Point>Daily Routines (Dinacharya)</Point>
          <Point>Digestive & Metabolic Balance</Point>
          <Point>Stress & Hormonal Regulation</Point>
        </Points>

        <CTA onClick={() => navigate("/ayurveda")}>Explore Ayurveda</CTA>
      </Container>
    </Section>
  );
};

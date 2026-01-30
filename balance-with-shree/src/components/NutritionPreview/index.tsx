import { useNavigate } from "react-router-dom";
import { Container, CTA, Desc, Point, Points, Section, Title } from "./style";

export default function NutritionPreview() {
  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        <Title>Nourish with Awareness</Title>

        <Desc>
          Personalised nutrition that supports digestion, hormones, and energy —
          rooted in mindful eating, lifestyle balance, and Indian home food.
        </Desc>

        <Points>
          <Point>Gut Health & Digestion</Point>
          <Point>Hormonal & Metabolic Balance</Point>
          <Point>Sustainable Food Habits</Point>
        </Points>

        <CTA onClick={() => navigate("/nutrition")}>Explore Nutrition</CTA>
      </Container>
    </Section>
  );
}

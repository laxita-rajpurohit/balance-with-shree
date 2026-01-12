import { useNavigate } from "react-router-dom";
import { Container, CTA, Desc, Point, Points, Section, Title } from "./style";

export default function NutritionPreview() {
  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        <Title>Holistic Nutrition</Title>
        <Desc>
          Nutrition that supports digestion, energy, and balance — without
          restriction or guilt.
        </Desc>

        <Points>
          <Point>Mindful Eating</Point>
          <Point>Gut Health</Point>
          <Point>Sustainable Weight Balance</Point>
        </Points>

        <CTA onClick={() => navigate("/nutrition")}>Explore Nutrition</CTA>
      </Container>
    </Section>
  );
}

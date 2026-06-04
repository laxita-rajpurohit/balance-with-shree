import { Apple, HeartPulse, Leaf } from "lucide-react";
import { Button } from "../Button";
import { Container, Desc, Point, PointIcon, PointLabel, Points, Section, Title } from "./style";

const nutritionPoints = [
  { label: "Gut Health & Digestion", icon: Apple },
  { label: "Hormonal & Metabolic Balance", icon: HeartPulse },
  { label: "Sustainable Food Habits", icon: Leaf },
] as const;

export default function NutritionPreview() {
  return (
    <Section>
      <Container>
        <Title>Nourish with Awareness</Title>

        <Desc>
          Personalised nutrition that supports digestion, hormones, and energy —
          rooted in mindful eating, lifestyle balance, and Indian home food.
        </Desc>

        <Points>
          {nutritionPoints.map(({ label, icon: Icon }) => (
            <Point key={label}>
              <PointIcon>
                <Icon size={16} strokeWidth={1.9} />
              </PointIcon>
              <PointLabel>{label}</PointLabel>
            </Point>
          ))}
        </Points>

        <Button to="/nutrition" variant="outline" style={{ marginTop: "30px" }}>
          Explore Nutrition
        </Button>
      </Container>
    </Section>
  );
}

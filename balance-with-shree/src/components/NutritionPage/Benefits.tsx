import { Leaf, Sun, Heart } from "lucide-react";
import { Card, GridThree, Section, SectionTitle, SubTitle } from "./style";

export const NutritionBenefits = () => (
  <Section>
    <SectionTitle>More Than Just a Diet</SectionTitle>
    <SubTitle>
      Nutrition that supports your body, energy and everyday life — without
      restriction or obsession.
    </SubTitle>

    <GridThree>
      <Card>
        <Leaf size={36} />
        <h3>Gut Health & Digestion</h3>
        <p>
          Improve digestion, reduce bloating and support long-term immunity.
        </p>
      </Card>

      <Card>
        <Sun size={36} />
        <h3>Sustained Energy</h3>
        <p>
          Experience steady energy throughout the day — no crashes, no extremes.
        </p>
      </Card>

      <Card>
        <Heart size={36} />
        <h3>Mindful Eating</h3>
        <p>Build a calm, positive relationship with food — without guilt.</p>
      </Card>
    </GridThree>
  </Section>
);

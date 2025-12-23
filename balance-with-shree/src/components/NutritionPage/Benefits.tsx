// NutritionBenefittsx
import { Leaf, Sun, Heart } from "lucide-react";
import { Card, GridThree, Section, SectionTitle, SubTitle } from "./style";

export const NutritionBenefits = () => (
  <Section>
    <SectionTitle>More Than Just a Diet</SectionTitle>
    <SubTitle>Nutrition that supports your practice & energy.</SubTitle>

    <GridThree>
      <Card>
        <Leaf size={36} />
        <h3>Gut Health</h3>
        <p>Restore digestion & immunity.</p>
      </Card>

      <Card>
        <Sun size={36} />
        <h3>Sustained Energy</h3>
        <p>No crashe Just balance.</p>
      </Card>

      <Card>
        <Heart size={36} />
        <h3>Mindful Eating</h3>
        <p>Intuition over restriction.</p>
      </Card>
    </GridThree>
  </Section>
);

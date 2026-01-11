import { Leaf, Sun, Heart, Scale } from "lucide-react";
import { Card, GridThree, Section, SectionTitle, SubTitle } from "./style";

export const NutritionBenefits = () => (
  <Section>
    {/* MORE THAN JUST A DIET */}
    <SectionTitle>More Than Just a Diet</SectionTitle>
    <SubTitle>
      I believe food should support both your practice and your lifestyle. My
      approach blends clinical nutrition, Ayurvedic wisdom, and mindful eating
      to help you build sustainable habits and lasting balance — without extreme
      dieting.
    </SubTitle>

    {/* WHAT I SUPPORT YOU WITH */}
    {/* <SectionTitle style={{ marginTop: "40px" }}>
      What I Support You With
    </SectionTitle> */}

    <GridThree>
      <Card>
        <Leaf size={36} />
        <h3>Gut Health & Digestion</h3>
        <p>Support digestion, reduce bloating and improve immunity.</p>
      </Card>

      <Card>
        <Sun size={36} />
        <h3>Sustained Energy</h3>
        <p>Feel steady, balanced energy throughout the day — no crashes.</p>
      </Card>

      <Card>
        <Scale size={36} />
        <h3>Weight Balance</h3>
        <p>Healthy weight loss or weight gain through personalised planning.</p>
      </Card>

      <Card>
        <Heart size={36} />
        <h3>Mindful Eating</h3>
        <p>Develop a calm, positive relationship with food — without guilt.</p>
      </Card>
    </GridThree>
  </Section>
);

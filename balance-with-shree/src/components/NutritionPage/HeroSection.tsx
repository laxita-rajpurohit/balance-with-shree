import { Button, HeroContent, HeroSection } from "./style";

export const NutritionHero = () => (
  <HeroSection>
    <HeroContent>
      <h1>
        Nourish Your Body,
        <br />
        Fuel Your Soul
      </h1>

      <p style={{ fontWeight: 500 }}>
        Holistic nutrition aligned with yoga, lifestyle & Ayurveda.
      </p>

      <p style={{ maxWidth: "680px", margin: "20px auto 32px" }}>
        At Balance with Shree, nutrition is not about restriction or calorie
        obsession. It’s about nourishing your body in a way that supports your
        energy, digestion, hormones and everyday life — on and off the mat.
      </p>

      <Button primary>Start Your Journey</Button>
    </HeroContent>
  </HeroSection>
);

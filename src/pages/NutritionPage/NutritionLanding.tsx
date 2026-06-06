import {
  Heart,
  Leaf,
  Scale,
  Sun,
} from "lucide-react";
import { siteMedia } from "../../shared/data/media";
import {
  NutritionBenefits,
  NutritionHero,
  NutritionIntro,
  NutritionPricing,
  NutritionPrograms,
} from "../../features/nutrition/components";
import {
  Column,
  Page,
  Stack,
} from "./NutritionLanding.styles";

const supportCards = [
  {
    title: "Gut Health & Digestion",
    text: "Support digestion, reduce bloating and improve immunity.",
    icon: Leaf,
  },
  {
    title: "Sustained Energy",
    text: "Feel steady, balanced energy throughout the day — no crashes.",
    icon: Sun,
  },
  {
    title: "Weight Balance",
    text: "Healthy weight loss or weight gain through personalised planning.",
    icon: Scale,
  },
  {
    title: "Mindful Eating",
    text: "Develop a calm, positive relationship with food — without guilt.",
    icon: Heart,
  },
] as const;

const planChecklist = [
  "Weight loss, weight gain & body recomposition",
  "PCOS / PCOD & hormonal balance",
  "Diabetes, thyroid & metabolic health",
  "Pregnancy & women’s nutrition support",
  "Gut health, digestion & immunity",
  "Lifestyle & habit-based nutrition",
  "Vegetarian & egg-based meal planning",
  "Indian home-food focused diets (no exotic foods)",
] as const;

export const NutritionLanding = () => {
  const heroWatercolor = siteMedia.nutrition.heroWatercolor;

  return (
    <Page>
      <Column>
        <Stack>
          <NutritionHero heroWatercolor={heroWatercolor} />

          <NutritionIntro />

          <NutritionBenefits supportCards={supportCards} />

          <NutritionPrograms planChecklist={planChecklist} />

          <NutritionPricing />
        </Stack>
      </Column>
    </Page>
  );
};

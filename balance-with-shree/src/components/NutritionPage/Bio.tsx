import { Check } from "lucide-react";
import { BioContent, BioImage, BioSection } from "./style";
import { Image } from "../Journey/style";

export const NutritionBio = () => (
  <BioSection>
    <BioImage>
      <Image
        src={
          "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263597/journey_jcc4im.jpg"
        }
        alt="Personalised Nutrition Plans"
      />
    </BioImage>

    <BioContent>
      <h3>Nutrition Approach</h3>
      <h2>Types of Diet Plans I Offer</h2>

      <p>
        I create personalised clinical nutrition plans based on your health
        condition, body needs and lifestyle — never one-size-fits-all diets.
      </p>

      <ul>
        <li>
          <Check size={18} color="#4A6741" />
          Weight loss, weight gain & body recomposition
        </li>
        <li>
          <Check size={18} color="#4A6741" />
          PCOS / PCOD & hormonal balance
        </li>
        <li>
          <Check size={18} color="#4A6741" />
          Diabetes, thyroid & metabolic health
        </li>
        <li>
          <Check size={18} color="#4A6741" />
          Pregnancy & women’s nutrition support
        </li>
        <li>
          <Check size={18} color="#4A6741" />
          Gut health, digestion & immunity
        </li>
        <li>
          <Check size={18} color="#4A6741" />
          Lifestyle & habit-based nutrition
        </li>
        <li>
          <Check size={18} color="#4A6741" />
          Vegetarian & egg-based meal planning
        </li>
        <li>
          <Check size={18} color="#4A6741" />
          Indian home-food focused diets (no exotic foods)
        </li>
      </ul>

      <p style={{ marginTop: "24px", fontStyle: "italic" }}>
        Each plan is designed to be practical, culturally appropriate and easy
        to follow — supporting healing from within.
      </p>
    </BioContent>
  </BioSection>
);

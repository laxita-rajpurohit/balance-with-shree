// NutritionBio.tsx

import { Check } from "lucide-react";
import { BioContent, BioImage, BioSection } from "./style";
import { Image } from "../Journey/style";
import portrait from "../../assets/journey.png";

export const NutritionBio = () => (
  <>
    <BioSection>
      <BioImage>
        {/* REPLACE THIS URL WITH DHANASHREE'S PHOTO */}
        <Image src={portrait} alt="Yoga teacher" />
      </BioImage>
      <BioContent>
        <h3>Meet Your Coach</h3>
        <h2>Hi, I'm Dhanashree.</h2>
        <p>
          My journey began when I realized that yoga on the mat wasn't enough if
          I wasn't nourishing my body off the mat. With over 5 years of
          experience bridging modern nutritional science with ancient Ayurvedic
          wisdom, I help clients achieve their health goals without strict
          dieting.
        </p>
        <ul>
          <li>
            <Check size={18} color="#4A6741" /> Certified Nutrition Specialist
          </li>
          <li>
            <Check size={18} color="#4A6741" /> Yoga Alliance RYT-200
          </li>
          <li>
            <Check size={18} color="#4A6741" /> Ayurvedic Lifestyle Consultant
          </li>
        </ul>
      </BioContent>
    </BioSection>
  </>
);

import { Check } from "lucide-react";
import { BioContent, BioImage, BioSection } from "./style";
import { Image } from "../Journey/style";
import portrait from "../../assets/journey.png";

export const NutritionBio = () => (
  <BioSection>
    <BioImage>
      <Image src={portrait} alt="Dhanashree - Nutrition & Yoga Coach" />
    </BioImage>

    <BioContent>
      <h3>About Shree</h3>
      <h2>Dhanashree</h2>

      <p>
        My journey began when I realised that yoga on the mat wasn’t enough if I
        wasn’t nourishing my body off the mat.
      </p>

      <p>
        With over 5 years of experience, I help individuals create balance
        through food by aligning nutrition with movement, mindset and lifestyle
        — without strict dieting.
      </p>

      <ul>
        <li>
          <Check size={18} color="#4A6741" />
          Certified Nutrition Specialist
        </li>
        <li>
          <Check size={18} color="#4A6741" />
          Yoga Alliance RYT-200
        </li>
        <li>
          <Check size={18} color="#4A6741" />
          Ayurvedic Lifestyle Consultant
        </li>
      </ul>
    </BioContent>
  </BioSection>
);

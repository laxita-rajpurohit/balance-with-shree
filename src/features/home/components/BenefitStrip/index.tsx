import type { LucideIcon } from "lucide-react";
import {
  BenefitStripSection,
  BenefitItem,
  BenefitIcon,
  BenefitText,
} from "./styles";

interface Benefit {
  label: string;
  icon: LucideIcon;
}

interface BenefitStripProps {
  benefits: readonly Benefit[];
}

export const BenefitStrip = ({ benefits }: BenefitStripProps) => {
  return (
    <BenefitStripSection>
      {benefits.map(({ label, icon: Icon }) => (
        <BenefitItem key={label}>
          <BenefitIcon>
            <Icon size={18} strokeWidth={1.9} />
          </BenefitIcon>
          <BenefitText>{label}</BenefitText>
        </BenefitItem>
      ))}
    </BenefitStripSection>
  );
};

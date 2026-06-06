import { Check } from "lucide-react";
import {
  AudienceSection,
  SectionTitle,
  AudienceGrid,
  AudienceChip,
  AudienceIcon,
} from "./styles";

interface AyurvedaBenefitsProps {
  whoItsFor: readonly string[];
}

export const AyurvedaBenefits = ({ whoItsFor }: AyurvedaBenefitsProps) => {
  return (
    <AudienceSection>
      <SectionTitle>Who It&apos;s For</SectionTitle>

      <AudienceGrid>
        {whoItsFor.map((item) => (
          <AudienceChip key={item}>
            <AudienceIcon>
              <Check size={15} strokeWidth={2.4} />
            </AudienceIcon>
            <span>{item}</span>
          </AudienceChip>
        ))}
      </AudienceGrid>
    </AudienceSection>
  );
};

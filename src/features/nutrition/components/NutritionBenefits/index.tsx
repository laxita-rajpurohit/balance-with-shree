import type { LucideIcon } from "lucide-react";
import {
  SupportGrid,
  SupportCard,
  SupportBadge,
  SupportTitle,
  SupportText,
} from "./styles";

interface SupportItem {
  title: string;
  text: string;
  icon: LucideIcon;
}

interface NutritionBenefitsProps {
  supportCards: readonly SupportItem[];
}

export const NutritionBenefits = ({
  supportCards,
}: NutritionBenefitsProps) => {
  return (
    <SupportGrid>
      {supportCards.map(({ title, text, icon: Icon }) => (
        <SupportCard key={title}>
          <SupportBadge>
            <Icon size={18} strokeWidth={1.9} />
          </SupportBadge>
          <SupportTitle>{title}</SupportTitle>
          <SupportText>{text}</SupportText>
        </SupportCard>
      ))}
    </SupportGrid>
  );
};

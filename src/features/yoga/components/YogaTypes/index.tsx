import { Leaf } from "lucide-react";
import {
  TypesCard,
  SectionEyebrow,
  SectionTitle,
  SectionBody,
  TypesList,
  TypeItem,
  TypeDot,
  TypeText,
} from "./styles";

interface YogaTypesProps {
  yogaTypes: readonly string[];
}

export const YogaTypes = ({ yogaTypes }: YogaTypesProps) => {
  return (
    <TypesCard>
      <SectionEyebrow>Types of Yoga</SectionEyebrow>
      <SectionTitle>Types of Yoga I Offer</SectionTitle>
      <SectionBody>
        Yoga sessions are customised based on your body, goals and health
        conditions.
      </SectionBody>
      <TypesList>
        {yogaTypes.map((type) => (
          <TypeItem key={type}>
            <TypeDot>
              <Leaf size={14} strokeWidth={1.9} />
            </TypeDot>
            <TypeText>{type}</TypeText>
          </TypeItem>
        ))}
      </TypesList>
    </TypesCard>
  );
};

import {
  YogaSection,
  YogaContainer,
  YogaTitle,
  YogaSubText,
  YogaTypesWrap,
  YogaTypeItem,
  YogaTypeDot,
  YogaTypeText,
} from "./style";

const YOGA_TYPES = [
  "Hatha & Vinyasa Yoga",
  "Strength & flexibility-focused flows",
  "Therapeutic yoga for pain management",
  "Prenatal & postnatal yoga",
  "Beginners & lifestyle-based yoga",
];

export default function YogaTypes() {
  return (
    <YogaSection>
      <YogaContainer>
        <YogaTitle>Types of Yoga I Offer</YogaTitle>

        <YogaSubText>
          Yoga sessions are customised based on your body, goals and health
          conditions.
        </YogaSubText>

        <YogaTypesWrap>
          {YOGA_TYPES.map((type) => (
            <YogaTypeItem key={type}>
              <YogaTypeDot />
              <YogaTypeText>{type}</YogaTypeText>
            </YogaTypeItem>
          ))}
        </YogaTypesWrap>
      </YogaContainer>
    </YogaSection>
  );
}

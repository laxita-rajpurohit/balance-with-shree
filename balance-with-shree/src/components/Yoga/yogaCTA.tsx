import { YogaCTASection, YogaCTAButton, YogaTitle, YogaSubText } from "./style";

export default function YogaCTA() {
  return (
    <YogaCTASection>
      <YogaTitle>Types of Yoga I Offer</YogaTitle>

      <YogaSubText>
        Yoga sessions are customised based on your body, goals, and health
        conditions.
        <br />
        Hatha & Vinyasa Yoga • Strength & flexibility-focused flows •
        Therapeutic yoga for pain management • Prenatal & postnatal yoga •
        Beginners & lifestyle-based yoga
      </YogaSubText>

      <YogaCTAButton>Start Your Practice</YogaCTAButton>
    </YogaCTASection>
  );
}

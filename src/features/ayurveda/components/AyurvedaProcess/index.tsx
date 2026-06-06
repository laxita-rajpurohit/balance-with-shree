import {
  ApproachSection,
  SectionTitle,
  ApproachGrid,
  StepCard,
  StepNumber,
  StepText,
} from "./styles";

interface AyurvedaProcessProps {
  consultationSteps: readonly string[];
}

export const AyurvedaProcess = ({
  consultationSteps,
}: AyurvedaProcessProps) => {
  return (
    <ApproachSection id="consultation-approach">
      <SectionTitle>The Consultation Approach</SectionTitle>

      <ApproachGrid>
        {consultationSteps.map((step, index) => (
          <StepCard key={step}>
            <StepNumber>{String(index + 1).padStart(2, "0")}</StepNumber>
            <StepText>{step}</StepText>
          </StepCard>
        ))}
      </ApproachGrid>
    </ApproachSection>
  );
};

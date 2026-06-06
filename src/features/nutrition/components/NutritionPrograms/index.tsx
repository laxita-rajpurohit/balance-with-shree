import { Check } from "lucide-react";
import { siteMedia } from "../../../../shared/data/media";
import {
  ApproachCard,
  ApproachGrid,
  ApproachImageWrap,
  ApproachImage,
  SectionEyebrow,
  SectionTitle,
  SectionBody,
  Checklist,
  ChecklistItem,
  ChecklistIcon,
  NoteText,
} from "./styles";

interface NutritionProgramsProps {
  planChecklist: readonly string[];
}

export const NutritionPrograms = ({
  planChecklist,
}: NutritionProgramsProps) => {
  return (
    <ApproachCard id="nutrition-approach">
      <ApproachGrid>
        <ApproachImageWrap>
          <ApproachImage
            src={siteMedia.nutrition.bio}
            alt="Personalised Nutrition Plans"
            loading="lazy"
            decoding="async"
          />
        </ApproachImageWrap>

        <div>
          <SectionEyebrow>Nutrition Approach</SectionEyebrow>
          <SectionTitle>Types of Diet Plans I Offer</SectionTitle>
          <SectionBody>
            I create personalised clinical nutrition plans based on your
            health condition, body needs and lifestyle — never
            one-size-fits-all diets.
          </SectionBody>

          <Checklist>
            {planChecklist.map((item) => (
              <ChecklistItem key={item}>
                <ChecklistIcon>
                  <Check size={12} strokeWidth={2.6} />
                </ChecklistIcon>
                <span>{item}</span>
              </ChecklistItem>
            ))}
          </Checklist>

          <NoteText>
            Each plan is designed to be practical, culturally appropriate
            and easy to follow — supporting healing from within.
          </NoteText>
        </div>
      </ApproachGrid>
    </ApproachCard>
  );
};

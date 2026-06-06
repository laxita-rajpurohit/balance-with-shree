import { forwardRef } from "react";
import {
  Philosophy,
  PhilosophyGrid,
  PhilosophyCopy,
  SectionEyebrow,
  SectionTitle,
  Divider,
  SectionBody,
  PhilosophyAccent,
  PhilosophyChip,
} from "./styles";

interface PhilosophyChipData {
  title: string;
  body: string;
}

interface AboutPhilosophyProps {
  philosophyChips: readonly PhilosophyChipData[];
}

export const AboutPhilosophy = forwardRef<HTMLElement, AboutPhilosophyProps>(
  ({ philosophyChips }, ref) => {
    return (
      <Philosophy ref={ref} id="about-philosophy">
        <PhilosophyGrid>
          <PhilosophyCopy>
            <SectionEyebrow>My Philosophy</SectionEyebrow>
            <SectionTitle>Wellness, Without Extremes</SectionTitle>
            <Divider>
              <span>✦</span>
            </Divider>
            <SectionBody>
              Yoga is not just exercise. Nutrition is not just calories.
              Health is not just physical.
            </SectionBody>
            <SectionBody>
              I follow a holistic approach — working with the mind, body,
              and soul.
            </SectionBody>
            <SectionBody>
              No crash diets. No temporary fixes. No fear around food.
            </SectionBody>
            <SectionBody>
              Just sustainable habits, mindful eating, and movement that
              feels good — for life.
            </SectionBody>
            <SectionBody>
              My goal is to help you feel comfortable in your body,
              confident in your food choices, and connected to your health
              — naturally and mindfully.
            </SectionBody>
          </PhilosophyCopy>

          <PhilosophyAccent>
            {philosophyChips.map((chip) => (
              <PhilosophyChip key={chip.title}>
                <strong>{chip.title}</strong>
                <span>{chip.body}</span>
              </PhilosophyChip>
            ))}
          </PhilosophyAccent>
        </PhilosophyGrid>
      </Philosophy>
    );
  },
);

AboutPhilosophy.displayName = "AboutPhilosophy";

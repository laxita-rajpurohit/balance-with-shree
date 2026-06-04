import { siteMedia } from "./media";

export type JourneyTimelineItem = {
  id: number;
  side: "left" | "right";
  label: string;
  image: string;
  illustration: string | null;
  alt: string;
  paragraphs: string[];
};

export const journeyTimelineItems: JourneyTimelineItem[] = [
  {
    id: 1,
    side: "left",
    label: "The Beginning — Ignoring My Health",
    image: siteMedia.about.journeyTimeline.step1,
    illustration: siteMedia.about.journeyBeginning.src,
    alt: "Where it all began (2019–2020)",
    paragraphs: [
      "Back in 2019–20, I was severely underweight, weighing just 39 kg. I was into fitness or dance, and I wasn't mindful about what or how I was eating. My immunity was low, my digestion was constantly disturbed, and I ignored my body's signals for a long time.",
    ],
  },
  {
    id: 2,
    side: "right",
    label: "The Wake-Up Call — COVID & Hyperacidity",
    image: siteMedia.about.journeyTimeline.step2,
    illustration: siteMedia.about.journeyWakeup.src,
    alt: "The turning point – COVID & health breakdown",
    paragraphs: [
      "During the COVID phase, my health worsened. I suffered from frequent stomach issues, acid reflux, and was eventually diagnosed with hyperacidity. At one point, even breathing felt difficult. Doctors clearly told me that my eating habits, sleep cycle, and lifestyle were the root cause.",
    ],
  },
  {
    id: 3,
    side: "left",
    label: "Choosing Awareness Over Neglect",
    image: siteMedia.about.journeyTimeline.step3,
    illustration: siteMedia.about.journeyAwareness.src,
    alt: "Awareness → Action",
    paragraphs: [
      "Interestingly, I was already studying Nutrition & Dietetics, but this experience made everything real. I realized that knowing nutrition is one thing, but living it mindfully is another.",
    ],
  },
  {
    id: 4,
    side: "right",
    label: "Healing Through Food, Yoga & Belief",
    image: siteMedia.about.journeyTimeline.step1,
    illustration: siteMedia.about.journeyHealing.src,
    alt: "Healing through belief, food & movement",
    paragraphs: [
      "I began making small, consistent changes — eating with awareness, restoring my sleep cycle, introducing yoga and gentle movement, and practicing kinder self-talk and body awareness. Slowly, I shifted from fighting my body to trusting it. Over time, my weight increased from 39 kg to 45 kg, my digestion improved, and my energy returned — something years of random eating and irregular living had never given me.",
    ],
  },
  {
    id: 5,
    side: "left",
    label: "Turning My Journey into My Purpose",
    image: siteMedia.about.journeyTimeline.step2,
    illustration: siteMedia.about.journeyPurpose.src,
    alt: "From self-healing to serving others",
    paragraphs: [
      "What began as self-healing gradually became my purpose. This journey taught me that health is not created through extremes, punishment, or quick fixes — but through consistency, awareness, and compassion. Today, I help others build a balanced relationship with food, movement, and their bodies, in a way that feels sustainable and deeply personal.",
    ],
  },
];

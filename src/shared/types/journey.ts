export interface JourneyTimelineItem {
  id: number;
  side: "left" | "right";
  label: string;
  image: string;
  illustration: string | null;
  alt: string;
  paragraphs: string[];
}

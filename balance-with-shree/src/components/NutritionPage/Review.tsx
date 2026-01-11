import { Star } from "lucide-react";
import {
  FeatureCard,
  GridThree,
  Section,
  SectionTitle,
  SubTitle,
} from "./style";

const REVIEWS = [
  {
    name: "Ananya R.",
    text: "Dhanashree changed my relationship with food. I stopped chasing calories and started understanding nourishment.",
  },
  {
    name: "Rahul K.",
    text: "Simple, practical and realistic. Her approach helped me improve digestion and energy without extreme dieting.",
  },
  {
    name: "Priya S.",
    text: "Gentle, thoughtful and very practical. I finally feel balanced and confident about my food choices.",
  },
  {
    name: "Neha M.",
    text: "No extreme rules, no pressure. Just simple guidance that actually fits into daily life.",
  },
];

export const NutritionReviews = () => (
  <Section>
    <SectionTitle>Client Love</SectionTitle>
    <SubTitle>Small shifts. Sustainable change.</SubTitle>

    <GridThree
      style={{
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      {REVIEWS.map((review, index) => (
        <FeatureCard key={index}>
          <Star size={20} fill="#D4AF37" color="#D4AF37" />
          <p style={{ fontStyle: "italic", margin: "20px 0" }}>
            “{review.text}”
          </p>
          <h4>{review.name}</h4>
        </FeatureCard>
      ))}
    </GridThree>
  </Section>
);

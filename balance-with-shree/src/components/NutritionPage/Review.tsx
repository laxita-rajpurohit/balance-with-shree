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
    text: "Dhanashree changed my relationship with food. I no longer count calories; I count nutrients.",
  },
  {
    name: "Rahul K.",
    text: "The ₹300 consultation was the best investment I made to get started on my health journey.",
  },
  {
    name: "Priya S.",
    text: "Gentle, understanding, and scientific. Shree's approach helped me recover my strength.",
  },
];

export const NutritionReviews = () => {
  return (
    <Section>
      <SectionTitle>Client Love</SectionTitle>
      <SubTitle>Stories of transformation and balance.</SubTitle>

      <GridThree>
        {REVIEWS.map((review, index) => (
          <FeatureCard key={index}>
            <div style={{ color: "#D4AF37", marginBottom: "10px" }}>
              <Star size={20} fill="#D4AF37" />
            </div>
            <p style={{ fontStyle: "italic", marginBottom: "20px" }}>
              "{review.text}"
            </p>
            <h4 style={{ fontWeight: "bold" }}>{review.name}</h4>
          </FeatureCard>
        ))}
      </GridThree>
    </Section>
  );
};

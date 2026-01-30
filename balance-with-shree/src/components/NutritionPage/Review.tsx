"use client";

import { Star } from "lucide-react";
import {
  FeatureCard,
  Section,
  SectionTitle,
  SubTitle,
  SliderTrack,
  SliderWrapper,
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

// duplicate for seamless loop
const LOOPED_REVIEWS = [...REVIEWS, ...REVIEWS];

export const NutritionReviews = () => (
  <Section>
    <SectionTitle>Client Love</SectionTitle>
    <SubTitle>Small shifts. Sustainable change.</SubTitle>

    <SliderWrapper>
      <SliderTrack>
        {LOOPED_REVIEWS.map((review, i) => (
          <FeatureCard key={i}>
            <Star size={20} fill="#D4AF37" color="#D4AF37" />
            <p style={{ fontStyle: "italic", margin: "20px 0" }}>
              “{review.text}”
            </p>
            <h4>{review.name}</h4>
          </FeatureCard>
        ))}
      </SliderTrack>
    </SliderWrapper>
  </Section>
);

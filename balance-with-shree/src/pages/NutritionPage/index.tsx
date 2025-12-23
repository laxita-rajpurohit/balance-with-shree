import React from "react";
import { Leaf, Sun, Heart, Check, Star } from "lucide-react";
// Import all styles from style.tsx
import * as S from "./style";

const NutritionPage: React.FC = () => {
  const scrollToPricing = () => {
    const section = document.getElementById("pricing-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <S.PageWrapper>
      {/* 1. HERO */}
      <S.HeroSection>
        <S.HeroContent>
          <h1>
            Nourish Your Body,
            <br /> Fuel Your Soul.
          </h1>
          <p>
            Holistic nutrition plans tailored to your lifestyle by Dhanashree.
          </p>
          <S.Button onClick={scrollToPricing}>Start Your Journey</S.Button>
        </S.HeroContent>
      </S.HeroSection>

      {/* 2. PHILOSOPHY / BENEFITS */}
      <S.Section>
        <S.SectionTitle>More Than Just a Diet</S.SectionTitle>
        <S.SubTitle>
          Nutrition isn't about restriction; it's about abundance. It is the
          foundation of your yoga practice and your daily energy.
        </S.SubTitle>

        <S.GridThree>
          <S.FeatureCard>
            <div style={{ color: "#4A6741", marginBottom: "15px" }}>
              <Leaf size={40} />
            </div>
            <h3>Gut Health</h3>
            <p>
              Restoring balance to your digestion to improve immunity and mood
              naturally.
            </p>
          </S.FeatureCard>

          <S.FeatureCard>
            <div style={{ color: "#D4AF37", marginBottom: "15px" }}>
              <Sun size={40} />
            </div>
            <h3>Sustained Energy</h3>
            <p>
              Fueling your body with right ingredients to avoid the afternoon
              crash.
            </p>
          </S.FeatureCard>

          <S.FeatureCard>
            <div style={{ color: "#C85A5A", marginBottom: "15px" }}>
              <Heart size={40} />
            </div>
            <h3>Mindful Eating</h3>
            <p>
              Building a healthy relationship with food based on intuition, not
              calorie counting.
            </p>
          </S.FeatureCard>
        </S.GridThree>
      </S.Section>

      {/* 3. MEET THE COACH */}
      <S.Section bg="#F2EFE9">
        {" "}
        {/* Slightly darker cream for contrast */}
        <S.BioSection>
          <S.BioImage>
            {/* REPLACE THIS URL WITH DHANASHREE'S PHOTO */}
            <img
              src="https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop"
              alt="Dhanashree"
            />
          </S.BioImage>
          <S.BioContent>
            <h3>Meet Your Coach</h3>
            <h2>Hi, I'm Dhanashree.</h2>
            <p>
              My journey began when I realized that yoga on the mat wasn't
              enough if I wasn't nourishing my body off the mat. With over 5
              years of experience bridging modern nutritional science with
              ancient Ayurvedic wisdom, I help clients achieve their health
              goals without strict dieting.
            </p>
            <ul>
              <li>
                <Check size={18} color="#4A6741" /> Certified Nutrition
                Specialist
              </li>
              <li>
                <Check size={18} color="#4A6741" /> Yoga Alliance RYT-200
              </li>
              <li>
                <Check size={18} color="#4A6741" /> Ayurvedic Lifestyle
                Consultant
              </li>
            </ul>
          </S.BioContent>
        </S.BioSection>
      </S.Section>

      {/* 4. REVIEWS */}
      <S.Section>
        <S.SectionTitle>Client Love</S.SectionTitle>
        <S.SubTitle>Stories of transformation and balance.</S.SubTitle>

        <S.GridThree>
          {[
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
          ].map((review, i) => (
            <S.FeatureCard key={i} style={{ textAlign: "left" }}>
              <div style={{ color: "#D4AF37", marginBottom: "10px" }}>
                <Star size={20} fill="#D4AF37" />
              </div>
              <p style={{ fontStyle: "italic", marginBottom: "20px" }}>
                "{review.text}"
              </p>
              <h4 style={{ fontWeight: "bold" }}>{review.name}</h4>
            </S.FeatureCard>
          ))}
        </S.GridThree>
      </S.Section>

      {/* 5. PRICING / CTA */}
      <S.Section id="pricing-section" bg="#fff">
        <S.SectionTitle>Start Your Journey</S.SectionTitle>
        <S.SubTitle>Not sure where to begin? Let's chat.</S.SubTitle>

        <S.PricingCard>
          <h3>Discovery Call</h3>
          <p style={{ color: "#aaa" }}>30 Minutes • Online via Zoom/WhatsApp</p>

          <div className="price">
            <span>₹</span>300
          </div>

          <ul>
            <li>
              <Check size={16} color="#4A6741" /> Dietary Pattern Analysis
            </li>
            <li>
              <Check size={16} color="#4A6741" /> Goal Setting Strategy
            </li>
            <li>
              <Check size={16} color="#4A6741" /> Personal Q&A Session
            </li>
          </ul>

          <S.Button primary style={{ width: "100%" }}>
            Book My Session
          </S.Button>
        </S.PricingCard>
      </S.Section>
    </S.PageWrapper>
  );
};

export default NutritionPage;

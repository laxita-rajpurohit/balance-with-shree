// NutritionPricing.tsx
import { Check } from "lucide-react";
import { Button, PricingCard, Section, SectionTitle, SubTitle } from "./style";

export const NutritionPricing = () => (
  <Section id="pricing-section">
    <SectionTitle>Start Your Journey</SectionTitle>
    <SubTitle>Not sure where to begin? Let's chat.</SubTitle>

    <PricingCard>
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

      <Button primary style={{ width: "100%" }}>
        Book My Session
      </Button>
    </PricingCard>
  </Section>
);

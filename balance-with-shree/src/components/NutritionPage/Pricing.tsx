import { Check } from "lucide-react";
import { Button, PricingCard, Section, SectionTitle, SubTitle } from "./style";

export const NutritionPricing = () => (
  <Section id="pricing-section">
    {/* SECTION HEADING */}
    <SectionTitle>Start Your Journey</SectionTitle>
    <SubTitle>
      A simple first step towards balanced, sustainable health.
    </SubTitle>

    {/* PRICING CARD */}
    <PricingCard>
      <h3>Discovery Call</h3>

      <p style={{ color: "#aaa", marginTop: "8px" }}>
        30 Minutes • Online via Zoom / WhatsApp
      </p>

      <div className="price">
        <span>₹</span>300
      </div>

      <ul>
        <li>
          <Check size={16} color="#4A6741" />
          Dietary pattern analysis
        </li>
        <li>
          <Check size={16} color="#4A6741" />
          Goal-setting strategy
        </li>
        <li>
          <Check size={16} color="#4A6741" />
          Personal Q&amp;A session
        </li>
      </ul>

      <Button
        primary
        style={{ width: "100%", marginTop: "16px" }}
        onClick={() =>
          window.open(
            "https://wa.me/919999999999?text=Hi!%20I%27d%20like%20to%20book%20a%20Discovery%20Call%20session.",
            "_blank",
          )
        }
      >
        Book My Session
      </Button>
    </PricingCard>
  </Section>
);

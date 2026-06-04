import { Check } from "lucide-react";
import { Button as SharedButton } from "../Button";
import { buildWhatsAppUrl, contactMessages } from "../../data/contact";
import { PricingCard, Section, SectionTitle, SubTitle } from "./style";

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
        <span>₹</span>299
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

      <SharedButton
        href={buildWhatsAppUrl(contactMessages.nutritionDiscovery)}
        target="_blank"
        rel="noopener noreferrer"
        fullWidth
        size="lg"
        style={{ marginTop: "16px" }}
      >
        Book My Session
      </SharedButton>
    </PricingCard>
  </Section>
);

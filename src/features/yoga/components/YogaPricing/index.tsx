import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "../../../../shared/ui/Button";
import { buildWhatsAppUrl } from "../../../../shared/data/contact";
import {
  PricingSection,
  PricingHeader,
  SectionTitle,
  SectionBody,
  BillingToggle,
  BillingOption,
  BillingBadge,
  PricingGrid,
  PricingCard,
  PlanName,
  PlanPriceBlock,
  OriginalPrice,
  PlanPrice,
  PlanMeta,
  SessionChips,
  SessionChip,
  PlanButtonWrap,
  PlanFeatures,
  PlanFeature,
  PlanFeatureIcon,
} from "./styles";

const plans = [
  {
    id: "foundation",
    name: "Group Session Plan",
    monthly: 1500,
    quarterly: 1500 * 3,
    highlight: false,
    meta: {
      monthly: "Mon–Fri • Online / Offline",
      quarterly: "Mon–Fri • Online / Offline",
    },
    features: [
      "Hatha, Ashtanga & Vinyasa Flow Yoga",
      "Pranayama, Meditation & Breathwork",
      "Face Yoga (selected days)",
      "Weight loss or weight gain support",
      "Improved flexibility & strength",
      "Daily energy & overall wellness",
    ],
  },
  {
    id: "holistic",
    name: "Private Session",
    monthly: 6999,
    quarterly: 6999 * 3,
    highlight: true,
    features: [
      "One-on-one private sessions with complete personal attention",
      "Hatha, Ashtanga & Vinyasa Flow Yoga (customized for you)",
      "Pranayama, meditation & breathing techniques",
      "Face yoga on selected days",
      "Posture correction & proper movement guidance",
      "Goal-focused training",
      "Therapeutic / medical yoga support",
      "Optional nutrition guidance",
      "Continuous progress tracking",
    ],
  },
  {
    id: "prenatal",
    name: "Prenatal & Postnatal Care – Personalized One-on-One Support",
    monthly: 8000,
    quarterly: 8000 * 3,
    highlight: false,
    features: [
      "Trimester-wise yoga practices",
      "Safe posture correction & body alignment",
      "Pranayama & breathwork for relaxation & stamina",
      "Garbhasanskar (mantras, bonding & mindfulness)",
      "Nutritional guidance (optional detailed plans)",
      "Emotional wellness & stress support",
      "Postnatal recovery & core strengthening",
      "Fully personalized sessions",
      "Continuous progress tracking",
    ],
  },
  {
    id: "prenatal-group",
    name: "Prenatal & Postnatal Group Care",
    monthly: 2800,
    quarterly: 2800 * 3,
    highlight: false,
    meta: {
      monthly: "Small groups (2–3 mothers)",
      quarterly: "Small groups (2–3 mothers)",
    },
    features: [
      "Trimester-wise safe yoga practices",
      "Gentle posture & body alignment support",
      "Pranayama & breathing techniques for relaxation & stamina",
      "Garbhasanskar (mantras, bonding & mindfulness)",
      "Basic nutritional guidance for pregnancy & recovery",
      "Emotional well-being & stress management",
      "Postnatal recovery & core strengthening",
      "Personal attention within small groups",
    ],
  },
] as const;

const privateSessionOptions = [
  { sessions: 12, price: 6000 },
  { sessions: 16, price: 8000 },
  { sessions: 20, price: 10000 },
] as const;

const prenatalSessionOptions = [
  { sessions: 12, price: 5000 },
  { sessions: 16, price: 6500 },
  { sessions: 20, price: 8000 },
] as const;

type Billing = "monthly" | "quarterly";
type Plan = (typeof plans)[number];

export const YogaPricing = () => {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [selectedSessions, setSelectedSessions] = useState(12);
  const [selectedPrenatalSessions, setSelectedPrenatalSessions] = useState(12);

  const handleWhatsApp = (plan: Plan) => {
    let message = "";
    let finalPrice = 0;

    if (plan.id === "holistic") {
      const selectedOption = privateSessionOptions.find(
        (option) => option.sessions === selectedSessions,
      );
      finalPrice = selectedOption?.price || 0;
      message = `Hi! I'm interested in the ${plan.name}.\nSessions: ${selectedSessions}\nPrice: ₹${finalPrice}`;
    } else if (plan.id === "prenatal") {
      const selectedOption = prenatalSessionOptions.find(
        (option) => option.sessions === selectedPrenatalSessions,
      );
      finalPrice = selectedOption?.price || 0;
      message = `Hi! I'm interested in the ${plan.name}.\nSessions: ${selectedPrenatalSessions}\nPrice: ₹${finalPrice}`;
    } else {
      const monthlyPrice = plan.monthly;
      const quarterlyOriginal = monthlyPrice * 3;
      const quarterlyDiscounted = Math.round(quarterlyOriginal * 0.9);
      finalPrice = billing === "monthly" ? monthlyPrice : quarterlyDiscounted;
      message = `Hi! I'm interested in the ${plan.name}.\nBilling: ${billing}\nPrice: ₹${finalPrice}`;
    }

    window.open(buildWhatsAppUrl(message), "_blank");
  };

  return (
    <PricingSection>
      <PricingHeader>
        <SectionTitle>Choose Your Wellness Path</SectionTitle>
        <SectionBody>
          Simple, transparent pricing — switch to quarterly and save more.
        </SectionBody>
        <BillingToggle>
          <BillingOption
            type="button"
            $active={billing === "monthly"}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </BillingOption>
          <BillingOption
            type="button"
            $active={billing === "quarterly"}
            onClick={() => setBilling("quarterly")}
          >
            Quarterly
            <BillingBadge>Save 10%</BillingBadge>
          </BillingOption>
        </BillingToggle>
      </PricingHeader>

      <PricingGrid>
        {plans.map((plan) => {
          if (plan.id === "holistic") {
            const selectedOption = privateSessionOptions.find(
              (option) => option.sessions === selectedSessions,
            );
            const basePrice = selectedOption?.price || 0;
            const quarterlyOriginal = basePrice * 3;
            const quarterlyDiscounted = Math.round(quarterlyOriginal * 0.9);
            const displayPrice =
              billing === "monthly" ? basePrice : quarterlyDiscounted;

            return (
              <PricingCard key={plan.id} $highlight={plan.highlight}>
                <PlanName>{plan.name}</PlanName>
                <PlanPriceBlock>
                  {billing === "quarterly" ? (
                    <OriginalPrice>
                      ₹{quarterlyOriginal.toLocaleString("en-IN")}
                    </OriginalPrice>
                  ) : null}
                  <PlanPrice>
                    ₹{displayPrice.toLocaleString("en-IN")}
                    <span>
                      {billing === "monthly"
                        ? `${selectedSessions} sessions`
                        : `Total ${selectedSessions * 3} sessions`}
                    </span>
                  </PlanPrice>
                </PlanPriceBlock>

                <SessionChips role="radiogroup" aria-label="Private session options">
                  {privateSessionOptions.map((option) => (
                    <SessionChip
                      key={option.sessions}
                      type="button"
                      role="radio"
                      aria-checked={selectedSessions === option.sessions}
                      $active={selectedSessions === option.sessions}
                      onClick={() => setSelectedSessions(option.sessions)}
                    >
                      {option.sessions} Sessions
                    </SessionChip>
                  ))}
                </SessionChips>

                <PlanButtonWrap>
                  <Button
                    fullWidth
                    size="lg"
                    onClick={() => handleWhatsApp(plan)}
                  >
                    Begin Your Journey
                  </Button>
                </PlanButtonWrap>

                <PlanFeatures>
                  {plan.features.map((feature) => (
                    <PlanFeature key={feature}>
                      <PlanFeatureIcon>
                        <Check size={12} strokeWidth={2.4} />
                      </PlanFeatureIcon>
                      <span>{feature}</span>
                    </PlanFeature>
                  ))}
                </PlanFeatures>
              </PricingCard>
            );
          }

          if (plan.id === "prenatal") {
            const selectedOption = prenatalSessionOptions.find(
              (option) => option.sessions === selectedPrenatalSessions,
            );
            const basePrice = selectedOption?.price || 0;
            const quarterlyOriginal = basePrice * 3;
            const quarterlyDiscounted = Math.round(quarterlyOriginal * 0.9);
            const displayPrice =
              billing === "monthly" ? basePrice : quarterlyDiscounted;

            return (
              <PricingCard key={plan.id} $highlight={plan.highlight}>
                <PlanName>{plan.name}</PlanName>
                <PlanPriceBlock>
                  {billing === "quarterly" ? (
                    <OriginalPrice>
                      ₹{quarterlyOriginal.toLocaleString("en-IN")}
                    </OriginalPrice>
                  ) : null}
                  <PlanPrice>
                    ₹{displayPrice.toLocaleString("en-IN")}
                    <span>
                      {billing === "monthly"
                        ? `${selectedPrenatalSessions} sessions`
                        : `Total ${selectedPrenatalSessions * 3} sessions`}
                    </span>
                  </PlanPrice>
                </PlanPriceBlock>

                <SessionChips role="radiogroup" aria-label="Prenatal session options">
                  {prenatalSessionOptions.map((option) => (
                    <SessionChip
                      key={option.sessions}
                      type="button"
                      role="radio"
                      aria-checked={
                        selectedPrenatalSessions === option.sessions
                      }
                      $active={selectedPrenatalSessions === option.sessions}
                      onClick={() =>
                        setSelectedPrenatalSessions(option.sessions)
                      }
                    >
                      {option.sessions} Sessions
                    </SessionChip>
                  ))}
                </SessionChips>

                <PlanButtonWrap>
                  <Button
                    fullWidth
                    size="lg"
                    onClick={() => handleWhatsApp(plan)}
                  >
                    Begin Your Journey
                  </Button>
                </PlanButtonWrap>

                <PlanFeatures>
                  {plan.features.map((feature) => (
                    <PlanFeature key={feature}>
                      <PlanFeatureIcon>
                        <Check size={12} strokeWidth={2.4} />
                      </PlanFeatureIcon>
                      <span>{feature}</span>
                    </PlanFeature>
                  ))}
                </PlanFeatures>
              </PricingCard>
            );
          }

          const monthlyPrice = plan.monthly;
          const quarterlyOriginal = monthlyPrice * 3;
          const quarterlyDiscounted = Math.round(quarterlyOriginal * 0.9);
          const displayPrice =
            billing === "monthly" ? monthlyPrice : quarterlyDiscounted;
          const planMeta =
            plan.meta?.[billing as keyof typeof plan.meta] ??
            (billing === "monthly" ? "per month" : "per quarter");

          return (
            <PricingCard key={plan.id} $highlight={plan.highlight}>
              <PlanName>{plan.name}</PlanName>
              <PlanPriceBlock>
                {billing === "quarterly" ? (
                  <OriginalPrice>
                    ₹{quarterlyOriginal.toLocaleString("en-IN")}
                  </OriginalPrice>
                ) : null}
                <PlanPrice>
                  ₹{displayPrice.toLocaleString("en-IN")}
                  <span>
                    {billing === "monthly" ? "per month" : "per quarter"}
                  </span>
                </PlanPrice>
              </PlanPriceBlock>
              <PlanMeta>{planMeta}</PlanMeta>
              <PlanButtonWrap>
                <Button fullWidth size="lg" onClick={() => handleWhatsApp(plan)}>
                  Begin Your Journey
                </Button>
              </PlanButtonWrap>
              <PlanFeatures>
                {plan.features.map((feature) => (
                  <PlanFeature key={feature}>
                    <PlanFeatureIcon>
                      <Check size={12} strokeWidth={2.4} />
                    </PlanFeatureIcon>
                    <span>{feature}</span>
                  </PlanFeature>
                ))}
              </PlanFeatures>
            </PricingCard>
          );
        })}
      </PricingGrid>
    </PricingSection>
  );
};

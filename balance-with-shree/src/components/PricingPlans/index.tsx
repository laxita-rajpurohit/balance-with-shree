"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import {
  Section,
  Container,
  Header,
  Title,
  SubTitle,
  ToggleWrap,
  ToggleLabel,
  Toggle,
  PlansGrid,
  PlanCard,
  PlanName,
  Price,
  CTAButton,
  Features,
  Feature,
  HighlightBadge,
  SaveBadge,
  OriginalPrice,
  SessionOptions,
  SessionOption,
} from "./style";

const PLANS = [
  {
    id: "foundation",
    name: "Group Session ",
    monthly: 1500,
    quarterly: 1500 * 3,
    highlight: false,
    cta: "Begin Your Journey",
    features: [
      "Personalized Yoga Routine",
      "Weekly Guided Sessions",
      "Breathwork & Relaxation",
      "Basic Lifestyle Guidance",
      "WhatsApp Support",
    ],
  },
  {
    id: "holistic",
    name: "Private Session ",
    monthly: 6999,
    quarterly: 6999 * 3,
    highlight: true,
    cta: "Start Transformation",
    features: [
      "Everything in Foundation",
      "Therapeutic Yoga Sessions",
      "Ayurveda Lifestyle Mapping",
      "Nutrition Guidance",
      "Daily Accountability",
      "Priority 1:1 Support",
    ],
  },
  {
    id: "prenatal",
    name: "Prenatal & Postnatal Plan",
    monthly: 8000,
    quarterly: 8000 * 3,
    highlight: false,
    cta: "Start Gentle Practice",
    features: [
      "Safe Prenatal Yoga Practice",
      "Postnatal Recovery Sessions",
      "Breathwork for Relaxation",
      "Pelvic Floor Awareness",
      "Gentle Strength Building",
    ],
  },
];

const PRIVATE_SESSION_OPTIONS = [
  { sessions: 12, price: 6000 },
  { sessions: 16, price: 8000 },
  { sessions: 20, price: 10000 },
];

export default function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "quarterly">("monthly");
  const [selectedSessions, setSelectedSessions] = useState(12);
  const handleWhatsApp = (plan: any) => {
    let message = "";
    let finalPrice = 0;

    // PRIVATE SESSION PLAN
    if (plan.id === "holistic") {
      const selectedOption = PRIVATE_SESSION_OPTIONS.find(
        (o) => o.sessions === selectedSessions,
      );

      const basePrice = selectedOption?.price || 0;
      const quarterlyOriginal = basePrice * 3;
      const quarterlyDiscounted = Math.round(quarterlyOriginal * 0.9);

      finalPrice = billing === "monthly" ? basePrice : quarterlyDiscounted;

      message = `Hi! I'm interested in the ${plan.name}.
Billing: ${billing === "monthly" ? "Monthly Plan" : "Quarterly Plan"}

Sessions: ${billing === "monthly" ? selectedSessions : selectedSessions * 3}
Price: ₹${finalPrice}`;
    }

    // ALL OTHER PLANS
    else {
      const monthlyPrice = plan.monthly;
      const quarterlyOriginal = monthlyPrice * 3;
      const quarterlyDiscounted = Math.round(quarterlyOriginal * 0.9);

      finalPrice = billing === "monthly" ? monthlyPrice : quarterlyDiscounted;

      message = `Hi! I'm interested in the ${plan.name}.
Billing: ${billing}
Price: ₹${finalPrice}`;
    }

    window.open(
      `https://wa.me/918087048659?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <Section>
      <Container>
        <Header>
          <Title>Choose Your Wellness Path</Title>
          <SubTitle>
            Simple, transparent pricing — switch to annual and save more.
          </SubTitle>

          {/* 🔁 TOGGLE */}
          <ToggleWrap>
            <ToggleLabel $active={billing === "monthly"}>Monthly</ToggleLabel>

            <Toggle
              $active={billing === "quarterly"}
              onClick={() =>
                setBilling(billing === "monthly" ? "quarterly" : "monthly")
              }
            />

            <ToggleLabel $active={billing === "quarterly"}>
              Quarterly
              <SaveBadge>Save 10%</SaveBadge>
            </ToggleLabel>
          </ToggleWrap>
        </Header>

        <PlansGrid>
          {PLANS.map((plan) => {
            const monthlyPrice = plan.monthly;
            const quarterlyOriginal = plan.monthly * 3;
            const quarterlyDiscounted = Math.round(quarterlyOriginal * 0.9);

            const price =
              billing === "monthly" ? monthlyPrice : quarterlyDiscounted;

            return (
              <PlanCard key={plan.id} $highlight={plan.highlight}>
                <PlanName>{plan.name}</PlanName>

                {/* GROUP PLAN PRICE */}
                {plan.id !== "holistic" && (
                  <Price>
                    {billing === "quarterly" && (
                      <OriginalPrice>
                        ₹{quarterlyOriginal.toLocaleString("en-IN")}
                      </OriginalPrice>
                    )}
                    ₹{price.toLocaleString("en-IN")}
                    <span>
                      {billing === "monthly" ? "per month" : "per quarter"}
                    </span>
                  </Price>
                )}

                {/* PRIVATE SESSION PLAN */}
                {plan.id === "holistic" && (
                  <>
                    {(() => {
                      const selectedOption = PRIVATE_SESSION_OPTIONS.find(
                        (o) => o.sessions === selectedSessions,
                      );

                      const basePrice = selectedOption?.price || 0;
                      const quarterlyOriginal = basePrice * 3;
                      const quarterlyDiscounted = Math.round(
                        quarterlyOriginal * 0.9,
                      );

                      const displayPrice =
                        billing === "monthly" ? basePrice : quarterlyDiscounted;

                      return (
                        <>
                          <Price>
                            {billing === "quarterly" && (
                              <OriginalPrice>
                                ₹{quarterlyOriginal.toLocaleString("en-IN")}
                              </OriginalPrice>
                            )}
                            ₹{displayPrice.toLocaleString("en-IN")}
                            <span>
                              {billing === "monthly"
                                ? `${selectedSessions} sessions`
                                : `Total ${selectedSessions * 3} sessions`}
                            </span>
                          </Price>

                          <SessionOptions>
                            {PRIVATE_SESSION_OPTIONS.map((option) => (
                              <SessionOption key={option.sessions}>
                                <input
                                  type="radio"
                                  checked={selectedSessions === option.sessions}
                                  onChange={() =>
                                    setSelectedSessions(option.sessions)
                                  }
                                />
                                {option.sessions} Sessions
                              </SessionOption>
                            ))}
                          </SessionOptions>
                        </>
                      );
                    })()}
                  </>
                )}

                <CTAButton onClick={() => handleWhatsApp(plan)}>
                  Begin Your Journey
                </CTAButton>

                <Features>
                  {plan.features.map((feature) => (
                    <Feature key={feature}>
                      <Check size={16} />
                      {feature}
                    </Feature>
                  ))}
                </Features>
              </PlanCard>
            );
          })}
        </PlansGrid>
      </Container>
    </Section>
  );
}

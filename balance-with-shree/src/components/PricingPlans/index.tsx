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
} from "./style";

const PLANS = [
  {
    id: "foundation",
    name: "Group Session Plan",
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
    name: "Holistic Transformation",
    monthly: 6999,
    quarterly: 6999 * 10,
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
];

export default function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "quarterly">("monthly");

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
            const price = billing === "monthly" ? plan.monthly : plan.quarterly;

            return (
              <PlanCard key={plan.id} $highlight={plan.highlight}>
                {plan.highlight && <HighlightBadge>Most Chosen</HighlightBadge>}

                <PlanName>{plan.name}</PlanName>

                <Price>
                  ₹{price.toLocaleString("en-IN")}
                  <span>
                    {billing === "monthly" ? "per month" : "per quarterly "}
                  </span>
                </Price>

                <CTAButton
                  onClick={() =>
                    window.open(
                      `https://wa.me/919999999999?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan.`,
                      "_blank",
                    )
                  }
                >
                  {plan.cta}
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

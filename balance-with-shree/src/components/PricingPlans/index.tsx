"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { buildWhatsAppUrl } from "../../data/contact";
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
  SaveBadge,
  OriginalPrice,
  SessionOptions,
  SessionOption,
} from "./style";

const PLANS = [
  {
    id: "foundation",
    name: "Group Session Plan",
    monthly: 1500,
    quarterly: 1500 * 3,
    highlight: false,
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
];

const PRIVATE_SESSION_OPTIONS = [
  { sessions: 12, price: 6000 },
  { sessions: 16, price: 8000 },
  { sessions: 20, price: 10000 },
];

const PRENATAL_SESSION_OPTIONS = [
  { sessions: 12, price: 5000 },
  { sessions: 16, price: 6500 },
  { sessions: 20, price: 8000 },
];

type Plan = (typeof PLANS)[number];

export default function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "quarterly">("monthly");
  const [selectedSessions, setSelectedSessions] = useState(12);
  const [selectedPrenatalSessions, setSelectedPrenatalSessions] = useState(12);

  const handleWhatsApp = (plan: Plan) => {
    let message = "";
    let finalPrice = 0;

    if (plan.id === "holistic") {
      const selectedOption = PRIVATE_SESSION_OPTIONS.find(
        (o) => o.sessions === selectedSessions,
      );

      const basePrice = selectedOption?.price || 0;
      finalPrice = basePrice;

      message = `Hi! I'm interested in the ${plan.name}.
Sessions: ${selectedSessions}
Price: ₹${finalPrice}`;
    } else if (plan.id === "prenatal") {
      const selectedOption = PRENATAL_SESSION_OPTIONS.find(
        (o) => o.sessions === selectedPrenatalSessions,
      );

      const basePrice = selectedOption?.price || 0;
      finalPrice = basePrice;

      message = `Hi! I'm interested in the ${plan.name}.
Sessions: ${selectedPrenatalSessions}
Price: ₹${finalPrice}`;
    } else {
      const monthlyPrice = plan.monthly;
      const quarterlyOriginal = monthlyPrice * 3;
      const quarterlyDiscounted = Math.round(quarterlyOriginal * 0.9);

      finalPrice = billing === "monthly" ? monthlyPrice : quarterlyDiscounted;

      message = `Hi! I'm interested in the ${plan.name}.
Billing: ${billing}
Price: ₹${finalPrice}`;
    }

    window.open(buildWhatsAppUrl(message), "_blank");
  };

  return (
    <Section>
      <Container>
        <Header>
          <Title>Choose Your Wellness Path</Title>
          <SubTitle>
            Simple, transparent pricing — switch to quarterly and save more.
          </SubTitle>

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

                {/* NORMAL PLANS */}
                {plan.id !== "holistic" && plan.id !== "prenatal" && (
                  <>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "6px",
                      }}
                    >
                      <Price>
                        {billing === "quarterly" && (
                          <OriginalPrice>
                            ₹{quarterlyOriginal.toLocaleString("en-IN")}
                          </OriginalPrice>
                        )}
                        ₹{price.toLocaleString("en-IN")}
                      </Price>

                      {plan.id === "foundation" && (
                        <div style={{ fontSize: "14px", color: "#777" }}>
                          Mon–Fri • Online / Offline
                        </div>
                      )}

                      {plan.id === "prenatal-group" && (
                        <div style={{ fontSize: "14px", color: "#777" }}>
                          Small groups (2–3 mothers)
                        </div>
                      )}
                    </div>

                    <span style={{ fontSize: "13px", color: "#888" }}>
                      {billing === "monthly" ? "per month" : "per quarter"}
                    </span>
                  </>
                )}

                {/* PRIVATE SESSION */}
                {plan.id === "holistic" &&
                  (() => {
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

                {/* PRENATAL PRIVATE SESSION */}
                {plan.id === "prenatal" &&
                  (() => {
                    const selectedOption = PRENATAL_SESSION_OPTIONS.find(
                      (o) => o.sessions === selectedPrenatalSessions,
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
                              ? `${selectedPrenatalSessions} sessions`
                              : `Total ${selectedPrenatalSessions * 3} sessions`}
                          </span>
                        </Price>

                        <SessionOptions>
                          {PRENATAL_SESSION_OPTIONS.map((option) => (
                            <SessionOption key={option.sessions}>
                              <input
                                type="radio"
                                checked={
                                  selectedPrenatalSessions === option.sessions
                                }
                                onChange={() =>
                                  setSelectedPrenatalSessions(option.sessions)
                                }
                              />
                              {option.sessions} Sessions
                            </SessionOption>
                          ))}
                        </SessionOptions>
                      </>
                    );
                  })()}

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

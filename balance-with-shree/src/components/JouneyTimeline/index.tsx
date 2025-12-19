// JourneyTimeline.tsx
import React from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer"; // <-- NEW
import self1 from "../../assets/self1.jpeg";
import self2 from "../../assets/self2.jpeg";
import self3 from "../../assets/self3.jpeg";

const TimelineWrapper = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 80px auto;
  padding: 0 24px;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 56px;
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: #dde6e9;
  transform: translateX(-50%);
`;

const Dot = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #96c7b5;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 6px rgba(150, 199, 181, 0.25);
`;

const DotWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardRow = styled.div<{ align: "left" | "right" }>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
  margin-bottom: 80px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: left;
  }

  & > div:nth-child(1) {
    order: ${({ align }) => (align === "left" ? 1 : 2)};
    margin-left: ${({ align }) => (align === "left" ? "25%" : 0)};
    margin-right: ${({ align }) => (align === "left" ? "0" : "25%")};
  }
  & > div:nth-child(2) {
    order: ${({ align }) => (align === "left" ? 2 : 1)};
    margin-right: ${({ align }) => (align === "right" ? "0" : "25%")};
  }
`;

const ImageContainer = styled.div`
  width: 360px;
  height: 240px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
  transform-origin: center;
  transition: transform 300ms ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 190px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextBlock = styled.div`
  max-width: 420px;
  color: #4a4a4a;
  line-height: 1.6;
  font-size: 16px;
`;

const Strong = styled.span`
  font-weight: 700;
`;

const fadeInLeft = keyframes`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const fadeInRight = keyframes`
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
`;

// now depends on "visible"
const AnimatedSide = styled.div<{
  side: "left" | "right";
  visible: boolean;
}>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  animation: ${({ visible, side }) =>
      visible ? (side === "left" ? fadeInLeft : fadeInRight) : "none"}
    700ms ease-out both;
  transform: ${({ visible, side }) =>
    visible
      ? "translateX(0)"
      : side === "left"
      ? "translateX(-40px)"
      : "translateX(40px)"};
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
`;

type JourneyStep = {
  id: number;
  side: "left" | "right";
  image: string;
  alt: string;
  text: React.ReactNode;
};

const steps: JourneyStep[] = [
  {
    id: 1,
    side: "left",
    image: self1,
    alt: "Journey step 1",
    text: (
      <>
        At the age of <Strong>13</Strong>, Subah was <Strong>diagnosed</Strong>{" "}
        with multiple health issues and prescribed numerous medications. After
        years of <Strong>taking medication</Strong>, the problems persisted and
        she thought that this was how her life was going to be.
      </>
    ),
  },
  {
    id: 2,
    side: "right",
    image: self2,
    alt: "Journey step 2",
    text: (
      <>
        At <Strong>17</Strong>, a <Strong>ray of hope appeared</Strong> when her
        father took her to a 4‑day natural healing camp. Though the lifestyle
        was unfamiliar, she decided to give it a try, as nothing else had
        worked.
      </>
    ),
  },
  {
    id: 3,
    side: "left",
    image: self3,
    alt: "Journey step 3",
    text: (
      <>
        Under the guidance of her father, she dropped out of school in class 11
        and embarked on a journey to learn more about this{" "}
        <Strong>natural healing science</Strong>. She immersed herself in books,
        workshops and camps, determined to understand how food and lifestyle
        could transform her health.
      </>
    ),
  },
  {
    id: 4,
    side: "right",
    image: self2,
    alt: "Journey step 4",
    text: (
      <>
        Slowly, her confidence began to <Strong>return</Strong>. Friends and
        family noticed the changes first – clearer skin, better energy and a
        calm, grounded presence. For the first time in years, she felt hopeful
        that a balanced lifestyle, rather than medication alone, could support
        her body.
      </>
    ),
  },
  {
    id: 5,
    side: "left",
    image: self1,
    alt: "Journey step 5",
    text: (
      <>
        As she continued to experiment with plant-based meals, daily movement
        and simple mindfulness practices, her relationship with her body{" "}
        <Strong>softened</Strong>. The focus shifted from fixing symptoms to
        nurturing herself, one small conscious choice at a time, and that shift
        changed everything.
      </>
    ),
  },
];

// row component that observes itself
const JourneyRow: React.FC<{ step: JourneyStep }> = ({ step }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // 20% of row visible before animating [web:23][web:29]
  });

  return (
    <CardRow ref={ref} align={step.side}>
      {/* image side */}
      <AnimatedSide side={step.side} visible={inView}>
        <ImageContainer>
          <Image src={step.image} alt={step.alt} />
        </ImageContainer>
      </AnimatedSide>

      {/* text side */}
      <AnimatedSide
        side={step.side === "left" ? "right" : "left"}
        visible={inView}
      >
        <TextBlock>{step.text}</TextBlock>
      </AnimatedSide>

      <DotWrapper>
        <Dot />
      </DotWrapper>
    </CardRow>
  );
};

const JourneyTimeline: React.FC = () => {
  return (
    <TimelineWrapper>
      <Heading>The journey through a timeline:</Heading>

      <div style={{ position: "relative" }}>
        <Line />

        {steps.map((step) => (
          <JourneyRow key={step.id} step={step} />
        ))}
      </div>
    </TimelineWrapper>
  );
};

export default JourneyTimeline;

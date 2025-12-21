// JourneyTimeline.tsx
import React from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";
import self1 from "../../assets/self1.jpeg";
import self2 from "../../assets/self2.jpeg";
import self3 from "../../assets/self3.jpeg";

/* =======================
   STYLES
======================= */

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

const TimelineContainer = styled.div`
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-left: 2px dashed #96c7b5;

  @media (max-width: 768px) {
    left: 24px;
    transform: none;
  }
`;

const FloatingDot = styled.div<{ y: number }>`
  position: absolute;
  left: 50%;
  transform: translate(-50%, ${({ y }) => y}px);
  z-index: 10;

  @media (max-width: 768px) {
    left: 24px;
  }
`;

const Dot = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #96c7b5;
  box-shadow: 0 0 0 6px rgba(150, 199, 181, 0.25);
`;

const CardRow = styled.div<{ align: "left" | "right" }>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
  margin-bottom: 80px;
  align-items: center;

  & > div:nth-child(1) {
    order: ${({ align }) => (align === "left" ? 1 : 2)};
    margin-left: ${({ align }) => (align === "left" ? "25%" : 0)};
    margin-right: ${({ align }) => (align === "left" ? "0" : "25%")};
  }

  & > div:nth-child(2) {
    order: ${({ align }) => (align === "left" ? 2 : 1)};
    margin-right: ${({ align }) => (align === "right" ? "0" : "25%")};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding-left: 64px;

    & > div {
      order: unset;
      margin: 0;
    }
    & > div:nth-child(1) {
      margin: 0;
    }
  }
`;

const ImageContainer = styled.div`
  width: 360px;
  height: 240px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
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

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: justify;
  }
`;

const Strong = styled.span`
  font-weight: 700;
`;

/* =======================
   ANIMATIONS
======================= */

const fadeInLeft = keyframes`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const fadeInRight = keyframes`
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const AnimatedSide = styled.div<{
  side: "left" | "right";
  visible: boolean;
}>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  animation: ${({ visible, side }) =>
      visible ? (side === "left" ? fadeInLeft : fadeInRight) : "none"}
    700ms ease-out both;

  @media (max-width: 768px) {
    animation: none;
    transform: ${({ visible }) =>
      visible ? "translateY(0)" : "translateY(24px)"};
    transition: transform 0.6s ease-out;
  }
`;

/* =======================
   DATA
======================= */

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
        with multiple health issues and prescribed numerous medications.
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
        father took her to a natural healing camp.
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
        She immersed herself in books, workshops and camps, determined to
        understand how food and lifestyle could transform her health.
      </>
    ),
  },
];

/* =======================
   ROW
======================= */

const JourneyRow: React.FC<{ step: JourneyStep }> = ({ step }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <CardRow ref={ref} align={step.side}>
      <AnimatedSide side={step.side} visible={inView}>
        <ImageContainer>
          <Image src={step.image} alt={step.alt} />
        </ImageContainer>
      </AnimatedSide>

      <AnimatedSide
        side={step.side === "left" ? "right" : "left"}
        visible={inView}
      >
        <TextBlock>{step.text}</TextBlock>
      </AnimatedSide>
    </CardRow>
  );
};

/* =======================
   MAIN COMPONENT
======================= */

const JourneyTimeline: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const rowRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const [dotY, setDotY] = React.useState(0);

  const dotYRef = React.useRef(0);
  const targetYRef = React.useRef(0);
  const rafRef = React.useRef<number | null>(null);

  /* Observe rows to update target position */
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            const row = rowRefs.current[index];
            const container = containerRef.current;
            if (!row || !container) return;

            const rowRect = row.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            targetYRef.current =
              rowRect.top - containerRect.top + rowRect.height / 2;
          }
        });
      },
      { threshold: 0.5 }
    );

    rowRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Smooth animation loop */
  React.useEffect(() => {
    const animate = () => {
      dotYRef.current += (targetYRef.current - dotYRef.current) * 0.08;

      setDotY(dotYRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <TimelineWrapper>
      <Heading>The journey through a timeline:</Heading>

      <TimelineContainer ref={containerRef}>
        <Line />

        <FloatingDot y={dotY}>
          <Dot />
        </FloatingDot>

        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => (rowRefs.current[index] = el)}
            data-index={index}
          >
            <JourneyRow step={step} />
          </div>
        ))}
      </TimelineContainer>
    </TimelineWrapper>
  );
};

export default JourneyTimeline;

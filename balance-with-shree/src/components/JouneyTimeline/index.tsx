// JourneyTimeline.tsx
import React from "react";
import { useInView } from "react-intersection-observer";
import self1 from "../../assets/self1.jpeg";
import self2 from "../../assets/self2.jpeg";
import self3 from "../../assets/self3.jpeg";
import {
  AnimatedSide,
  CardRow,
  Dot,
  FloatingDot,
  Heading,
  Image,
  ImageContainer,
  Line,
  TextBlock,
  TimelineContainer,
  TimelineWrapper,
} from "./style";

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
    alt: "Early journey",
    text: (
      <>
        In 2020, I found myself at a turning point—physically weak, mentally
        unsettled, and disconnected from routine. I weighed just 39 kgs, with no
        structure or discipline.
      </>
    ),
  },
  {
    id: 2,
    side: "right",
    image: self2,
    alt: "Self transformation",
    text: (
      <>
        Introducing yoga and mindful eating changed everything. Slowly, my body
        grew stronger and my mind calmer. I moved from survival to stability.
      </>
    ),
  },
  {
    id: 3,
    side: "left",
    image: self3,
    alt: "Purpose & vision",
    text: (
      <>
        That personal transformation revealed my purpose—to help others find
        balance through movement, nutrition, and mindful living.
      </>
    ),
  },
];

/* =======================
   ROW COMPONENT
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
        <TextBlock>
          <span className="timeline-label"></span>
          {step.text}
        </TextBlock>
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
  const [activeIndex] = React.useState(0);

  const dotYRef = React.useRef(0);
  const targetYRef = React.useRef(0);
  const rafRef = React.useRef<number | null>(null);
  const [dotY, setDotY] = React.useState(0);

  /* IntersectionObserver to track active row */
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

    rowRefs.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  /* Smooth dot animation */
  React.useEffect(() => {
    const animate = () => {
      dotYRef.current += (targetYRef.current - dotYRef.current) * 0.08;
      setDotY(dotYRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <TimelineWrapper>
      <Heading>The journey through a timeline:</Heading>

      <TimelineContainer ref={containerRef}>
        <Line />
        <FloatingDot y={dotY}>
          <Dot
            className={
              activeIndex === undefined ? "" : activeIndex === 0 ? "active" : ""
            }
          />
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

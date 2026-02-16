// JourneyTimeline.tsx
import React from "react";
import { useInView } from "react-intersection-observer";
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
  label: string;
};

const steps: JourneyStep[] = [
  {
    id: 1,
    side: "left",
    image:
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263597/self1_uguqlb.jpg",
    alt: "Where it all began (2019–2020)",
    label: "The Beginning — Ignoring My Health",
    text: (
      <>
        Back in 2019–20, I was severely underweight, weighing just 39 kg. I was
        into fitness or dance, and I wasn’t mindful about what or how I was
        eating. My immunity was low, my digestion was constantly disturbed, and
        I ignored my body’s signals for a long time.
      </>
    ),
  },
  {
    id: 2,
    side: "right",
    image:
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263597/self2_e2xknl.jpg",
    alt: "The turning point – COVID & health breakdown",
    label: "The Wake-Up Call — COVID & Hyperacidity",
    text: (
      <>
        During the COVID phase, my health worsened. I suffered from frequent
        stomach issues, acid reflux, and was eventually diagnosed with
        hyperacidity. At one point, even breathing felt difficult. Doctors
        clearly told me that my eating habits, sleep cycle, and lifestyle were
        the root cause.
      </>
    ),
  },
  {
    id: 3,
    side: "left",
    image:
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771265496/self3_ml3idz.jpg",
    alt: "Awareness → Action",
    label: "Choosing Awareness Over Neglect",
    text: (
      <>
        Interestingly, I was already studying Nutrition & Dietetics, but this
        experience made everything real. I realized that knowing nutrition is
        one thing, but living it mindfully is another.
      </>
    ),
  },
  {
    id: 4,
    side: "right",
    image:
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263597/self1_uguqlb.jpg",
    alt: "Healing through belief, food & movement",
    label: "Healing Through Food, Yoga & Belief",
    text: (
      <>
        I began making small, consistent changes — eating with awareness,
        restoring my sleep cycle, introducing yoga and gentle movement, and
        practicing kinder self-talk and body awareness. Slowly, I shifted from
        fighting my body to trusting it. Over time, my weight increased from 39
        kg to 45 kg, my digestion improved, and my energy returned — something
        years of random eating and irregular living had never given me.
      </>
    ),
  },
  {
    id: 5,
    side: "left",
    image:
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263597/self2_e2xknl.jpg",
    alt: "From self-healing to serving others",
    label: "Turning My Journey into My Purpose",
    text: (
      <>
        What began as self-healing gradually became my purpose. This journey
        taught me that health is not created through extremes, punishment, or
        quick fixes — but through consistency, awareness, and compassion. Today,
        I help others build a balanced relationship with food, movement, and
        their bodies, in a way that feels sustainable and deeply personal.
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
          <div className="timeline-label">{step.label}</div>
          <div>{step.text}</div>
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
      { threshold: 0.5 },
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

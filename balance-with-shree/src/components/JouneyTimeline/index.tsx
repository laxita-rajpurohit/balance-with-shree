import React from "react";
import { useInView } from "react-intersection-observer";
import { journeyTimelineItems, type JourneyTimelineItem } from "../../data/journeyTimeline";
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

const JourneyRow: React.FC<{ step: JourneyTimelineItem }> = ({ step }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <CardRow ref={ref} $align={step.side}>
      <AnimatedSide $side={step.side} $visible={inView}>
        <ImageContainer>
          <Image
            src={step.image}
            alt={step.alt}
            loading="lazy"
            decoding="async"
          />
        </ImageContainer>
      </AnimatedSide>

      <AnimatedSide
        $side={step.side === "left" ? "right" : "left"}
        $visible={inView}
      >
        <TextBlock>
          <div className="timeline-label">{step.label}</div>
          <div>
            {step.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
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
        <FloatingDot $y={dotY}>
          <Dot
            className={
              activeIndex === undefined ? "" : activeIndex === 0 ? "active" : ""
            }
          />
        </FloatingDot>

        {journeyTimelineItems.map((step, index) => (
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

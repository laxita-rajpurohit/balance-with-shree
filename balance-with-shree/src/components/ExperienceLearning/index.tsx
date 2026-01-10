import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Section,
  Container,
  Label,
  Title,
  Divider,
  Carousel,
  Card,
  CertImage,
  CertTitle,
  Progress,
  Dot,
} from "./style";

/* =====================
   DATA
===================== */
const BASE_CERTIFICATIONS = [
  {
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop",
    title: "Certified Yoga Therapist",
    variant: "yoga",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    title: "Clinical Nutrition Certification",
    variant: "nutrition",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1600&auto=format&fit=crop",
    title: "Ayurveda Foundations Program",
    variant: "ayurveda",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop",
    title: "200-Hour Yoga Teacher Training",
    variant: "training",
  },
];

const CERTIFICATIONS = [...BASE_CERTIFICATIONS, ...BASE_CERTIFICATIONS];

export default function ExperienceLearning() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const BASE_LEN = BASE_CERTIFICATIONS.length;
  const TOTAL = CERTIFICATIONS.length;

  // start from middle copy (for seamless loop)
  const [index, setIndex] = useState(BASE_LEN);

  // this pauses auto-scroll while user is interacting
  const [paused, setPaused] = useState(false);

  // swipe/drag helpers
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [mouseDownX, setMouseDownX] = useState<number | null>(null);
  const SWIPE_THRESHOLD = 45;

  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  /* =====================
     HELPERS
  ===================== */
  const clearAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const clearResumeTimer = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = null;
  };

  // pause now, then resume auto after delay
  const pauseAndResumeLater = (delay = 2000) => {
    setPaused(true);
    clearResumeTimer();
    resumeTimeoutRef.current = setTimeout(() => {
      setPaused(false);
    }, delay);
  };

  const goNext = () => setIndex((prev) => prev + 1);
  const goPrev = () => setIndex((prev) => Math.max(0, prev - 1));

  /* =====================
     AUTO ROTATE
     - runs only if not paused AND section is in view
  ===================== */
  useEffect(() => {
    if (paused || !inView) {
      clearAuto();
      return;
    }

    clearAuto();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearAuto();
  }, [paused, inView]);

  /* =====================
     SCROLL TO ACTIVE + INFINITE RESET (NO JUMP)
  ===================== */
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = carousel.children;
    const current = cards[index] as HTMLElement | undefined;

    if (current) {
      carousel.scrollTo({
        left:
          current.offsetLeft -
          carousel.offsetWidth / 2 +
          current.offsetWidth / 2,
        behavior: "smooth",
      });
    }

    // reached end of duplicated list -> snap back to middle copy silently
    if (index >= TOTAL - 1) {
      clearAuto();

      const snapToIndex = BASE_LEN;
      setTimeout(() => {
        const snapEl = cards[snapToIndex] as HTMLElement | undefined;
        if (!snapEl) return;

        carousel.scrollTo({
          left:
            snapEl.offsetLeft -
            carousel.offsetWidth / 2 +
            snapEl.offsetWidth / 2,
          behavior: "auto",
        });

        setIndex(snapToIndex);
      }, 850);
    }

    // safety far-left -> snap to middle copy
    if (index <= 0) {
      clearAuto();

      const snapToIndex = BASE_LEN;
      const snapEl = cards[snapToIndex] as HTMLElement | undefined;
      if (!snapEl) return;

      carousel.scrollTo({
        left:
          snapEl.offsetLeft - carousel.offsetWidth / 2 + snapEl.offsetWidth / 2,
        behavior: "auto",
      });

      setIndex(snapToIndex);
    }
  }, [index, BASE_LEN, TOTAL]);

  /* dots index */
  const logicalIndex = ((index % BASE_LEN) + BASE_LEN) % BASE_LEN;

  const jumpToSlide = (logicalIdx: number) => {
    pauseAndResumeLater(2500);
    setIndex(BASE_LEN + logicalIdx);
  };

  /* =====================
     TOUCH SWIPE (slides + auto resumes)
  ===================== */
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    pauseAndResumeLater(2500);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX == null) return;
    const diff = e.touches[0].clientX - touchStartX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff < 0) goNext();
      else goPrev();
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  /* =====================
     MOUSE DRAG SWIPE (desktop) + auto resumes
  ===================== */
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    pauseAndResumeLater(2500);
    setMouseDownX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mouseDownX == null) return;

    const diff = e.clientX - mouseDownX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff < 0) goNext();
      else goPrev();
      setMouseDownX(null);
    }
  };

  const handleMouseUp = () => {
    setMouseDownX(null);
  };

  // cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearAuto();
      clearResumeTimer();
    };
  }, []);

  return (
    <Section ref={ref} className={inView ? "visible" : ""}>
      <Container>
        <Label>Experience & Learning</Label>
        <Title>Professional Certifications</Title>
        <Divider />

        <Carousel
          ref={carouselRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {CERTIFICATIONS.map((item, i) => (
            <Card
              key={i}
              className={`${item.variant} ${i === index ? "active" : ""}`}
            >
              <CertImage
                src={item.image}
                alt={item.title}
                className={item.variant}
              />
              <CertTitle>{item.title}</CertTitle>
            </Card>
          ))}
        </Carousel>

        <Progress>
          {BASE_CERTIFICATIONS.map((_, i) => (
            <Dot
              key={i}
              $active={i === logicalIndex}
              onClick={() => jumpToSlide(i)}
            />
          ))}
        </Progress>
      </Container>
    </Section>
  );
}

import React, { useEffect, useMemo, useRef, useState } from "react";
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

export default function ExperienceLearning() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const snapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const BASE_LEN = BASE_CERTIFICATIONS.length;

  // ✅ 3 copies prevents “end boundary” half-card issue
  const CERTIFICATIONS = useMemo(
    () => [
      ...BASE_CERTIFICATIONS,
      ...BASE_CERTIFICATIONS,
      ...BASE_CERTIFICATIONS,
    ],
    []
  );

  const MIDDLE_START = BASE_LEN; // start at middle copy first element

  const [index, setIndex] = useState(MIDDLE_START);
  const [paused, setPaused] = useState(false);

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

  const clearSnapTimer = () => {
    if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
    snapTimeoutRef.current = null;
  };

  const pauseAndResumeLater = (delay = 2000) => {
    setPaused(true);
    clearResumeTimer();
    resumeTimeoutRef.current = setTimeout(() => setPaused(false), delay);
  };

  const goNext = () => setIndex((prev) => prev + 1);
  const goPrev = () => setIndex((prev) => prev - 1);

  const scrollToIndex = (i: number, behavior: ScrollBehavior) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const el = carousel.children[i] as HTMLElement | undefined;
    if (!el) return;

    carousel.scrollTo({
      left: el.offsetLeft - carousel.offsetWidth / 2 + el.offsetWidth / 2,
      behavior,
    });
  };

  /* =====================
     AUTO ROTATE
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
     SCROLL + PERFECT INFINITE LOOP (NO HALF CARD)
  ===================== */
  useEffect(() => {
    // smooth scroll to active
    scrollToIndex(index, "smooth");

    // After the smooth animation, if we moved into left/right copy,
    // snap back to the same logical slide in the middle copy.
    clearSnapTimer();
    snapTimeoutRef.current = setTimeout(() => {
      const logical = ((index % BASE_LEN) + BASE_LEN) % BASE_LEN;
      const middleIndex = MIDDLE_START + logical;

      // If already in middle region, do nothing
      if (index === middleIndex) return;

      // snap silently (no animation)
      scrollToIndex(middleIndex, "auto");
      setIndex(middleIndex);
    }, 850); // should match your smooth feel

    return () => clearSnapTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const logicalIndex = ((index % BASE_LEN) + BASE_LEN) % BASE_LEN;

  const jumpToSlide = (logicalIdx: number) => {
    pauseAndResumeLater(2500);
    setIndex(MIDDLE_START + logicalIdx);
  };

  /* =====================
     TOUCH SWIPE
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

  const handleTouchEnd = () => setTouchStartX(null);

  /* =====================
     MOUSE DRAG SWIPE (DESKTOP)
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

  const handleMouseUp = () => setMouseDownX(null);

  /* cleanup */
  useEffect(() => {
    return () => {
      clearAuto();
      clearResumeTimer();
      clearSnapTimer();
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

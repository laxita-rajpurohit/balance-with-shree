import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";
import {
  Section,
  Container,
  Label,
  Title,
  Divider,
  CarouselViewport,
  CarouselTrack,
  Card,
  CertImage,
  CertTitle,
  Progress,
  Dot,
} from "./style";

const BASE = [
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
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const baseLen = BASE.length;

  // ✅ 3 copies (left, middle, right)
  const items = useMemo(() => [...BASE, ...BASE, ...BASE], []);
  const middleStart = baseLen; // first element of middle copy

  const [index, setIndex] = useState(middleStart);
  const [paused, setPaused] = useState(false);

  // animation toggle to do invisible “teleport” without blink
  const [animate, setAnimate] = useState(true);

  // viewport width = slide width (since card is 100%)
  const [slideW, setSlideW] = useState(0);

  // swipe
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [mouseDownX, setMouseDownX] = useState<number | null>(null);
  const SWIPE_THRESHOLD = 45;

  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  /* measure width */
  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => setSlideW(el.clientWidth);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const clearAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const pauseAndResumeLater = (delay = 2000) => {
    setPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setPaused(false), delay);
  };

  /* auto rotate (only when visible and not paused) */
  useEffect(() => {
    if (!inView || paused) {
      clearAuto();
      return;
    }

    clearAuto();
    intervalRef.current = setInterval(() => {
      setIndex((p) => p + 1);
    }, 3000);

    return () => clearAuto();
  }, [inView, paused]);

  /* ✅ seamless loop without blink:
     after transition ends (approx 850ms), teleport to middle copy with animate=false for 1 frame */
  useEffect(() => {
    const leftBoundary = baseLen - 1; // end of left copy
    const rightBoundary = baseLen * 2; // start of right copy

    // if we are still in middle copy range, nothing to do
    if (index > leftBoundary && index < rightBoundary) return;

    const t = setTimeout(() => {
      const logical = ((index % baseLen) + baseLen) % baseLen;
      const target = middleStart + logical;

      // teleport without animation (NO blink)
      setAnimate(false);
      setIndex(target);

      // next frame: enable animation back
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    }, 850);

    return () => clearTimeout(t);
  }, [index, baseLen, middleStart]);

  const logicalIndex = ((index % baseLen) + baseLen) % baseLen;

  const jumpToSlide = (i: number) => {
    pauseAndResumeLater(2500);
    setIndex(middleStart + i);
  };

  /* swipe handlers */
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    pauseAndResumeLater(2500);
    setTouchStartX(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX == null) return;
    const diff = e.touches[0].clientX - touchStartX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff < 0) setIndex((p) => p + 1);
      else setIndex((p) => p - 1);
      setTouchStartX(null);
    }
  };

  const onTouchEnd = () => setTouchStartX(null);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    pauseAndResumeLater(2500);
    setMouseDownX(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mouseDownX == null) return;
    const diff = e.clientX - mouseDownX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff < 0) setIndex((p) => p + 1);
      else setIndex((p) => p - 1);
      setMouseDownX(null);
    }
  };

  const onMouseUp = () => setMouseDownX(null);

  // x position for track
  const x = slideW ? -index * slideW : 0;

  return (
    <Section ref={ref} className={inView ? "visible" : ""}>
      <Container>
        <Label>Experience & Learning</Label>
        <Title>Professional Certifications</Title>
        <Divider />

        <CarouselViewport
          ref={viewportRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
          <CarouselTrack $animate={animate} $x={x}>
            {items.map((item, i) => (
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
          </CarouselTrack>
        </CarouselViewport>

        <Progress>
          {BASE.map((_, i) => (
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

import { useEffect, useRef, useState } from "react";
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
   BASE DATA
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

/* duplicate for infinite loop */
const CERTIFICATIONS = [...BASE_CERTIFICATIONS, ...BASE_CERTIFICATIONS];

export default function ExperienceLearning() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [index, setIndex] = useState(BASE_CERTIFICATIONS.length);
  const [paused, setPaused] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  /* =====================
     AUTO ROTATE (FIXED)
  ===================== */
  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  /* =====================
     SCROLL + SILENT RESET
  ===================== */
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = carousel.children;
    const card = cards[index] as HTMLElement;
    if (!card) return;

    carousel.scrollTo({
      left: card.offsetLeft - carousel.offsetWidth / 2 + card.offsetWidth / 2,
      behavior: "smooth",
    });

    /* silent reset to middle copy */
    if (index === BASE_CERTIFICATIONS.length * 2 - 1) {
      if (intervalRef.current) clearInterval(intervalRef.current);

      setTimeout(() => {
        const resetCard = cards[BASE_CERTIFICATIONS.length] as HTMLElement;

        carousel.scrollTo({
          left:
            resetCard.offsetLeft -
            carousel.offsetWidth / 2 +
            resetCard.offsetWidth / 2,
          behavior: "auto",
        });

        setIndex(BASE_CERTIFICATIONS.length);
      }, 900);
    }
  }, [index]);

  /* logical index for progress */
  const logicalIndex = index % BASE_CERTIFICATIONS.length;

  /* dot click */
  const jumpToSlide = (logicalIdx: number) => {
    setIndex(BASE_CERTIFICATIONS.length + logicalIdx);
  };

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
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
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

        {/* PROGRESS */}
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

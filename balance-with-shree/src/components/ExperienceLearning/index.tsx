import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import certificate1 from "../../assets/certificate1.jpeg";
import certificate2 from "../../assets/certificate2.jpeg";
import certificate3 from "../../assets/certificate3.jpeg";
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
  PreviewOverlay,
  PreviewCard,
  PreviewImg,
  PreviewClose,
} from "./style";

const BASE = [
  {
    image: certificate1,
    title: "Medical Yoga Teacher Certification",
    variant: "yoga",
  },
  {
    image: certificate2,
    title: "Parental Yoga Certification",
    variant: "nutrition",
  },
  {
    image: certificate3,
    title: "Hatha and Ashtanga Yoga Certification",
    variant: "ayurveda",
  },
];

export default function ExperienceLearning() {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const baseLen = BASE.length;
  if (!BASE.length) return null;

  const items = useMemo(() => [...BASE, ...BASE, ...BASE], []);
  const middleStart = baseLen;

  const [index, setIndex] = useState(middleStart);
  const [animate, setAnimate] = useState(true);
  const [slideW, setSlideW] = useState(0);
  const [preview, setPreview] = useState<null | { src: string; title: string }>(
    null,
  );

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

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

  /* autoplay (slow + smooth) */
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setIndex((i) => i + 1);
    }, 4000); // ← smooth timing

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  /* seamless infinite reset */
  useEffect(() => {
    if (index >= baseLen * 2) {
      setAnimate(false);
      setIndex(index - baseLen);
    }

    if (index < baseLen) {
      setAnimate(false);
      setIndex(index + baseLen);
    }
  }, [index, baseLen]);

  /* re-enable animation */
  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  /* drag / swipe */
  const startX = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const diff = startX.current - e.clientX;

    if (Math.abs(diff) < 40) return;

    setIndex((i) => (diff > 0 ? i + 1 : i - 1));
  };

  const x = -index * (slideW || 1);

  return (
    <Section>
      <Container>
        <Label>Experience & Learning</Label>
        <Title>Professional Certifications</Title>
        <Divider />

        <CarouselViewport
          ref={viewportRef}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
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
                  onClick={() =>
                    setPreview({ src: item.image, title: item.title })
                  }
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
              $active={i === index % baseLen}
              onClick={() => setIndex(middleStart + i)}
            />
          ))}
        </Progress>
      </Container>

      {preview && (
        <PreviewOverlay onClick={() => setPreview(null)}>
          <PreviewCard onClick={(e) => e.stopPropagation()}>
            <PreviewClose onClick={() => setPreview(null)}>✕</PreviewClose>
            <PreviewImg src={preview.src} alt={preview.title} />
          </PreviewCard>
        </PreviewOverlay>
      )}
    </Section>
  );
}

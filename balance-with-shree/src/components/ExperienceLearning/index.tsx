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
  const items = useMemo(() => [...BASE, ...BASE, ...BASE], []);
  const middleStart = baseLen;

  const [index, setIndex] = useState(middleStart);
  const [animate] = useState(true);
  const [slideW, setSlideW] = useState(0);

  /* 🔍 certificate preview */
  const [preview, setPreview] = useState<null | { src: string; title: string }>(
    null,
  );

  /* 🔒 lock background scroll */
  useEffect(() => {
    if (preview) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [preview]);

  /* ESC to close */
  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preview]);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => setSlideW(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const x = slideW ? -index * slideW : 0;

  return (
    <Section>
      <Container>
        <Label>Experience & Learning</Label>
        <Title>Professional Certifications</Title>
        <Divider />

        <CarouselViewport ref={viewportRef}>
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

      {/* 🌿 PREMIUM CERTIFICATE PREVIEW */}
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

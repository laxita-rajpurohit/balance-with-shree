import { useState, useEffect, useRef } from "react";
import {
  YogaSection,
  YogaContainer,
  YogaTitle,
  CarouselContainer,
  CarouselItem,
  CarouselTrack,
  NavButton,
} from "./style";

const videos = [
  {
    id: "1",
    src: "https://res.cloudinary.com/drjzugsyo/video/upload/v1770745584/IMG_7633_1_qooflf.mp4",
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/drjzugsyo/video/upload/v1770745298/IMG_7634_kapmzh.mp4",
  },
];

export default function YogaVideoReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const total = videos.length;

  const next = () => setCurrentIndex((i) => (i + 1) % total);
  const prev = () => setCurrentIndex((i) => (i - 1 + total) % total);

  const getIndex = (offset: number) => (currentIndex + offset + total) % total;

  /* AUTO PLAY WHEN SECTION IS VISIBLE */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.6 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <YogaSection ref={sectionRef}>
      <YogaContainer>
        <YogaTitle>Client Stories</YogaTitle>

        <CarouselContainer>
          <CarouselTrack>
            {total > 1 && (
              <CarouselItem $position="back-left">
                <video src={videos[getIndex(-1)].src} muted />
              </CarouselItem>
            )}

            <CarouselItem $position="front">
              <video
                ref={videoRef}
                key={videos[currentIndex].id}
                src={videos[currentIndex].src}
                controls
                playsInline
                muted
                onEnded={next}
              />
            </CarouselItem>

            {total > 1 && (
              <CarouselItem $position="back-right">
                <video src={videos[getIndex(1)].src} muted />
              </CarouselItem>
            )}
          </CarouselTrack>

          {total > 1 && (
            <>
              <NavButton $direction="left" onClick={prev} />
              <NavButton $direction="right" onClick={next} />
            </>
          )}
        </CarouselContainer>
      </YogaContainer>
    </YogaSection>
  );
}

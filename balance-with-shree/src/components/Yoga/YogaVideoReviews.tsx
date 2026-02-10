import { useState } from "react";
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

  const total = videos.length;

  const next = () => setCurrentIndex((i) => (i + 1) % total);
  const prev = () => setCurrentIndex((i) => (i - 1 + total) % total);

  const getIndex = (offset: number) => (currentIndex + offset + total) % total;

  return (
    <YogaSection>
      <YogaContainer>
        <YogaTitle>Client Stories</YogaTitle>

        <CarouselContainer>
          <CarouselTrack>
            {total > 1 && (
              <CarouselItem $position="back-left">
                <video src={videos[getIndex(-1)].src} muted />
              </CarouselItem>
            )}

            {/* CURRENT VIDEO */}
            <CarouselItem $position="front">
              <video
                key={videos[currentIndex].id}
                src={videos[currentIndex].src}
                autoPlay
                controls
                playsInline
                onEnded={next} // ← THIS IS THE IMPORTANT PART
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

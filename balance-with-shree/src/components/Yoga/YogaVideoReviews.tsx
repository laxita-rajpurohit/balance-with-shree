import { useState, useRef } from "react";
import {
  YogaSection,
  YogaContainer,
  YogaTitle,
  CarouselContainer,
  CarouselItem,
  CarouselTrack,
  NavButton,
} from "./style";
import { siteMedia } from "../../data/media";

const videos = [
  {
    id: "1",
    src: siteMedia.yoga.videos[0],
  },
  {
    id: "2",
    src: siteMedia.yoga.videos[1],
  },
];

export default function YogaVideoReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  const total = videos.length;

  const next = () => setCurrentIndex((i) => (i + 1) % total);
  const prev = () => setCurrentIndex((i) => (i - 1 + total) % total);

  const getIndex = (offset: number) => (currentIndex + offset + total) % total;

  return (
    <YogaSection ref={sectionRef}>
      <YogaContainer>
        <YogaTitle>Client Stories</YogaTitle>

        <CarouselContainer>
          <CarouselTrack
            style={{
              transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <CarouselItem $position="back-left">
              <video src={videos[getIndex(-1)].src} muted preload="auto" />
            </CarouselItem>

            <CarouselItem $position="front">
              <video
                src={videos[getIndex(0)].src}
                controls
                playsInline
                muted
                autoPlay
                preload="auto"
                onEnded={next}
              />
            </CarouselItem>

            <CarouselItem $position="back-right">
              <video src={videos[getIndex(1)].src} muted preload="auto" />
            </CarouselItem>
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

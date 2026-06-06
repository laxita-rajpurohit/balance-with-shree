import { useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { VideoAsset } from "../../../../shared/types/media";
import {
  MediaSection,
  MediaHeader,
  SectionTitle,
  VideoViewport,
  VideoTrack,
  VideoSlide,
  VideoCard,
  VideoPlayer,
  CarouselControls,
  CarouselButton,
  CarouselDots,
  CarouselDot,
} from "./styles";

interface YogaVideoReviewsProps {
  videos: readonly VideoAsset[];
}

export const YogaVideoReviews = ({ videos }: YogaVideoReviewsProps) => {
  const [videoIndex, setVideoIndex] = useState(0);
  const videoTouchStartX = useRef<number | null>(null);
  const videoTouchStartY = useRef<number | null>(null);

  const showPreviousVideo = () =>
    setVideoIndex((current) =>
      current === 0 ? videos.length - 1 : current - 1,
    );

  const showNextVideo = () =>
    setVideoIndex((current) =>
      current === videos.length - 1 ? 0 : current + 1,
    );

  const handleVideoTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    videoTouchStartX.current = touch.clientX;
    videoTouchStartY.current = touch.clientY;
  };

  const handleVideoTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (videoTouchStartX.current === null || videoTouchStartY.current === null) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - videoTouchStartX.current;
    const deltaY = touch.clientY - videoTouchStartY.current;

    videoTouchStartX.current = null;
    videoTouchStartY.current = null;

    if (Math.abs(deltaX) < 42 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX > 0) {
      showPreviousVideo();
      return;
    }

    showNextVideo();
  };

  if (!videos || videos.length === 0) return null;

  return (
    <MediaSection>
      <MediaHeader>
        <SectionTitle>Client Stories</SectionTitle>
      </MediaHeader>
      <VideoViewport>
        <VideoTrack $index={videoIndex}>
          {videos.map((video) => (
            <VideoSlide key={video.id}>
              <VideoCard
                onTouchStart={handleVideoTouchStart}
                onTouchEnd={handleVideoTouchEnd}
              >
                <VideoPlayer
                  controls
                  playsInline
                  preload="metadata"
                  poster={video.poster}
                  aria-label={video.alt}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </VideoPlayer>
              </VideoCard>
            </VideoSlide>
          ))}
        </VideoTrack>
      </VideoViewport>
      <CarouselControls>
        <CarouselButton
          type="button"
          onClick={showPreviousVideo}
          aria-label="Show previous client story"
        >
          <ChevronLeft size={18} />
        </CarouselButton>
        <CarouselDots>
          {videos.map((video, index) => (
            <CarouselDot
              key={video.id}
              type="button"
              onClick={() => setVideoIndex(index)}
              aria-label={`Show client story ${index + 1}`}
              $active={index === videoIndex}
            />
          ))}
        </CarouselDots>
        <CarouselButton
          type="button"
          onClick={showNextVideo}
          aria-label="Show next client story"
        >
          <ChevronRight size={18} />
        </CarouselButton>
      </CarouselControls>
    </MediaSection>
  );
};

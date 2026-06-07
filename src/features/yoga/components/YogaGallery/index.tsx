import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  MediaSection,
  MediaHeader,
  SectionTitle,
  GalleryViewport,
  GalleryTrack,
  GalleryCard,
  GalleryImage,
  GalleryControls,
  CarouselButton,
} from "./styles";

interface YogaGalleryProps {
  gallery: readonly string[];
}

export const YogaGallery = ({ gallery }: YogaGalleryProps) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? gallery.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev >= gallery.length - 3 ? 0 : prev + 1));
  };

  return (
    <MediaSection>
      <MediaHeader>
        <SectionTitle>Gallery</SectionTitle>
      </MediaHeader>
      
      <GalleryViewport>
        <GalleryTrack $index={index}>
          {gallery.map((image, idx) => (
            <GalleryCard key={image}>
              <GalleryImage
                src={image}
                alt={
                  idx === 0
                    ? "Yoga practice in calm indoor space"
                    : idx === 1
                      ? "Woman practicing yoga mindfully"
                      : "Holistic yoga and wellness session"
                }
                loading="lazy"
                decoding="async"
              />
            </GalleryCard>
          ))}
        </GalleryTrack>
      </GalleryViewport>

      <GalleryControls>
        <CarouselButton
          type="button"
          onClick={handlePrev}
          aria-label="Previous images"
        >
          <ChevronLeft size={18} />
        </CarouselButton>
        <CarouselButton
          type="button"
          onClick={handleNext}
          aria-label="Next images"
        >
          <ChevronRight size={18} />
        </CarouselButton>
      </GalleryControls>
    </MediaSection>
  );
};

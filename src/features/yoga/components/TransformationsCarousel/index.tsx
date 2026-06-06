import { useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  MediaSection,
  MediaHeader,
  SectionEyebrow,
  SectionTitle,
  TransformViewport,
  TransformTrack,
  TransformSlide,
  TransformFrame,
  TransformImage,
  CarouselControls,
  CarouselButton,
  CarouselDots,
  CarouselDot,
} from "./styles";

interface TransformationsCarouselProps {
  transformations: readonly string[];
}

export const TransformationsCarousel = ({
  transformations,
}: TransformationsCarouselProps) => {
  const [transformIndex, setTransformIndex] = useState(0);
  const transformTouchStartX = useRef<number | null>(null);
  const transformTouchStartY = useRef<number | null>(null);

  const showPreviousTransformation = () =>
    setTransformIndex((current) =>
      current === 0 ? transformations.length - 1 : current - 1,
    );

  const showNextTransformation = () =>
    setTransformIndex((current) =>
      current === transformations.length - 1 ? 0 : current + 1,
    );

  const handleTransformationTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    transformTouchStartX.current = touch.clientX;
    transformTouchStartY.current = touch.clientY;
  };

  const handleTransformationTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (
      transformTouchStartX.current === null ||
      transformTouchStartY.current === null
    ) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - transformTouchStartX.current;
    const deltaY = touch.clientY - transformTouchStartY.current;

    transformTouchStartX.current = null;
    transformTouchStartY.current = null;

    if (Math.abs(deltaX) < 42 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX > 0) {
      showPreviousTransformation();
      return;
    }

    showNextTransformation();
  };

  if (!transformations || transformations.length === 0) return null;

  return (
    <MediaSection>
      <MediaHeader>
        <SectionEyebrow>Real Proof</SectionEyebrow>
        <SectionTitle>Real Transformations</SectionTitle>
      </MediaHeader>
      <TransformViewport
        onTouchStart={handleTransformationTouchStart}
        onTouchEnd={handleTransformationTouchEnd}
      >
        <TransformTrack $index={transformIndex}>
          {transformations.map((image, index) => (
            <TransformSlide key={image}>
              <TransformFrame>
                <TransformImage
                  src={image}
                  alt={
                    index === 0
                      ? "Yoga journey before transformation"
                      : index === 1
                        ? "Yoga practice after transformation"
                        : "Mind body balance through yoga"
                  }
                  loading="lazy"
                  decoding="async"
                />
              </TransformFrame>
            </TransformSlide>
          ))}
        </TransformTrack>
      </TransformViewport>
      <CarouselControls>
        <CarouselButton
          type="button"
          onClick={showPreviousTransformation}
          aria-label="Show previous transformation"
        >
          <ChevronLeft size={18} />
        </CarouselButton>
        <CarouselDots>
          {transformations.map((image, index) => (
            <CarouselDot
              key={image}
              type="button"
              onClick={() => setTransformIndex(index)}
              aria-label={`Show transformation ${index + 1}`}
              $active={index === transformIndex}
            />
          ))}
        </CarouselDots>
        <CarouselButton
          type="button"
          onClick={showNextTransformation}
          aria-label="Show next transformation"
        >
          <ChevronRight size={18} />
        </CarouselButton>
      </CarouselControls>
    </MediaSection>
  );
};

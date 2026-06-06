import { useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "../../../../shared/types/reviews";
import {
  TestimonialSection,
  TestimonialHeader,
  SectionEyebrow,
  SectionTitle,
  TestimonialCard,
  TestimonialAvatar,
  TestimonialContent,
  QuoteMark,
  TestimonialText,
  TestimonialName,
  TestimonialHandle,
  CarouselControls,
  CarouselButton,
  CarouselDots,
  CarouselDot,
} from "./styles";

interface TestimonialSliderProps {
  testimonials: readonly Testimonial[];
}

export const TestimonialSlider = ({ testimonials }: TestimonialSliderProps) => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const testimonialTouchStartX = useRef<number | null>(null);
  const testimonialTouchStartY = useRef<number | null>(null);

  const showPreviousReview = () =>
    setReviewIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );

  const showNextReview = () =>
    setReviewIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );

  const handleTestimonialTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    testimonialTouchStartX.current = touch.clientX;
    testimonialTouchStartY.current = touch.clientY;
  };

  const handleTestimonialTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (
      testimonialTouchStartX.current === null ||
      testimonialTouchStartY.current === null
    ) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - testimonialTouchStartX.current;
    const deltaY = touch.clientY - testimonialTouchStartY.current;

    testimonialTouchStartX.current = null;
    testimonialTouchStartY.current = null;

    if (Math.abs(deltaX) < 42 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX > 0) {
      showPreviousReview();
      return;
    }

    showNextReview();
  };

  if (!testimonials || testimonials.length === 0) return null;

  const currentReview = testimonials[reviewIndex];

  return (
    <TestimonialSection>
      <TestimonialHeader>
        <SectionEyebrow>Client Love</SectionEyebrow>
        <SectionTitle as="h2">Real stories. Real support.</SectionTitle>
      </TestimonialHeader>

      <TestimonialCard
        onTouchStart={handleTestimonialTouchStart}
        onTouchEnd={handleTestimonialTouchEnd}
      >
        <TestimonialAvatar>
          <img
            src={currentReview.image}
            alt={currentReview.alt}
            loading="lazy"
            decoding="async"
          />
        </TestimonialAvatar>

        <TestimonialContent>
          <QuoteMark>“</QuoteMark>
          <TestimonialText>{currentReview.text}</TestimonialText>
          <TestimonialName>{currentReview.name}</TestimonialName>
          {currentReview.handle ? (
            <TestimonialHandle>{currentReview.handle}</TestimonialHandle>
          ) : null}
        </TestimonialContent>
      </TestimonialCard>

      <CarouselControls>
        <CarouselButton
          type="button"
          onClick={showPreviousReview}
          aria-label="Show previous testimonial"
        >
          <ChevronLeft size={18} />
        </CarouselButton>

        <CarouselDots>
          {testimonials.map((item, index) => (
            <CarouselDot
              key={item.name}
              type="button"
              onClick={() => setReviewIndex(index)}
              aria-label={`Show home testimonial ${index + 1}`}
              $active={reviewIndex === index}
            />
          ))}
        </CarouselDots>

        <CarouselButton
          type="button"
          onClick={showNextReview}
          aria-label="Show next testimonial"
        >
          <ChevronRight size={18} />
        </CarouselButton>
      </CarouselControls>
    </TestimonialSection>
  );
};

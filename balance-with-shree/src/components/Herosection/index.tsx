import {
  ButtonsRow,
  HeadingBlock,
  Img,
  Wrapper,
  CarouselContainer,
  CarouselSlide,
  CarouselTrack,
  CarouselButtons,
  CarouselButton,
} from "./style";
import { Button } from "../Button";
import { useInView } from "react-intersection-observer";
import { AnimatedContent } from "./style";
import { useState, useEffect, useRef } from "react";
import { Modal } from "../Modal";
import { PackageDetails } from "../PackageDetails";
import { SessionSelector } from "../SessionSelector";

const heroImages = [
  "https://res.cloudinary.com/drjzugsyo/image/upload/v1771262971/shree5_doyho6.webp",
  "https://res.cloudinary.com/drjzugsyo/image/upload/v1771262850/shree4_rnpdvt.webp",
];

export const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [sessionOpen, setSessionOpen] = useState(false);

  const slideInterval = useRef<NodeJS.Timeout>();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  /* AUTOPLAY */
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  /* MANUAL NAVIGATION */
  const goToSlide = (index: number) => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    setCurrentSlide(index);
  };

  /* MOBILE SWIPE */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) < 40) return;

    if (slideInterval.current) clearInterval(slideInterval.current);

    if (diff > 0) {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    } else {
      setCurrentSlide(
        (prev) => (prev - 1 + heroImages.length) % heroImages.length,
      );
    }
  };

  return (
    <Wrapper ref={ref}>
      <CarouselContainer onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <CarouselTrack $currentSlide={currentSlide}>
          {heroImages.map((img, index) => (
            <CarouselSlide key={index}>
              <Img src={img} alt={`Hero ${index + 1}`} />
            </CarouselSlide>
          ))}
        </CarouselTrack>

        <CarouselButtons>
          {heroImages.map((_, index) => (
            <CarouselButton
              key={index}
              $active={currentSlide === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </CarouselButtons>
      </CarouselContainer>

      <AnimatedContent visible={inView}>
        <HeadingBlock>
          <h1>
            BALANCE
            <br />
            WITH SHREE
          </h1>
        </HeadingBlock>

        <ButtonsRow>
          <Button variant="primary" onClick={() => setPackagesOpen(true)}>
            Explore Packages
          </Button>

          <Button variant="secondary" onClick={() => setSessionOpen(true)}>
            Book a Session
          </Button>

          <Modal isOpen={packagesOpen} onClose={() => setPackagesOpen(false)}>
            <PackageDetails
              title="Wellness Packages"
              packages={[
                {
                  title: "Group Yoga (Online / Offline)",
                  note: "✔ Fees for group sessions are fixed.",
                },
                {
                  title: "Private Yoga (Personal Training)",
                  note: "✔ Private sessions are customised based on individual needs.",
                },
                {
                  title: "Prenatal Yoga (Private)",
                  note: "✔ Special cases are discussed after consultation.",
                },
              ]}
              cta="Start Your Journey"
            />
          </Modal>

          <Modal isOpen={sessionOpen} onClose={() => setSessionOpen(false)}>
            <SessionSelector onSelect={() => setSessionOpen(false)} />
          </Modal>
        </ButtonsRow>
      </AnimatedContent>
    </Wrapper>
  );
};

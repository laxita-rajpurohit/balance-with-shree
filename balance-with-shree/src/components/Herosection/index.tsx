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

// Import your hero images
import heroImg1 from "../../assets/shree5.jpeg";
import heroImg2 from "../../assets/shree4.jpeg";

const heroImages = [heroImg1, heroImg2];

export const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [sessionOpen, setSessionOpen] = useState(false);
  const slideInterval = useRef<NodeJS.Timeout>();

  // Auto slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }, 5000); // Change slide every 5 seconds
    };

    startAutoSlide();
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  // Handle manual slide change
  const goToSlide = (index: number) => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    setCurrentSlide(index);
  };

  return (
    <Wrapper ref={ref}>
      <CarouselContainer>
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
              aria-label={`Go to slide ${index + 1}`}
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

          {/* Packages Modal */}
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
                  note: "✔ Special cases are discussed after consultation. Final structure is decided after assessment.",
                },
              ]}
              cta="Start Your Journey"
            />
          </Modal>

          {/* Book Session Modal */}
          <Modal isOpen={sessionOpen} onClose={() => setSessionOpen(false)}>
            <SessionSelector onSelect={() => setSessionOpen(false)} />
          </Modal>
        </ButtonsRow>
      </AnimatedContent>
    </Wrapper>
  );
};

// Hero/index.tsx
import { ButtonsRow, HeadingBlock, Img, Wrapper } from "./style";
import heroImg from "../../assets/hero.jpeg";
import { Button } from "../Button";
import { useInView } from "react-intersection-observer"; // NEW
import { AnimatedContent } from "./style"; // NEW (see below)
import { useState } from "react";
import { Modal } from "../Modal";
import { PackageDetails } from "../PackageDetails";

export const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [open, setOpen] = useState(false);
  return (
    <Wrapper ref={ref}>
      <Img src={heroImg} alt="Hero" />

      {/* animated overlay */}
      <AnimatedContent visible={inView}>
        <HeadingBlock>
          <h1>
            BALANCE
            <br />
            WITH SHREE
          </h1>
        </HeadingBlock>

        <ButtonsRow>
          <Button variant="primary" onClick={() => setOpen(true)}>
            Explore Packages
          </Button>
          <Button variant="secondary">Book a Session</Button>
          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <PackageDetails
              title="Wellness Packages"
              bullets={[
                "Yoga Therapy",
                "Ayurveda Guidance",
                "Nutrition Planning",
                "Women Wellness Programs",
              ]}
              cta="Start Your Journey"
            />
          </Modal>
        </ButtonsRow>
      </AnimatedContent>
    </Wrapper>
  );
};

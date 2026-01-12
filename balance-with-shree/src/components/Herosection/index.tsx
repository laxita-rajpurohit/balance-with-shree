import { ButtonsRow, HeadingBlock, Img, Wrapper } from "./style";
import heroImg from "../../assets/hero.jpeg";
import { Button } from "../Button";
import { useInView } from "react-intersection-observer";
import { AnimatedContent } from "./style";
import { useState } from "react";
import { Modal } from "../Modal";
import { PackageDetails } from "../PackageDetails";
import { SessionSelector } from "../SessionSelector";

export const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [packagesOpen, setPackagesOpen] = useState(false);
  const [sessionOpen, setSessionOpen] = useState(false);

  return (
    <Wrapper ref={ref}>
      <Img src={heroImg} alt="Hero" />

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

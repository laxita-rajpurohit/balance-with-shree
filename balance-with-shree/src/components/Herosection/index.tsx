// Hero/index.tsx
import { ButtonsRow, HeadingBlock, Img, Wrapper } from "./style";
import heroImg from "../../assets/hero.jpeg";
import { Button } from "../Button";
import { useInView } from "react-intersection-observer"; // NEW
import { AnimatedContent } from "./style"; // NEW (see below)

export const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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
          <Button variant="primary">Explore Packages</Button>
          <Button variant="secondary">Book a Session</Button>
        </ButtonsRow>
      </AnimatedContent>
    </Wrapper>
  );
};

// Journey/index.tsx
import { Image, Section, Inner, AnimatedText } from "./style";
import portrait from "../../assets/journey.png";
import { useInView } from "react-intersection-observer";

export const Journey = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25, // reveal when ~25% is visible [web:41][web:42]
  });

  return (
    <Section ref={ref}>
      <Inner>
        <AnimatedText visible={inView}>
          <h3>Hi, I am Dhanashree</h3>
          <p>
            I have been practicing yoga since 2015. What started as a short
            break from routine became a lifelong journey of self‑exploration and
            healing.
          </p>
          <p>
            Through mindful movement and breath, I support you in slowing down,
            reconnecting, and feeling at home in your body.
            <button>...Read more</button>
          </p>
        </AnimatedText>

        <Image src={portrait} alt="Yoga teacher" />
      </Inner>
    </Section>
  );
};

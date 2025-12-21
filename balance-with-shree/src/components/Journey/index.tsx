import { Image, Section, Inner, AnimatedText } from "./style";
import portrait from "../../assets/journey.png";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

interface JourneyProps {
  showFull?: boolean;
}

export const Journey = ({ showFull = false }: JourneyProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const navigate = useNavigate();

  return (
    <Section ref={ref}>
      <Inner>
        <AnimatedText visible={inView}>
          <h3>Hi, I am Dhanashree</h3>

          <p>
            I have been practicing yoga since 2015. What started as a short
            break from routine became a lifelong journey of self-exploration and
            healing.
          </p>

          {showFull ? (
            <>
              <p>
                Over the years, yoga taught me patience, balance, and deep
                awareness of the body and mind. My approach blends traditional
                yoga, mindful breathing, and holistic wellness practices.
              </p>
              <p>
                My mission is to help you slow down, reconnect with yourself,
                and build a sustainable, nourishing lifestyle.
              </p>
            </>
          ) : (
            <p>
              Through mindful movement and breath, I support you in slowing
              down, reconnecting, and feeling at home in your body.
              <button onClick={() => navigate("/about")}>...Read more</button>
            </p>
          )}
        </AnimatedText>

        <Image src={portrait} alt="Yoga teacher" />
      </Inner>
    </Section>
  );
};

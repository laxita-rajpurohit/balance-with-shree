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
            a Clinical Nutritionist & Yoga Therapist, and the founder of Balance
            with Shree. I help people build a healthy relationship with food,
            movement, and their bodies — not through extreme diets or quick
            fixes, but through simple, sustainable, and mindful lifestyle
            changes.
          </p>

          {showFull ? (
            <>
              <p>
                From dance and acrobatics to yoga and mindful living, movement
                has always been my way of connecting with myself. During a pause
                in life, I found clarity through yoga and nutrition—building
                strength, balance, and discipline from within.
              </p>

              <p>
                Balance with Shree was born from this personal transformation—a
                space where yoga, nutrition, and mindful living come together in
                a practical, sustainable way.
              </p>
            </>
          ) : (
            <p>
              Through yoga, nutrition, and mindful living, I help you find
              balance that feels calm, sustainable, and deeply personal.
              <button onClick={() => navigate("/about")}>...Read more</button>
            </p>
          )}
        </AnimatedText>

        <Image src={portrait} alt="Yoga teacher" />
      </Inner>
    </Section>
  );
};

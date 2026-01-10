import { useInView } from "react-intersection-observer";
import { Section, Container, Label, Title, Text, Divider } from "./style";

const Philosophy = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <Section ref={ref} className={inView ? "visible" : ""}>
      <Container>
        <Label>My Philosophy</Label>
        <Title>Wellness, Without Extremes</Title>

        <Divider />

        <Text>
          Yoga is not just exercise. Nutrition is not just calories. Health is
          not just physical.
        </Text>

        <Text>
          I follow a holistic approach — working with the mind, body, and soul.
        </Text>

        <Text>No crash diets. No temporary fixes. No fear around food.</Text>

        <Text>
          Just sustainable habits, mindful eating, and movement that feels good
          — for life.
        </Text>

        <Text className="bold">
          My goal is to help you feel comfortable in your body, confident in
          your food choices, and connected to your health — naturally and
          mindfully.
        </Text>
      </Container>
    </Section>
  );
};

export default Philosophy;

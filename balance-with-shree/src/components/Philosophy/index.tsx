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
          I believe true wellness is not about discipline rooted in pressure or
          perfection. It is about building a gentle, sustainable relationship
          with your body—through mindful movement, nourishing food, and
          conscious living.
        </Text>

        <Text>
          Balance with Shree exists to make wellness feel calm, accessible, and
          deeply personal—so you feel confident, grounded, and at home in your
          own body.
        </Text>
      </Container>
    </Section>
  );
};

export default Philosophy;

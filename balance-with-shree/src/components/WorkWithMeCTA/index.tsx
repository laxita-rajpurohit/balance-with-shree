import { useInView } from "react-intersection-observer";
import { Container, Content, Title, Text, CTAButton } from "./style";
import { useNavigate } from "react-router-dom";

const WorkWithMeCTA = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Container ref={ref} className={inView ? "visible" : ""}>
      <Content>
        <Title>Ready to Begin Your Journey?</Title>

        <Text>
          Balance is not about extremes. It’s about learning to listen to your
          body, nourish it with care, and move with intention.
        </Text>

        <Text>
          If you’re ready to feel stronger, calmer, and more connected—I’d love
          to guide you.
        </Text>

        <CTAButton onClick={() => navigate("/contact")}>Work With Me</CTAButton>
      </Content>
    </Container>
  );
};

export default WorkWithMeCTA;

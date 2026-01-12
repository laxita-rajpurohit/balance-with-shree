import { useNavigate } from "react-router-dom";
import {
  Section,
  Container,
  Content,
  Label,
  Title,
  Description,
  Offerings,
  Offering,
  CTAButton,
  ImageWrapper,
  Image,
} from "./style";

import yogaImg from "../../assets/shree7.jpeg";

export const HomeYoga = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        <Content>
          <Label>YOGA</Label>

          <Title>
            Mindful Movement for <br />
            Strength, Calm & Balance
          </Title>

          <Description>
            Yoga at Balance with Shree is not about performance or pushing your
            limits. It is about creating awareness, improving posture, calming
            the nervous system, and supporting your overall wellbeing — gently
            and mindfully.
          </Description>

          <Offerings>
            <Offering>
              <strong>Therapeutic Yoga</strong>
              <span>
                Personalised practices to support pain management, stress
                relief, digestion, posture correction, and recovery.
              </span>
            </Offering>

            <Offering>
              <strong>Group Yoga Sessions</strong>
              <span>
                Structured group sessions focused on strength, flexibility,
                breath awareness, and consistency.
              </span>
            </Offering>

            <Offering>
              <strong>Prenatal Yoga</strong>
              <span>
                Safe and supportive yoga designed for expecting mothers, guided
                with care and awareness.
              </span>
            </Offering>
          </Offerings>

          <CTAButton onClick={() => navigate("/yoga")}>Explore Yoga</CTAButton>
        </Content>

        <ImageWrapper>
          <Image src={yogaImg} alt="Yoga with Shree" />
        </ImageWrapper>
      </Container>
    </Section>
  );
};

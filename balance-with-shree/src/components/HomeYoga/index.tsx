import { useNavigate } from "react-router-dom";
import {
  Section,
  Container,
  GlassWrap,
  Content,
  Media,
  Eyebrow,
  Heading,
  Description,
  Offerings,
  OfferingItem,
  OfferingTitle,
  OfferingText,
  CTAButton,
  Image,
} from "./style";

import yogaImg from "../../assets/shree7.jpeg";

export const HomeYoga = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        <GlassWrap>
          {/* LEFT: TEXT */}
          <Content>
            <Eyebrow>YOGA</Eyebrow>

            <Heading>
              Yoga that supports
              <br />
              your body & life
            </Heading>

            <Description>
              Yoga at Balance with Shree is therapeutic, mindful, and deeply
              personalised. The focus is not on flexibility or intensity, but on
              creating strength, stability, awareness, and calm — in a way that
              supports your daily life.
            </Description>

            <Offerings>
              <OfferingItem>
                <OfferingTitle>Therapeutic Yoga</OfferingTitle>
                <OfferingText>
                  Address posture, pain, stress, digestion, and nervous system
                  balance through personalised movement and breath.
                </OfferingText>
              </OfferingItem>

              <OfferingItem>
                <OfferingTitle>Group Yoga</OfferingTitle>
                <OfferingText>
                  Structured sessions focused on consistency, strength,
                  flexibility, and mindful movement — online or offline.
                </OfferingText>
              </OfferingItem>

              <OfferingItem>
                <OfferingTitle>Prenatal & Postnatal Yoga</OfferingTitle>
                <OfferingText>
                  Gentle, supportive practices designed for pregnancy recovery
                  and postnatal healing, guided with care.
                </OfferingText>
              </OfferingItem>
            </Offerings>

            <CTAButton onClick={() => navigate("/yoga")}>
              Explore Yoga →
            </CTAButton>
          </Content>

          {/* RIGHT: IMAGE */}
          <Media>
            <Image src={yogaImg} alt="Yoga with Shree" />
          </Media>
        </GlassWrap>
      </Container>
    </Section>
  );
};

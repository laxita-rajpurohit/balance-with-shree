import { Flower2, HeartPulse, Sparkles } from "lucide-react";
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
  OfferingIcon,
  OfferingTitle,
  OfferingText,
  Image,
} from "./style";
import { Button } from "../Button";
import { siteMedia } from "../../data/media";

const offerings = [
  {
    title: "Therapeutic Yoga",
    text: "Address posture, pain, stress, digestion, and nervous system balance through personalised movement and breath.",
    icon: HeartPulse,
  },
  {
    title: "Group Yoga",
    text: "Structured sessions focused on consistency, strength, flexibility, and mindful movement — online or offline.",
    icon: Flower2,
  },
  {
    title: "Prenatal & Postnatal Yoga",
    text: "Gentle, supportive practices designed for pregnancy recovery and postnatal healing, guided with care.",
    icon: Sparkles,
  },
] as const;

export const HomeYoga = () => {
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
              {offerings.map(({ title, text, icon: Icon }) => (
                <OfferingItem key={title}>
                  <OfferingIcon>
                    <Icon size={18} strokeWidth={1.9} />
                  </OfferingIcon>
                  <div>
                    <OfferingTitle>{title}</OfferingTitle>
                    <OfferingText>{text}</OfferingText>
                  </div>
                </OfferingItem>
              ))}
            </Offerings>

            <Button to="/yoga" variant="secondary" size="lg">
              Explore Yoga <span>→</span>
            </Button>
          </Content>

          {/* RIGHT: IMAGE */}
          <Media>
            <Image
              src={siteMedia.home.yogaPreview}
              alt="Yoga with Shree"
              loading="lazy"
              decoding="async"
            />
          </Media>
        </GlassWrap>
      </Container>
    </Section>
  );
};

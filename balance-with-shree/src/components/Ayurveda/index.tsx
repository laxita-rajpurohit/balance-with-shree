import {
  Section,
  Container,
  Hero,
  Title,
  Subtitle,
  Grid,
  Card,
  CardTitle,
  CardText,
  Process,
  Step,
  StepNumber,
  CTA,
} from "./style";

export default function Ayurveda() {
  const whatsappNumber = "919999999999";
  const message = encodeURIComponent(
    "Hi Shree, I’d like to understand how Ayurveda can support my health."
  );

  return (
    <Section>
      <Container>
        {/* HERO */}
        <Hero>
          <Title>
            Ayurveda for <span>Lasting Balance</span>
          </Title>
          <Subtitle>
            Ayurveda is not about quick fixes. It’s about understanding your
            body’s nature and restoring harmony at the root — gently, naturally,
            and sustainably.
          </Subtitle>
        </Hero>

        {/* YOUR SKILLS */}
        <Grid>
          <Card>
            <CardTitle>Ayurvedic Assessment</CardTitle>
            <CardText>
              In-depth understanding of your body constitution (Prakriti),
              imbalances (Vikriti), digestion, lifestyle, and stress patterns.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Dosha-Based Guidance</CardTitle>
            <CardText>
              Personalised recommendations based on Vata, Pitta, and Kapha —
              helping your body move back into balance naturally.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Diet & Daily Routine</CardTitle>
            <CardText>
              Simple, realistic food and daily rhythm suggestions aligned with
              your body type — no extreme rules, only sustainable habits.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Mind–Body Alignment</CardTitle>
            <CardText>
              Ayurveda works deeply with mental patterns, sleep quality, energy
              cycles, and emotional balance — not just physical symptoms.
            </CardText>
          </Card>
        </Grid>

        {/* HOW AYURVEDA HELPS */}
        <Hero style={{ marginTop: "100px" }}>
          <Title as="h2">
            How Ayurveda Can <span>Support You</span>
          </Title>
          <Subtitle>
            Ayurveda adapts to where you are in life — physically, mentally, and
            emotionally.
          </Subtitle>
        </Hero>

        <Grid>
          <Card>
            <CardTitle>Digestive Issues</CardTitle>
            <CardText>
              Bloating, acidity, constipation, sluggish digestion, or irregular
              appetite patterns.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Hormonal Balance</CardTitle>
            <CardText>
              PCOS, thyroid imbalance, menstrual irregularities, fertility
              support, and postnatal recovery.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Stress & Burnout</CardTitle>
            <CardText>
              Anxiety, overthinking, poor sleep, constant fatigue, or emotional
              overwhelm.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Weight & Metabolism</CardTitle>
            <CardText>
              Weight gain or difficulty losing weight due to metabolic or
              hormonal imbalance — addressed gently, not aggressively.
            </CardText>
          </Card>
        </Grid>

        {/* CONSULTATION EXPERIENCE */}
        <Hero style={{ marginTop: "100px" }}>
          <Title as="h2">
            The <span>Consultation Experience</span>
          </Title>
          <Subtitle>
            A calm, confidential, and deeply personalised process — designed to
            support long-term change.
          </Subtitle>
        </Hero>

        <Process>
          <Step>
            <StepNumber>01</StepNumber>
            <CardText>
              One-on-one consultation to understand your concerns, lifestyle,
              and health history.
            </CardText>
          </Step>

          <Step>
            <StepNumber>02</StepNumber>
            <CardText>
              Dosha and imbalance assessment with clear explanation — no
              confusing terminology.
            </CardText>
          </Step>

          <Step>
            <StepNumber>03</StepNumber>
            <CardText>
              Personalised recommendations covering food, routine, and mindful
              practices.
            </CardText>
          </Step>

          <Step>
            <StepNumber>04</StepNumber>
            <CardText>
              Gentle follow-up guidance to help you integrate changes
              sustainably.
            </CardText>
          </Step>
        </Process>

        {/* CTA */}
        <CTA
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          🌿 Speak About Ayurveda on WhatsApp
        </CTA>
      </Container>
    </Section>
  );
}

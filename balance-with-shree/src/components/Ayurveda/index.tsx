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
    "Hi Shree, I’d like to book a personalised Ayurveda consultation."
  );

  return (
    <Section>
      <Container>
        {/* HERO */}
        <Hero>
          <Title>
            Ayurveda for <span>Natural Balance</span>
          </Title>
          <Subtitle>
            Ayurveda helps you understand your body’s unique constitution and
            lifestyle patterns to restore balance in a gentle and sustainable
            way.
          </Subtitle>
        </Hero>

        {/* WHAT THIS INCLUDES */}
        <Hero as="div" style={{ marginTop: "100px" }}>
          <Title as="h2">
            What This <span>Includes</span>
          </Title>
        </Hero>

        <Grid>
          <Card>
            <CardTitle>Ayurvedic Assessment</CardTitle>
            <CardText>
              • Prakriti (body constitution) & Vikriti (current imbalance)
              understanding
              <br />
              • Dosha evaluation: Vata, Pitta & Kapha
              <br />• Basic review of digestion, routine & stress patterns
            </CardText>
          </Card>

          <Card>
            <CardTitle>Dosha-Based Diet & Lifestyle Guidance</CardTitle>
            <CardText>
              • Simple food suggestions according to dosha tendencies
              <br />
              • Daily routine (Dinacharya) guidance for better digestion, sleep
              & energy
              <br />• Practical, easy-to-follow habits
            </CardText>
          </Card>

          <Card>
            <CardTitle>Ayurvedic Therapies</CardTitle>
            <CardText>
              • Abhyanga – full body oil massage for relaxation & circulation
              <br />
              • Potli Abhyanga – herbal bolus therapy for muscle & joint comfort
              <br />
              • Shirodhara – calming therapy to support mental relaxation &
              sleep
              <br />• Panchakarma awareness & guidance (referral where
              appropriate)
            </CardText>
          </Card>

          <Card>
            <CardTitle>Oils & Home Practices</CardTitle>
            <CardText>
              • Understanding Ayurvedic oils and their usage
              <br />
              • Abhyanga timing, quantity & basic do’s and don’ts
              <br />• Simple home remedies for skin & hair care
            </CardText>
          </Card>
        </Grid>

        {/* WHO IT'S FOR */}
        <Hero style={{ marginTop: "100px" }}>
          <Title as="h2">
            Who It’s <span>For</span>
          </Title>
        </Hero>

        <Grid>
          <Card>
            <CardText>Digestive discomfort & lifestyle-related issues</CardText>
          </Card>
          <Card>
            <CardText>Stress, anxiety & disturbed sleep</CardText>
          </Card>
          <Card>
            <CardText>
              Hormonal imbalance support (PCOS, menstrual health)
            </CardText>
          </Card>
          <Card>
            <CardText>Fatigue, stiffness & general wellbeing</CardText>
          </Card>
          <Card>
            <CardText>Preventive care & holistic balance</CardText>
          </Card>
        </Grid>

        {/* CONSULTATION APPROACH */}
        <Hero style={{ marginTop: "100px" }}>
          <Title as="h2">
            The Consultation <span>Approach</span>
          </Title>
        </Hero>

        <Process>
          <Step>
            <StepNumber>01</StepNumber>
            <CardText>One-on-one personalised consultation</CardText>
          </Step>

          <Step>
            <StepNumber>02</StepNumber>
            <CardText>Clear explanation in simple language</CardText>
          </Step>

          <Step>
            <StepNumber>03</StepNumber>
            <CardText>Gentle, sustainable recommendations</CardText>
          </Step>
        </Process>

        {/* DISCLAIMER */}
        <Hero style={{ marginTop: "100px" }}>
          <Subtitle style={{ maxWidth: "800px" }}>
            <strong>Disclaimer:</strong> Ayurvedic consultations and therapies
            are offered as supportive wellness practices and do not replace
            medical diagnosis or treatment. Panchakarma procedures are advised
            or referred only where clinically appropriate.
          </Subtitle>
        </Hero>

        {/* CTA */}
        <CTA
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book your personalised Ayurveda consultation with Shree
        </CTA>
      </Container>
    </Section>
  );
}

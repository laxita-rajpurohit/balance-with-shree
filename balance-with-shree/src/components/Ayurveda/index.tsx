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
  ComingSoon,
  PricingWrapper,
  PricingCard,
  Button,
} from "./style";

export default function Ayurveda() {
  const whatsappNumber = "919999999999";

  const consultationMessage = encodeURIComponent(
    "Hi Shree, I’d like to book a personalised Ayurveda consultation."
  );

  const discoveryCallMessage = encodeURIComponent(
    "Hi Shree, I’d like to book an Ayurveda Discovery Call (20 minutes)."
  );

  const consultationLink = `https://wa.me/${whatsappNumber}?text=${consultationMessage}`;
  const discoveryCallLink = `https://wa.me/${whatsappNumber}?text=${discoveryCallMessage}`;

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
              • Prakriti (body constitution) &amp; Vikriti (current imbalance)
              understanding
              <br />
              • Dosha evaluation: Vata, Pitta &amp; Kapha
              <br />• Basic review of digestion, routine &amp; stress patterns
            </CardText>
          </Card>

          <Card>
            <CardTitle>Dosha-Based Diet &amp; Lifestyle Guidance</CardTitle>
            <CardText>
              • Simple food suggestions according to dosha tendencies
              <br />
              • Daily routine (Dinacharya) guidance for better digestion, sleep
              &amp; energy
              <br />• Practical, easy-to-follow habits
            </CardText>
          </Card>

          <Card>
            <CardTitle>Ayurvedic Therapies</CardTitle>
            <ComingSoon>Coming soon</ComingSoon>
            <CardText>
              In-person Ayurvedic therapies will be introduced soon, including:
              <br />
              • Abhyanga – full body oil massage for relaxation &amp;
              circulation
              <br />
              • Potli Abhyanga – herbal bolus therapy for muscle &amp; joint
              comfort
              <br />
              • Shirodhara – calming therapy to support mental relaxation &amp;
              sleep
              <br />• Panchakarma awareness &amp; guidance (referral where
              appropriate)
            </CardText>
          </Card>

          <Card>
            <CardTitle>Oils &amp; Home Practices</CardTitle>
            <CardText>
              • Understanding Ayurvedic oils and their usage
              <br />
              • Abhyanga timing, quantity &amp; basic do’s and don’ts
              <br />• Simple home remedies for skin &amp; hair care
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
            <CardText>
              Digestive discomfort &amp; lifestyle-related issues
            </CardText>
          </Card>
          <Card>
            <CardText>Stress, anxiety &amp; disturbed sleep</CardText>
          </Card>
          <Card>
            <CardText>
              Hormonal imbalance support (PCOS, menstrual health)
            </CardText>
          </Card>
          <Card>
            <CardText>Fatigue, stiffness &amp; general wellbeing</CardText>
          </Card>
          <Card>
            <CardText>Preventive care &amp; holistic balance</CardText>
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

        {/* DISCOVERY CALL PRICING CARD */}
        <PricingWrapper style={{ marginTop: "100px" }}>
          <Title as="h2">
            Book a <span>Discovery Call</span>
          </Title>

          <Subtitle>
            Not sure where to begin? Start with a short call to understand what
            you need.
          </Subtitle>

          <PricingCard>
            <h3>Ayurveda Discovery Call</h3>
            <p style={{ color: "#aaa", marginTop: "6px" }}>
              20 Minutes • Online via Zoom/WhatsApp
            </p>

            <div className="price">
              <span>₹</span>300
            </div>

            <ul>
              <li>Brief dosha &amp; lifestyle overview</li>
              <li>Clarity on your main concerns</li>
              <li>Recommendations on next best steps</li>
            </ul>

            <Button
              as="a"
              href={discoveryCallLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book My Ayurveda Discovery Call
            </Button>
          </PricingCard>
        </PricingWrapper>

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
        <CTA href={consultationLink} target="_blank" rel="noopener noreferrer">
          Book your personalised Ayurveda consultation with Shree
        </CTA>
      </Container>
    </Section>
  );
}

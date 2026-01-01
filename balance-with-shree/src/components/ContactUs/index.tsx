import {
  Section,
  Container,
  Header,
  Title,
  Description,
  Grid,
  Card,
  CardTitle,
  CardText,
  WhatsAppCTA,
  Divider,
  Form,
  Input,
  Textarea,
  Submit,
} from "./style";
import { motion } from "framer-motion";

export default function Contact() {
  const whatsappNumber = "919999999999";
  const message = encodeURIComponent(
    "Hi Shree, I feel drawn to your work and would love to begin my wellness journey with you."
  );

  return (
    <Section>
      <Container>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Header>
            <Title>
              Begin a <span>Gentler</span> Journey
            </Title>
            <Description>
              Wellness is personal. If you’re feeling called to slow down, heal,
              and reconnect with your body — let’s start with a conversation.
            </Description>
          </Header>
        </motion.div>

        {/* CONTENT GRID */}
        <Grid>
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
          >
            <Card>
              <CardTitle>Connect Personally</CardTitle>

              <CardText>
                I work closely with a limited number of clients to ensure deep,
                mindful guidance. The best way to begin is through a personal
                conversation.
              </CardText>

              <Divider />

              <CardText>
                📧 <strong>Email</strong>
                <br />
                balancewithshree@gmail.com
              </CardText>

              <CardText>
                📍 <strong>Sessions</strong>
                <br />
                Online • One-on-One • Worldwide
              </CardText>

              <CardText
                style={{
                  background: "#f4faf6",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  fontSize: "14px",
                  color: "#2e6b55",
                  marginTop: "20px",
                }}
              >
                ✨{" "}
                <strong>
                  Currently accepting a limited number of new clients
                </strong>
                <br />
                to ensure deeply personalised guidance.
              </CardText>

              <CardText style={{ fontStyle: "italic", marginTop: "16px" }}>
                Prefer speaking instead of typing?
              </CardText>

              <WhatsAppCTA
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "transparent",
                  color: "#1f5f4a",
                  border: "1px solid #1f5f4a",
                  boxShadow: "none",
                  marginTop: "12px",
                }}
              >
                🎙️ Send a Voice Note on WhatsApp
              </WhatsAppCTA>
            </Card>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <Card>
              <CardTitle>Or Leave a Message</CardTitle>

              <CardText>
                Prefer writing? Share a few words and I’ll personally get back
                to you.
              </CardText>

              <Form>
                <Input placeholder="Your name" />
                <Input placeholder="Email address" type="email" />
                <Textarea placeholder="What are you seeking support with?" />
                <Submit>Send Message</Submit>
              </Form>
            </Card>
          </motion.div>
        </Grid>
      </Container>
    </Section>
  );
}

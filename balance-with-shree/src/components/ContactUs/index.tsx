import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { EMAILJS_CONFIG } from "../../config/emailConfig";
import { Button } from "../Button";
import {
  buildWhatsAppUrl,
  contactData,
  contactMessages,
} from "../../data/contact";
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
  Divider,
  Form,
  Input,
  Textarea,
  SuccessMessage,
  ErrorMessage,
  GlobalStyle,
} from "./style";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSuccess(false);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setIsSubmitting(true);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: contactData.receiverEmail,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
      );

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      window.setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <GlobalStyle />
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
                Wellness is personal. If you’re feeling called to slow down,
                heal, and reconnect with your body — let’s start with a
                conversation.
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
                  I work closely with a limited number of clients to ensure
                  deep, mindful guidance. The best way to begin is through a
                  personal conversation.
                </CardText>

                <Divider />

                <CardText>
                  📧 <strong>Email</strong>
                  <br />
                  <a
                    href={`mailto:${contactData.publicEmail}`}
                    style={{ color: "inherit" }}
                  >
                    {contactData.publicEmail}
                  </a>
                </CardText>

                <CardText>
                  📞 <strong>Call</strong>
                  <br />
                  <a href={contactData.phoneHref} style={{ color: "inherit" }}>
                    {contactData.phoneDisplay}
                  </a>
                </CardText>

                <CardText>
                  📍 <strong>Sessions</strong>
                  <br />
                  {contactData.sessionsLabel}
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

                <Button
                  href={buildWhatsAppUrl(contactMessages.contactIntro)}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  variant="outline"
                  size="lg"
                  style={{
                    marginTop: "12px",
                  }}
                >
                  🎙️ Send a Voice Note on WhatsApp
                </Button>
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

                <Form onSubmit={handleSubmit}>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-label="Your name"
                    autoComplete="name"
                    disabled={isSubmitting}
                  />
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    aria-label="Email address"
                    autoComplete="email"
                    disabled={isSubmitting}
                  />
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What are you seeking support with?"
                    aria-label="What are you seeking support with?"
                    disabled={isSubmitting}
                  />
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                  {isSuccess && (
                    <SuccessMessage>
                      Thank you! Your message has been sent successfully.
                    </SuccessMessage>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    fullWidth
                    size="lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </Form>
              </Card>
            </motion.div>
          </Grid>
        </Container>
      </Section>
    </>
  );
}

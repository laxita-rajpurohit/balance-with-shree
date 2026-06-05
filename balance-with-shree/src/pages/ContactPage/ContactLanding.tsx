import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  AudioLines,
  Globe2,
  Mail,
  MessageCircleMore,
  PhoneCall,
} from "lucide-react";
import { Button } from "../../components/Button";
import { EMAILJS_CONFIG } from "../../config/emailConfig";
import {
  buildWhatsAppUrl,
  contactData,
  contactMessages,
} from "../../data/contact";
import {
  ActionArrow,
  ActionContent,
  ActionIcon,
  ActionLabel,
  ActionRows,
  ActionRow,
  ActionValue,
  CardText,
  CardTitle,
  Column,
  ContactCard,
  Divider,
  ErrorMessage,
  Field,
  Form,
  FormCard,
  GlobalStyle,
  Hero,
  HeroActions,
  InfoRow,
  Input,
  Label,
  LeftColumn,
  MainGrid,
  NoticeCard,
  Page,
  RightColumn,
  SectionBody,
  SectionTitle,
  Stack,
  SuccessMessage,
  Textarea,
  VoiceNoteAction,
  VoiceNoteCard,
} from "./ContactLanding.styles";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactLanding = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

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
      <Page>
        <Column>
          <Stack>
            <Hero>
              <SectionTitle>Begin a Gentler Journey</SectionTitle>
              <Divider>
                <span>✦</span>
              </Divider>
              <SectionBody>
                Wellness is personal. If you&apos;re feeling called to slow
                down, heal, and reconnect with your body — let&apos;s start with
                a conversation.
              </SectionBody>

              <HeroActions>
                <Button
                  href={buildWhatsAppUrl(contactMessages.contactIntro)}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  icon={<MessageCircleMore size={18} strokeWidth={1.9} />}
                  size="lg"
                >
                  Chat on WhatsApp
                </Button>
                <Button
                  href={contactData.phoneHref}
                  icon={<PhoneCall size={18} strokeWidth={1.9} />}
                  variant="outline"
                  size="lg"
                >
                  Call Now
                </Button>
              </HeroActions>
            </Hero>

            <MainGrid>
              <LeftColumn>
                <ContactCard>
                  <CardTitle>Connect Personally</CardTitle>
                  <CardText>
                    I work closely with a limited number of clients to ensure
                    deep, mindful guidance. The best way to begin is through a
                    personal conversation.
                  </CardText>

                  <ActionRows>
                    <ActionRow href={`mailto:${contactData.publicEmail}`}>
                      <ActionIcon>
                        <Mail size={18} strokeWidth={1.9} />
                      </ActionIcon>
                      <ActionContent>
                        <ActionLabel>Email</ActionLabel>
                        <ActionValue>{contactData.publicEmail}</ActionValue>
                      </ActionContent>
                      <ActionArrow aria-hidden="true">↗</ActionArrow>
                    </ActionRow>

                    <ActionRow href={contactData.phoneHref}>
                      <ActionIcon>
                        <PhoneCall size={18} strokeWidth={1.9} />
                      </ActionIcon>
                      <ActionContent>
                        <ActionLabel>Call</ActionLabel>
                        <ActionValue>{contactData.phoneDisplay}</ActionValue>
                      </ActionContent>
                      <ActionArrow aria-hidden="true">↗</ActionArrow>
                    </ActionRow>
                  </ActionRows>

                  <InfoRow>
                    <ActionIcon>
                      <Globe2 size={18} strokeWidth={1.9} />
                    </ActionIcon>
                    <ActionContent>
                      <ActionLabel>Sessions</ActionLabel>
                      <ActionValue>{contactData.sessionsLabel}</ActionValue>
                    </ActionContent>
                  </InfoRow>

                  <NoticeCard>
                    <strong>
                      Currently accepting a limited number of new clients
                    </strong>
                    <br />
                    to ensure deeply personalised guidance.
                  </NoticeCard>
                </ContactCard>

                <VoiceNoteCard>
                  <CardTitle>Prefer speaking instead of typing?</CardTitle>
                  <VoiceNoteAction>
                    <Button
                      href={buildWhatsAppUrl(contactMessages.contactIntro)}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      fullWidth
                      size="lg"
                      icon={<AudioLines size={18} strokeWidth={1.9} />}
                    >
                      Send a Voice Note on WhatsApp
                    </Button>
                  </VoiceNoteAction>
                </VoiceNoteCard>
              </LeftColumn>

              <RightColumn>
                <FormCard>
                  <CardTitle>Or Leave a Message</CardTitle>
                  <CardText>
                    Prefer writing? Share a few words and I&apos;ll personally get
                    back to you.
                  </CardText>

                  <Form onSubmit={handleSubmit}>
                    <Field>
                      <Label htmlFor="contact-name">Your name</Label>
                      <Input
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        autoComplete="name"
                        disabled={isSubmitting}
                      />
                    </Field>

                    <Field>
                      <Label htmlFor="contact-email">Email address</Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        autoComplete="email"
                        disabled={isSubmitting}
                      />
                    </Field>

                    <Field>
                      <Label htmlFor="contact-message">
                        What are you seeking support with?
                      </Label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What are you seeking support with?"
                        disabled={isSubmitting}
                      />
                    </Field>

                    {error ? <ErrorMessage>{error}</ErrorMessage> : null}
                    {isSuccess ? (
                      <SuccessMessage>
                        Thank you! Your message has been sent successfully.
                      </SuccessMessage>
                    ) : null}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary"
                      fullWidth
                      size="lg"
                      icon={<ArrowRight size={18} strokeWidth={1.9} />}
                      iconPosition="right"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Form>
                </FormCard>
              </RightColumn>
            </MainGrid>
          </Stack>
        </Column>
      </Page>
    </>
  );
};

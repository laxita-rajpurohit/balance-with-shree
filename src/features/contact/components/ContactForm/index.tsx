import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../../../shared/ui/Button";
import { contactService, type ContactFormData } from "../../contact.service";
import {
  FormCard,
  CardTitle,
  CardText,
  Form,
  Field,
  Label,
  Input,
  Textarea,
  ErrorMessage,
  SuccessMessage,
} from "./styles";

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    contactService.init();
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

      await contactService.sendEmail(formData);

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
    <FormCard>
      <CardTitle>Or Leave a Message</CardTitle>
      <CardText>
        Prefer writing? Share a few words and I&apos;ll personally get back to
        you.
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
  );
};

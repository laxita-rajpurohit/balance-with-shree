import { MessageCircleMore } from "lucide-react";
import { Button } from "../../../../shared/ui/Button";
import { buildWhatsAppUrl, contactMessages } from "../../../../shared/data/contact";
import {
  FinalCta,
  FinalCtaTitle,
  FinalCtaText,
  FinalCtaActions,
} from "./styles";

interface AboutFinalCtaProps {
  onBookSession: () => void;
}

export const AboutFinalCta = ({ onBookSession }: AboutFinalCtaProps) => {
  return (
    <FinalCta>
      <FinalCtaTitle>Ready to begin your wellness journey?</FinalCtaTitle>
      <FinalCtaText>
        Start with a simple conversation and explore the support that feels
        right for you.
      </FinalCtaText>
      <FinalCtaActions>
        <Button size="lg" onClick={onBookSession}>
          Book a Session
        </Button>
        <Button
          href={buildWhatsAppUrl(contactMessages.contactIntro)}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          size="lg"
          icon={<MessageCircleMore size={18} strokeWidth={1.9} />}
        >
          Chat on WhatsApp
        </Button>
      </FinalCtaActions>
    </FinalCta>
  );
};

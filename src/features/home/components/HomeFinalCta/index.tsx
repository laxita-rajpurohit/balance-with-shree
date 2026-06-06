import { MessageCircleMore } from "lucide-react";
import { Button } from "../../../../shared/ui/Button";
import { buildWhatsAppUrl, contactMessages } from "../../../../shared/data/contact";
import {
  FinalCtaSection,
  FinalCtaTitle,
  FinalCtaText,
  FinalCtaActions,
} from "./styles";

interface HomeFinalCtaProps {
  onBookSession: () => void;
}

export const HomeFinalCta = ({ onBookSession }: HomeFinalCtaProps) => {
  return (
    <FinalCtaSection>
      <FinalCtaTitle>Ready to begin your wellness journey?</FinalCtaTitle>
      <FinalCtaText>
        Start with a simple conversation and explore the support that feels
        right for you.
      </FinalCtaText>
      <FinalCtaActions>
        <Button variant="secondary" size="lg" onClick={onBookSession}>
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
    </FinalCtaSection>
  );
};

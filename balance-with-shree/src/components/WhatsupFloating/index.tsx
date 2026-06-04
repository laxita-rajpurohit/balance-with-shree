import { MessageCircleMore } from "lucide-react";
import { buildWhatsAppUrl, contactMessages } from "../../data/contact";
import { FloatingButton, Hint } from "./style";

export default function WhatsAppFloating() {
  return (
    <FloatingButton
      href={buildWhatsAppUrl(contactMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircleMore size={24} strokeWidth={1.9} />
      <Hint>Chat on WhatsApp</Hint>
    </FloatingButton>
  );
}

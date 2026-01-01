import { FloatingButton, Hint } from "./style";

export default function WhatsAppFloating() {
  const whatsappNumber = "919999999999";
  const message = encodeURIComponent(
    "Hi Shree, I’d love to connect regarding your wellness offerings."
  );

  return (
    <FloatingButton
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      💬
      <Hint>Chat on WhatsApp</Hint>
    </FloatingButton>
  );
}

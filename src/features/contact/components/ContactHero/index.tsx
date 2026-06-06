import { MessageCircleMore, PhoneCall } from "lucide-react";
import { Button } from "../../../../shared/ui/Button";
import {
  Hero,
  SectionTitle,
  Divider,
  SectionBody,
  HeroActions,
} from "./styles";

interface ContactHeroProps {
  whatsappUrl: string;
  phoneHref: string;
}

export const ContactHero = ({ whatsappUrl, phoneHref }: ContactHeroProps) => {
  return (
    <Hero>
      <SectionTitle>Begin a Gentler Journey</SectionTitle>
      <Divider>
        <span>✦</span>
      </Divider>
      <SectionBody>
        Wellness is personal. If you&apos;re feeling called to slow down, heal,
        and reconnect with your body — let&apos;s start with a conversation.
      </SectionBody>

      <HeroActions>
        <Button
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          icon={<MessageCircleMore size={18} strokeWidth={1.9} />}
          size="lg"
        >
          Chat on WhatsApp
        </Button>
        <Button
          href={phoneHref}
          icon={<PhoneCall size={18} strokeWidth={1.9} />}
          variant="outline"
          size="lg"
        >
          Call Now
        </Button>
      </HeroActions>
    </Hero>
  );
};

import { Check } from "lucide-react";
import { Button } from "../../../../shared/ui/Button";
import { buildWhatsAppUrl, contactMessages } from "../../../../shared/data/contact";
import {
  DiscoverySection,
  SectionTitle,
  SectionBody,
  DiscoveryCard,
  DiscoveryTitle,
  DiscoveryMeta,
  DiscoveryPrice,
  DiscoveryList,
  DiscoveryItem,
  BulletIcon,
  DiscoveryAction,
} from "./styles";

export const AyurvedaPricing = () => {
  return (
    <DiscoverySection id="ayurveda-discovery">
      <SectionTitle>Book a Discovery Call</SectionTitle>
      <SectionBody>
        Not sure where to begin? Start with a short call to understand what
        you need.
      </SectionBody>

      <DiscoveryCard>
        <DiscoveryTitle>Ayurveda Discovery Call</DiscoveryTitle>
        <DiscoveryMeta>20 Minutes • Online via Zoom/WhatsApp</DiscoveryMeta>
        <DiscoveryPrice>
          <span>₹</span>300
        </DiscoveryPrice>

        <DiscoveryList>
          <DiscoveryItem>
            <BulletIcon $warm>
              <Check size={12} strokeWidth={2.6} />
            </BulletIcon>
            <span>Brief dosha &amp; lifestyle overview</span>
          </DiscoveryItem>
          <DiscoveryItem>
            <BulletIcon $warm>
              <Check size={12} strokeWidth={2.6} />
            </BulletIcon>
            <span>Clarity on your main concerns</span>
          </DiscoveryItem>
          <DiscoveryItem>
            <BulletIcon $warm>
              <Check size={12} strokeWidth={2.6} />
            </BulletIcon>
            <span>Recommendations on next best steps</span>
          </DiscoveryItem>
        </DiscoveryList>

        <DiscoveryAction>
          <Button
            href={buildWhatsAppUrl(contactMessages.ayurvedaDiscovery)}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            size="lg"
          >
            Book My Ayurveda Discovery Call
          </Button>
        </DiscoveryAction>
      </DiscoveryCard>
    </DiscoverySection>
  );
};

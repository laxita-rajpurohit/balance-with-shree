import { Check, MessageCircleMore } from "lucide-react";
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
  ChecklistIcon,
  DiscoveryActions,
} from "./styles";

export const NutritionPricing = () => {
  return (
    <DiscoverySection id="pricing-section">
      <SectionTitle>Start Your Journey</SectionTitle>
      <SectionBody>
        A simple first step towards balanced, sustainable health.
      </SectionBody>

      <DiscoveryCard>
        <DiscoveryTitle>Discovery Call</DiscoveryTitle>
        <DiscoveryMeta>
          30 Minutes • Online via Zoom / WhatsApp
        </DiscoveryMeta>
        <DiscoveryPrice>
          <span>₹</span>299
        </DiscoveryPrice>

        <DiscoveryList>
          <DiscoveryItem>
            <ChecklistIcon>
              <Check size={12} strokeWidth={2.6} />
            </ChecklistIcon>
            <span>Dietary pattern analysis</span>
          </DiscoveryItem>
          <DiscoveryItem>
            <ChecklistIcon>
              <Check size={12} strokeWidth={2.6} />
            </ChecklistIcon>
            <span>Goal-setting strategy</span>
          </DiscoveryItem>
          <DiscoveryItem>
            <ChecklistIcon>
              <Check size={12} strokeWidth={2.6} />
            </ChecklistIcon>
            <span>Personal Q&amp;A session</span>
          </DiscoveryItem>
        </DiscoveryList>

        <DiscoveryActions>
          <Button
            href={buildWhatsAppUrl(contactMessages.nutritionDiscovery)}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            size="lg"
          >
            Book My Session
          </Button>
          <Button
            href={buildWhatsAppUrl(contactMessages.contactIntro)}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
            fullWidth
            icon={<MessageCircleMore size={18} strokeWidth={1.9} />}
          >
            Chat on WhatsApp
          </Button>
        </DiscoveryActions>
      </DiscoveryCard>
    </DiscoverySection>
  );
};

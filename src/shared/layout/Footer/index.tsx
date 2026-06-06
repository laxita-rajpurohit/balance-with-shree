import {
  FooterWrapper,
  FooterContainer,
  Left,
  Logo,
  Tagline,
  IconRow,
  IconLink,
  LegalRow,
  TextLink,
} from "./style";

import { Instagram, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Modal } from "../../ui/Modal";
import { PrivacyPolicy } from "../../ui/PrivacyPolicy";
import { TermsConditions } from "../../ui/TermsConditions";
import { buildWhatsAppUrl, contactData } from "../../data/contact";

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <FooterWrapper>
      <FooterContainer>
        {/* LEFT */}
        <Left>
          <Logo>Balance with Shree</Logo>
          <Tagline>Yoga • Nutrition • Ayurveda</Tagline>
        </Left>

        {/* CENTER */}
        <LegalRow>
          <TextLink as="button" onClick={() => setPrivacyOpen(true)}>
            Privacy Policy
          </TextLink>
          <TextLink as="button" onClick={() => setTermsOpen(true)}>
            Terms of Service
          </TextLink>
        </LegalRow>

        {/* RIGHT */}
        <IconRow>
          <IconLink
            href={contactData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Balance with Shree on Instagram"
          >
            <Instagram size={16} />
          </IconLink>

          <IconLink
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Balance with Shree on WhatsApp"
          >
            <MessageCircle size={16} />
          </IconLink>

          <IconLink
            href={`mailto:${contactData.publicEmail}`}
            aria-label="Send an email to Balance with Shree"
          >
            <Mail size={16} />
          </IconLink>
        </IconRow>
      </FooterContainer>

      <Modal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)}>
        <PrivacyPolicy />
      </Modal>

      <Modal isOpen={termsOpen} onClose={() => setTermsOpen(false)}>
        <TermsConditions />
      </Modal>
    </FooterWrapper>
  );
}

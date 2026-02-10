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

export default function Footer() {
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
          <TextLink href="/privacy">Privacy Policy</TextLink>
          <TextLink href="/terms">Terms of Service</TextLink>
        </LegalRow>

        {/* RIGHT */}
        <IconRow>
          <IconLink
            href="https://www.instagram.com/balancewithshree"
            target="_blank"
          >
            <Instagram size={16} />
          </IconLink>

          <IconLink href="https://wa.me/918087048759" target="_blank">
            <MessageCircle size={16} />
          </IconLink>

          <IconLink href="mailto:balancewithshree@gmail.com">
            <Mail size={16} />
          </IconLink>
        </IconRow>
      </FooterContainer>
    </FooterWrapper>
  );
}

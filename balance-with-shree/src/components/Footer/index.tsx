import { useEffect, useState } from "react";
import {
  FooterWrapper,
  FooterContainer,
  Left,
  Logo,
  Tagline,
  Right,
  IconRow,
  IconLink,
  TextLink,
  LegalRow,
  MobileBar,
  MobileIcon,
} from "./style";

import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 120;

      setVisible(nearBottom);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ===== DESKTOP FOOTER ===== */}
      <FooterWrapper $visible={visible}>
        <FooterContainer>
          <Left>
            <Logo>Balance with Shree</Logo>
            <Tagline>Yoga • Nutrition • Ayurveda</Tagline>
          </Left>

          <Right>
            <IconRow>
              <IconLink
                href="https://www.instagram.com/balancewithshree?igsh=MXAwMGY0cGh2MXBpZw%3D%3D&utm_source=qr"
                target="_blank"
              >
                <Instagram size={18} />
              </IconLink>

              <IconLink href="https://wa.me/919999999999" target="_blank">
                <MessageCircle size={18} />
              </IconLink>

              <IconLink href="mailto:balancewithshree@gmail.com">
                <Mail size={18} />
              </IconLink>
            </IconRow>

            <LegalRow>
              <TextLink href="/privacy">Privacy Policy</TextLink>
              <TextLink href="/terms">Terms of Service</TextLink>
            </LegalRow>
          </Right>
        </FooterContainer>
      </FooterWrapper>

      {/* ===== MOBILE BOTTOM BAR ===== */}
      <MobileBar>
        <MobileIcon
          href="https://www.instagram.com/balancewithshree"
          target="_blank"
        >
          <Instagram size={20} />
        </MobileIcon>

        <MobileIcon href="https://wa.me/919999999999" target="_blank">
          <MessageCircle size={20} />
        </MobileIcon>

        <MobileIcon href="mailto:balancewithshree@gmail.com">
          <Mail size={20} />
        </MobileIcon>
      </MobileBar>
    </>
  );
}

import {
  Content,
  Section,
  SectionText,
  SectionTitle,
  Title,
  Wrapper,
} from "./style";

export const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <Title>Privacy Policy</Title>
      <Content>
        <Section>
          <SectionText>
            We respect your privacy and are committed to protecting your
            personal information.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>Information We Collect</SectionTitle>
          <SectionText>
            Any details shared through this website (such as name, contact
            number, email, health-related information for sessions, or
            inquiries) are used only for communication, service delivery, and
            appointment purposes.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>How We Use Your Information</SectionTitle>
          <SectionText>
            Your personal information is used solely for:
          </SectionText>
          <SectionText>
            • Communication regarding services and appointments
            <br />
            • Service delivery and session coordination
            <br />• Responding to your inquiries
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>Data Protection</SectionTitle>
          <SectionText>
            We do not sell, share, or distribute your personal data to third
            parties. Your information is kept secure and confidential.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>Your Consent</SectionTitle>
          <SectionText>
            By using this website, you agree to this privacy policy.
          </SectionText>
        </Section>
      </Content>
    </Wrapper>
  );
};

import { Content, Section, SectionText, Title, Wrapper } from "./style";

export const TermsConditions = () => {
  return (
    <Wrapper>
      <Title>Terms & Conditions</Title>
      <Content>
        <Section>
          <SectionText>
            • All yoga sessions and wellness services are provided for general
            health and well-being purposes.
          </SectionText>
          <SectionText>
            • Clients should inform about any medical conditions, injuries, or
            pregnancy before starting sessions.
          </SectionText>
          <SectionText>• Results may vary from person to person.</SectionText>
          <SectionText>
            • Payments once made are non-refundable unless stated otherwise.
          </SectionText>
          <SectionText>
            • Session schedules are subject to availability and prior booking.
          </SectionText>
          <SectionText>
            • The instructor is not responsible for injuries caused due to
            incorrect practice outside guided sessions.
          </SectionText>
        </Section>

        <Section>
          <SectionText>
            By booking or using our services, you agree to these terms and
            conditions.
          </SectionText>
        </Section>
      </Content>
    </Wrapper>
  );
};

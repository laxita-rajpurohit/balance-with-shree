import { contactData, contactMessages, buildWhatsAppUrl } from "../../shared/data/contact";
import {
  ContactHero,
  ContactForm,
  ContactDetails,
} from "../../features/contact/components";
import {
  Column,
  GlobalStyle,
  LeftColumn,
  MainGrid,
  Page,
  RightColumn,
  Stack,
} from "./ContactLanding.styles";

export const ContactLanding = () => {
  return (
    <>
      <GlobalStyle />
      <Page>
        <Column>
          <Stack>
            <ContactHero
              whatsappUrl={buildWhatsAppUrl(contactMessages.contactIntro)}
              phoneHref={contactData.phoneHref}
            />

            <MainGrid>
              <LeftColumn>
                <ContactDetails
                  contactData={contactData}
                  whatsappUrl={buildWhatsAppUrl(contactMessages.contactIntro)}
                />
              </LeftColumn>

              <RightColumn>
                <ContactForm />
              </RightColumn>
            </MainGrid>
          </Stack>
        </Column>
      </Page>
    </>
  );
};

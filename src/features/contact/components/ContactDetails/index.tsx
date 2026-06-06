import { AudioLines, Globe2, Mail, PhoneCall } from "lucide-react";
import { Button } from "../../../../shared/ui/Button";
import type { ContactInfo } from "../../../../shared/types/contact";
import {
  ContactCard,
  CardTitle,
  CardText,
  ActionRows,
  ActionRow,
  ActionIcon,
  ActionContent,
  ActionLabel,
  ActionValue,
  ActionArrow,
  InfoRow,
  NoticeCard,
  VoiceNoteCard,
  VoiceNoteAction,
} from "./styles";

interface ContactDetailsProps {
  contactData: ContactInfo;
  whatsappUrl: string;
}

export const ContactDetails = ({
  contactData,
  whatsappUrl,
}: ContactDetailsProps) => {
  return (
    <>
      <ContactCard>
        <CardTitle>Connect Personally</CardTitle>
        <CardText>
          I work closely with a limited number of clients to ensure deep,
          mindful guidance. The best way to begin is through a personal
          conversation.
        </CardText>

        <ActionRows>
          <ActionRow href={`mailto:${contactData.publicEmail}`}>
            <ActionIcon>
              <Mail size={18} strokeWidth={1.9} />
            </ActionIcon>
            <ActionContent>
              <ActionLabel>Email</ActionLabel>
              <ActionValue>{contactData.publicEmail}</ActionValue>
            </ActionContent>
            <ActionArrow aria-hidden="true">↗</ActionArrow>
          </ActionRow>

          <ActionRow href={contactData.phoneHref}>
            <ActionIcon>
              <PhoneCall size={18} strokeWidth={1.9} />
            </ActionIcon>
            <ActionContent>
              <ActionLabel>Call</ActionLabel>
              <ActionValue>{contactData.phoneDisplay}</ActionValue>
            </ActionContent>
            <ActionArrow aria-hidden="true">↗</ActionArrow>
          </ActionRow>
        </ActionRows>

        <InfoRow>
          <ActionIcon>
            <Globe2 size={18} strokeWidth={1.9} />
          </ActionIcon>
          <ActionContent>
            <ActionLabel>Sessions</ActionLabel>
            <ActionValue>{contactData.sessionsLabel}</ActionValue>
          </ActionContent>
        </InfoRow>

        <NoticeCard>
          <strong>Currently accepting a limited number of new clients</strong>
          <br />
          to ensure deeply personalised guidance.
        </NoticeCard>
      </ContactCard>

      <VoiceNoteCard>
        <CardTitle>Prefer speaking instead of typing?</CardTitle>
        <VoiceNoteAction>
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            fullWidth
            size="lg"
            icon={<AudioLines size={18} strokeWidth={1.9} />}
          >
            Send a Voice Note on WhatsApp
          </Button>
        </VoiceNoteAction>
      </VoiceNoteCard>
    </>
  );
};

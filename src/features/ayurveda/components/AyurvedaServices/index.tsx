import { Check, type LucideIcon } from "lucide-react";
import {
  CardSection,
  SectionTitle,
  IncludesGrid,
  IncludesCard,
  CardHeader,
  Badge,
  StatusBadge,
  CardTitle,
  SupportingText,
  BulletList,
  BulletItem,
  BulletIcon,
} from "./styles";

interface AyurvedaInclude {
  title: string;
  icon: LucideIcon;
  items: readonly string[];
  note?: string;
  comingSoon?: boolean;
}

interface AyurvedaServicesProps {
  includes: readonly AyurvedaInclude[];
}

export const AyurvedaServices = ({ includes }: AyurvedaServicesProps) => {
  return (
    <CardSection>
      <SectionTitle>What This Includes</SectionTitle>

      <IncludesGrid>
        {includes.map(({ title, icon: Icon, items, note, comingSoon }) => (
          <IncludesCard key={title}>
            <CardHeader>
              <Badge $warm={comingSoon}>
                <Icon size={18} strokeWidth={1.9} />
              </Badge>
              {comingSoon ? <StatusBadge>Coming Soon</StatusBadge> : null}
            </CardHeader>

            <CardTitle>{title}</CardTitle>

            {note ? <SupportingText>{note}</SupportingText> : null}

            <BulletList>
              {items.map((item) => (
                <BulletItem key={item}>
                  <BulletIcon $warm={comingSoon}>
                    <Check size={12} strokeWidth={2.6} />
                  </BulletIcon>
                  <span>{item}</span>
                </BulletItem>
              ))}
            </BulletList>
          </IncludesCard>
        ))}
      </IncludesGrid>
    </CardSection>
  );
};

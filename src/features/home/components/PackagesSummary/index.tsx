import type { LucideIcon } from "lucide-react";
import {
  PackagesCard,
  SectionTitle,
  DecorativeDivider,
  SectionBody,
  PackageGrid,
  PackageItem,
  PackageIcon,
  PackageLabel,
} from "./styles";

interface PackageItemData {
  label: string;
  icon: LucideIcon;
}

interface PackagesSummaryProps {
  packageItems: readonly PackageItemData[];
}

export const PackagesSummary = ({ packageItems }: PackagesSummaryProps) => {
  return (
    <PackagesCard>
      <SectionTitle as="h2">Yoga Packages</SectionTitle>
      <DecorativeDivider>
        <span>✦</span>
      </DecorativeDivider>
      <SectionBody>
        Yoga packages available as group sessions, personalised private
        training, and specialised prenatal support — with guidance tailored to
        individual needs and consultation.
      </SectionBody>

      <PackageGrid>
        {packageItems.map(({ label, icon: Icon }) => (
          <PackageItem key={label}>
            <PackageIcon>
              <Icon size={17} strokeWidth={1.9} />
            </PackageIcon>
            <PackageLabel>{label}</PackageLabel>
          </PackageItem>
        ))}
      </PackageGrid>
    </PackagesCard>
  );
};

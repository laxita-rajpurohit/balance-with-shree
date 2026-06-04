import { Flower2, HeartHandshake, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/primitives";
import {
  Section,
  Container,
  GlassWrap,
  PackagesRow,
  PackageCard,
  PackageIcon,
  PackageLabel,
} from "./style";

const packages = [
  { label: "Group Yoga", icon: Flower2 },
  { label: "Private Yoga", icon: HeartHandshake },
  { label: "Prenatal Yoga", icon: Sparkles },
] as const;

export const PackagesPreview = () => {
  return (
    <Section>
      <Container>
        <GlassWrap>
          <SectionHeading
            align="center"
            title="Yoga Packages"
            description="Yoga packages available as group sessions, personalised private training, and specialised prenatal support — with guidance tailored to individual needs and consultation."
          />

          <PackagesRow>
            {packages.map(({ label, icon: Icon }) => (
              <PackageCard key={label}>
                <PackageIcon>
                  <Icon size={18} strokeWidth={1.9} />
                </PackageIcon>
                <PackageLabel>{label}</PackageLabel>
              </PackageCard>
            ))}
          </PackagesRow>
        </GlassWrap>
      </Container>
    </Section>
  );
};

import {
  Section,
  Container,
  GlassWrap,
  Heading,
  SubText,
  PackagesRow,
  PackageButton,
} from "./style";

export const PackagesPreview = () => {
  return (
    <Section>
      <Container>
        <GlassWrap>
          <Heading>Yoga Packages</Heading>

          <SubText>
            Yoga packages available as group sessions, personalised private
            training, and specialised prenatal support — with guidance tailored
            to individual needs and consultation.
          </SubText>

          <PackagesRow>
            <PackageButton>Group Yoga</PackageButton>
            <PackageButton>Private Yoga</PackageButton>
            <PackageButton>Prenatal Yoga</PackageButton>
          </PackagesRow>
        </GlassWrap>
      </Container>
    </Section>
  );
};

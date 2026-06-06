import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  CTAButton,
  Title,
  PackageItem,
  PackageTitle,
  PackageNote,
} from "./style";

type Package = {
  title: string;
  note: string;
};

type Props = {
  title: string;
  packages: Package[];
  cta: string;
};

export const PackageDetails = ({ title, packages, cta }: Props) => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    // Navigate to the yoga page
    navigate("/yoga");
  };

  return (
    <Wrapper>
      <Title>{title}</Title>

      {packages.map((pkg) => (
        <PackageItem key={pkg.title}>
          <PackageTitle>{pkg.title}</PackageTitle>
          <PackageNote>{pkg.note}</PackageNote>
        </PackageItem>
      ))}

      <CTAButton onClick={handleCTAClick}>{cta}</CTAButton>
    </Wrapper>
  );
};

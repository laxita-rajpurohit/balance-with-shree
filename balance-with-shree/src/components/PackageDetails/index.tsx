import { BulletList, CTAButton, Icon, Title, Wrapper } from "./style";

type Props = {
  title: string;
  icon?: string;
  bullets: string[];
  cta: string;
};

export const PackageDetails = ({ title, icon, bullets, cta }: Props) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>

      <BulletList>
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </BulletList>

      <CTAButton>{cta}</CTAButton>
    </Wrapper>
  );
};

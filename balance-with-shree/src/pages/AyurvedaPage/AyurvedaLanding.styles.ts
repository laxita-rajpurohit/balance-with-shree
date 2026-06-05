import styled, { css } from "styled-components";

const surfaceCard = css`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`;

export const Page = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 0 82px;

  @media (min-width: 769px) {
    padding-bottom: 32px;
  }
`;

export const Column = styled.div`
  width: min(calc(100% - 20px), 1120px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: min(calc(100% - 18px), 430px);
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  > * {
    scroll-margin-top: 80px;
  }

  @media (min-width: 769px) {
    gap: 24px;

    > * {
      scroll-margin-top: 112px;
    }
  }
`;

export const CardSection = styled.section`
  ${surfaceCard};
  position: relative;
  overflow: hidden;
  padding: 18px;

  @media (min-width: 769px) {
    padding: 28px;
  }
`;

export const SectionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &::before,
  &::after {
    content: "✦";
    color: ${({ theme }) => theme.colors.warmAccent};
    font-size: 11px;
    line-height: 1;
  }
`;

export const SectionTitle = styled.h2`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(1.72rem, 6.4vw, 3rem);
  line-height: 1.08;
`;

export const SectionBody = styled.p`
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.64;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.7;
  }
`;

export const Divider = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.warmAccent};
  margin: 14px 0 2px;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 34px;
    height: 1.5px;
    background: currentColor;
  }

  span {
    font-size: 12px;
    line-height: 1;
  }
`;

export const Hero = styled.section`
  position: relative;
`;

export const HeroVisual = styled.div`
  ${surfaceCard};
  position: relative;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
  background: #eef5ee;
  aspect-ratio: 4 / 5;
  min-height: 396px;

  @media (max-width: 420px) {
    min-height: 382px;
  }

  @media (min-width: 769px) {
    border-radius: 30px;
    aspect-ratio: 16 / 10;
    min-height: 540px;
  }
`;

export const HeroPicture = styled.picture`
  display: block;
  width: 100%;
  height: 100%;
`;

export const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 56%;

  @media (min-width: 769px) {
    object-position: center 52%;
  }
`;

export const HeroWash = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 252, 247, 0.08) 84%, rgba(255, 250, 244, 0.18) 100%),
    radial-gradient(circle at top center, rgba(255, 255, 255, 0.12), transparent 35%);
`;

export const Intro = styled(CardSection)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.84), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 250, 244, 0.97));
  text-align: center;
`;

export const IncludesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 940px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const IncludesCard = styled(CardSection)`
  padding: 18px;
  box-shadow: 0 12px 28px rgba(15, 60, 40, 0.06);
  background:
    radial-gradient(circle at right top, rgba(226, 235, 224, 0.38), transparent 24%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(249, 247, 241, 0.98));
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

export const Badge = styled.span<{ $warm?: boolean }>`
  width: 38px;
  height: 38px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ $warm }) =>
    $warm ? "rgba(217, 184, 137, 0.14)" : "rgba(244, 250, 246, 0.98)"};
  color: ${({ theme, $warm }) =>
    $warm ? theme.colors.warmAccent : theme.colors.primary};
  border: 1px solid
    ${({ $warm }) =>
      $warm ? "rgba(217, 184, 137, 0.28)" : "rgba(122, 160, 143, 0.16)"};
  flex-shrink: 0;
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.06rem;
  line-height: 1.3;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(217, 184, 137, 0.14);
  color: #8b6736;
  border: 1px solid rgba(217, 184, 137, 0.28);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const BulletList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
`;

export const BulletItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  padding: 10px 12px;
  border-radius: 16px;
  background: rgba(249, 251, 247, 0.94);
  border: 1px solid rgba(122, 160, 143, 0.1);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  line-height: 1.5;
`;

export const BulletIcon = styled.span<{ $warm?: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ $warm }) =>
    $warm ? "rgba(217, 184, 137, 0.14)" : "rgba(244, 250, 246, 0.98)"};
  color: ${({ theme, $warm }) =>
    $warm ? theme.colors.warmAccent : theme.colors.primary};
  border: 1px solid
    ${({ $warm }) =>
      $warm ? "rgba(217, 184, 137, 0.28)" : "rgba(122, 160, 143, 0.16)"};
  margin-top: 1px;
`;

export const SupportingText = styled.p`
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.58;
`;

export const AudienceSection = styled(CardSection)`
  background:
    radial-gradient(circle at left top, rgba(221, 234, 225, 0.58), transparent 24%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(246, 250, 244, 0.97));
`;

export const AudienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 16px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const AudienceChip = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: center;
  padding: 14px 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
  box-shadow: 0 10px 22px rgba(15, 60, 40, 0.05);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  line-height: 1.45;
`;

export const AudienceIcon = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
`;

export const ApproachSection = styled(CardSection)`
  background:
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.48), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(247, 249, 243, 0.98));
`;

export const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-top: 18px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const StepCard = styled.div`
  ${surfaceCard};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 12px 28px rgba(15, 60, 40, 0.06);
  min-height: 142px;
`;

export const StepNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 16px;
  background: rgba(217, 184, 137, 0.14);
  border: 1px solid rgba(217, 184, 137, 0.28);
  color: #8b6736;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
`;

export const StepText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  line-height: 1.56;
`;

export const DiscoverySection = styled(CardSection)`
  background:
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.54), transparent 24%),
    radial-gradient(circle at right top, rgba(234, 226, 214, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(237, 246, 241, 0.97), rgba(228, 238, 221, 0.97));
  text-align: center;
`;

export const DiscoveryCard = styled.div`
  ${surfaceCard};
  max-width: 540px;
  margin: 18px auto 0;
  padding: 18px;
  box-shadow: 0 16px 30px rgba(15, 60, 40, 0.08);
`;

export const DiscoveryTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.24rem;
  line-height: 1.3;
`;

export const DiscoveryMeta = styled.p`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  line-height: 1.45;
`;

export const DiscoveryPrice = styled.div`
  margin-top: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1;

  span {
    font-size: 1rem;
    vertical-align: top;
    margin-right: 4px;
  }
`;

export const DiscoveryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
  text-align: left;
`;

export const DiscoveryItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  padding: 11px 12px;
  border-radius: 16px;
  background: rgba(249, 251, 247, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  line-height: 1.5;
`;

export const DiscoveryAction = styled.div`
  margin-top: 16px;

  > * {
    width: 100%;
  }
`;

export const DisclaimerCard = styled(CardSection)`
  background:
    radial-gradient(circle at right top, rgba(234, 226, 214, 0.32), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 247, 242, 0.98));
  padding-bottom: 26px;
`;

export const DisclaimerLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(217, 184, 137, 0.14);
  color: #8b6736;
  border: 1px solid rgba(217, 184, 137, 0.28);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const DisclaimerText = styled.p`
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  line-height: 1.62;

  @media (min-width: 769px) {
    font-size: 14px;
  }
`;

import styled, { css } from "styled-components";

const surfaceCard = css`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
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
  font-size: clamp(1.78rem, 6.8vw, 3rem);
  line-height: 1.08;
`;

export const SectionBody = styled.p`
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.62;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.68;
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

export const Intro = styled(CardSection)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.9), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 250, 245, 0.96));
  text-align: center;
`;

export const BenefitGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

export const BenefitCard = styled.div`
  ${surfaceCard};
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 118px;
  box-shadow: 0 12px 28px rgba(15, 60, 40, 0.06);
`;

export const BenefitBadge = styled.span`
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
`;

export const BenefitTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 15px;
  line-height: 1.3;
`;

export const BenefitText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  line-height: 1.5;
`;

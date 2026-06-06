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
  font-size: clamp(1.82rem, 7vw, 3.1rem);
  line-height: 1.06;
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

export const Hero = styled(CardSection)`
  background:
    radial-gradient(circle at top right, rgba(221, 234, 225, 0.82), transparent 34%),
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.34), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 360px) minmax(0, 1fr);
    gap: 28px;
  }
`;

export const HeroImageWrap = styled.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  min-height: 254px;
  background: #e8f1eb;
  box-shadow: 0 16px 36px rgba(15, 60, 40, 0.08);

  @media (min-width: 900px) {
    min-height: 410px;
  }
`;

export const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 36%;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const HeroMeta = styled.p`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;

  @media (min-width: 769px) {
    font-size: 14px;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;

  > * {
    width: 100%;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;

    > * {
      width: auto;
    }
  }
`;

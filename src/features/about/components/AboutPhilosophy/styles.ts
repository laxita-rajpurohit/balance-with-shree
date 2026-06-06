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

export const Philosophy = styled(CardSection)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.9), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 250, 245, 0.96));
`;

export const PhilosophyGrid = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 28px;
    align-items: start;
  }
`;

export const PhilosophyAccent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const PhilosophyChip = styled.div`
  min-height: 74px;
  border-radius: 18px;
  background: rgba(244, 250, 246, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px;
  gap: 6px;

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 14px;
    line-height: 1.3;
  }

  span {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 13px;
    line-height: 1.45;
  }
`;

export const PhilosophyCopy = styled.div`
  display: flex;
  flex-direction: column;
`;

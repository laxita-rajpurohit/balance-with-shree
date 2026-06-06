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

export const SectionCard = styled.section`
  ${surfaceCard};
  overflow: hidden;
  position: relative;
  padding: 16px;

  @media (min-width: 769px) {
    padding: 24px;
  }
`;

export const SectionTitle = styled.h2`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(2rem, 5.5vw, 3.25rem);
  line-height: 1.06;

  @media (max-width: 768px) {
    font-size: clamp(1.72rem, 8vw, 2.18rem);
  }
`;

export const SectionBody = styled.p`
  margin: 14px auto 0;
  max-width: 34ch;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 15px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const PackagesCard = styled(SectionCard)`
  text-align: center;
`;

export const DecorativeDivider = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.warmAccent};
  margin: 12px 0 0;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 34px;
    height: 1.5px;
    background: currentColor;
  }

  span {
    font-size: 13px;
    line-height: 1;
  }
`;

export const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) {
    gap: 14px;
  }
`;

export const PackageItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 66px;
  padding: 12px 12px 12px 10px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 10px 24px rgba(15, 60, 40, 0.05);

  @media (max-width: 420px) {
    min-height: 56px;
  }
`;

export const PackageIcon = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.96);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
  flex-shrink: 0;
`;

export const PackageLabel = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
`;

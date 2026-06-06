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

export const Page = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 0 24px;
`;

export const Column = styled.div`
  width: min(calc(100% - 22px), 1200px);
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
    scroll-margin-top: 76px;
  }

  @media (min-width: 769px) {
    > * {
      scroll-margin-top: 108px;
    }
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

export const SectionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &::before,
  &::after {
    content: "✦";
    color: ${({ theme }) => theme.colors.warmAccent};
    font-size: 12px;
    line-height: 1;
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


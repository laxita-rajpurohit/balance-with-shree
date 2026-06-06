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
  width: min(calc(100% - 20px), 1120px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: min(calc(100% - 18px), 430px);
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > * {
    scroll-margin-top: 76px;
  }

  @media (min-width: 769px) {
    gap: 26px;

    > * {
      scroll-margin-top: 110px;
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

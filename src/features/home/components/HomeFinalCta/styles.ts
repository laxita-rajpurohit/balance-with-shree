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

export const FinalCtaSection = styled.section`
  ${surfaceCard};
  position: relative;
  overflow: hidden;
  padding: 24px 18px 22px;
  background:
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.6), transparent 24%),
    radial-gradient(circle at right top, rgba(212, 227, 208, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(221, 237, 213, 0.92), rgba(206, 225, 194, 0.94));
  text-align: center;

  @media (min-width: 769px) {
    padding: 32px 24px 28px;
  }
`;

export const FinalCtaTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(1.9rem, 5vw, 2.6rem);
  line-height: 1.08;

  @media (max-width: 768px) {
    font-size: clamp(1.72rem, 8vw, 2.15rem);
  }
`;

export const FinalCtaText = styled.p`
  margin: 12px auto 0;
  max-width: 28ch;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.6;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.65;
  }
`;

export const FinalCtaActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 18px;
  align-items: center;

  > * {
    width: 100%;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;

    > * {
      width: auto;
    }
  }
`;

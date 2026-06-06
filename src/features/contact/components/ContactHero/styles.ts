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

export const CardSection = styled.section`
  ${surfaceCard};
  position: relative;
  overflow: hidden;
  padding: 18px;

  @media (min-width: 769px) {
    padding: 28px;
  }
`;

export const Hero = styled(CardSection)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.84), transparent 28%),
    radial-gradient(circle at left bottom, rgba(220, 232, 223, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.97));
  text-align: center;
`;

export const SectionTitle = styled.h1`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(1.8rem, 6.5vw, 3rem);
  line-height: 1.08;
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

export const SectionBody = styled.p`
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.66;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.72;
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

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;

    > * {
      width: auto;
      min-width: 184px;
    }
  }
`;

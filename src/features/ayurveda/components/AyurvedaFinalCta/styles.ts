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

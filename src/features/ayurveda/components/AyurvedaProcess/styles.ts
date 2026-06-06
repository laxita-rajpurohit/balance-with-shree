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

export const SectionTitle = styled.h2`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(1.72rem, 6.4vw, 3rem);
  line-height: 1.08;
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

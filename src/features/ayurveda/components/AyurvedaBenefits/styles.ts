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

export const AudienceSection = styled(CardSection)`
  background:
    radial-gradient(circle at left top, rgba(221, 234, 225, 0.58), transparent 24%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(246, 250, 244, 0.97));
`;

export const AudienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 16px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const AudienceChip = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: center;
  padding: 14px 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
  box-shadow: 0 10px 22px rgba(15, 60, 40, 0.05);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  line-height: 1.45;
`;

export const AudienceIcon = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
`;

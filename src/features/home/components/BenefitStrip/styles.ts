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

export const BenefitStripSection = styled.section`
  ${surfaceCard};
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(250, 251, 246, 0.96), rgba(245, 248, 239, 0.96));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BenefitItem = styled.div`
  min-height: 82px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 12px;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 18px;
    bottom: 18px;
    width: 1px;
    background: rgba(122, 160, 143, 0.16);
  }

  @media (max-width: 768px) {
    min-height: 64px;
    padding: 12px 14px;

    &:not(:last-child)::after {
      right: 14px;
      left: 14px;
      top: auto;
      bottom: 0;
      width: auto;
      height: 1px;
    }
  }
`;

export const BenefitIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
  flex-shrink: 0;
`;

export const BenefitText = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

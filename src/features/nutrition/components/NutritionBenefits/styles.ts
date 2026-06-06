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

export const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const SupportCard = styled.div`
  ${surfaceCard};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 116px;
  box-shadow: 0 12px 28px rgba(15, 60, 40, 0.06);
`;

export const SupportBadge = styled.span`
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
`;

export const SupportTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 15px;
  line-height: 1.3;
`;

export const SupportText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  line-height: 1.5;
`;

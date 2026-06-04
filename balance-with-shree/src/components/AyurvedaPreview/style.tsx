import styled from "styled-components";

/* ===============================
   SECTION
================================ */

export const Section = styled.section`
  padding: 0;
`;

/* ===============================
   MAIN PREMIUM CARD
================================ */

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  text-align: left;
  padding: 28px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.92),
    rgba(251, 249, 243, 0.94)
  );
  border-radius: 34px;
  border: 1px solid rgba(122, 160, 143, 0.14);
  box-shadow: 0 24px 60px rgba(15, 60, 40, 0.1);

  @media (max-width: 768px) {
    padding: 22px 18px;
    border-radius: 28px;
  }
`;

/* ===============================
   TYPOGRAPHY
================================ */

export const Title = styled.h2`
  font-size: 34px;
  font-weight: 600;
  letter-spacing: -0.4px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const Desc = styled.p`
  max-width: 640px;
  margin: 14px 0 24px;
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: 768px) {
    margin-bottom: 24px;
    font-size: 15px;
  }
`;

/* ===============================
   POINTS — EDITORIAL MINI BLOCKS
================================ */

export const Points = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 22px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Point = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.06);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 26px 52px rgba(0, 0, 0, 0.1);
  }
`;

export const PointIcon = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 14px;
  background: rgba(31, 95, 74, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const PointLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

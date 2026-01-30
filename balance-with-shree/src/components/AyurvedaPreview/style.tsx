import styled from "styled-components";

/* ===============================
   SECTION
================================ */

export const Section = styled.section`
  padding: 112px 0;
  background: ${({ theme }) => theme.colors.backgroundSoft};

  @media (max-width: 768px) {
    padding: 88px 0;
  }
`;

/* ===============================
   MAIN PREMIUM CARD
================================ */

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  text-align: center;
  padding: 64px 56px;

  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-radius: 36px;

  box-shadow:
    0px 40px 80px rgba(15, 60, 40, 0.12),
    inset 0 0 0 1px rgba(255, 255, 255, 0.6);

  @media (max-width: 768px) {
    padding: 48px 28px;
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
  margin: 20px auto 56px;
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: 768px) {
    margin-bottom: 44px;
    font-size: 15px;
  }
`;

/* ===============================
   POINTS — EDITORIAL MINI BLOCKS
================================ */

export const Points = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 64px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Point = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};

  padding: 22px 20px;
  border-radius: 22px;

  background: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};

  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.06);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 26px 52px rgba(0, 0, 0, 0.1);
  }
`;

/* ===============================
   CTA — PREMIUM, ON-BRAND
================================ */

export const CTA = styled.button`
  background: linear-gradient(180deg, #3f6f5b 0%, #345e4e 100%);
  color: #ffffff;

  padding: 14px 46px;
  border-radius: 999px;
  border: none;

  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.2px;
  cursor: pointer;

  box-shadow:
    0 12px 30px rgba(52, 94, 78, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

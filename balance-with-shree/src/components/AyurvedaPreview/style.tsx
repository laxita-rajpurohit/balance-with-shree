import styled from "styled-components";

/* ======================
   SECTION
====================== */

export const Section = styled.section`
  padding: 96px 0;
  background: ${({ theme }) => theme.colors.bgSecondary};

  @media (max-width: 768px) {
    padding: 72px 0;
  }
`;

/* ======================
   CONTAINER
====================== */

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

/* ======================
   TYPOGRAPHY
====================== */

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Desc = styled.p`
  max-width: 580px;
  margin: 0 auto 48px;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: 768px) {
    margin-bottom: 36px;
  }
`;

/* ======================
   POINTS
====================== */

export const Points = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 56px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 40px;
  }
`;

export const Point = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  position: relative;
  padding-bottom: 6px;

  /* subtle underline for editorial feel */
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 22px;
    height: 1px;
    background: ${({ theme }) => theme.colors.borderLight};
    transform: translateX(-50%);
  }
`;

/* ======================
   CTA
====================== */

export const CTA = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  padding: 14px 36px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textWhite};
    transform: translateY(-1px);
  }
`;

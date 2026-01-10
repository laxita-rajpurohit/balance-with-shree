import styled from "styled-components";

/* =====================
   BASE (MATCH PHILOSOPHY)
===================== */
export const Section = styled.section`
  padding: 120px 20px;
  background: #faf9f6;
  margin-bottom: 125px;
  border-radius: 24px;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Label = styled.span`
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #9bb7a5;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  color: #1f2a24;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Divider = styled.div`
  width: 48px;
  height: 2px;
  background: #9bb7a5;
  margin: 12px auto 32px;
`;

/* =====================
   CAROUSEL
===================== */
export const Carousel = styled.div`
  display: flex;
  overflow-x: hidden;
  perspective: 2000px;
`;

/* =====================
   CARD (3D + VARIANTS)
===================== */
export const Card = styled.div`
  flex: 0 0 100%;
  height: 360px;
  border-radius: 36px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  transform: translateZ(-260px) scale(0.82);
  filter: blur(10px);
  opacity: 0.25;

  transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);

  &.active {
    transform: translateZ(0) scale(1);
    filter: blur(0);
    opacity: 1;
    z-index: 3;
  }

  /* VARIANTS */
  &.yoga {
    background: linear-gradient(180deg, #ffffff, #f6faf8);
    box-shadow: 0px 60px 120px rgba(150, 199, 181, 0.35);
  }

  &.nutrition {
    background: linear-gradient(180deg, #ffffff, #f3f6fa);
    box-shadow: 0px 60px 120px rgba(10, 74, 166, 0.25);
  }

  &.ayurveda {
    background: linear-gradient(180deg, #fffaf3, #f5efe3);
    box-shadow: 0px 60px 120px rgba(217, 154, 66, 0.35);
  }

  &.training {
    background: linear-gradient(180deg, #ffffff, #f7f7f7);
    box-shadow: 0px 60px 120px rgba(54, 54, 54, 0.35);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const CertImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: contain;
  border-radius: 22px;
  padding: 20px;

  &.yoga {
    background: #f6faf8;
  }
  &.nutrition {
    background: #f3f6fa;
  }
  &.ayurveda {
    background: #f5efe3;
  }
  &.training {
    background: #f7f7f7;
  }
`;

export const CertTitle = styled.p`
  margin-top: 18px;
  font-size: 16px;
  font-weight: 500;
  color: #1f2a24;
`;

/* =====================
   PROGRESS
===================== */
export const Progress = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
`;

export const Dot = styled.div<{ $active?: boolean }>`
  width: ${({ $active }) => ($active ? "28px" : "8px")};
  height: 8px;
  border-radius: 999px;
  background: ${({ $active }) => ($active ? "#9bb7a5" : "#d8e2da")};
  cursor: pointer;
  transition: all 0.4s ease;
`;

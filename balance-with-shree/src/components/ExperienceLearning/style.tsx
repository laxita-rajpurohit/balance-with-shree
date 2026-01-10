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
  position: relative;
  flex: 0 0 100%;
  height: 360px;
  border-radius: 36px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  /* 3D BASE STATE */
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

  /* -----------------
     ART LAYER
  ------------------ */
  &::before {
    content: "";
    position: absolute;
    inset: -20%;
    opacity: 0.06;
    pointer-events: none;
    background-repeat: no-repeat;
    background-size: 600px;
    background-position: right bottom;
    transition: transform 1s ease, opacity 0.6s ease;
  }

  &.active::before {
    transform: translateY(-20px) rotate(2deg);
    opacity: 0.1;
  }

  /* -----------------
     VARIANTS
  ------------------ */

  /* 🧘 YOGA — flowing wave */
  &.yoga {
    background: linear-gradient(180deg, #ffffff, #f6faf8);
    box-shadow: 0px 60px 120px rgba(150, 199, 181, 0.35);

    &::before {
      background-image: url("data:image/svg+xml;utf8,\
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'>\
        <path d='M0,300 C150,200 350,400 600,300' fill='none' stroke='%239bb7a5' stroke-width='6'/>\
      </svg>");
    }
  }

  /* 🥗 NUTRITION — structured geometry */
  &.nutrition {
    background: linear-gradient(180deg, #ffffff, #f3f6fa);
    box-shadow: 0px 60px 120px rgba(10, 74, 166, 0.25);

    &::before {
      background-image: url("data:image/svg+xml;utf8,\
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'>\
        <rect x='80' y='80' width='440' height='440' rx='60' fill='none' stroke='%230a4aa6' stroke-width='5'/>\
      </svg>");
    }
  }

  /* 🌿 AYURVEDA — mandala / organic circle */
  &.ayurveda {
    background: linear-gradient(180deg, #fffaf3, #f5efe3);
    box-shadow: 0px 60px 120px rgba(217, 154, 66, 0.35);

    &::before {
      background-image: url("data:image/svg+xml;utf8,\
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'>\
        <circle cx='300' cy='300' r='220' fill='none' stroke='%23d99a42' stroke-width='5'/>\
      </svg>");
    }
  }

  /* 📜 TRAINING — formal lines */
  &.training {
    background: linear-gradient(180deg, #ffffff, #f7f7f7);
    box-shadow: 0px 60px 120px rgba(54, 54, 54, 0.35);

    &::before {
      background-image: url("data:image/svg+xml;utf8,\
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'>\
        <line x1='100' y1='100' x2='500' y2='500' stroke='%23363636' stroke-width='4'/>\
        <line x1='500' y1='100' x2='100' y2='500' stroke='%23363636' stroke-width='4'/>\
      </svg>");
    }
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

export const BorderArt = styled.svg`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2; /* above background */

  rect {
    stroke-dasharray: 260;
    stroke-dashoffset: 260;
    transition: stroke-dashoffset 1.2s ease;
  }

  /* 🔥 animate ONLY when card is active */
  .active & rect {
    stroke-dashoffset: 0;
  }
`;

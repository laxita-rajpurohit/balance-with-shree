import styled, { keyframes } from "styled-components";

/* ---------- Animations ---------- */

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* ---------- Common ---------- */

export const YogaSection = styled.section`
  padding: 120px 20px;
`;

export const YogaContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const YogaTitle = styled.h2`
  font-size: 36px;
  color: #1f2a24;
  text-align: center;
  margin-bottom: 80px;
`;

export const YogaSubText = styled.p`
  max-width: 700px;
  margin: 0 auto 60px;
  text-align: center;
  color: #5f6f66;
  line-height: 1.8;
`;

/* ---------- Hero ---------- */

export const YogaHeroSection = styled.section<{ $bgImage: string }>`
  height: 95vh;
  background: ${({ $bgImage }) => `url(${$bgImage})`} center / cover no-repeat;
  position: relative;
  margin: 0 20px;
  border-radius: 20px;
  overflow: hidden;
`;

export const YogaHeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
`;

export const YogaHeroContent = styled.div`
  position: relative;
  // z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeUp} 1s ease;
`;

export const YogaHeroTitle = styled.h1`
  color: white;
  font-size: 52px;
  font-weight: 500;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

export const YogaHeroSub = styled.span`
  color: #9bb7a5;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

/* ---------- Category Cards ---------- */

export const YogaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const YogaCard = styled.div`
  position: relative;
  padding: 42px;
  border-radius: 28px;
  cursor: pointer;

  /* 🌫 Glass base */
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  /* ✨ Glass border */
  border: 1px solid rgba(255, 255, 255, 0.28);

  /* 🧊 Depth */
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.12),
    inset 0 1px 1px rgba(255, 255, 255, 0.35);

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease;

  /* ✨ Hover lift */
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.18);

    box-shadow:
      0 18px 45px rgba(0, 0, 0, 0.18),
      inset 0 1px 1px rgba(255, 255, 255, 0.45);
  }

  /* 🫳 Pressed */
  &:active {
    transform: translateY(-2px) scale(0.98);
    box-shadow:
      0 8px 20px rgba(0, 0, 0, 0.16),
      inset 0 2px 6px rgba(0, 0, 0, 0.12);
  }
`;

export const YogaCardTitle = styled.h3`
  font-size: 22px;
  color: #1f2a24;
`;

export const YogaCardDesc = styled.p`
  margin-top: 14px;
  color: #5f6f66;
  line-height: 1.7;
`;

/* ---------- Gallery ---------- */
export const YogaGalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const YogaGalleryImg = styled.img`
  width: 100%;
  height: auto; /* natural height */
  max-height: 420px; /* keeps size calm like Real Transformations */

  object-fit: contain; /* 🔥 NO CROPPING */
  object-position: center;

  border-radius: 24px;
  display: block;
  background: #eef2ef; /* soft backdrop if image is shorter */
`;

/* ---------- Video Reviews ---------- */

export const YogaVideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const YogaVideo = styled.video`
  width: 100%;
  border-radius: 24px;
  max-height: 400px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
`;

/* ---------- CTA ---------- */

export const YogaCTASection = styled.section`
  padding: 140px 20px;
  text-align: center;
`;

export const YogaCTAButton = styled.button`
  margin-top: 28px;
  padding: 16px 42px;
  border-radius: 999px;
  background: #1f2a24;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

/* ===== Scroll Reveal Animation ===== */

export const revealUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Reveal = styled.div<{ visible: boolean }>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  animation: ${({ visible }) => visible && revealUp} 0.8s ease forwards;
`;

export const MobileStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopOnly = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

/* ---------- Types of Yoga ---------- */

export const YogaTypesWrap = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 56px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-radius: 32px;

  box-shadow:
    0px 32px 64px rgba(15, 60, 40, 0.12),
    inset 0 0 0 1px rgba(255, 255, 255, 0.6);

  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 768px) {
    padding: 36px 24px;
  }
`;

export const YogaTypeItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const YogaTypeDot = styled.span`
  width: 8px;
  height: 8px;
  margin-top: 8px;
  border-radius: 50%;
  background: #9bb7a5;
  flex-shrink: 0;
`;

export const YogaTypeText = styled.p`
  font-size: 15.5px;
  line-height: 1.7;
  color: #1f2a24;
`;

// ImageCarousel.styled.ts
export const CarouselContainer = styled.div`
  position: relative;
  height: 520px;
  touch-action: pan-y;

  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 420px;
    max-width: 100%;
  }
`;

export const CarouselTrack = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CarouselItem = styled.div<{ $position: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.6s ease;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 22px;
  }

  video {
    will-change: transform, opacity;
    backface-visibility: hidden;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 22px;
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.18);
  }

  /* FRONT VIDEO */
  ${({ $position }) =>
    $position === "front" &&
    `
      transform: translate(-50%, -50%) scale(1);
      z-index: 5;
      opacity: 1;
    `}

  /* LEFT VIDEO */
  ${({ $position }) =>
    $position === "back-left" &&
    `
      transform: translate(-115%, -48%) scale(0.82);
      z-index: 2;
      opacity: 0.65;
    `}

  /* RIGHT VIDEO */
  ${({ $position }) =>
    $position === "back-right" &&
    `
      transform: translate(15%, -48%) scale(0.82);
      z-index: 2;
      opacity: 0.65;
    `}

  /* MOBILE */
  @media (max-width: 768px) {
    ${({ $position }) =>
      $position === "back-left" &&
      `
        transform: translate(-90%, -48%) scale(0.75);
        opacity: 0.5;
      `}

    ${({ $position }) =>
      $position === "back-right" &&
      `
        transform: translate(-10%, -48%) scale(0.75);
        opacity: 0.5;
      `}
  }
`;

export const NavButton = styled.button<{ $direction: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.$direction === "left" ? "left: 5%" : "right: 5%")};
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-50%) scale(1.1);
    background: white;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  &::before {
    content: "${(props) => (props.$direction === "left" ? "❮" : "❯")}";
    font-size: 20px;
    color: #333;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    ${(props) => (props.$direction === "left" ? "left: 10px" : "right: 10px")};
  }
`;

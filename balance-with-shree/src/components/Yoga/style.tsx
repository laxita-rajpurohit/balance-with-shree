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
  margin-bottom: 24px;
`;

export const YogaSubText = styled.p`
  max-width: 700px;
  margin: 0 auto 60px;
  text-align: center;
  color: #5f6f66;
  line-height: 1.8;
`;

/* ---------- Hero ---------- */

export const YogaHeroSection = styled.section`
  height: 95vh;
  background: url("/yoga-hero.jpg") center / cover no-repeat;
  position: relative;
`;

export const YogaHeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
`;

export const YogaHeroContent = styled.div`
  position: relative;
  z-index: 2;
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12),
    inset 0 1px 1px rgba(255, 255, 255, 0.35);

  transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;

  /* ✨ Hover lift */
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.18);

    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.18),
      inset 0 1px 1px rgba(255, 255, 255, 0.45);
  }

  /* 🫳 Pressed */
  &:active {
    transform: translateY(-2px) scale(0.98);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.16),
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
  height: 360px;
  object-fit: cover;
  border-radius: 24px;
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

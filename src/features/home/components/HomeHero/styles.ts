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

export const HeroSection = styled.section`
  position: relative;
`;

export const HeroVisual = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
  background: #edf6f1;
  aspect-ratio: 0.8;
  box-shadow: 0 18px 40px rgba(15, 60, 40, 0.08);

  @media (min-width: 769px) {
    ${surfaceCard};
    aspect-ratio: auto;
    min-height: 560px;
    border-radius: 30px;
  }

  @media (max-width: 420px) {
    aspect-ratio: 0.79;
  }
`;

export const HeroPicture = styled.picture`
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
`;

export const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  object-fit: cover;
  object-position: center 54%;

  @media (min-width: 769px) {
    object-position: center 54%;
  }
`;

export const HeroShade = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(255, 250, 242, 0.03) 0%, rgba(18, 30, 26, 0.02) 48%, rgba(19, 33, 28, 0.18) 100%),
    radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 34%);
`;

export const HeroButtons = styled.div`
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 20px;
  display: flex;
  gap: 8px;
  z-index: 2;

  @media (max-width: 360px) {
    flex-wrap: wrap;
  }

  @media (min-width: 769px) {
    left: 24px;
    right: auto;
    width: min(100% - 48px, 520px);
    bottom: 22px;
  }
`;

export const HeroGlassButton = styled.button`
  flex: 1 1 0;
  min-height: 48px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.44);
  background: linear-gradient(180deg, rgba(97, 103, 49, 0.54), rgba(121, 126, 63, 0.6));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.28),
    0 14px 28px rgba(52, 65, 35, 0.2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 14px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.28),
      0 18px 34px rgba(52, 65, 35, 0.24);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.82);
    outline-offset: 2px;
  }

  @media (max-width: 360px) {
    width: 100%;
    flex-basis: 100%;
  }
`;

export const HeroButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0.96;
`;

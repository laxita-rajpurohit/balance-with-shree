import styled, { css } from "styled-components";

const surfaceCard = css`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(251, 249, 243, 0.98));
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 20px 48px rgba(15, 60, 40, 0.08);
  border-radius: 28px;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`;

export const Hero = styled.section`
  position: relative;
`;

export const HeroVisual = styled.div`
  ${surfaceCard};
  position: relative;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
  background: #eef5ee;
  aspect-ratio: 4 / 5;
  min-height: 396px;

  @media (max-width: 420px) {
    min-height: 382px;
  }

  @media (min-width: 769px) {
    border-radius: 30px;
    aspect-ratio: 16 / 10;
    min-height: 540px;
  }
`;

export const HeroPicture = styled.picture`
  display: block;
  width: 100%;
  height: 100%;
`;

export const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 56%;

  @media (min-width: 769px) {
    object-position: center 52%;
  }
`;

export const HeroWash = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 252, 247, 0.08) 84%, rgba(255, 250, 244, 0.18) 100%),
    radial-gradient(circle at top center, rgba(255, 255, 255, 0.12), transparent 35%);
`;

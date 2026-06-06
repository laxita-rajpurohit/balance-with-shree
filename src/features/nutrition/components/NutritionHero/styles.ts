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

export const Hero = styled.section`
  position: relative;
`;

export const HeroVisual = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
  background: #edf6f1;
  min-height: 404px;
  box-shadow: 0 18px 40px rgba(15, 60, 40, 0.08);

  @media (min-width: 769px) {
    ${surfaceCard};
    min-height: 620px;
    border-radius: 30px;
  }

  @media (max-width: 420px) {
    min-height: 390px;
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
  object-position: center 52%;

  @media (min-width: 769px) {
    object-position: center 50%;
  }
`;

export const HeroShade = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(255, 250, 242, 0.03) 0%, rgba(18, 30, 26, 0.02) 58%, rgba(19, 33, 28, 0.12) 100%),
    radial-gradient(circle at top center, rgba(255, 255, 255, 0.16), transparent 34%);
`;

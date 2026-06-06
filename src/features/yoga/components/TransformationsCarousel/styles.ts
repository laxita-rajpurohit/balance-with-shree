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

export const CardSection = styled.section`
  ${surfaceCard};
  position: relative;
  overflow: hidden;
  padding: 18px;

  @media (min-width: 769px) {
    padding: 28px;
  }
`;

export const MediaSection = styled(CardSection)`
  background:
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.52), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`;

export const MediaHeader = styled.div`
  text-align: center;
  max-width: 660px;
  margin: 0 auto 18px;
`;

export const SectionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &::before,
  &::after {
    content: "✦";
    color: ${({ theme }) => theme.colors.warmAccent};
    font-size: 11px;
    line-height: 1;
  }
`;

export const SectionTitle = styled.h2`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(1.78rem, 6.8vw, 3rem);
  line-height: 1.08;
`;

export const TransformViewport = styled.div`
  overflow: hidden;
  border-radius: 24px;
  touch-action: pan-y;
`;

export const TransformTrack = styled.div<{ $index: number }>`
  display: flex;
  transform: translateX(${({ $index }) => `-${$index * 100}%`});
  transition: transform 320ms ease;
`;

export const TransformSlide = styled.div`
  min-width: 100%;
`;

export const TransformFrame = styled.div`
  ${surfaceCard};
  padding: 10px;
`;

export const TransformImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 0.92;
  object-fit: contain;
  object-position: center;
  border-radius: 18px;
  background: #eef2ef;
`;

export const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 14px;
`;

export const CarouselButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(122, 160, 143, 0.18);
  background: rgba(255, 255, 255, 0.88);
  color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(15, 60, 40, 0.06);
`;

export const CarouselDots = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CarouselDot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "18px" : "8px")};
  height: 8px;
  border-radius: 999px;
  border: none;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : "rgba(122, 160, 143, 0.28)"};
  transition: width 180ms ease, background 180ms ease;
  cursor: pointer;
`;

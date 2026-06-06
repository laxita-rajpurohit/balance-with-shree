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

export const MediaSection = styled.section`
  ${surfaceCard};
  padding: 18px 16px;
  background:
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.52), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));

  @media (min-width: 769px) {
    padding: 24px;
  }
`;

export const MediaHeader = styled.div`
  text-align: center;
  max-width: 620px;
  margin: 0 auto 18px;
`;

export const SectionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &::before,
  &::after {
    content: "✦";
    color: ${({ theme }) => theme.colors.warmAccent};
    font-size: 12px;
    line-height: 1;
  }
`;

export const SectionTitle = styled.h2`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(2rem, 5.5vw, 3.25rem);
  line-height: 1.06;

  @media (max-width: 768px) {
    font-size: clamp(1.72rem, 8vw, 2.18rem);
  }
`;

export const SectionBody = styled.p`
  margin: 14px auto 0;
  max-width: 34ch;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 15px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const CertViewport = styled.div`
  overflow: hidden;
  border-radius: 24px;
`;

export const CertTrack = styled.div<{ $index: number }>`
  display: flex;
  transform: translateX(${({ $index }) => `-${$index * 100}%`});
  transition: transform 320ms ease;
`;

export const CertSlide = styled.div`
  min-width: 100%;
`;

export const CertFrame = styled.div`
  ${surfaceCard};
  padding: 14px;
  border-radius: 24px;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid rgba(31, 95, 74, 0.72);
    outline-offset: 3px;
  }
`;

export const CertImageWrap = styled.div<{ $preview?: boolean }>`
  width: 100%;
  aspect-ratio: ${({ $preview }) => ($preview ? "auto" : "0.78")};
  max-height: ${({ $preview }) => ($preview ? "72vh" : "none")};
  overflow: hidden;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(240, 245, 239, 0.92), rgba(255, 255, 255, 0.96));
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $preview }) =>
    $preview
      ? css`
          overflow: auto;
          padding: 10px;
          touch-action: pan-x pan-y;
        `
      : ""}
`;

export const CertImage = styled.img<{ $zoom?: number }>`
  display: block;
  width: ${({ $zoom = 1 }) => `${$zoom * 100}%`};
  height: auto;
  object-fit: contain;
  background: #ffffff;
  transition: width 180ms ease;

  ${({ $zoom = 1 }) =>
    $zoom > 1
      ? css`
          max-width: none;
        `
      : ""}
`;

export const CertCaption = styled.p`
  margin: 12px 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 15px;
  font-weight: 600;
  line-height: 1.45;
  text-align: center;
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

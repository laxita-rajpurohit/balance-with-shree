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
  font-size: clamp(1.82rem, 7vw, 3.1rem);
  line-height: 1.06;
`;

export const SectionBody = styled.p`
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.62;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.68;
  }
`;

export const CertSection = styled(CardSection)`
  background:
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.66), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`;

export const CertHeader = styled.div`
  text-align: center;
  max-width: 640px;
  margin: 0 auto 18px;
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

  @media (min-width: 769px) {
    padding: 18px;
  }

  &:focus-visible {
    outline: 2px solid rgba(31, 95, 74, 0.72);
    outline-offset: 3px;
  }
`;

export const CertImageWrap = styled.div<{ $preview?: boolean }>`
  position: relative;
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
  margin: 12px 2px 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.45;
  text-align: center;
`;

export const CertControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 14px;
`;

export const CertButton = styled.button`
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

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(31, 95, 74, 0.12),
      0 0 0 1px rgba(31, 95, 74, 0.68);
  }
`;

export const CertDots = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CertDot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "18px" : "8px")};
  height: 8px;
  border-radius: 999px;
  border: none;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : "rgba(122, 160, 143, 0.28)"};
  transition: width 180ms ease, background 180ms ease;
  cursor: pointer;
`;

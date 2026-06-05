import { Link } from "react-router-dom";
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

export const Page = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 0 0 24px;
`;

export const Column = styled.div`
  width: min(calc(100% - 22px), 1200px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: min(calc(100% - 18px), 430px);
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  > * {
    scroll-margin-top: 76px;
  }

  @media (min-width: 769px) {
    > * {
      scroll-margin-top: 108px;
    }
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

export const SectionCard = styled.section`
  ${surfaceCard};
  overflow: hidden;
  position: relative;
  padding: 16px;

  @media (min-width: 769px) {
    padding: 24px;
  }
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

export const PackagesCard = styled(SectionCard)`
  text-align: center;
`;

export const DecorativeDivider = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.warmAccent};
  margin: 12px 0 0;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 34px;
    height: 1.5px;
    background: currentColor;
  }

  span {
    font-size: 13px;
    line-height: 1;
  }
`;

export const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) {
    gap: 14px;
  }
`;

export const PackageItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 66px;
  padding: 12px 12px 12px 10px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(122, 160, 143, 0.12);
  box-shadow: 0 10px 24px rgba(15, 60, 40, 0.05);

  @media (max-width: 420px) {
    min-height: 56px;
  }
`;

export const PackageIcon = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.96);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
  flex-shrink: 0;
`;

export const PackageLabel = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
`;

export const OfferSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const OfferHeader = styled.div`
  text-align: center;
  padding: 4px 0 2px;
  max-width: 340px;
  margin: 0 auto;
`;

export const OfferGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const OfferCard = styled(SectionCard)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const OfferImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 188px;
  padding: 14px;
  border-radius: 22px;
  background:
    radial-gradient(circle at top center, rgba(239, 246, 238, 0.92), rgba(248, 251, 246, 0.76) 54%, rgba(255, 255, 255, 0.18)),
    linear-gradient(180deg, rgba(253, 252, 249, 0.92), rgba(244, 250, 246, 0.9));
  border: 1px solid rgba(122, 160, 143, 0.08);
`;

export const OfferImage = styled.img`
  width: 100%;
  max-width: 248px;
  max-height: 188px;
  object-fit: contain;
  object-position: center center;
  display: block;
`;

export const OfferTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.66rem;
  line-height: 1.05;

  @media (min-width: 769px) {
    font-size: 2rem;
  }
`;

export const OfferBody = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.58;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.62;
  }
`;

export const OfferItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const OfferItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 9px;
  align-items: center;
  min-height: 42px;
  padding: 8px 10px;
  border-radius: 16px;
  background: rgba(249, 251, 247, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
`;

export const OfferItemIcon = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({ theme }) => theme.colors.primary};
`;

export const OfferItemText = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 13px;
  font-weight: 600;
  line-height: 1.35;

  @media (min-width: 769px) {
    font-size: 14px;
  }
`;

export const OfferLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
`;

export const AboutCard = styled(SectionCard)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    right: 8px;
    top: 18px;
    width: 96px;
    height: 150px;
    border-radius: 56% 44% 58% 42%;
    background:
      radial-gradient(circle at 28% 16%, rgba(199, 218, 197, 0.82), transparent 28%),
      linear-gradient(180deg, rgba(232, 241, 229, 0.74), rgba(255, 255, 255, 0));
    opacity: 0.82;
    pointer-events: none;
  }

  @media (min-width: 769px) {
    grid-template-columns: 320px 1fr;
    gap: 24px;
  }
`;

export const AboutImageWrap = styled.div`
  border-radius: 20px;
  overflow: hidden;
  min-height: 228px;
  background: #e8f1eb;
  position: relative;
  z-index: 1;

  @media (min-width: 769px) {
    min-height: 266px;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 36%;
  display: block;
`;

export const AboutContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(2rem, 5vw, 2.8rem);
  line-height: 1.06;

  @media (max-width: 768px) {
    font-size: clamp(1.82rem, 8vw, 2.26rem);
  }
`;

export const AboutText = styled.p`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.58;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const AboutLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
`;

export const BenefitStrip = styled.section`
  ${surfaceCard};
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(250, 251, 246, 0.96), rgba(245, 248, 239, 0.96));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BenefitItem = styled.div`
  min-height: 82px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 12px;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 18px;
    bottom: 18px;
    width: 1px;
    background: rgba(122, 160, 143, 0.16);
  }

  @media (max-width: 768px) {
    min-height: 64px;
    padding: 12px 14px;

    &:not(:last-child)::after {
      right: 14px;
      left: 14px;
      top: auto;
      bottom: 0;
      width: auto;
      height: 1px;
    }
  }
`;

export const BenefitIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
  flex-shrink: 0;
`;

export const BenefitText = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const TestimonialSection = styled.section`
  ${surfaceCard};
  padding: 18px 16px;
  background:
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.52), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));

  @media (min-width: 769px) {
    padding: 24px;
  }
`;

export const TestimonialHeader = styled.div`
  text-align: center;
  max-width: 560px;
  margin: 0 auto 18px;
`;

export const TestimonialCard = styled.div`
  ${surfaceCard};
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 14px 28px rgba(15, 60, 40, 0.06);
  touch-action: pan-y;
  -webkit-user-select: none;
  user-select: none;

  @media (min-width: 640px) {
    grid-template-columns: 112px 1fr;
    align-items: start;
  }
`;

export const TestimonialAvatar = styled.div`
  width: 112px;
  height: 132px;
  border-radius: 24px;
  overflow: hidden;
  background: #edf3ed;
  justify-self: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`;

export const TestimonialContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const QuoteMark = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.75rem;
  line-height: 0.9;
  opacity: 0.24;
`;

export const TestimonialText = styled.p`
  margin: 2px 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 15px;
  line-height: 1.65;
`;

export const TestimonialName = styled.h3`
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1rem;
  line-height: 1.3;
`;

export const TestimonialHandle = styled.p`
  margin: 4px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  line-height: 1.4;
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

export const VideoViewport = styled.div`
  overflow: hidden;
  border-radius: 24px;
`;

export const VideoTrack = styled.div<{ $index: number }>`
  display: flex;
  transform: translateX(${({ $index }) => `-${$index * 100}%`});
  transition: transform 320ms ease;
`;

export const VideoSlide = styled.div`
  min-width: 100%;
`;

export const VideoCard = styled.div`
  ${surfaceCard};
  padding: 10px;
  touch-action: pan-y;
`;

export const VideoPlayer = styled.video`
  display: block;
  width: 100%;
  aspect-ratio: 0.68;
  object-fit: cover;
  border-radius: 18px;
  background:
    radial-gradient(circle at top center, rgba(240, 245, 239, 0.92), rgba(217, 231, 223, 0.84)),
    #dbe7df;
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

export const FinalCta = styled.section`
  ${surfaceCard};
  position: relative;
  overflow: hidden;
  padding: 24px 18px 22px;
  background:
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.6), transparent 24%),
    radial-gradient(circle at right top, rgba(212, 227, 208, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(221, 237, 213, 0.92), rgba(206, 225, 194, 0.94));
  text-align: center;

  @media (min-width: 769px) {
    padding: 32px 24px 28px;
  }
`;

export const FinalCtaTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(1.9rem, 5vw, 2.6rem);
  line-height: 1.08;

  @media (max-width: 768px) {
    font-size: clamp(1.72rem, 8vw, 2.15rem);
  }
`;

export const FinalCtaText = styled.p`
  margin: 12px auto 0;
  max-width: 28ch;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.6;

  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 1.65;
  }
`;

export const FinalCtaActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 18px;
  align-items: center;

  > * {
    width: 100%;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;

    > * {
      width: auto;
    }
  }
`;

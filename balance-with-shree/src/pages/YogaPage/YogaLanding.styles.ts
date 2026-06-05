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
  width: min(calc(100% - 20px), 1120px);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: min(calc(100% - 18px), 430px);
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > * {
    scroll-margin-top: 76px;
  }

  @media (min-width: 769px) {
    gap: 26px;

    > * {
      scroll-margin-top: 110px;
    }
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
  font-size: clamp(1.78rem, 6.8vw, 3rem);
  line-height: 1.08;
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

export const Divider = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.warmAccent};
  margin: 14px 0 2px;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 34px;
    height: 1.5px;
    background: currentColor;
  }

  span {
    font-size: 12px;
    line-height: 1;
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
  min-height: 364px;
  box-shadow: 0 18px 40px rgba(15, 60, 40, 0.08);

  @media (min-width: 769px) {
    ${surfaceCard};
    min-height: 620px;
    border-radius: 30px;
  }

  @media (max-width: 420px) {
    min-height: 350px;
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
    object-position: center 52%;
  }
`;

export const HeroShade = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(255, 250, 242, 0.04) 0%, rgba(18, 30, 26, 0.02) 54%, rgba(19, 33, 28, 0.12) 100%),
    radial-gradient(circle at top center, rgba(255, 255, 255, 0.16), transparent 34%);
`;

export const HeroButtons = styled.div`
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 18px;
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
`;

export const Intro = styled(CardSection)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.9), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 250, 245, 0.96));
  text-align: center;
`;

export const BenefitGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

export const BenefitCard = styled.div`
  ${surfaceCard};
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 118px;
  box-shadow: 0 12px 28px rgba(15, 60, 40, 0.06);
`;

export const BenefitBadge = styled.span`
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
`;

export const BenefitTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 15px;
  line-height: 1.3;
`;

export const BenefitText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  line-height: 1.5;
`;

export const TypesCard = styled(CardSection)`
  background:
    radial-gradient(circle at left top, rgba(221, 234, 225, 0.64), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`;

export const TypesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
`;

export const TypeItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  padding: 12px 14px;
  border-radius: 18px;
  background: rgba(249, 251, 247, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
`;

export const TypeDot = styled.span`
  width: 26px;
  height: 26px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  background: rgba(244, 250, 246, 0.98);
  border: 1px solid rgba(122, 160, 143, 0.16);
  flex-shrink: 0;
`;

export const TypeText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  line-height: 1.55;
`;

export const PricingSection = styled(CardSection)`
  background:
    radial-gradient(circle at top center, rgba(217, 184, 137, 0.08), transparent 38%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(246, 250, 246, 0.96));
`;

export const PricingHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 18px;
`;

export const BillingToggle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  margin-top: 16px;
  border-radius: 999px;
  background: rgba(244, 250, 246, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.16);
`;

export const BillingOption = styled.button<{ $active: boolean }>`
  border: none;
  border-radius: 999px;
  padding: 10px 14px;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : "transparent"};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.textWhite : theme.colors.textPrimary};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

export const BillingBadge = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 2px 8px;
  background: rgba(31, 95, 74, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 11px;
  font-weight: 600;
  margin-left: 6px;
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const PricingCard = styled.div<{ $highlight?: boolean }>`
  ${surfaceCard};
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: ${({ $highlight }) =>
    $highlight
      ? "0 22px 42px rgba(15, 60, 40, 0.12)"
      : "0 14px 28px rgba(15, 60, 40, 0.07)"};
  border-color: ${({ $highlight }) =>
    $highlight ? "rgba(31, 95, 74, 0.2)" : "rgba(122, 160, 143, 0.12)"};
`;

export const PlanName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.16rem;
  line-height: 1.3;
`;

export const PlanPriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const OriginalPrice = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  text-decoration: line-through;
`;

export const PlanPrice = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;

  span {
    display: block;
    margin-top: 6px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 13px;
    font-weight: 500;
    line-height: 1.4;
  }
`;

export const PlanMeta = styled.p`
  margin: -2px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  line-height: 1.45;
`;

export const SessionChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SessionChip = styled.button<{ $active: boolean }>`
  border-radius: 999px;
  border: 1px solid ${({ theme, $active }) =>
    $active ? theme.colors.primary : "rgba(122, 160, 143, 0.18)"};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primaryActiveLightest : "rgba(255, 255, 255, 0.92)"};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 9px 14px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition:
    border-color 180ms ease,
    background 180ms ease,
    box-shadow 180ms ease;

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(31, 95, 74, 0.12),
      0 0 0 1px rgba(31, 95, 74, 0.68);
  }
`;

export const PlanButtonWrap = styled.div`
  margin-top: 2px;
`;

export const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PlanFeature = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.52;
`;

export const PlanFeatureIcon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
  margin-top: 1px;
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

export const GalleryScroll = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(78%, 1fr);
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 6px;
  scroll-snap-type: x proximity;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(122, 160, 143, 0.28);
    border-radius: 999px;
  }

  @media (min-width: 769px) {
    grid-auto-flow: initial;
    grid-auto-columns: auto;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    overflow: visible;
  }
`;

export const GalleryCard = styled.div`
  ${surfaceCard};
  padding: 10px;
  scroll-snap-align: start;
`;

export const GalleryImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 0.88;
  object-fit: cover;
  object-position: center;
  border-radius: 18px;
  background: #eef2ef;
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

export const FinalCta = styled(CardSection)`
  background:
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.54), transparent 24%),
    radial-gradient(circle at right top, rgba(212, 227, 208, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(237, 246, 241, 0.96), rgba(221, 237, 213, 0.96));
  text-align: center;
`;

export const FinalCtaTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(1.72rem, 7vw, 2.6rem);
  line-height: 1.08;
`;

export const FinalCtaText = styled.p`
  margin: 12px auto 0;
  max-width: 30ch;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.6;

  @media (min-width: 769px) {
    font-size: 15px;
  }
`;

export const FinalCtaActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;

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

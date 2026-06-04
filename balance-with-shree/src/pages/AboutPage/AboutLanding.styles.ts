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

export const Hero = styled(CardSection)`
  background:
    radial-gradient(circle at top right, rgba(221, 234, 225, 0.82), transparent 34%),
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.34), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 360px) minmax(0, 1fr);
    gap: 28px;
  }
`;

export const HeroImageWrap = styled.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  min-height: 254px;
  background: #e8f1eb;
  box-shadow: 0 16px 36px rgba(15, 60, 40, 0.08);

  @media (min-width: 900px) {
    min-height: 410px;
  }
`;

export const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 36%;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const HeroMeta = styled.p`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;

  @media (min-width: 769px) {
    font-size: 14px;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;

  > * {
    width: 100%;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;

    > * {
      width: auto;
    }
  }
`;

export const Philosophy = styled(CardSection)`
  background:
    radial-gradient(circle at right top, rgba(229, 239, 229, 0.9), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 250, 245, 0.96));
`;

export const PhilosophyGrid = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 28px;
    align-items: start;
  }
`;

export const PhilosophyAccent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const PhilosophyChip = styled.div`
  min-height: 74px;
  border-radius: 18px;
  background: rgba(244, 250, 246, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px;
  gap: 6px;

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 14px;
    line-height: 1.3;
  }

  span {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 13px;
    line-height: 1.45;
  }
`;

export const PhilosophyCopy = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimelineSection = styled(CardSection)`
  padding-bottom: 22px;
`;

export const TimelineIntro = styled.div`
  max-width: 680px;
  margin: 0 auto 18px;
  text-align: center;
`;

export const TimelineTrack = styled.div`
  position: relative;
  padding: 8px 0 0;

  @media (min-width: 900px) {
    padding-top: 12px;
  }
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 27px;
  top: 0;
  bottom: 0;
  width: 3px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(122, 160, 143, 0.18), rgba(217, 184, 137, 0.16));
  overflow: hidden;

  @media (min-width: 900px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const TimelineLineFill = styled.div<{ $progress: number; $reducedMotion: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(122, 160, 143, 0.72), rgba(31, 95, 74, 0.96));
  border-radius: inherit;
  transform-origin: bottom center;
  transform: scaleY(${({ $progress }) => $progress});
  transition: ${({ $reducedMotion }) => ($reducedMotion ? "none" : "transform 180ms ease-out")};
  height: 100%;
`;

export const TimelineList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 900px) {
    gap: 24px;
  }
`;

export const TimelineItem = styled.article<{ $side: "left" | "right"; $active: boolean }>`
  position: relative;
  padding-left: 56px;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 72px minmax(0, 1fr);
    align-items: center;
    padding-left: 0;
  }
`;

export const TimelineNode = styled.div<{ $active: boolean }>`
  position: absolute;
  left: 14px;
  top: 28px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid ${({ theme, $active }) => ($active ? theme.colors.primary : "rgba(122, 160, 143, 0.34)")};
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(180deg, rgba(244, 250, 246, 1), rgba(225, 241, 235, 1))"
      : "rgba(255, 255, 255, 0.92)"};
  box-shadow: ${({ $active }) =>
    $active ? "0 10px 24px rgba(31, 95, 74, 0.16)" : "0 6px 18px rgba(15, 60, 40, 0.08)"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme, $active }) => ($active ? theme.colors.primary : "rgba(122, 160, 143, 0.3)")};
  }

  @media (min-width: 900px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 0 auto;
    grid-column: 2;
  }
`;

export const TimelineCard = styled.div<{ $active: boolean }>`
  ${surfaceCard};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transform: translateY(${({ $active }) => ($active ? "0" : "6px")});
  opacity: ${({ $active }) => ($active ? 1 : 0.92)};
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    opacity 220ms ease;
  box-shadow: ${({ $active }) =>
    $active
      ? "0 22px 42px rgba(15, 60, 40, 0.12)"
      : "0 14px 28px rgba(15, 60, 40, 0.07)"};

  @media (min-width: 900px) {
    grid-column: ${({ $active }) => ($active ? "auto" : "auto")};
    padding: 18px;
  }
`;

export const TimelineCardWrap = styled.div<{ $side: "left" | "right" }>`
  @media (min-width: 900px) {
    grid-column: ${({ $side }) => ($side === "left" ? "1" : "3")};
  }
`;

export const TimelineCardInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;

  @media (min-width: 640px) {
    grid-template-columns: 116px 1fr;
    align-items: center;
  }
`;

export const TimelineIllustrationWrap = styled.div`
  width: 100%;
  max-width: 116px;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  background:
    radial-gradient(circle at top center, rgba(239, 246, 238, 0.92), rgba(248, 251, 246, 0.76) 54%, rgba(255, 255, 255, 0.18)),
    linear-gradient(180deg, rgba(253, 252, 249, 0.92), rgba(244, 250, 246, 0.9));
  border: 1px solid rgba(122, 160, 143, 0.1);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 639px) {
    margin: 0 auto;
  }
`;

export const TimelineIllustration = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
`;

export const TimelineText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TimelineLabel = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.34rem;
  line-height: 1.15;

  @media (min-width: 769px) {
    font-size: 1.56rem;
  }
`;

export const TimelineParagraph = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.6;
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

  @media (min-width: 769px) {
    padding: 18px;
  }
`;

export const CertImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 0.78;
  overflow: hidden;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(240, 245, 239, 0.92), rgba(255, 255, 255, 0.96));
`;

export const CertImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #ffffff;
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

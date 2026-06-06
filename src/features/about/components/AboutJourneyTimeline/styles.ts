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
    left: auto; top: auto;
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

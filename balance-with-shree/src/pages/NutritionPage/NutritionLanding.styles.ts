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

export const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const SupportCard = styled.div`
  ${surfaceCard};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 116px;
  box-shadow: 0 12px 28px rgba(15, 60, 40, 0.06);
`;

export const SupportBadge = styled.span`
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

export const SupportTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 15px;
  line-height: 1.3;
`;

export const SupportText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  line-height: 1.5;
`;

export const ApproachCard = styled(CardSection)`
  background:
    radial-gradient(circle at left top, rgba(221, 234, 225, 0.64), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`;

export const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 320px) minmax(0, 1fr);
    gap: 24px;
    align-items: start;
  }
`;

export const ApproachImageWrap = styled.div`
  border-radius: 24px;
  overflow: hidden;
  min-height: 254px;
  background: #e8f1eb;

  @media (min-width: 900px) {
    min-height: 100%;
  }
`;

export const ApproachImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Checklist = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
`;

export const ChecklistItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  padding: 11px 12px;
  border-radius: 16px;
  background: rgba(249, 251, 247, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  line-height: 1.5;
`;

export const ChecklistIcon = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 250, 246, 0.98);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(122, 160, 143, 0.16);
  margin-top: 1px;
`;

export const NoteText = styled.p`
  margin: 18px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.58;
  font-style: italic;
`;

export const TestimonialSection = styled(CardSection)`
  background:
    radial-gradient(circle at right top, rgba(221, 234, 225, 0.52), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 246, 0.96));
`;

export const TestimonialHeader = styled.div`
  text-align: center;
  max-width: 660px;
  margin: 0 auto 18px;
`;

export const TestimonialCard = styled.div`
  ${surfaceCard};
  padding: 18px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  box-shadow: 0 14px 28px rgba(15, 60, 40, 0.07);

  @media (min-width: 640px) {
    grid-template-columns: 112px 1fr;
    align-items: start;
  }
`;

export const TestimonialAvatar = styled.div`
  width: 112px;
  height: 132px;
  border-radius: 24px;
  padding: 6px;
  background: #ffffff;
  box-shadow: 0 12px 24px rgba(15, 60, 40, 0.1);
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    border-radius: 18px;
    object-fit: cover;
    object-position: center top;
    display: block;
  }

  @media (min-width: 640px) {
    margin: 0;
  }
`;

export const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const QuoteMark = styled.span`
  color: ${({ theme }) => theme.colors.warmAccent};
  font-size: 32px;
  line-height: 1;
`;

export const TestimonialText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.62;
`;

export const TestimonialName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 15px;
  line-height: 1.35;
`;

export const TestimonialHandle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
  line-height: 1.4;
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

export const DiscoverySection = styled(CardSection)`
  background:
    radial-gradient(circle at left bottom, rgba(201, 218, 189, 0.54), transparent 24%),
    radial-gradient(circle at right top, rgba(212, 227, 208, 0.42), transparent 28%),
    linear-gradient(180deg, rgba(237, 246, 241, 0.96), rgba(221, 237, 213, 0.96));
  text-align: center;
`;

export const DiscoveryCard = styled.div`
  ${surfaceCard};
  max-width: 520px;
  margin: 18px auto 0;
  padding: 18px;
  box-shadow: 0 16px 30px rgba(15, 60, 40, 0.08);
`;

export const DiscoveryTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.26rem;
  line-height: 1.3;
`;

export const DiscoveryMeta = styled.p`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  line-height: 1.45;
`;

export const DiscoveryPrice = styled.div`
  margin-top: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1;

  span {
    font-size: 1rem;
    vertical-align: top;
    margin-right: 4px;
  }
`;

export const DiscoveryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
  text-align: left;
`;

export const DiscoveryItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  padding: 11px 12px;
  border-radius: 16px;
  background: rgba(249, 251, 247, 0.92);
  border: 1px solid rgba(122, 160, 143, 0.1);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  line-height: 1.5;
`;

export const DiscoveryActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;

  > * {
    width: 100%;
  }
`;

// Hero/style.ts
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.section`
  background: linear-gradient(180deg, rgba(251, 249, 243, 0.96), rgba(244, 250, 246, 0.98));
  margin-top: 18px;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  min-height: 680px;
  box-shadow:
    0 30px 70px rgba(15, 40, 35, 0.14),
    0 0 0 1px rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 12px;
    min-height: 560px;
    border-radius: 30px;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 680px;
  border-radius: 40px;

  @media (max-width: 768px) {
    height: 560px;
  }

  @media (max-width: 480px) {
    height: 540px;
  }
`;

export const HeroPicture = styled.picture`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 52%;

  @media (max-width: 768px) {
    object-position: center 60%;
  }
`;

export const Content = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  pointer-events: none;
  padding: 24px;

  @media (max-width: 768px) {
    padding: 18px;
  }
`;

export const HeroCard = styled.div`
  position: relative;
  z-index: 2;
  width: min(100%, 420px);
  margin: auto auto 36px 30px;
  padding: 22px 22px 20px;
  border-radius: 26px;
  background: linear-gradient(
    180deg,
    rgba(255, 253, 249, 0.78),
    rgba(248, 244, 236, 0.84)
  );
  box-shadow:
    0 18px 38px rgba(15, 60, 40, 0.14),
    inset 0 0 0 1px rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  pointer-events: auto;

  @media (max-width: 768px) {
    width: min(100%, 292px);
    margin: auto auto 18px 0;
    padding: 18px 18px 16px;
    border-radius: 22px;
  }
`;

export const SoftBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(248, 251, 247, 0.9);
  border: 1px solid rgba(122, 160, 143, 0.22);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const HeadingBlock = styled.div`
  position: relative;
  margin-top: 14px;
  text-align: left;
  color: #24312d;

  h1 {
    font-size: clamp(2.3rem, 4.8vw, 4rem);
    line-height: 1.02;
    margin: 0;
  }

  @media (max-width: 768px) {
    text-align: left;

    h1 {
      font-size: 1.95rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.82rem;
    }
  }
`;

export const Description = styled.p`
  margin: 12px 0 0;
  max-width: 34ch;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 15px;
  line-height: 1.65;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.58;
    max-width: 30ch;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 18px;
  pointer-events: auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    & > * {
      width: 100%;
    }
  }
`;

export const HeroImageFrame = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 248, 238, 0.04) 0%, rgba(25, 44, 36, 0.12) 48%, rgba(19, 32, 28, 0.34) 100%),
    radial-gradient(circle at top center, rgba(255, 255, 255, 0.18), transparent 38%);
  pointer-events: none;
`;

// NEW: animated version of Content
export const AnimatedContent = styled(Content)<{ $visible: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(40px)"};
  animation: ${({ $visible }) => ($visible ? fadeUp : "none")} 0.8s
    cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
`;

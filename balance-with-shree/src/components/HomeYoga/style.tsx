import styled from "styled-components";

export const Section = styled.section`
  padding: 140px 24px;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const GlassWrap = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 64px;

  padding: 64px;

  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-radius: 36px;

  box-shadow: 0px 40px 80px rgba(15, 60, 40, 0.12),
    inset 0 0 0 1px rgba(255, 255, 255, 0.6);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 48px 28px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Media = styled.div`
  border-radius: 28px;
  overflow: hidden;
  align-self: stretch;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Eyebrow = styled.span`
  font-size: 12px;
  letter-spacing: 2.4px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 14px;
`;

export const Heading = styled.h2`
  font-size: 38px;
  line-height: 1.15;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 15.8px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 36px;
  max-width: 520px;
`;

export const Offerings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`;

export const OfferingItem = styled.div`
  padding-left: 18px;
  border-left: 2px solid rgba(15, 60, 40, 0.18);
`;

export const OfferingTitle = styled.h4`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 6px;
`;

export const OfferingText = styled.p`
  font-size: 14.6px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const CTAButton = styled.button`
  position: relative;
  isolation: isolate;

  /* Glass surface */
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.42),
    rgba(255, 255, 255, 0.18)
  );
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);

  /* Shape */
  border-radius: 999px;
  padding: 12px 22px;

  /* Border */
  border: 1px solid rgba(255, 255, 255, 0.45);

  /* Depth */
  box-shadow: 0 18px 40px rgba(6, 51, 54, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.65),
    inset 0 -6px 12px rgba(6, 51, 54, 0.08);

  /* Typography */
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors.textPrimary};

  /* Layout */
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  /* Motion */
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  /* 🌟 Saffron accent line */
  &::before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.primaryActiveLight},
      transparent
    );
    opacity: 0;
    transition: opacity 0.6s ease;
    pointer-events: none;
  }

  /* ✨ Floating glass highlight */
  &::after {
    content: "";
    position: absolute;
    top: -40%;
    left: -20%;
    width: 140%;
    height: 140%;
    background: radial-gradient(
      circle at top,
      rgba(255, 255, 255, 0.55),
      transparent 60%
    );
    opacity: 0.35;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 28px 60px rgba(6, 51, 54, 0.24),
      inset 0 1px 0 rgba(255, 255, 255, 0.75),
      inset 0 -8px 16px rgba(6, 51, 54, 0.1);

    &::before {
      opacity: 0.6;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  /* Accessibility */
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryActiveLightest},
      0 22px 48px rgba(6, 51, 54, 0.25);
  }

  /* Arrow polish */
  span {
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover span {
    transform: translateX(4px);
  }
`;

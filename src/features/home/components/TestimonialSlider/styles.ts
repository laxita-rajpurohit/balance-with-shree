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

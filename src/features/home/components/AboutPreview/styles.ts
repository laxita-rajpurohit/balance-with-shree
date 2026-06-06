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

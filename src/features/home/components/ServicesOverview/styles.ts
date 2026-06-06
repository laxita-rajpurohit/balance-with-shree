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

export const SectionTitle = styled.h2`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(2rem, 5.5vw, 3.25rem);
  line-height: 1.06;

  @media (max-width: 768px) {
    font-size: clamp(1.72rem, 8vw, 2.18rem);
  }
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

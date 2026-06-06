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

export const SectionTitle = styled.h2`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(1.78rem, 6.8vw, 3rem);
  line-height: 1.08;
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

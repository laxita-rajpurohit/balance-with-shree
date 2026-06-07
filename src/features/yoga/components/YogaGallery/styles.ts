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

export const GalleryViewport = styled.div`
  @media (min-width: 769px) {
    overflow: hidden;
    width: 100%;
  }
`;

export const GalleryTrack = styled.div<{ $index: number }>`
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
    display: flex;
    gap: 16px;
    overflow-x: visible;
    padding-bottom: 0;
    scroll-snap-type: none;
    transition: transform 320ms ease;
    transform: ${({ $index }) => `translateX(calc(-${$index} * (100% + 16px) / 3))`};
  }
`;

export const GalleryCard = styled.div`
  ${surfaceCard};
  padding: 10px;
  scroll-snap-align: start;

  @media (min-width: 769px) {
    flex: 0 0 calc((100% - 32px) / 3);
  }
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

export const GalleryControls = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 20px;
  }
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
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

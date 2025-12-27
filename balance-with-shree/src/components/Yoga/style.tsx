import styled from "styled-components";

export const Section = styled.section`
  height: 95vh;
  background: url("/yoga-hero.jpg") center/cover no-repeat;
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Sub = styled.span`
  color: #9bb7a5;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 13px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 54px;
  font-weight: 500;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

export const Desc = styled.p`
  margin-top: 14px;
  color: #5f6f66;
  line-height: 1.7;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  video {
    width: 100%;
    border-radius: 20px;
  }
`;

export const HeroSection = styled.section`
  height: 95vh;
  background: url("/yoga-hero.jpg") center / cover no-repeat;
  position: relative;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const HeroSub = styled.span`
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 13px;
  color: #9bb7a5;
`;

export const HeroTitle = styled.h1`
  margin-top: 20px;
  font-size: 52px;
  color: #ffffff;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

export const CategorySection = styled.section`
  padding: 140px 20px;
  background: #faf9f6;
`;

export const CategoryGrid = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryCard = styled.div`
  padding: 42px;
  border-radius: 28px;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(22px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);

  transition: all 0.45s ease;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 45px 90px rgba(0, 0, 0, 0.18);
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 22px;
  color: #1f2a24;
`;

export const CategoryDesc = styled.p`
  margin-top: 14px;
  font-size: 15px;
  line-height: 1.7;
  color: #5f6f66;
`;

export const GallerySection = styled.section`
  padding: 120px 20px;
`;

export const GalleryGrid = styled.div`
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 24px;
`;

export const VideoSection = styled.section`
  padding: 140px 20px;
  background: #faf9f6;
  text-align: center;
`;

export const VideoTitle = styled.h2`
  font-size: 34px;
  color: #1f2a24;
  margin-bottom: 60px;
`;

export const VideoGrid = styled.div`
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const VideoCard = styled.video`
  width: 100%;
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
`;

export const CTASection = styled.section`
  padding: 140px 20px;
  text-align: center;
`;

export const CTATitle = styled.h2`
  font-size: 36px;
  color: #1f2a24;
`;

export const CTAButton = styled.button`
  margin-top: 28px;
  padding: 16px 42px;
  border-radius: 999px;
  background: #1f2a24;
  color: #ffffff;
  border: none;
`;

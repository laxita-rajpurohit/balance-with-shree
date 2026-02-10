// src/pages/Nutrition/styles.ts
import styled, { keyframes } from "styled-components";
import heroImage from "../../assets/shree1.jpeg";

export const PageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  max-width: 1100px;
  margin: 40px auto;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  box-shadow:
    0 26px 50px rgba(15, 40, 35, 0.22),
    0 0 0 1px rgba(255, 255, 255, 0.9);
`;

export const HeroSection = styled.section`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;

  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  max-width: 1100px;
  margin: 40px 20px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 26px 50px rgba(15, 40, 35, 0.22),
    0 0 0 1px rgba(255, 255, 255, 0.9);
  transform: translateY(-4px);
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
  color: #ffff;

  h1 {
    font-family: "Cormorant Garamond", serif;
    font-size: 3.5rem;
  }

  p {
    margin: 24px 0;
    color: #ffff;
  }
`;

export const Button = styled.button<{ primary?: boolean }>`
  background: #1f2a24;
  border: 2px solid #1f2a24;
  padding: 12px 32px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  color: #ffffff;
  transition: all 0.25s ease;
  text-decoration: none;
  &:hover {
    background: #4a6741;
    border-color: #4a6741;
    transform: translateY(-2px);
  }
`;

export const Section = styled.section<{ bg?: string }>`
  padding: 80px 20px;
  background: ${({ bg }) => bg || "transparent"};
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
`;

export const SubTitle = styled.p`
  max-width: 600px;
  margin: 16px auto 60px;
`;

export const GridThree = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #3f5f58;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  color: white;
  p {
    color: #ffff;
  }
`;

export const BioSection = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const BioImage = styled.div`
  flex: 1;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  img {
    // width: 100%;
    // height: 100%;
    object-fit: cover;
  }
`;

export const BioContent = styled.div`
  flex: 1;
  margin: 0 20px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-radius: 24px;
  padding: 48px;

  box-shadow:
    0 10px 40px rgba(15, 40, 35, 0.12),
    inset 0 0 0 1px rgba(255, 255, 255, 0.6);

  h3 {
    color: #4a6741;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
    margin-bottom: 12px;
  }

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 3rem;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  p {
    color: #444;
    margin-bottom: 20px;
    line-height: 1.8;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 12px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 12px;

      @media (max-width: 900px) {
        justify-content: center;
      }
    }
  }

  @media (max-width: 900px) {
    padding: 32px;
  }
`;

export const PricingCard = styled.div`
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-radius: 28px;
  padding: 56px 48px;
  text-align: center;

  max-width: 520px;
  margin: 0 auto;

  box-shadow:
    0 24px 60px rgba(15, 60, 40, 0.12),
    inset 0 0 0 1px rgba(255, 255, 255, 0.7);

  h3 {
    font-size: 2rem;
    font-family: "Playfair Display", serif;
    color: #1f2a24;
  }

  .price {
    font-size: 3.2rem;
    font-family: "Playfair Display", serif;
    margin: 22px 0;
    color: #4a6741;

    span {
      font-size: 1.4rem;
      vertical-align: top;
      margin-right: 5px;
    }
  }

  ul {
    text-align: left;
    margin: 30px auto;
    max-width: 320px;
    color: #4f5c56;

    li {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

export const FeatureCard = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-family: "Playfair Display", serif;
    margin: 20px 0 10px;
    font-size: 1.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

/* ⏩ Continuous smooth movement */
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  margin-top: 40px;

  &:hover div {
    animation-play-state: paused;
  }
`;

export const SliderTrack = styled.div`
  display: flex;
  gap: 24px;
  // width: max-content;
  max-width: 100%;

  animation: ${scroll} 30s linear infinite;
  will-change: transform;
`;

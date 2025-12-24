// src/pages/Nutrition/styles.ts
import styled from "styled-components";

export const PageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  max-width: 1100px;
  margin: 40px auto;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  box-shadow: 0 26px 50px rgba(15, 40, 35, 0.22),
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

  background-image: url("https://images.unsplash.com/photo-1490645935967-10de6ba17061");
  background-size: cover;
  background-position: center;
  max-width: 1100px;
  margin: 40px auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 26px 50px rgba(15, 40, 35, 0.22),
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
  background: ${({ primary, theme }) =>
    primary ? theme.colors.primary : "transparent"};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 12px 32px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BioContent = styled.div`
  flex: 1;

  h3 {
    color: #2a2a2a; // fallback accent color
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 3rem;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  p {
    color: #555;
    margin-bottom: 20px;
    line-height: 1.8;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;

      @media (max-width: 900px) {
        justify-content: center;
      }
    }
  }
`;
export const PricingCard = styled.div`
  background-color: #1a1a1a; /* Dark Card */
  color: white;
  padding: 60px;
  border-radius: 24px;
  text-align: center;
  max-width: 600px;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  h3 {
    font-size: 2rem;
    font-family: "Playfair Display", serif;
    margin-bottom: 10px;
  }

  .price {
    font-size: 4rem;
    font-family: "Playfair Display", serif;
    margin: 20px 0;
    color: #ffd700;

    span {
      font-size: 1.5rem;
      vertical-align: top;
      margin-right: 5px;
    }
  }

  ul {
    text-align: left;
    margin: 30px auto;
    max-width: 300px;
    color: #ccc;

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

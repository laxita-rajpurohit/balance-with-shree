import styled from "styled-components";

// --- Color Palette & Variables ---
const colors = {
  bg: "#F9F8F6", // Soft Cream
  text: "#2C2C2C", // Soft Black
  accent: "#4A6741", // Sage Green
  accentDark: "#2F4F2F",
  gold: "#C5A059", // Muted Gold for highlights
  white: "#FFFFFF",
  cardBg: "#FFFFFF",
};

// --- Components ---

export const PageWrapper = styled.div`
  //   background-color: ${colors.bg};
  //   color: ${colors.text};
  //   font-family: "Lato", sans-serif; /* Ensure you have fonts imported in index.html */
  //   width: 100%;
  //   overflow-x: hidden;
  background: white;
  max-width: 1100px;
  margin: 40px auto;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  /* static 3D look */
  box-shadow: 0 26px 50px rgba(15, 40, 35, 0.22),
    /* deep outer shadow */ 0 0 0 1px rgba(255, 255, 255, 0.9); /* subtle light edge */
  transform: translateY(-4px); /* tiny lift off background */

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 10px;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  height: 85vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${colors.white};

  /* Background Image Setup */
  background-image: url("https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop");
  background-size: cover;
  background-position: center;

  /* Dark Overlay for readability */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;

  h1 {
    font-family: "Playfair Display", serif; /* Premium Heading Font */
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
  }
`;

export const Button = styled.button<{ primary?: boolean }>`
  background-color: ${(props) =>
    props.primary ? colors.accent : "transparent"};
  border: 2px solid ${(props) => (props.primary ? colors.accent : colors.white)};
  color: ${colors.white};
  padding: 12px 32px;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  letter-spacing: 0.5px;

  &:hover {
    background-color: ${(props) =>
      props.primary ? colors.accentDark : colors.white};
    color: ${(props) => (props.primary ? colors.white : colors.text)};
    transform: translateY(-2px);
  }
`;

export const Section = styled.section<{ bg?: string }>`
  padding: 80px 20px;
  background-color: ${(props) => props.bg || "transparent"};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  color: ${colors.text};
  margin-bottom: 16px;
  text-align: center;
`;

export const SubTitle = styled.p`
  color: #666;
  max-width: 600px;
  text-align: center;
  margin-bottom: 60px;
  line-height: 1.6;
`;

export const GridThree = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background: ${colors.white};
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
    color: ${colors.accent};
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

  h3 {
    font-size: 2rem;
    font-family: "Playfair Display", serif;
    margin-bottom: 10px;
  }

  .price {
    font-size: 4rem;
    font-family: "Playfair Display", serif;
    margin: 20px 0;
    color: ${colors.gold};

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

import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  height: 90vh;
  background-image: url("/hero.jpg"); /* Replace with your image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  position: relative;
  color: white;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
`;

export const HeroContent = styled.div`
  position: relative;
  max-width: 800px;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: -1px;
`;

export const Subtitle = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  max-width: 650px;
  margin: 0 auto;
`;

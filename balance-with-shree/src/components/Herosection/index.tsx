// src/components/Herosection/index.tsx
import { ButtonDiv, Content, Img, Wrapper } from "./style";
import heroImg from "../../assets/hero.jpeg";

export const Hero = () => (
  <Wrapper>
    <Img src={heroImg} alt="Hero" />
    <Content>
      <h1>BALANCE<br />WITH SHREE</h1>
      <ButtonDiv>
      <button>Explore Packages</button>
      <button>Book a Session</button>
      </ButtonDiv>
    </Content>
  </Wrapper>
);

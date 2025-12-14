// index.tsx
import { ButtonDiv,  Content, Img, Wrapper } from "./style";
import heroImg from "../../assets/hero.jpeg"
import { Button } from "../Button";

export const Hero = () => (
  <Wrapper>
    <Img src={heroImg} alt="Hero" />
    <Content>
      <h1>
        BALANCE
        <br />
        WITH SHREE
      </h1>
      <ButtonDiv>
  <Button variant="primary">Explore Packages</Button>
  <Button variant="secondary">Book a Session</Button>
</ButtonDiv>
    </Content>
  </Wrapper>
);

// Hero/index.tsx
import { ButtonsRow, Content, HeadingBlock, Img, Wrapper } from "./style";
import heroImg from "../../assets/hero.jpeg";
import { Button } from "../Button";

export const Hero = () => (
  <Wrapper>
    <Img src={heroImg} alt="Hero" />

    <Content>
      <HeadingBlock>
        <h1>
          BALANCE
          <br />
          WITH SHREE
        </h1>
      </HeadingBlock>

      <ButtonsRow>
        <Button variant="primary">Explore Packages</Button>
        <Button variant="secondary">Book a Session</Button>
      </ButtonsRow>
    </Content>
  </Wrapper>
);

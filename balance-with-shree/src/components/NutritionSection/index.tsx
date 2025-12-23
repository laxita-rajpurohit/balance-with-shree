import { Button, Heading, ImageBox, Text, Wrapper } from "./style";

const Nutrition = () => {
  return (
    <Wrapper>
      <div>
        <Heading>Nutrition</Heading>
        <Text>
          Nutrition is not about restriction.
          <br />
          Its about listening, nourishing, and healing.
        </Text>
        <Button>Explore Nutrition Plans</Button>
      </div>

      <ImageBox>
        <p>Disconnect from noise. Reconnect with yourself.</p>
      </ImageBox>
    </Wrapper>
  );
};

export default Nutrition;

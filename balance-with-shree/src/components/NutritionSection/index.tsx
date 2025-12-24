import { Button } from "../NutritionPage/style";
import { Heading, ImageBox, Text, Wrapper } from "./style";

const Nutrition = () => {
  return (
    <Wrapper>
      <div>
        <Heading>Nutrition</Heading>
        <Text>
          Nourish Your Body,
          <br />
          Fuel Your Soul
        </Text>
        <Button primary>Start Your Journey</Button>
      </div>

      <ImageBox></ImageBox>
    </Wrapper>
  );
};

export default Nutrition;

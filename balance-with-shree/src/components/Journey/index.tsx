// Journey/index.tsx
import { Image, Section, Text, Inner } from "./style";
import portrait from "../../assets/journey.png";

export const Journey = () => (
  <Section>
    <Inner>
      <Text>
        <h3>Hi, I am Dhanashree</h3>
        <p>
          I have been practicing yoga since 2015. What started as a short break
          from routine became a lifelong journey of self‑exploration and healing.
        </p>
        <p>
          Through mindful movement and breath, I support you in slowing down,
          reconnecting, and feeling at home in your body.
        </p>
        <button>Read more</button>
      </Text>

      <Image src={portrait} alt="Yoga teacher" />
    </Inner>
  </Section>
);

import { HeroSection, Overlay, HeroContent, HeroTitle, HeroSub } from "./style";

export default function YogaHero() {
  return (
    <HeroSection>
      <Overlay />
      <HeroContent>
        <HeroSub>Yoga at Balance with Shree</HeroSub>
        <HeroTitle>
          Yoga Designed for <br /> Every Phase of Life
        </HeroTitle>
      </HeroContent>
    </HeroSection>
  );
}

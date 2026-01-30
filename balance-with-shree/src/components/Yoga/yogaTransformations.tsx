import { useReveal } from "../../hooks/useReveal";
import {
  YogaSection,
  YogaContainer,
  YogaTitle,
  YogaGrid,
  YogaGalleryImg,
  Reveal,
} from "./style";
import transfrom1 from "../../assets/transform4.jpeg";
import transfrom2 from "../../assets/transform2.jpeg";
import transfrom3 from "../../assets/transform3.jpeg";
export default function YogaTransformations() {
  const { ref, inView } = useReveal();

  return (
    <YogaSection ref={ref}>
      <YogaContainer>
        <YogaTitle>Real Transformations</YogaTitle>

        <Reveal visible={inView}>
          <YogaGrid>
            <YogaGalleryImg
              src={transfrom1}
              alt="Yoga journey before transformation"
            />

            <YogaGalleryImg
              src={transfrom2}
              alt="Yoga practice after transformation"
            />

            <YogaGalleryImg
              src={transfrom3}
              alt="Mind body balance through yoga"
            />
          </YogaGrid>
        </Reveal>
      </YogaContainer>
    </YogaSection>
  );
}

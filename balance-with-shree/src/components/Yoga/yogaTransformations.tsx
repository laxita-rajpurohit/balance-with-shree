import { useReveal } from "../../hooks/useReveal";
import {
  YogaSection,
  YogaContainer,
  YogaTitle,
  YogaGrid,
  YogaGalleryImg,
  Reveal,
} from "./style";

export default function YogaTransformations() {
  const { ref, inView } = useReveal();

  return (
    <YogaSection ref={ref}>
      <YogaContainer>
        <YogaTitle>Real Transformations</YogaTitle>

        <Reveal visible={inView}>
          <YogaGrid>
            <YogaGalleryImg
              src={
                "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263544/transform4_uqtnrd.jpg"
              }
              alt="Yoga journey before transformation"
            />

            <YogaGalleryImg
              src={
                "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263547/transform2_zlouig.jpg"
              }
              alt="Yoga practice after transformation"
            />

            <YogaGalleryImg
              src={
                "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263573/transform3_bzxtx8.jpg"
              }
              alt="Mind body balance through yoga"
            />
          </YogaGrid>
        </Reveal>
      </YogaContainer>
    </YogaSection>
  );
}

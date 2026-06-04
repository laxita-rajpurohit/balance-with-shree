import { useReveal } from "../../hooks/useReveal";
import {
  YogaSection,
  YogaContainer,
  YogaTitle,
  YogaGrid,
  YogaGalleryImg,
  Reveal,
} from "./style";
import { siteMedia } from "../../data/media";

export default function YogaTransformations() {
  const { ref, inView } = useReveal();

  return (
    <YogaSection ref={ref}>
      <YogaContainer>
        <YogaTitle>Real Transformations</YogaTitle>

        <Reveal $visible={inView}>
          <YogaGrid>
            <YogaGalleryImg
              src={siteMedia.yoga.transformations[0]}
              alt="Yoga journey before transformation"
            />

            <YogaGalleryImg
              src={siteMedia.yoga.transformations[1]}
              alt="Yoga practice after transformation"
            />

            <YogaGalleryImg
              src={siteMedia.yoga.transformations[2]}
              alt="Mind body balance through yoga"
            />
          </YogaGrid>
        </Reveal>
      </YogaContainer>
    </YogaSection>
  );
}

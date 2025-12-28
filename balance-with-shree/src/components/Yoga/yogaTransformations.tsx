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
              src="https://images.unsplash.com/photo-1593810450967-f9c42742e326?auto=format&fit=crop&w=800&q=80"
              alt="Yoga journey before transformation"
            />

            <YogaGalleryImg
              src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80"
              alt="Yoga practice after transformation"
            />

            <YogaGalleryImg
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
              alt="Mind body balance through yoga"
            />
          </YogaGrid>
        </Reveal>
      </YogaContainer>
    </YogaSection>
  );
}

import {
  YogaSection,
  YogaContainer,
  YogaGalleryGrid,
  YogaGalleryImg,
} from "./style";
import yogaImage1 from "../../assets/yogaimage1.jpeg";
import yogaImage2 from "../../assets/shree2.jpeg";
import yogaImage3 from "../../assets/yogaimage2.jpeg";
export default function YogaGallery() {
  return (
    <YogaSection>
      <YogaContainer>
        <YogaGalleryGrid>
          <YogaGalleryImg
            src={yogaImage1}
            alt="Yoga practice in calm indoor space"
          />
          <YogaGalleryImg
            src={yogaImage2}
            alt="Woman practicing yoga mindfully"
          />
          <YogaGalleryImg
            src={yogaImage3}
            alt="Holistic yoga and wellness session"
          />
        </YogaGalleryGrid>
      </YogaContainer>
    </YogaSection>
  );
}

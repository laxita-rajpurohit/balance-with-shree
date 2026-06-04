import {
  YogaSection,
  YogaContainer,
  YogaGalleryGrid,
  YogaGalleryImg,
} from "./style";
import { siteMedia } from "../../data/media";

export default function YogaGallery() {
  return (
    <YogaSection>
      <YogaContainer>
        <YogaGalleryGrid>
          <YogaGalleryImg
            src={siteMedia.yoga.gallery[0]}
            alt="Yoga practice in calm indoor space"
          />
          <YogaGalleryImg
            src={siteMedia.yoga.gallery[1]}
            alt="Woman practicing yoga mindfully"
          />
          <YogaGalleryImg
            src={siteMedia.yoga.gallery[2]}
            alt="Holistic yoga and wellness session"
          />
        </YogaGalleryGrid>
      </YogaContainer>
    </YogaSection>
  );
}

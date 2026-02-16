import {
  YogaSection,
  YogaContainer,
  YogaGalleryGrid,
  YogaGalleryImg,
} from "./style";

export default function YogaGallery() {
  return (
    <YogaSection>
      <YogaContainer>
        <YogaGalleryGrid>
          <YogaGalleryImg
            src={
              "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263837/yogaimage1_t1hgpj.jpg"
            }
            alt="Yoga practice in calm indoor space"
          />
          <YogaGalleryImg
            src={
              "https://res.cloudinary.com/drjzugsyo/image/upload/v1771264338/shree2_i3c9mu.jpg"
            }
            alt="Woman practicing yoga mindfully"
          />
          <YogaGalleryImg
            src={
              "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263548/shree3_gveuvh.jpg"
            }
            alt="Holistic yoga and wellness session"
          />
        </YogaGalleryGrid>
      </YogaContainer>
    </YogaSection>
  );
}

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
            src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1200&q=80"
            alt="Yoga practice in calm indoor space"
          />

          <YogaGalleryImg
            src="https://images.unsplash.com/photo-1603985529862-9e12198c9a60?auto=format&fit=crop&w=1200&q=80"
            alt="Woman practicing yoga mindfully"
          />

          <YogaGalleryImg
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
            alt="Holistic yoga and wellness session"
          />
        </YogaGalleryGrid>
      </YogaContainer>
    </YogaSection>
  );
}

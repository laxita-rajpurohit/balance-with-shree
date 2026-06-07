import {
  MediaSection,
  MediaHeader,
  SectionTitle,
  GalleryScroll,
  GalleryCard,
  GalleryImage,
} from "./styles";

interface YogaGalleryProps {
  gallery: readonly string[];
}

export const YogaGallery = ({ gallery }: YogaGalleryProps) => {
  return (
    <MediaSection>
      <MediaHeader>
        <SectionTitle>Gallery</SectionTitle>
      </MediaHeader>
      <GalleryScroll>
        {gallery.map((image, index) => (
          <GalleryCard key={image}>
            <GalleryImage
              src={image}
              alt={
                index === 0
                  ? "Yoga practice in calm indoor space"
                  : index === 1
                    ? "Woman practicing yoga mindfully"
                    : "Holistic yoga and wellness session"
              }
              loading="lazy"
              decoding="async"
            />
          </GalleryCard>
        ))}
      </GalleryScroll>
    </MediaSection>
  );
};

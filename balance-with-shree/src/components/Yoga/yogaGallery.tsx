import { GallerySection, GalleryGrid, GalleryImage } from "./style";

export default function YogaGallery() {
  return (
    <GallerySection>
      <GalleryGrid>
        <GalleryImage src="/yoga1.jpg" />
        <GalleryImage src="/yoga2.jpg" />
        <GalleryImage src="/yoga3.jpg" />
      </GalleryGrid>
    </GallerySection>
  );
}

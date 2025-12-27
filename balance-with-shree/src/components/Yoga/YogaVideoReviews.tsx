import { VideoSection, VideoGrid, VideoCard, VideoTitle } from "./style";

export default function YogaVideoReviews() {
  return (
    <VideoSection>
      <VideoTitle>Client Stories</VideoTitle>
      <VideoGrid>
        <VideoCard controls src="/review1.mp4" />
        <VideoCard controls src="/review2.mp4" />
        <VideoCard controls src="/review3.mp4" />
      </VideoGrid>
    </VideoSection>
  );
}

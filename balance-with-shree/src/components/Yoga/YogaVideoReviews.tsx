import {
  YogaSection,
  YogaContainer,
  YogaTitle,
  YogaVideoGrid,
  YogaVideo,
} from "./style";

export default function YogaVideoReviews() {
  return (
    <YogaSection>
      <YogaContainer>
        <YogaTitle>Client Stories</YogaTitle>

        <YogaVideoGrid>
          <YogaVideo
            controls
            src="https://videos.pexels.com/video-files/4056976/4056976-hd_1920_1080_30fps.mp4"
          />

          <YogaVideo
            controls
            src="https://videos.pexels.com/video-files/4496268/4496268-hd_1920_1080_30fps.mp4"
          />

          <YogaVideo
            controls
            src="https://videos.pexels.com/video-files/3040033/3040033-hd_1920_1080_25fps.mp4"
          />
        </YogaVideoGrid>
      </YogaContainer>
    </YogaSection>
  );
}

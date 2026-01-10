import ExperienceLearning from "../../components/ExperienceLearning";
import JourneyTimeline from "../../components/JouneyTimeline";
import { Journey } from "../../components/Journey";
import Philosophy from "../../components/Philosophy";
import WorkWithMeCTA from "../../components/WorkWithMeCTA";

export default function AboutPage() {
  return (
    <div style={{ margin: "0 20px" }}>
      <Journey showFull />
      <Philosophy />
      <JourneyTimeline />
      <ExperienceLearning />
      <WorkWithMeCTA />
    </div>
  );
}

import { AyurvedaPreview } from "../../components/AyurvedaPreview";
import { FinalCTA } from "../../components/FinalCTA";
import { Hero } from "../../components/Herosection";
import { HomeYoga } from "../../components/HomeYoga";
import { Journey } from "../../components/Journey";
import NutritionPreview from "../../components/NutritionPreview";
import { PackagesPreview } from "../../components/ProgramsPreview";

export const HomePage = () => (
  <div style={{ margin: "0 20px" }}>
    <Hero />
    <Journey />
    <PackagesPreview />
    <HomeYoga />
    <NutritionPreview />
    <AyurvedaPreview />
    <FinalCTA />
  </div>
);

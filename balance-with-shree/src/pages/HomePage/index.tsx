import { Contact } from "../../components/Contact";
import { Hero } from "../../components/Herosection";
import { HomeYoga } from "../../components/HomeYoga";
import { Journey } from "../../components/Journey";
import Nutrition from "../../components/NutritionSection";

export const HomePage = () => (
  <div style={{ margin: "0 20px" }}>
    <Hero />
    <Journey />
    <HomeYoga />
    <Nutrition />
    <Contact />
  </div>
);

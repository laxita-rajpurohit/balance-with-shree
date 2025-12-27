import { Contact } from "../../components/Contact";
import { Hero } from "../../components/Herosection";
import { Holistic } from "../../components/Holistic";
import { Journey } from "../../components/Journey";
import Nutrition from "../../components/NutritionSection";

import { Services } from "../../components/Services";
import { Ayurveda } from "../../components/Ayurveda";
import YogaPage from "../YogaPage";

export const HomePage = () => (
  <div style={{ margin: "0 20px" }}>
    <Hero />
    <Journey />
    <Services />
    <Nutrition />
    <Holistic />

    <YogaPage />
    <Ayurveda />
    <Contact />
  </div>
);

import { Contact } from "../../components/Contact";
import { Hero } from "../../components/Herosection";
import { Holistic } from "../../components/Holistic";
import { Journey } from "../../components/Journey";
import Nutrition from "../../components/NutritionSection";
import { Packages } from "../../components/Packages";
import { Yoga } from "../../components/Yoga";

import { Services } from "../../components/Services";
import { Ayurveda } from "../../components/Ayurveda";

export const HomePage = () => (
  <div style={{ margin: "0 20px" }}>
    <Hero />
    <Journey />
    <Services />
    <Nutrition />
    <Holistic />
    <Packages />
    <Yoga />
    <Ayurveda />
    <Contact />
  </div>
);

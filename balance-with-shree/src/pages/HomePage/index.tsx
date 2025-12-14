import { Contact } from "../../components/Contact";
import { Hero } from "../../components/Herosection";
import { Holistic } from "../../components/Holistic";
import { Journey } from "../../components/Journey";
import Nutrition from "../../components/NutritionSection";
import { Packages } from "../../components/Packages";
import { Retreats } from "../../components/Retreats";
import { Services } from "../../components/Services";



export const HomePage = () => (
  <div style={{margin: '0 20px'}
  }>
    <Hero />
    <Journey />
    <Services/>
    <Holistic />
    <Packages />
    <Nutrition />
    <Retreats />
    <Contact />
  </div>
);

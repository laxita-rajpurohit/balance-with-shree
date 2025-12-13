import { Contact } from "../../components/Contact";
import { Hero } from "../../components/Herosection";
import { Holistic } from "../../components/Holistic";
import { Journey } from "../../components/Journey";
import { Navbar } from "../../components/Navbar";
import Nutrition from "../../components/NutritionSection";
import { Packages } from "../../components/Packages";
import { Retreats } from "../../components/Retreats";
import { Services } from "../../components/Services";



export const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Journey />
    <Services/>
    <Holistic />
    <Packages />
    <Nutrition />
    <Retreats />
    <Contact />
  </>
);

import HeroSection from "../components/Herosection";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "80px" }}>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          AboutSection will come here
        </section>

        <section id="programs">
          ProgramsSection will come here
        </section>

        <section id="contact">
          ContactSection / Footer will come here
        </section>
      </main>
    </>
  );
}

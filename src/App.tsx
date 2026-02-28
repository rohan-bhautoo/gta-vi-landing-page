import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollSmoother } from "./hooks/useScrollSmoother";
import NavBar from "./sections/NavBar/NavBar";
import Hero from "./sections/Hero/Hero";
import FirstVideo from "./sections/FirstVideo/FirstVideo";
import Jason from "./sections/Jason/Jason";
import SecondVideo from "./sections/SecondVideo/SecondVideo";
import Lucia from "./sections/Lucia/Lucia";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useScrollSmoother();

  return (
    <>
      <NavBar />

      <div id="smooth-wrapper">
        <main id="smooth-content">
          <Hero />
          <FirstVideo />
          <Jason />
          <SecondVideo />
          <Lucia />
        </main>
      </div>
    </>
  );
}

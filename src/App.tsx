import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollSmoother } from "./hooks/useScrollSmoother";
import NavBar from "./sections/NavBar/NavBar";
import Hero from "./sections/Hero/Hero";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useScrollSmoother();

  return (
    <>
      <NavBar />

      <div id="smooth-wrapper">
        <main id="smooth-content">
          <Hero />
        </main>
      </div>
    </>
  );
}

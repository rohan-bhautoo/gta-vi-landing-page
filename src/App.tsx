import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollSmoother } from "./hooks/useScrollSmoother";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useScrollSmoother();

  return (
    <>
      {/* NavBar lives OUTSIDE smooth-wrapper because it's position:fixed */}
      {/* <NavBar /> */}

      <div id="smooth-wrapper">
        <main id="smooth-content">
          {/* Sections will be added in subsequent phases */}
          <div className="h-screen flex-center">
            <p className="text-white text-2xl">
              Phase 2 complete — core architecture ready
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

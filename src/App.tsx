import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollSmoother } from "./hooks/useScrollSmoother";
import NavBar from "./sections/NavBar/NavBar";
import Hero from "./sections/Hero/Hero";
import StoryIntro from "./sections/StoryIntro/StoryIntro";
import FirstVideo from "./sections/FirstVideo/FirstVideo";
import Jason from "./sections/Jason/Jason";
import SecondVideo from "./sections/SecondVideo/SecondVideo";
import Lucia from "./sections/Lucia/Lucia";
import SupportingCast from "./sections/SupportingCast/SupportingCast";
import Locations from "./sections/Locations/Locations";
import PostCard from "./sections/PostCard/PostCard";
import Final from "./sections/Final/Final";
import Outro from "./sections/Outro/Outro";
import Newsletter from "./sections/Newsletter/Newsletter";
import Footer from "./sections/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useScrollSmoother();

  return (
    <>
      <NavBar />

      <div id="smooth-wrapper">
        <main id="smooth-content">
          <Hero />
          <StoryIntro />
          <FirstVideo />
          <Jason />
          <SecondVideo />
          <Lucia />
          <SupportingCast />
          <Locations />
          <PostCard />
          <Final />
          <Outro />
          <Newsletter />
          <Footer />
        </main>
      </div>
    </>
  );
}

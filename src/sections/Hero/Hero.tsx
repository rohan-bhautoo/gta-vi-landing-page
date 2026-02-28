import { useRef } from "react";
import { useHeroAnimation } from "./useHeroAnimation";
import ComingSoon from "./ComingSoon";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  useHeroAnimation(containerRef);

  return (
    <section ref={containerRef} className="hero-section w-dvw h-dvh relative overflow-hidden">
      <div className="size-full mask-wrapper">
        <img
          src="/images/hero-bg.webp"
          alt="Vice City skyline"
          className="scale-out object-cover md:scale-125 h-full"
        />
        <img
          src="/images/hero-text.webp"
          alt="Grand Theft Auto VI"
          className="title-logo fade-out absolute h-full md:scale-125 top-0 object-cover"
        />
        <img
          src="/images/watch-trailer.png"
          alt="Watch trailer"
          className="trailer-logo fade-out absolute -bottom-5 w-48 left-1/2 -translate-x-1/2"
        />
        <div className="play-img fade-out rounded-full md:size-28 size-20 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <img src="/images/play.png" alt="Play trailer" className="w-7 ml-1" />
        </div>
      </div>

      <div>
        <img
          src="/images/big-hero-text.svg"
          alt="GTA VI text"
          className="size-full object-cover mask-logo"
        />
      </div>

      <div className="fake-logo-wrapper absolute z-50 xs:top-[9.5rem] sm:top-[12.8rem] md:top-[8.5rem] 2xl:top-44 3xl:top-48 left-1/2 -translate-x-1/2">
        <img
          src="/images/big-hero-text.svg"
          alt="GTA VI"
          className="overlay-logo size-full object-cover opacity-0 w-60 md:w-60 2xl:w-72 3xl:w-80"
        />
      </div>

      <ComingSoon />
    </section>
  );
}

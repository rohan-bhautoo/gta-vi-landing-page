import { useCallback, useRef, useState } from "react";
import TrailerModal from "../../components/ui/TrailerModal";
import ComingSoon from "./ComingSoon";
import { useHeroAnimation } from "./useHeroAnimation";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [trailerOpen, setTrailerOpen] = useState(false);
  useHeroAnimation(containerRef);

  const openTrailer = useCallback(() => setTrailerOpen(true), []);
  const closeTrailer = useCallback(() => setTrailerOpen(false), []);

  return (
    <>
      <section
        ref={containerRef}
        className="hero-section w-dvw h-dvh relative overflow-hidden"
      >
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
        </div>

        <img
          src="/images/watch-trailer.png"
          alt="Watch trailer"
          onClick={openTrailer}
          className="trailer-logo fade-out absolute -bottom-5 w-48 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        />
        <button
          aria-label="Play trailer"
          onClick={openTrailer}
          className="play-img fade-out rounded-full md:size-28 size-20 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300 z-10"
        >
          <img src="/images/play.png" alt="" className="w-7 ml-1" />
        </button>

        <div>
          <img
            src="/images/big-hero-text.svg"
            alt="GTA VI text"
            className="size-full object-cover mask-logo"
          />
        </div>

        <div className="fake-logo-wrapper absolute z-50 xs:top-38 sm:top-[12.8rem] md:top-34 2xl:top-44 3xl:top-48 left-1/2 -translate-x-1/2">
          <img
            src="/images/big-hero-text.svg"
            alt="GTA VI"
            className="overlay-logo size-full object-cover opacity-0 w-60 md:w-60 2xl:w-72 3xl:w-80"
          />
        </div>

        <ComingSoon />
      </section>

      <TrailerModal isOpen={trailerOpen} onClose={closeTrailer} />
    </>
  );
}

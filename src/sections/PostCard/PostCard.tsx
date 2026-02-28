import { useRef } from "react";
import { useVideoScrub } from "../../hooks/useVideoScrub";

export default function PostCard() {
  const sectionRef = useRef<HTMLElement>(null);

  const videoRef = useVideoScrub({
    trigger: sectionRef,
    start: "top center",
    end: "bottom center",
    scrub: true,
    duration: 3,
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex justify-center items-center pt-20 md:pt-60 pb-40 md:pb-80 shadow-2xl overflow-hidden"
    >
      <div className="animated-gradient-bg absolute w-full md:h-[200vh] h-[220vh] left-0 xl:-bottom-1/2 md:-bottom-5/6" />

      <div className="xl:mx-56 md:mx-12 mx-5 xl:h-[85vh] md:h-[40vh] h-[30vh] w-full flex justify-center items-center overflow-hidden relative group hover:rotate-1 hover:scale-[1.02] transition duration-700">
        <img
          src="/images/overlay.webp"
          alt="Postcard overlay"
          className="absolute z-10 w-full h-full"
        />

        <video
          ref={videoRef}
          muted
          playsInline
          autoPlay
          preload="auto"
          src="/videos/postcard-vd.mp4"
          className="w-full h-full 2xl:scale-x-105 object-cover"
        />

        <button className="rounded-full bg-white absolute z-20 left-1/2 -translate-x-1/2 md:bottom-16 -bottom-28 md:w-fit w-2/3 px-5 md:px-7 py-4 text-lg group-hover:bg-yellow transition duration-700 cursor-pointer">
          Explore Leonida Keys
        </button>
      </div>
    </section>
  );
}

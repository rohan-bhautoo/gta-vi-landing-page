import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LOCATIONS } from "../../constants/locations";

export default function Locations() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden black-gradient-bg">
      <div className="py-16 px-8">
        <h2 className="text-yellow font-long uppercase text-6xl md:text-8xl mb-8 text-center">
          Explore Leonida
        </h2>
      </div>

      <div ref={trackRef} className="flex h-[80vh]">
        {LOCATIONS.map((location) => (
          <div
            key={location.name}
            className="relative flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[50vw] h-full group"
          >
            <img
              src={location.image}
              alt={location.name}
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3 className="text-yellow font-long uppercase text-4xl md:text-6xl mb-3">
                {location.name}
              </h3>
              <p className="text-white/80 text-lg md:text-xl max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {location.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

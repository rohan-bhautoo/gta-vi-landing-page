import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SUPPORTING_CHARACTERS } from "../../constants/characters";

export default function SupportingCast() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const q = gsap.utils.selector(section);
      const cards = q(".cast-card");

      gsap.set(cards, { opacity: 0, y: 80 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "40% center",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative py-32 px-8 black-gradient-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-yellow font-long uppercase text-6xl md:text-8xl mb-20 text-center">
          The Cast
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUPPORTING_CHARACTERS.map((character) => (
            <div
              key={character.name}
              className="cast-card group relative overflow-hidden bg-zinc-900/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={character.image}
                  alt={character.name}
                  className="size-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-yellow font-round-bold text-xl mb-1">
                  {character.name}
                </h3>
                <p className="text-pink text-sm uppercase tracking-wider mb-3">
                  {character.role}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {character.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

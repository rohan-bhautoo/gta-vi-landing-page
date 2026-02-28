import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const STORY_LINES = [
  "Vice City, USA.",
  "Jason and Lucia find themselves caught up",
  "in a criminal conspiracy that stretches",
  "across the fictional state of Leonida.",
  "An easy score gone wrong forces them to run —",
  "and fight — for survival.",
];

export default function StoryIntro() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const q = gsap.utils.selector(section);
      const lines = q(".story-line");

      gsap.set(lines, { opacity: 0, y: 30 });

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      }).to(lines, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-dvh w-full flex items-center justify-center black-gradient-bg"
    >
      <div className="max-w-4xl mx-auto px-8 text-center">
        {STORY_LINES.map((line, i) => (
          <p
            key={i}
            className="story-line text-white md:text-4xl text-2xl font-round-bold leading-relaxed md:leading-relaxed"
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}

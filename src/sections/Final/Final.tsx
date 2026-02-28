import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useVideoScrub } from "../../hooks/useVideoScrub";

export default function Final() {
  const sectionRef = useRef<HTMLElement>(null);

  const videoRef = useVideoScrub({
    trigger: sectionRef,
    start: "top 80%",
    end: "90% top",
    scrub: true,
    duration: 3,
  });

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const q = gsap.utils.selector(section);

      gsap.set(q(".final-content"), { opacity: 0 });

      // Pin the section
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "90% top",
          scrub: true,
          pin: true,
        },
      });

      // Fade in + scale content
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "90% top",
          scrub: true,
        },
      }).to(q(".final-content"), {
        opacity: 1,
        duration: 1,
        scale: 1,
        ease: "power1.inOut",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="final relative h-dvh overflow-hidden">
      <div className="final-content scale-110 size-full">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output3.mp4"
          className="size-full object-cover"
        />
      </div>
    </section>
  );
}

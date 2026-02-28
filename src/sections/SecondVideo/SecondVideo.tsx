import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useVideoScrub } from "../../hooks/useVideoScrub";

export default function SecondVideo() {
  const sectionRef = useRef<HTMLElement>(null);

  const videoRef = useVideoScrub({
    trigger: sectionRef,
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,
    duration: 3,
  });

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.set(section, { marginTop: "-60vh", opacity: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      }).to(section, { opacity: 1, duration: 1, ease: "power1.inOut" });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="second-vd-wrapper relative">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"
          className="second-vd size-full object-cover"
          style={{ objectPosition: "15% 0%" }}
        />
      </div>
    </section>
  );
}

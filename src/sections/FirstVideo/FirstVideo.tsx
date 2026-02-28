import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useVideoScrub } from "../../hooks/useVideoScrub";

export default function FirstVideo() {
  const sectionRef = useRef<HTMLElement>(null);

  const videoRef = useVideoScrub({
    trigger: sectionRef,
    start: "top top",
    end: "+=200% top",
    scrub: true,
    pin: true,
    duration: 3,
  });

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.set(section, { marginTop: "-150vh", opacity: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200% top",
          scrub: true,
        },
      })
        .to(".hero-section", { delay: 0.5, opacity: 0, ease: "power1.inOut" })
        .to(section, { opacity: 1, duration: 2, ease: "power1.inOut" });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output1.mp4"
          className="first-vd size-full object-cover md:[object-position:50%_center] [object-position:75%_center]"
        />
      </div>
    </section>
  );
}

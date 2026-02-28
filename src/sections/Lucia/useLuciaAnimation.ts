import { type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function useLuciaAnimation(containerRef: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const q = gsap.utils.selector(container);

      gsap.set(container, { marginTop: "-80vh" });

      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "10% center",
          scrub: 2,
        },
      }).to(".second-vd", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      });

      gsap.to(q(".img-box"), {
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -200,
        duration: 1,
        ease: "power1.inOut",
      });
    },
    { scope: containerRef },
  );
}

import { type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMaskSettings } from "../../hooks/useMaskSettings";

export function useHeroAnimation(containerRef: RefObject<HTMLElement | null>) {
  const { initialMaskPos, initialMaskSize, maskSize } = useMaskSettings();

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const q = gsap.utils.selector(container);

      gsap.set(q(".mask-wrapper"), {
        maskPosition: initialMaskPos,
        maskSize: initialMaskSize,
      });

      gsap.set(q(".mask-logo"), { marginTop: "-100vh", opacity: 0 });
      gsap.set(q(".entrance-message"), { marginTop: "0vh" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          scrub: 2.5,
          end: "+=200%",
          pin: true,
        },
      });

      tl.to(q(".fade-out"), { opacity: 0, ease: "power1.inOut" })
        .to(q(".scale-out"), { scale: 1, ease: "power1.inOut" })
        .to(q(".mask-wrapper"), { maskSize, ease: "power1.inOut" }, "<")
        .to(q(".mask-wrapper"), { opacity: 0 })
        .to(
          q(".overlay-logo"),
          {
            opacity: 1,
            onComplete: () => {
              gsap.to(q(".overlay-logo"), { opacity: 0 });
            },
          },
          "<",
        )
        .to(
          q(".entrance-message"),
          {
            duration: 1,
            ease: "power1.inOut",
            maskImage:
              "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
          },
          "<",
        );
    },
    { scope: containerRef },
  );
}

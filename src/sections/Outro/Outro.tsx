import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Outro() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.set(section, { marginTop: "-100vh", opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 30%",
          end: "top 10%",
          scrub: true,
        },
      });

      tl.to(".final-content", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      });
      tl.to(section, { opacity: 1, duration: 1, ease: "power1.inOut" });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="final-message absolute w-full h-dvh overflow-hidden z-50 opacity-100"
    >
      <div className="h-full col-center gap-10">
        <img src="/images/logo.webp" alt="GTA VI Logo" className="md:w-72 w-52" />

        <div>
          <h3 className="gradient-title">
            Coming <br /> November 19th <br /> 2026
          </h3>
        </div>

        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" alt="PlayStation" className="md:w-32 w-20" />
          <img src="/images/x-logo.svg" alt="Xbox" className="md:w-52 w-40" />
        </div>
      </div>
    </section>
  );
}

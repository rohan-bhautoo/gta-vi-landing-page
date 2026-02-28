import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const q = gsap.utils.selector(section);

      gsap.set(q(".newsletter-content"), { opacity: 0, y: 40 });

      gsap.to(q(".newsletter-content"), {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-8 animated-gradient-bg"
    >
      <div className="newsletter-content max-w-2xl mx-auto text-center">
        <h2 className="text-yellow font-long uppercase text-5xl md:text-7xl mb-6">
          Stay Connected
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-10">
          Sign up for Rockstar Propaganda to get the latest news, exclusive
          content, and more delivered straight to your inbox.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 text-lg focus:outline-none focus:border-yellow transition-colors"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-yellow text-black font-round-bold uppercase tracking-wider hover:bg-white transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

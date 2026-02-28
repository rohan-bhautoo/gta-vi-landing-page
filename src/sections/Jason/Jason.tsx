import { useRef } from "react";
import { JASON } from "../../constants/characters";
import { useJasonAnimation } from "./useJasonAnimation";

export default function Jason() {
  const sectionRef = useRef<HTMLElement>(null);
  useJasonAnimation(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 lg:ps-40 2xl:ps-80 ps-10 py-40 mt-60 flex lg:flex-row flex-col justify-between gap-5 w-dvw overflow-x-hidden"
    >
      <div className="max-w-lg radial-fade-bg">
        <h1 className="text-yellow font-long uppercase text-8xl mb-20">
          {JASON.name.split(" ")[0]}
        </h1>
        <h2 className="text-pink md:text-5xl text-3xl mb-7 md:pe-20 pe-10">
          {JASON.title}
        </h2>
        <p className="text-white md:text-2xl text-lg md:pe-28 pe-14">
          {JASON.description}
        </p>

        <div className="bg-yellow h-[90vh] w-auto md:mt-36 mt-20 -translate-x-5">
          <img
            src={JASON.images[1]}
            alt={`${JASON.name} portrait`}
            className="size-full object-cover object-[80%_center] hover:scale-x-[0.97] hover:scale-y-[0.98] transition duration-700 ease-in-out"
          />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="bg-yellow lg:h-[80vh] w-auto -translate-x-5">
          <img
            src={JASON.images[0]}
            alt={`${JASON.name} action shot`}
            className="size-full object-cover object-[5%_center] hover:scale-[0.98] transition duration-700 ease-in-out"
          />
        </div>
        <div className="bg-yellow h-[50vh] md:w-[60%] -translate-x-5">
          <img
            src={JASON.images[2]}
            alt={`${JASON.name} scenic shot`}
            className="size-full object-cover object-[42%_center] hover:scale-[0.97] transition duration-700 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}

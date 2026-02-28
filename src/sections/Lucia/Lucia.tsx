import { useRef } from "react";
import { LUCIA } from "../../constants/characters";
import { useLuciaAnimation } from "./useLuciaAnimation";

export default function Lucia() {
  const sectionRef = useRef<HTMLElement>(null);
  useLuciaAnimation(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-40 mt-60 flex lg:flex-row flex-col justify-between gap-5 w-dvw overflow-x-hidden"
    >
      <div className="flex flex-col gap-5 items-end img-box lg:w-1/2 ps-10 mt-96">
        <div className="bg-yellow lg:h-[80vh] w-auto -translate-x-5">
          <img
            src={LUCIA.images[0]}
            alt={`${LUCIA.name} portrait`}
            className="size-full object-cover [object-position:85%_center] hover:scale-[0.98] transition duration-700 ease-in-out"
          />
        </div>
        <div className="bg-yellow lg:h-[90vh] md:w-[60%] -translate-x-5">
          <img
            src={LUCIA.images[2]}
            alt={`${LUCIA.name} action shot`}
            className="size-full object-cover [object-position:62%_center] hover:scale-x-[0.98] hover:scale-y-[0.99] transition duration-700 ease-in-out"
          />
        </div>
      </div>

      <div className="lg:w-1/2 radial-fade-bg">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1 className="text-yellow font-long uppercase text-8xl mb-20">
            {LUCIA.name.split(" ")[0]}
          </h1>
          <h2 className="text-pink md:text-5xl text-3xl mb-7 md:pe-20 pe-10">
            {LUCIA.title}
          </h2>
          <p className="text-white md:text-2xl text-lg md:pe-28 pe-14">
            {LUCIA.description}
          </p>
        </div>

        <div className="bg-yellow lg:h-[60vh] lg:w-[70%] w-[80%] md:my-36 my-20 lg:-translate-x-5 translate-x-5">
          <img
            src={LUCIA.images[1]}
            alt={`${LUCIA.name} scenic shot`}
            className="size-full object-cover [object-position:50%_center] hover:scale-x-[0.98] hover:scale-y-[0.98] transition duration-700 ease-in-out"
          />
        </div>

        {LUCIA.quote && (
          <p className="max-w-xl lg:ps-32 ps-10 text-white md:text-2xl text-lg md:pe-28 pe-14 md:hidden block xl:block">
            {LUCIA.quote}
          </p>
        )}
      </div>
    </section>
  );
}

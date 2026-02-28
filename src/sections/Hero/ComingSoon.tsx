export default function ComingSoon() {
  return (
    <section className="entrance-message absolute inset-0 w-full h-dvh overflow-hidden z-20 opacity-100">
      <div className="h-full col-center gap-10">
        <img
          src="/images/logo.webp"
          alt="GTA VI Logo"
          className="entrance-logo 2xl:w-72 3xl:w-80 md:w-60 w-48 absolute xs:top-[9.5rem] sm:top-[12.8rem] md:top-[8.5rem] 2xl:top-44 3xl:top-48 left-1/2 -translate-x-1/2"
        />

        <div className="mt-40 md:mt-60 2xl:mt-44 3xl:top-48">
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

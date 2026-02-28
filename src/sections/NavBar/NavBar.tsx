export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center md:p-16 p-5 z-100">
      <img src="/images/nav-logo.svg" alt="GTA VI" className="scale-90" />
      <button aria-label="Open menu" className="cursor-pointer hover:opacity-70 transition-opacity duration-300">
        <img src="/images/menu.svg" alt="" className="w-10" />
      </button>
    </nav>
  );
}

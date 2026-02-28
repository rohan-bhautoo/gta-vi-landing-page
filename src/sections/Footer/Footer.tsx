export default function Footer() {
  return (
    <footer className="relative bg-black py-16 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
          <img
            src="/images/gta-vi-logo.png"
            alt="Grand Theft Auto VI"
            className="w-32 md:w-40"
          />

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-8">
              {["Home", "Trailers", "Characters", "Locations"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-yellow transition-colors uppercase tracking-wider text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <img src="/images/ps-logo.svg" alt="PlayStation" className="w-16" />
            <img src="/images/x-logo.svg" alt="Xbox" className="w-24" />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-xs leading-relaxed mb-2">
            &copy; 2026 Rockstar Games. All rights reserved. Grand Theft Auto,
            GTA, and the GTA logo are trademarks of Take-Two Interactive
            Software, Inc.
          </p>
          <p className="text-white/30 text-xs">
            Rating Pending - Visit{" "}
            <a
              href="https://www.esrb.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/50 transition-colors"
            >
              ESRB.org
            </a>{" "}
            for rating information.
          </p>
        </div>
      </div>
    </footer>
  );
}

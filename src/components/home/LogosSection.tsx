export function LogosSection() {
  const logos = [
    "Family",
    "Greenery",
    "Stratative",
    "Morpo",
    "RS",
    "TechFlow",
    "CraftStudio",
    "BuildCore",
    "InnoWorks",
    "PureDesign",
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground mb-8 tracking-wide uppercase">
          Les entrepreneurs qui nous font confiance
        </p>
      </div>

      {/* Marquee container - 75% width on desktop, 95% on mobile */}
      <div className="relative w-[95%] md:w-[75%] mx-auto">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-8 md:gap-12 animate-marquee group-hover:[animation-play-state:paused]">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-10 md:h-12 px-4 shrink-0"
              >
                <span className="text-[#D1D5DB] text-lg md:text-xl font-display font-medium whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
                  {logo}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-8 md:gap-12 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex items-center justify-center h-10 md:h-12 px-4 shrink-0"
              >
                <span className="text-[#D1D5DB] text-lg md:text-xl font-display font-medium whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

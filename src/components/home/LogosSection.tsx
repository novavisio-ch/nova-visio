export function LogosSection() {
  const logos = ["Family", "Greenery", "Stratative", "Morpo", "RS", "TechFlow", "CraftStudio", "BuildCore", "InnoWorks", "PureDesign"];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];
  return <section className="py-12 md:py-16 overflow-hidden bg-transparent">
      

      {/* Marquee container - 75% width on desktop, 95% on mobile */}
      <div className="relative w-[95%] md:w-[75%] mx-auto" style={{
      maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
    }}>
        {/* Scrolling track */}
        <div className="flex overflow-hidden">
          <div className="flex gap-8 md:gap-12 animate-marquee">
            {duplicatedLogos.map((logo, index) => <div key={index} className="flex items-center justify-center h-16 md:h-20 px-6 shrink-0">
                <span className="text-xl md:text-2xl font-display font-medium whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity" style={{ color: "#6B7280" }}>
                  {logo}
                </span>
              </div>)}
          </div>
          <div className="flex gap-8 md:gap-12 animate-marquee" aria-hidden="true">
            {duplicatedLogos.map((logo, index) => <div key={`duplicate-${index}`} className="flex items-center justify-center h-16 md:h-20 px-6 shrink-0">
                <span className="text-xl md:text-2xl font-display font-medium whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity" style={{ color: "#6B7280" }}>
                  {logo}
                </span>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}
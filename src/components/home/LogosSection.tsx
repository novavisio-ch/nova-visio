import logoJmgInvest from "@/assets/logos/jmginvest.png";
import logoLgh from "@/assets/logos/lgh.png";
import logoMb from "@/assets/logos/mb.png";
import logoMc from "@/assets/logos/mc.png";
import logoMcurls from "@/assets/logos/mcurls.png";
import logoSir from "@/assets/logos/sir.png";
import logoSynergyLodges from "@/assets/logos/synergylodges.png";
import logoSyngraph from "@/assets/logos/syngraph.png";
import logoVam from "@/assets/logos/vam.png";
import logoWinsihams from "@/assets/logos/winsihams.png";

export function LogosSection() {
  const logos = [
    { src: logoJmgInvest, alt: "JMG Invest" },
    { src: logoLgh, alt: "LGH Editions" },
    { src: logoMb, alt: "Michaelly Beauty" },
    { src: logoMc, alt: "Michaelly Cosmetic" },
    { src: logoMcurls, alt: "Michaelly Curls" },
    { src: logoSir, alt: "SignRail Consulting" },
    { src: logoSynergyLodges, alt: "Synergy Lodges" },
    { src: logoSyngraph, alt: "Synergie Graphic" },
    { src: logoVam, alt: "Vivre au Maroc" },
    { src: logoWinsihams, alt: "Winsihams" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 md:py-16 overflow-hidden bg-transparent">
      {/* Marquee container - 75% width on desktop, 95% on mobile */}
      <div
        className="relative w-[95%] md:w-[75%] mx-auto"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Scrolling track */}
        <div className="flex overflow-hidden">
          <div className="flex gap-8 md:gap-12 animate-marquee">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 md:h-20 px-6 shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-14 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          <div
            className="flex gap-8 md:gap-12 animate-marquee"
            aria-hidden="true"
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex items-center justify-center h-16 md:h-20 px-6 shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-14 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

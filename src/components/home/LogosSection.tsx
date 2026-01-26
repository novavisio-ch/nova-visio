import logoLgh from "@/assets/logos/lgh.png";
import logoSir from "@/assets/logos/sir.png";
import logoSynergyLodges from "@/assets/logos/synergylodges.png";
import logoSyngraph from "@/assets/logos/syngraph.png";
import logoVam from "@/assets/logos/vam.png";
import logoSimplia from "@/assets/logos/simplia.png";
import logoMlkNutrition from "@/assets/logos/mlk-nutrition.png";
import logoCapillusAcademy from "@/assets/logos/capillus-academy.png";
import logoGastonLastes from "@/assets/logos/gaston-lastes.png";
import logoHobbyz from "@/assets/logos/hobbyz.png";
import logoHobbyWebAcademy from "@/assets/logos/hobbyweb-academy.png";

export function LogosSection() {
  const logos = [
    { src: logoLgh, alt: "LGH Editions" },
    { src: logoSir, alt: "SignRail Consulting" },
    { src: logoSynergyLodges, alt: "Synergy Lodges" },
    { src: logoSyngraph, alt: "Synergie Graphic" },
    { src: logoVam, alt: "Vivre au Maroc" },
    { src: logoSimplia, alt: "Simplia" },
    { src: logoMlkNutrition, alt: "MLK Nutrition" },
    { src: logoCapillusAcademy, alt: "Capillus Academy" },
    { src: logoGastonLastes, alt: "Gaston Lastes" },
    { src: logoHobbyz, alt: "Hobbyz" },
    { src: logoHobbyWebAcademy, alt: "HobbyWeb Academy" },
  ];

  return (
    <section className="py-12 md:py-16 overflow-hidden bg-transparent">
      {/* Marquee container - 75% width on desktop, 95% on mobile */}
      <div className="relative w-[95%] md:w-[75%] mx-auto marquee-mask">
        {/* Scrolling track */}
        <div className="flex overflow-hidden">
          <div className="marquee-track">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 md:h-20 px-6 flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-14 w-auto max-w-[150px] md:max-w-[180px] object-contain opacity-60 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="marquee-track" aria-hidden="true">
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex items-center justify-center h-16 md:h-20 px-6 flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-14 w-auto max-w-[150px] md:max-w-[180px] object-contain opacity-60 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

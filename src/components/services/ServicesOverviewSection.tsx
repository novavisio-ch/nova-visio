import { useState } from "react";
import strategyMockup from "@/assets/services/strategy-mockup.jpg";
import identityWebMockup from "@/assets/services/identity-web-mockup.jpg";
import webdesignMockup from "@/assets/services/webdesign-mockup.jpg";
import landingMockup from "@/assets/services/landing-mockup.jpg";
import conversionMockup from "@/assets/services/conversion-mockup.jpg";

const services = [
  {
    id: "strategy",
    title: "Stratégie & architecture de site",
    image: strategyMockup,
  },
  {
    id: "identity",
    title: "Identité visuelle appliquée au web",
    image: identityWebMockup,
  },
  {
    id: "webdesign",
    title: "Webdesign & UX/UI",
    image: webdesignMockup,
  },
  {
    id: "landing",
    title: "Pages de vente & landing pages",
    image: landingMockup,
  },
  {
    id: "conversion",
    title: "Systèmes et parcours de conversion",
    image: conversionMockup,
  },
];

export const ServicesOverviewSection = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const currentImage = hoveredService
    ? services.find((s) => s.id === hoveredService)?.image
    : strategyMockup;

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text & List */}
          <div className="lg:col-span-7">
            {/* Title */}
            <h2 className="text-display-md text-gray-900 mb-6">
              Nos services de{" "}
              <span className="text-gradient-gold">création web</span>
            </h2>

            {/* Intro paragraph */}
            <p className="text-body-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
              Notre approche combine stratégie, identité visuelle et expérience
              utilisateur pour concevoir des sites et interfaces sur mesure.
              Chaque élément est pensé pour clarifier votre offre, rassurer vos
              prospects et soutenir la croissance de votre activité.
            </p>

            {/* Services List */}
            <div className="border-t border-gray-200">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group border-b border-gray-200 cursor-pointer"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div
                    className={`
                      py-5 px-4 -mx-4 transition-all duration-300 ease-out
                      hover:bg-[#C3B68F]/5 hover:px-6
                      ${hoveredService === service.id ? "bg-[#C3B68F]/5" : ""}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`
                          text-xl md:text-2xl font-medium transition-colors duration-300
                          ${
                            hoveredService === service.id
                              ? "text-[#C3B68F]"
                              : "text-gray-800"
                          }
                        `}
                      >
                        {service.title}
                      </span>

                      {/* Arrow indicator on hover */}
                      <svg
                        className={`
                          w-5 h-5 transition-all duration-300 transform
                          ${
                            hoveredService === service.id
                              ? "opacity-100 translate-x-0 text-[#C3B68F]"
                              : "opacity-0 -translate-x-2 text-gray-400"
                          }
                        `}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dynamic Visual */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Visual with smooth transition */}
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                {services.map((service) => (
                  <img
                    key={service.id}
                    src={service.image}
                    alt={service.title}
                    className={`
                      w-full h-auto transition-all duration-500 ease-out
                      ${
                        (hoveredService === service.id) || 
                        (!hoveredService && service.id === "strategy")
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 absolute inset-0"
                      }
                    `}
                    loading="lazy"
                  />
                ))}
              </div>

              {/* Decorative elements */}
              <div
                className={`
                  absolute -top-4 -left-4 w-24 h-24 rounded-full blur-2xl
                  transition-all duration-500
                  ${hoveredService ? "opacity-50" : "opacity-30"}
                `}
                style={{ backgroundColor: "#C3B68F" }}
              />
              <div
                className={`
                  absolute -bottom-4 -right-12 w-32 h-32 rounded-full blur-3xl
                  transition-all duration-500
                  ${hoveredService ? "opacity-40" : "opacity-20"}
                `}
                style={{ backgroundColor: "#C3B68F" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import strategyImage from "@/assets/services/service-strategy.png";
import identityImage from "@/assets/services/service-identity.png";
import webdesignImage from "@/assets/services/service-webdesign.png";
import landingImage from "@/assets/services/service-landing.png";
import conversionImage from "@/assets/services/service-conversion.png";

const services = [
  { id: "strategy", title: "Stratégie & architecture de site", image: strategyImage },
  { id: "identity", title: "Identité visuelle appliquée au web", image: identityImage },
  { id: "webdesign", title: "Webdesign & UX/UI", image: webdesignImage },
  { id: "landing", title: "Pages de vente & landing pages", image: landingImage },
  { id: "conversion", title: "Systèmes et parcours de conversion", image: conversionImage },
];

export const ServicesOverviewSection = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text & List */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Title */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-6 leading-tight">
              Nos services de{" "}
              <span className="text-gradient-gold">création web</span>
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
              Notre approche combine stratégie, identité visuelle et expérience
              utilisateur pour concevoir des sites et interfaces sur mesure.
              Chaque élément est pensé pour clarifier votre offre, rassurer vos
              prospects et soutenir la croissance de votre activité.
            </p>

            {/* Services List */}
            <div className="border-t border-gray-200">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group border-b border-gray-200"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div
                    className={`
                      py-4 md:py-5 px-4 -mx-4 transition-all duration-300 ease-out cursor-pointer
                      hover:bg-gradient-to-r hover:from-[#C3B68F]/5 hover:to-transparent hover:pl-8
                      ${hoveredService === service.id ? "bg-gradient-to-r from-[#C3B68F]/5 to-transparent pl-8" : ""}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`
                          text-lg md:text-xl lg:text-[1.35rem] font-medium transition-all duration-300
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
                          w-5 h-5 transition-all duration-300 transform flex-shrink-0
                          ${
                            hoveredService === service.id
                              ? "opacity-100 translate-x-0 text-[#C3B68F]"
                              : "opacity-0 -translate-x-3 text-gray-400"
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
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Dynamic Visual */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Dynamic image display */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={hoveredService || "strategy"}
                  src={services.find(s => s.id === (hoveredService || "strategy"))?.image}
                  alt={services.find(s => s.id === (hoveredService || "strategy"))?.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  loading="lazy"
                  style={{
                    boxShadow: hoveredService 
                      ? "0 25px 60px -15px rgba(0, 0, 0, 0.35), 0 0 50px rgba(195, 182, 143, 0.2)"
                      : "0 20px 50px -15px rgba(0, 0, 0, 0.25)",
                  }}
                />
              </AnimatePresence>

              {/* Decorative elements */}
              <div
                className={`
                  absolute -top-8 -left-8 w-32 h-32 rounded-full blur-3xl -z-10
                  transition-all duration-500 pointer-events-none
                  ${hoveredService ? "opacity-50" : "opacity-25"}
                `}
                style={{ backgroundColor: "#C3B68F" }}
              />
              <div
                className={`
                  absolute -bottom-12 -right-8 w-40 h-40 rounded-full blur-3xl -z-10
                  transition-all duration-500 pointer-events-none
                  ${hoveredService ? "opacity-40" : "opacity-20"}
                `}
                style={{ backgroundColor: "#C3B68F" }}
              />
              
              {/* Subtle grid pattern */}
              <div 
                className="absolute inset-0 -z-20 opacity-[0.03]"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #C3B68F 1px, transparent 0)`,
                  backgroundSize: "24px 24px"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

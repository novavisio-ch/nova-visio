import { useState } from "react";
import { motion } from "framer-motion";
import webMockup from "@/assets/mockups/web-mockup-homepage.jpg";
import mobileMockup from "@/assets/mockups/mobile-mockup.jpg";

const services = [
  { id: "strategy", title: "Stratégie & architecture de site" },
  { id: "identity", title: "Identité visuelle appliquée au web" },
  { id: "webdesign", title: "Webdesign & UX/UI" },
  { id: "landing", title: "Pages de vente & landing pages" },
  { id: "conversion", title: "Systèmes et parcours de conversion" },
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

          {/* Right Column - Floating Mockups */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative">
              {/* Desktop/Laptop Mockup */}
              <motion.div
                className="relative z-10"
                animate={{
                  y: hoveredService ? -5 : 0,
                  rotateY: hoveredService ? 2 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ perspective: "1000px" }}
              >
                <div 
                  className="relative rounded-xl overflow-hidden"
                  style={{
                    boxShadow: hoveredService 
                      ? "0 25px 60px -15px rgba(0, 0, 0, 0.3), 0 0 40px rgba(195, 182, 143, 0.15)"
                      : "0 20px 50px -15px rgba(0, 0, 0, 0.25)",
                    transition: "box-shadow 0.4s ease-out"
                  }}
                >
                  <img
                    src={webMockup}
                    alt="Aperçu site web desktop"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Mobile Mockup - Floating overlay */}
              <motion.div
                className="absolute -bottom-6 -right-4 md:-right-8 z-20 w-24 md:w-32 lg:w-36"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                animate={{
                  y: hoveredService ? -8 : 0,
                  rotate: hoveredService ? -2 : 0,
                }}
              >
                <div 
                  className="relative rounded-2xl overflow-hidden bg-gray-900 p-1"
                  style={{
                    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  {/* Phone frame */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-800 rounded-full" />
                  <img
                    src={mobileMockup}
                    alt="Aperçu site mobile"
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div
                className={`
                  absolute -top-8 -left-8 w-32 h-32 rounded-full blur-3xl
                  transition-all duration-500 pointer-events-none
                  ${hoveredService ? "opacity-40" : "opacity-20"}
                `}
                style={{ backgroundColor: "#C3B68F" }}
              />
              <div
                className={`
                  absolute -bottom-12 right-12 w-40 h-40 rounded-full blur-3xl
                  transition-all duration-500 pointer-events-none
                  ${hoveredService ? "opacity-30" : "opacity-15"}
                `}
                style={{ backgroundColor: "#C3B68F" }}
              />
              
              {/* Subtle grid pattern */}
              <div 
                className="absolute inset-0 -z-10 opacity-[0.03]"
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

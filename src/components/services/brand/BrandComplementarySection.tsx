import { Layout, Printer, Package, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "social",
    icon: Layout,
    title: "Templates réseaux sociaux",
    description: "Posts, stories et bannières aux couleurs de votre marque, prêts à être personnalisés dans Canva ou Figma. Idéal pour garder une communication régulière, cohérente et professionnelle sans repartir de zéro à chaque publication.",
    accentColor: "#C3B68F",
    delay: 0,
  },
  {
    id: "print",
    icon: Printer,
    title: "Supports imprimés",
    description: "Cartes de visite (design et impression) et supports papier essentiels pour vos rendez‑vous : flyers A5, dépliants A4, documents de présentation. Tout est aligné sur votre identité visuelle pour une expérience de marque cohérente, du web au physique.",
    accentColor: "#9D8DF0",
    delay: 0.1,
  },
  {
    id: "brandkit",
    icon: Package,
    title: "Brand kit digital & contenus",
    description: "Photo de profil, bannières, templates de posts et stories, visuels de newsletter et d'articles de blog, réunis dans un kit clé en main. Accompagné d'un mini guide PDF et d'un accompagnement éditorial pour des textes clairs et alignés à votre nouvelle identité.",
    accentColor: "#C3B68F",
    delay: 0.2,
  },
];

export const BrandComplementarySection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #1f1a3d 100%)",
        }}
      />

      {/* Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(195, 182, 143, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(195, 182, 143, 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-[10%] w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #C3B68F 0%, transparent 70%)" }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] w-48 h-48 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C6AE8 0%, transparent 70%)" }}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C3B68F]/30 bg-[#C3B68F]/10 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-[#C3B68F]" />
            <span className="text-sm font-medium text-[#C3B68F]">Extensions disponibles</span>
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Services{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C3B68F] via-[#DCCB99] to-[#C3B68F]">
                complémentaires
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C3B68F] to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Des extensions pour exploiter pleinement votre nouvelle identité visuelle.
          </p>
        </motion.div>

        {/* Creative Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="group relative"
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: service.delay,
                  ease: "easeOut"
                }}
                style={{ perspective: "1000px" }}
              >
                {/* Card Glow Effect */}
                <motion.div
                  className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${service.accentColor}40 0%, transparent 50%, ${service.accentColor}20 100%)`,
                  }}
                />

                {/* Card */}
                <div 
                  className="relative h-full rounded-2xl border border-white/10 backdrop-blur-xl p-6 md:p-8 transition-all duration-500 group-hover:border-[#C3B68F]/40 group-hover:translate-y-[-4px] group-hover:shadow-[0_20px_40px_-15px_rgba(195,182,143,0.3)]"
                  style={{
                    background: "linear-gradient(135deg, hsla(252, 30%, 18%, 0.7) 0%, hsla(252, 30%, 12%, 0.7) 100%)",
                  }}
                >
                  {/* Decorative Corner */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at top right, ${service.accentColor} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Large Number */}
                  <motion.span 
                    className="absolute top-4 right-6 font-display text-7xl md:text-8xl font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-all duration-500 select-none"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: service.delay + 0.3 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>

                  {/* Icon */}
                  <motion.div
                    className="relative mb-6 inline-flex"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div 
                      className="relative p-4 rounded-xl transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${service.accentColor}15 0%, ${service.accentColor}05 100%)`,
                        border: `1px solid ${service.accentColor}25`,
                      }}
                    >
                      <Icon 
                        className="w-7 h-7 transition-all duration-300" 
                        style={{ color: service.accentColor }}
                      />
                      
                      {/* Icon Pulse Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        style={{ border: `1px solid ${service.accentColor}` }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h4 className="font-display text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#C3B68F] transition-colors duration-300">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-white/60 text-sm md:text-base leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${service.accentColor}50, transparent)`,
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: service.delay + 0.4 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          className="flex justify-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C3B68F]/50" />
            <Sparkles className="w-5 h-5 text-[#C3B68F]/50" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C3B68F]/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

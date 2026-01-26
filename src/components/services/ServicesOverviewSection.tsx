import { useState } from "react";
import { motion } from "framer-motion";
import { 
  LayoutGrid, 
  Palette, 
  Layers, 
  Rocket, 
  TrendingUp,
  ArrowRight,
  Sparkles
} from "lucide-react";

const services = [
  { 
    id: "strategy", 
    title: "Stratégie & architecture", 
    subtitle: "de site",
    description: "Définition de vos objectifs, structure des pages et parcours utilisateur pensés pour guider vos visiteurs vers l'action.",
    icon: LayoutGrid,
    number: "01",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent"
  },
  { 
    id: "identity", 
    title: "Identité visuelle", 
    subtitle: "appliquée au web",
    description: "Déclinaison de votre charte graphique sur le web : couleurs, typographies et éléments visuels cohérents.",
    icon: Palette,
    number: "02",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent"
  },
  { 
    id: "webdesign", 
    title: "Webdesign", 
    subtitle: "& UX/UI",
    description: "Interfaces modernes et intuitives, conçues pour offrir une expérience fluide sur tous les écrans.",
    icon: Layers,
    number: "03",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent"
  },
  { 
    id: "landing", 
    title: "Pages de vente", 
    subtitle: "& landing pages",
    description: "Pages optimisées pour la conversion, avec des arguments clairs et des appels à l'action stratégiques.",
    icon: Rocket,
    number: "04",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent"
  },
  { 
    id: "conversion", 
    title: "Systèmes", 
    subtitle: "de conversion",
    description: "Tunnels de vente, formulaires et automatisations pour transformer vos visiteurs en clients.",
    icon: TrendingUp,
    number: "05",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const ServicesOverviewSection = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#C3B68F]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#C3B68F]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C3B68F]/10 border border-[#C3B68F]/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-[#C3B68F]" />
            <span className="text-sm font-medium text-[#C3B68F]">Nos expertises</span>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Nos services de{" "}
            <span className="relative">
              <span className="text-gradient-gold">création web</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#C3B68F] to-[#DCCB99] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Une approche complète pour concevoir des expériences web 
            qui convertissent et marquent les esprits.
          </p>
        </motion.div>

        {/* Services Grid - Bento Style */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === service.id;
            const isLarge = index === 0 || index === 3;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  group relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer
                  ${isLarge ? "lg:col-span-2" : ""}
                `}
                onMouseEnter={() => {
                  setHoveredService(service.id);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => setHoveredService(null)}
                whileHover={{ y: -8 }}
              >
                {/* Card background */}
                <div 
                  className={`
                    absolute inset-0 transition-all duration-500
                    ${isHovered 
                      ? "bg-gray-900" 
                      : "bg-white border border-gray-100"
                    }
                  `}
                />
                
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className={`relative z-10 p-6 md:p-8 ${isLarge ? "lg:p-10" : ""}`}>
                  <div className="flex items-start justify-between mb-8">
                    {/* Number */}
                    <motion.span
                      className={`
                        font-display text-5xl md:text-6xl font-bold transition-colors duration-300
                        ${isHovered ? "text-white/20" : "text-gray-100"}
                      `}
                      animate={{ 
                        scale: isHovered ? 1.1 : 1,
                        x: isHovered ? 10 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.number}
                    </motion.span>
                    
                    {/* Icon */}
                    <motion.div
                      className={`
                        p-3 md:p-4 rounded-2xl transition-all duration-300
                        ${isHovered 
                          ? "bg-[#C3B68F] text-gray-900" 
                          : "bg-gray-50 text-gray-600"
                        }
                      `}
                      animate={{ 
                        rotate: isHovered ? 12 : 0,
                        scale: isHovered ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.div>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-6">
                    <h3 
                      className={`
                        font-display text-2xl md:text-3xl font-bold transition-colors duration-300 leading-tight
                        ${isHovered ? "text-white" : "text-gray-900"}
                      `}
                    >
                      {service.title}
                    </h3>
                    <span 
                      className={`
                        text-lg md:text-xl font-medium transition-colors duration-300
                        ${isHovered ? "text-[#C3B68F]" : "text-[#C3B68F]"}
                      `}
                    >
                      {service.subtitle}
                    </span>
                    
                    {/* Description */}
                    <p 
                      className={`
                        mt-4 text-sm md:text-base leading-relaxed transition-colors duration-300
                        ${isHovered ? "text-gray-300" : "text-gray-500"}
                      `}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow CTA */}
                  <motion.div
                    className="flex items-center gap-2"
                    animate={{ 
                      x: isHovered ? 8 : 0,
                      opacity: isHovered ? 1 : 0.6
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span 
                      className={`
                        text-sm font-medium transition-colors duration-300
                        ${isHovered ? "text-white" : "text-gray-500"}
                      `}
                    >
                      En savoir plus
                    </span>
                    <motion.div
                      animate={{ x: isHovered ? 4 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight 
                        className={`
                          w-4 h-4 transition-colors duration-300
                          ${isHovered ? "text-[#C3B68F]" : "text-gray-400"}
                        `}
                      />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Decorative corner accent */}
                <motion.div
                  className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${isHovered ? "rgba(195, 182, 143, 0.3)" : "rgba(195, 182, 143, 0.1)"}, transparent 70%)`,
                  }}
                  animate={{ scale: isHovered ? 1.5 : 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Hover border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none"
                  style={{
                    boxShadow: isHovered 
                      ? "inset 0 0 0 1px rgba(195, 182, 143, 0.5), 0 20px 40px -15px rgba(0, 0, 0, 0.3)"
                      : "inset 0 0 0 0px transparent"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C3B68F]" />
            <Sparkles className="w-5 h-5 text-[#C3B68F]" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C3B68F]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

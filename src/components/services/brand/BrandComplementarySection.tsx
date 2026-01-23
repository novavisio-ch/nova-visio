import { Layout, FileText, Monitor, Plus } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "social",
    icon: Layout,
    title: "Templates réseaux sociaux",
    description:
      "Posts, stories et bannières aux couleurs de votre marque, prêts à être personnalisés pour vos publications.",
    gradient: "from-[#C3B68F]/20 to-[#DCCB99]/10",
  },
  {
    id: "presentation",
    icon: FileText,
    title: "Supports de présentation",
    description:
      "Slides et PDF professionnels pour vos présentations commerciales, propositions et documents clients.",
    gradient: "from-[#7C6AE8]/20 to-[#9D8DF0]/10",
  },
  {
    id: "web",
    icon: Monitor,
    title: "Adaptation au site web",
    description:
      "Accompagnement pour intégrer votre nouvelle identité à votre site web existant ou en création.",
    gradient: "from-[#C3B68F]/20 to-[#7C6AE8]/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const BrandComplementarySection = () => {
  return (
    <section 
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #1F1A3D 100%)" }}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
            style={{ background: "linear-gradient(135deg, #C3B68F 0%, #DCCB99 100%)" }}
          >
            <Plus className="w-7 h-7 text-[#2D284D]" />
          </motion.div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-display-md font-bold text-white mb-4">
            Services complémentaires
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Des extensions pour exploiter pleinement
            <br className="hidden md:block" />
            votre <strong className="text-[#C3B68F]">nouvelle identité visuelle</strong>
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3 } 
                }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: "linear-gradient(135deg, #C3B68F40 0%, transparent 100%)" }}
                />
                
                <div
                  className={`relative h-full bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-2xl border border-[#C3B68F]/30 p-6 md:p-8 transition-all duration-500 group-hover:border-[#C3B68F]/60 group-hover:shadow-[0_0_40px_-10px_#C3B68F]`}
                >
                  {/* Icon with animated background */}
                  <motion.div 
                    className="relative mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="absolute inset-0 w-14 h-14 rounded-xl opacity-50 blur-lg"
                      style={{ background: "linear-gradient(135deg, #C3B68F 0%, #DCCB99 100%)" }}
                    />
                    <div 
                      className="relative w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, rgba(195,182,143,0.2) 0%, rgba(220,203,153,0.1) 100%)", border: "1px solid rgba(195,182,143,0.3)" }}
                    >
                      <Icon className="w-7 h-7 text-[#C3B68F]" />
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <h4 className="font-display text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#DCCB99] transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-white/70 text-base leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Decorative corner */}
                  <div 
                    className="absolute top-0 right-0 w-20 h-20 opacity-10 rounded-tr-2xl"
                    style={{ 
                      background: `radial-gradient(circle at top right, #C3B68F 0%, transparent 70%)` 
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-px mx-auto max-w-md"
          style={{ background: "linear-gradient(90deg, transparent, #C3B68F, transparent)" }}
        />
      </div>
    </section>
  );
};

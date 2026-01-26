import { Layout, Printer, Package } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "social",
    icon: Layout,
    title: "Templates réseaux sociaux",
    description: "Posts, stories et bannières aux couleurs de votre marque, prêts à être personnalisés dans Canva ou Figma. Idéal pour garder une communication régulière, cohérente et professionnelle sans repartir de zéro à chaque publication.",
  },
  {
    id: "print",
    icon: Printer,
    title: "Supports imprimés",
    description: "Cartes de visite (design et impression) et supports papier essentiels pour vos rendez‑vous : flyers A5, dépliants A4, documents de présentation. Tout est aligné sur votre identité visuelle pour une expérience de marque cohérente, du web au physique.",
  },
  {
    id: "brandkit",
    icon: Package,
    title: "Brand kit digital & contenus",
    description: "Photo de profil, bannières, templates de posts et stories, visuels de newsletter et d'articles de blog, réunis dans un kit clé en main. Accompagné d'un mini guide PDF et d'un accompagnement éditorial pour des textes clairs et alignés à votre nouvelle identité.",
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
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const BrandComplementarySection = () => {
  return (
    <section
      className="py-20 md:py-28"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1f1a3d 100%)",
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Services complémentaires
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Des extensions pour exploiter pleinement votre nouvelle identité visuelle.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group rounded-2xl border border-[#C3B68F]/30 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(195,182,143,0.2)] hover:scale-[1.02] hover:border-[#C3B68F]/50"
                style={{
                  background: "hsla(252, 30%, 18%, 0.5)",
                }}
              >
                {/* Icon Container */}
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C3B68F]/10 border border-[#C3B68F]/20">
                  <Icon className="w-6 h-6 text-[#C3B68F] transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h4 className="font-display text-xl font-bold text-white mb-3">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
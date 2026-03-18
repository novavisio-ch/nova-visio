import { motion } from "framer-motion";
import { MessageCircle, Search, Palette, Layout, Rocket } from "lucide-react";
import { useIsTabletOrMobile } from "@/hooks/use-mobile";

const steps = [
  {
    number: "01",
    title: "Clarification",
    subtitle: "du projet",
    description: "Un premier échange pour comprendre votre activité, vos objectifs et vos contraintes.",
    icon: MessageCircle,
    color: "from-primary/20 to-primary/5",
  },
  {
    number: "02",
    title: "Diagnostic",
    subtitle: "stratégique",
    description: "Analyse de votre situation actuelle : image de marque, cohérence visuelle et messages.",
    icon: Search,
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    number: "03",
    title: "Fondations",
    subtitle: "de marque",
    description: "Définition du positionnement, identité visuelle, tonalité et structure des messages.",
    icon: Palette,
    color: "from-primary/20 to-primary/5",
  },
  {
    number: "04",
    title: "Conception",
    subtitle: "web & UX",
    description: "Site structuré, lisible et orienté crédibilité avec une expérience utilisateur optimale.",
    icon: Layout,
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    number: "05",
    title: "Déploiement",
    subtitle: "& suivi",
    description: "Mise en ligne et accompagnement pour des outils durables et évolutifs.",
    icon: Rocket,
    color: "from-primary/20 to-primary/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const mobileCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function StepsSection() {
  const isMobile = useIsTabletOrMobile();

  return (
    <section className="py-12 md:py-20 lg:py-28 px-4 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16 lg:mb-20"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 leading-tight">
            Notre méthode, <span className="text-gradient-gold">étape par étape.</span>
          </h2>
          <p className="text-body text-xs sm:text-sm md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Chaque projet suit un processus clair. L'objectif : réduire la complexité,
            <br className="hidden md:block" />
            structurer vos idées et créer des supports durables.
          </p>
        </motion.div>

        {/* Creative Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Horizontal progress line - desktop only */}
          <div className="hidden lg:block absolute top-[72px] left-[10%] right-[10%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary to-primary/60 origin-left"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={cardVariants}
                  className="group relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20px" }}
                >
                  {/* Card */}
                  <motion.div
                    className={`relative h-full p-4 md:p-6 rounded-xl md:rounded-2xl border bg-gradient-to-b ${step.color} backdrop-blur-sm`}
                    initial={{ 
                      borderColor: "rgba(255,255,255,0.1)",
                      boxShadow: "none",
                      y: 0
                    }}
                    whileInView={isMobile ? { 
                      borderColor: "rgba(195, 182, 143, 0.4)",
                      boxShadow: "0 0 30px -10px #C3B68F"
                    } : undefined}
                    whileHover={!isMobile ? { 
                      borderColor: "rgba(195, 182, 143, 0.5)",
                      boxShadow: "0 0 50px -12px #C3B68F",
                      y: -8
                    } : undefined}
                    viewport={isMobile ? { once: true, margin: "-30px" } : undefined}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Large number */}
                    <span className="text-3xl md:text-6xl font-bold text-primary/80 leading-none mb-2 md:mb-4 block">
                      {step.number}
                    </span>

                    {/* Icon */}
                    <motion.div 
                      className="mb-2 md:mb-4"
                      whileInView={isMobile ? { scale: 1.1 } : undefined}
                      whileHover={!isMobile ? { scale: 1.25 } : undefined}
                      viewport={isMobile ? { once: true, margin: "-30px" } : undefined}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-sm md:text-xl font-bold text-foreground mb-0.5 md:mb-1 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-primary text-[10px] md:text-sm font-medium mb-2 md:mb-3">{step.subtitle}</p>

                    {/* Description */}
                    <p className="text-body text-[10px] md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                      {step.description}
                    </p>

                    {/* Connector arrow - desktop only */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.15 }}
                          className="w-6 h-6 rounded-full bg-background border border-primary/30 flex items-center justify-center"
                        >
                          <svg
                            className="w-3 h-3 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 md:mt-16 flex justify-center"
        >
          <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-body text-[10px] md:text-sm">Processus transparent et collaboratif</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

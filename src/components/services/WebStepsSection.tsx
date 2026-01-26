import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Search, Layers, Palette, Rocket, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Clarification du projet",
    description:
      "Nous échangeons pour comprendre votre activité, vos objectifs et les besoins de vos visiteurs.",
    icon: MessageCircle,
    color: "#C3B68F",
  },
  {
    number: "02",
    title: "Diagnostic",
    description:
      "Analyse de votre situation actuelle : site existant, concurrence, forces et points à améliorer.",
    icon: Search,
    color: "#7C6AE8",
  },
  {
    number: "03",
    title: "Fondations",
    description:
      "Définition de l'architecture du site, des messages clés et de la structure des pages.",
    icon: Layers,
    color: "#C3B68F",
  },
  {
    number: "04",
    title: "Conception web",
    description:
      "Création des maquettes, design sur mesure et développement de votre site.",
    icon: Palette,
    color: "#7C6AE8",
  },
  {
    number: "05",
    title: "Déploiement & accompagnement",
    description:
      "Mise en ligne, formation à l'utilisation et accompagnement pour les premiers ajustements.",
    icon: Rocket,
    color: "#C3B68F",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

interface StepCardProps {
  step: typeof steps[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const StepCard = ({ step, index, isActive, onHover, onLeave }: StepCardProps) => {
  const Icon = step.icon;
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      variants={cardVariants}
      className="relative group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ perspective: "1000px" }}
    >
      {/* Glow effect behind card */}
      <motion.div
        className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{
          background: `radial-gradient(circle at center, ${step.color}30 0%, transparent 70%)`,
        }}
      />

      {/* Main card */}
      <motion.div
        className="relative overflow-hidden rounded-2xl border backdrop-blur-sm"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
          borderColor: isActive ? step.color : "rgba(255,255,255,0.08)",
        }}
        whileHover={{
          scale: 1.02,
          rotateY: isEven ? 2 : -2,
          boxShadow: `0 30px 60px -20px ${step.color}40`,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Top gradient bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
            opacity: isActive ? 1 : 0,
          }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
          {/* Left: Number + Icon */}
          <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-3">
            {/* Floating number badge */}
            <motion.div
              className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-bold text-lg overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`,
                border: `1px solid ${step.color}40`,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated shimmer */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(45deg, transparent 30%, ${step.color}20 50%, transparent 70%)`,
                }}
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
              <span style={{ color: step.color }}>{step.number}</span>
            </motion.div>

            {/* Icon */}
            <motion.div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${step.color}15, transparent)`,
              }}
              whileHover={{ scale: 1.2, rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-5 h-5" style={{ color: step.color }} />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <motion.h3
              className="text-xl md:text-2xl font-display font-bold text-white mb-3 transition-colors duration-300"
              style={{ color: isActive ? step.color : "#fff" }}
            >
              {step.title}
            </motion.h3>
            <p className="text-white/60 leading-relaxed text-base md:text-lg group-hover:text-white/80 transition-colors duration-300">
              {step.description}
            </p>
          </div>

          {/* Arrow indicator */}
          <motion.div
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full self-center"
            style={{
              background: `${step.color}15`,
              border: `1px solid ${step.color}30`,
            }}
            animate={{
              x: isActive ? [0, 5, 0] : 0,
            }}
            transition={{
              duration: 1,
              repeat: isActive ? Infinity : 0,
            }}
          >
            <ArrowRight className="w-4 h-4" style={{ color: step.color }} />
          </motion.div>
        </div>

        {/* Decorative corner elements */}
        <div
          className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none opacity-20"
          style={{
            background: `radial-gradient(circle at bottom right, ${step.color}30, transparent 70%)`,
          }}
        />
      </motion.div>

      {/* Connector line to next card */}
      {index < steps.length - 1 && (
        <motion.div
          className="hidden md:block absolute left-8 -bottom-8 w-0.5 h-8"
          style={{
            background: `linear-gradient(to bottom, ${step.color}50, ${steps[index + 1].color}50)`,
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      )}
    </motion.div>
  );
};

export const WebStepsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a12 0%, #1a1530 50%, #0a0a12 100%)",
      }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(195, 182, 143, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(195, 182, 143, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(195, 182, 143, 0.08) 0%, transparent 60%)",
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124, 106, 232, 0.08) 0%, transparent 60%)",
        }}
        animate={{
          y: [0, 30, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(195, 182, 143, 0.1), rgba(195, 182, 143, 0.02))",
              border: "1px solid rgba(195, 182, 143, 0.2)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "#C3B68F" }} />
            <span className="text-sm font-medium" style={{ color: "#C3B68F" }}>
              Processus de création
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-display-md md:text-display-lg text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Notre méthode pour
            <br className="hidden md:block" />
            <span className="text-gradient-gold">votre site web</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-body-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Un processus clair et structuré, de la première discussion
            jusqu'à la mise en ligne de votre site.
          </motion.p>
        </motion.div>

        {/* Steps Timeline */}
        <motion.div
          className="space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              isActive={activeIndex === index}
              onHover={() => setActiveIndex(index)}
              onLeave={() => setActiveIndex(null)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(195, 182, 143, 0.1), rgba(195, 182, 143, 0.02))",
              border: "1px solid rgba(195, 182, 143, 0.2)",
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px -20px rgba(195, 182, 143, 0.3)",
            }}
          >
            <motion.div
              className="w-3 h-3 rounded-full"
              style={{ background: "#C3B68F" }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-white/80 font-medium">
              Durée moyenne : <span style={{ color: "#C3B68F" }}>4 à 8 semaines</span>
            </span>
            <motion.div
              className="flex items-center gap-1 text-sm"
              style={{ color: "#C3B68F" }}
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span>Démarrer</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

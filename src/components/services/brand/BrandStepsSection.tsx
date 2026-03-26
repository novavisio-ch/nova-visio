import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Search, Lightbulb, PenTool, Package, HeartHandshake, Sparkles, ArrowRight } from "lucide-react";
import { useIsTabletOrMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/hooks/use-theme";

const steps = [
  {
    number: "01",
    title: "On apprend à vous connaître",
    description: "Votre activité, vos valeurs, l'image que vous voulez projeter. On creuse avant de dessiner.",
    icon: MessageCircle,
    color: "#C3B68F",
  },
  {
    number: "02",
    title: "On analyse ce qui existe",
    description: "Votre logo actuel, vos couleurs, vos supports - on identifie ce qui marche et ce qui doit évoluer.",
    icon: Search,
    color: "#7C6AE8",
  },
  {
    number: "03",
    title: "On explore des pistes",
    description: "Moodboards, directions visuelles, recherches graphiques. Vous choisissez celle qui vous ressemble.",
    icon: Lightbulb,
    color: "#C3B68F",
  },
  {
    number: "04",
    title: "On crée et on ajuste",
    description: "Logo, couleurs, typos - tout prend forme. On itère ensemble jusqu'à ce que ce soit parfait.",
    icon: PenTool,
    color: "#7C6AE8",
  },
  {
    number: "05",
    title: "On vous livre tout",
    description: "Fichiers finaux, charte graphique, guide d'utilisation. Tout est prêt à l'emploi.",
    icon: Package,
    color: "#C3B68F",
  },
  {
    number: "06",
    title: "On vous accompagne",
    description: "Mise en place sur votre site, vos réseaux et vos supports. On ne vous lâche pas.",
    icon: HeartHandshake,
    color: "#7C6AE8",
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
  isMobile: boolean;
  isDark: boolean;
}

const StepCard = ({ step, index, isActive, onHover, onLeave, isMobile, isDark }: StepCardProps) => {
  const Icon = step.icon;
  const isEven = index % 2 === 0;
  const desktopActive = !isMobile && isActive;
  
  const textDefault = isDark ? "#fff" : "hsl(249, 40%, 17%)";
  const textMuted = isDark ? "rgba(255,255,255,0.6)" : "rgba(31,26,61,0.6)";
  const textMutedHover = isDark ? "rgba(255,255,255,0.8)" : "rgba(31,26,61,0.8)";
  const textSubtle = isDark ? "rgba(255,255,255,0.15)" : "rgba(31,26,61,0.15)";
  const iconMuted = isDark ? "rgba(255,255,255,0.4)" : "rgba(31,26,61,0.4)";
  const cardBg = isDark 
    ? "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)"
    : "linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 100%)";
  const borderDefault = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  return (
    <motion.div
      variants={cardVariants}
      className="relative group"
      onMouseEnter={!isMobile ? onHover : undefined}
      onMouseLeave={!isMobile ? onLeave : undefined}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="absolute -inset-4 rounded-3xl blur-2xl"
        style={{ background: `radial-gradient(circle at center, ${step.color}30 0%, transparent 70%)` }}
        initial={{ opacity: 0 }}
        whileInView={isMobile ? { opacity: 0.5 } : undefined}
        whileHover={!isMobile ? { opacity: 1 } : undefined}
        animate={desktopActive ? { opacity: 1 } : (!isMobile ? { opacity: 0 } : undefined)}
        viewport={isMobile ? { once: true, margin: "-50px" } : undefined}
        transition={{ duration: 0.5 }}
      />

      <div className="relative flex items-center gap-4 md:gap-10">
        <motion.div
          className="flex-shrink-0 relative w-12 md:w-24 lg:w-28 flex items-center justify-center"
          whileHover={!isMobile ? { scale: 1.1 } : undefined}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="font-display font-bold text-4xl md:text-7xl lg:text-8xl"
            initial={{ color: textSubtle, textShadow: "none" }}
            whileInView={isMobile ? { color: step.color, textShadow: `0 0 40px ${step.color}50` } : undefined}
            animate={desktopActive ? { color: step.color, textShadow: `0 0 40px ${step.color}50` } : (!isMobile ? { color: textSubtle, textShadow: "none" } : undefined)}
            viewport={isMobile ? { once: true, margin: "-50px" } : undefined}
            transition={{ duration: 0.3 }}
          >
            {step.number}
          </motion.span>
        </motion.div>

        <motion.div
          className="flex-1 relative overflow-hidden rounded-xl md:rounded-2xl backdrop-blur-sm"
          style={{ background: cardBg }}
          initial={{ boxShadow: "none" }}
          whileInView={isMobile ? { boxShadow: `0 15px 40px -15px ${step.color}30` } : undefined}
          whileHover={!isMobile ? { scale: 1.02, rotateY: isEven ? 2 : -2, boxShadow: `0 30px 60px -20px ${step.color}40` } : undefined}
          viewport={isMobile ? { once: true, margin: "-50px" } : undefined}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 h-0.5 md:h-1"
            style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
            initial={{ opacity: 0 }}
            whileInView={isMobile ? { opacity: 1 } : undefined}
            animate={desktopActive ? { opacity: 1 } : (!isMobile ? { opacity: 0 } : undefined)}
            viewport={isMobile ? { once: true, margin: "-50px" } : undefined}
            transition={{ duration: 0.3 }}
          />

          <div className="p-4 md:p-8 flex items-center gap-4 md:gap-6 min-h-[80px] md:min-h-[140px]">
            <div className="flex-1">
              <motion.h3
                className="text-base md:text-2xl font-display font-bold mb-1 md:mb-3"
                initial={{ color: textDefault }}
                whileInView={isMobile ? { color: step.color } : undefined}
                animate={desktopActive ? { color: step.color } : (!isMobile ? { color: textDefault } : undefined)}
                viewport={isMobile ? { once: true, margin: "-50px" } : undefined}
                transition={{ duration: 0.3 }}
              >
                {step.title}
              </motion.h3>
              <motion.p 
                className="leading-relaxed text-xs md:text-lg line-clamp-2"
                initial={{ color: textMuted }}
                whileInView={isMobile ? { color: textMutedHover } : undefined}
                whileHover={!isMobile ? { color: textMutedHover } : undefined}
                viewport={isMobile ? { once: true, margin: "-50px" } : undefined}
                transition={{ duration: 0.3 }}
              >
                {step.description}
              </motion.p>
            </div>

            <motion.div
              className="flex-shrink-0"
              initial={{ scale: 1 }}
              whileInView={isMobile ? { scale: 1.1 } : undefined}
              whileHover={!isMobile ? { scale: 1.3 } : undefined}
              animate={desktopActive ? { scale: 1.25, rotate: [0, 10, -10, 0] } : (!isMobile ? { scale: 1 } : undefined)}
              viewport={isMobile ? { once: true, margin: "-50px" } : undefined}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                initial={{ color: iconMuted }}
                whileInView={isMobile ? { color: step.color } : undefined}
                animate={desktopActive ? { color: step.color } : (!isMobile ? { color: iconMuted } : undefined)}
                viewport={isMobile ? { once: true, margin: "-50px" } : undefined}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-6 h-6 md:w-10 md:h-10" />
              </motion.div>
            </motion.div>
          </div>

          <div
            className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none opacity-20"
            style={{ background: `radial-gradient(circle at bottom right, ${step.color}30, transparent 70%)` }}
          />
        </motion.div>
      </div>

      {index < steps.length - 1 && (
        <motion.div
          className="absolute left-7 md:left-10 -bottom-6 md:-bottom-8 w-0.5 h-6 md:h-8"
          style={{ background: `linear-gradient(to bottom, ${step.color}40, ${steps[index + 1].color}40)` }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      )}
    </motion.div>
  );
};

export const BrandStepsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isMobile = useIsTabletOrMobile();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="py-20 md:py-32 relative overflow-hidden section-gradient-steps">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(195, 182, 143, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(195, 182, 143, 0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(195, 182, 143, 0.08) 0%, transparent 60%)" }}
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124, 106, 232, 0.08) 0%, transparent 60%)" }}
        animate={{ y: [0, 30, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-10 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(195, 182, 143, 0.1), rgba(195, 182, 143, 0.02))",
              border: "1px solid rgba(195, 182, 143, 0.2)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" style={{ color: "#C3B68F" }} />
            <span className="text-xs md:text-sm font-medium" style={{ color: "#C3B68F" }}>
              Processus créatif
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-display-lg text-foreground mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
             De l'idée au logo.
            <br className="hidden md:block" />
            <span className="text-gradient-gold">Étape par étape.</span>
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base md:text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Vous savez exactement où on en est. À chaque étape.
          </motion.p>
        </motion.div>

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
              isMobile={isMobile}
              isDark={isDark}
            />
          ))}
        </motion.div>

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
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-foreground-strong font-medium">
              Durée moyenne : <span style={{ color: "#C3B68F" }}>3 à 6 semaines</span>
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

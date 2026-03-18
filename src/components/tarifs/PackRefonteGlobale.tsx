import { motion } from "framer-motion";
import { RefreshCw, Palette, Monitor, Check, ArrowRight, Users, History, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const targetAudience = [
  {
    icon: History,
    text: "Marques déjà lancées qui ne se reconnaissent plus dans leur identité actuelle.",
  },
  {
    icon: TrendingUp,
    text: "Sites en ligne depuis plusieurs années, devenus peu lisibles, datés ou peu efficaces.",
  },
  {
    icon: Users,
    text: "Entreprises qui ont évolué (positionnement, offres, cible) et ont besoin d'une mise à jour globale cohérente.",
  },
];

const brandingHighlights = [
  "Audit de votre identité actuelle",
  "Logo refondu + déclinaisons",
  "Palette & typographies mises à jour",
  "Moodboard de refonte",
  "Brandboard & mini charte graphique",
];

const webHighlights = [
  "Audit de votre site actuel",
  "Refonte 6 à 8 pages sur nouvelle structure",
  "Webdesign aligné sur nouvelle identité",
  "Site responsive + bases SEO",
  "Mise en ligne + support post-refonte",
];

const mainBullets = [
  "Audit complet de votre identité et de votre site actuel",
  "Refonte de marque : logo, palette, typographies et univers visuel",
  "Nouvelle charte graphique synthétique",
  "Refonte de site vitrine (6 à 8 pages) structurée pour vos objectifs",
  "Webdesign sur-mesure, responsive et aligné à votre nouvelle identité",
  "Accompagnement de l'audit à la mise en ligne",
];

export function PackRefonteGlobale() {
  const isMobile = useIsMobile();

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const hoverVariants = isMobile
    ? {}
    : {
        y: -8,
        boxShadow: "0 20px 60px -15px rgba(124, 106, 232, 0.4), 0 0 40px rgba(124, 106, 232, 0.15)",
      };

  const inViewVariants = isMobile
    ? {
        boxShadow: "0 15px 40px -10px rgba(124, 106, 232, 0.3)",
      }
    : {};

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover={hoverVariants}
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className="relative group"
      style={{ perspective: "1000px" }}
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, #9D8DF0 0%, transparent 50%, #C3B68F 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={isMobile ? inViewVariants : {}}
      />

      {/* Main Pack Card */}
      <div
        className="relative h-full rounded-3xl border overflow-hidden transition-all duration-500"
        style={{
          background: "linear-gradient(180deg, rgba(15,15,20,0.95) 0%, rgba(10,10,15,0.98) 100%)",
          borderColor: "rgba(124, 106, 232, 0.3)",
        }}
      >
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: i % 2 === 0 ? "#9D8DF0" : "#C3B68F",
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 p-6 md:p-10 lg:p-12">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <div className="flex items-center justify-center mb-6">
              <motion.div
                whileHover={{ scale: 1.15, rotate: -180 }}
                transition={{ duration: 0.5 }}
              >
                <RefreshCw className="w-8 h-8 text-[#9D8DF0] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(124,106,232,0.5)]" />
              </motion.div>
            </div>

            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Pack Refonte Globale
            </h3>
            <p
              className="text-xl md:text-2xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #9D8DF0 0%, #C3B68F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Reprenez le contrôle de votre image
            </p>
             <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-6">
               Une refonte <strong className="text-foreground font-semibold">cohérente</strong> de votre identité visuelle et de votre site web pour{" "}
               <strong className="text-[#9D8DF0] font-semibold">aligner votre image</strong> avec le niveau réel de votre activité.
            </p>

            {/* Price with animated underline */}
            <motion.div className="inline-block" whileHover={{ scale: 1.02 }}>
              <span
                className="text-4xl md:text-5xl font-display font-bold"
                style={{
                  background: "linear-gradient(135deg, #9D8DF0 0%, #B8A9F5 50%, #7C6AE8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                2'600 CHF
              </span>
            </motion.div>
          </div>

          {/* Target Audience */}
          <div className="mb-8 md:mb-10">
            <h4 className="font-display text-lg md:text-xl font-bold text-foreground mb-5 flex items-center gap-3">
              <Users className="w-5 h-5 text-[#9D8DF0]" />
              À qui s'adresse ce pack ?
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {targetAudience.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(124, 106, 232, 0.25)" }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl border border-[#9D8DF0]/20 hover:border-[#9D8DF0]/40 transition-colors duration-300"
                    style={{ background: "rgba(124, 106, 232, 0.03)" }}
                  >
                    <Icon className="w-6 h-6 text-[#9D8DF0] mb-3" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Summary bullets */}
          <motion.div
            className="mb-8 md:mb-10 p-5 md:p-6 rounded-xl border hover:border-[#9D8DF0]/40 transition-colors duration-300"
            whileHover={{ y: -4, boxShadow: "0 15px 40px -10px rgba(124, 106, 232, 0.2)" }}
            style={{
              background: "linear-gradient(135deg, rgba(124, 106, 232, 0.05) 0%, rgba(195, 182, 143, 0.05) 100%)",
              borderColor: "rgba(124, 106, 232, 0.2)",
            }}
          >
            <h4 className="font-display text-lg md:text-xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Check className="w-5 h-5 text-[#9D8DF0]" />
              En résumé
            </h4>
            <ul className="grid md:grid-cols-2 gap-3">
              {mainBullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + 0.3 }}
                >
                  <Check className="w-4 h-4 text-[#9D8DF0] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Two columns: Branding & Web */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
            {/* Branding Section */}
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 15px 40px -10px rgba(195, 182, 143, 0.2)" }}
              className="p-5 md:p-6 rounded-xl border border-[#C3B68F]/30 hover:border-[#C3B68F]/50 transition-colors duration-300"
              style={{ background: "rgba(195, 182, 143, 0.03)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-5 h-5 text-[#C3B68F]" />
                <h5 className="font-display text-lg font-bold text-[#C3B68F]">Refonte de marque</h5>
              </div>
              <ul className="space-y-2.5">
                {brandingHighlights.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2.5"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + 0.3 }}
                  >
                    <Check className="w-4 h-4 text-[#C3B68F] mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Web Section */}
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 15px 40px -10px rgba(124, 106, 232, 0.2)" }}
              className="p-5 md:p-6 rounded-xl border border-[#9D8DF0]/30 hover:border-[#9D8DF0]/50 transition-colors duration-300"
              style={{ background: "rgba(124, 106, 232, 0.03)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-5 h-5 text-[#9D8DF0]" />
                <h5 className="font-display text-lg font-bold text-[#9D8DF0]">Modernisation digitale</h5>
              </div>
              <ul className="space-y-2.5">
                {webHighlights.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2.5"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + 0.3 }}
                  >
                    <Check className="w-4 h-4 text-[#9D8DF0] mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA with shine effect */}
          <div className="text-center pt-6 border-t border-white/10">
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="px-8 group/btn relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #9D8DF0 0%, #C3B68F 100%)",
                    color: "#1f1a3d",
                  }}
                >
                  <span className="relative z-10 flex items-center font-semibold">
                    Demander un devis pour ce pack
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { Package, RefreshCw, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const packs = [
  {
    icon: Package,
    title: "Pack Digital & Branding",
    description: "Logo + identité visuelle + site web complet. Un seul interlocuteur, une image cohérente dès le départ.",
    price: "2'200 CHF",
    theme: "gold" as const,
  },
  {
    icon: RefreshCw,
    title: "Pack Refonte Globale",
    description: "Audit complet + nouvelle identité + refonte de site. Pour remettre votre image à la hauteur.",
    price: "2'600 CHF",
    theme: "purple" as const,
  },
];

const themeStyles = {
  gold: {
    iconColor: "text-[#C3B68F]",
    borderColor: "#C3B68F",
    gradient: "from-[#C3B68F]/10 to-transparent",
    priceGradient: "from-[#DCCB99] to-[#C3B68F]",
    shadow: "rgba(195, 182, 143, 0.35)",
    glowColor: "rgba(195, 182, 143, 0.4)",
  },
  purple: {
    iconColor: "text-[#9D8DF0]",
    borderColor: "#9D8DF0",
    gradient: "from-[#9D8DF0]/10 to-transparent",
    priceGradient: "from-[#9D8DF0] to-[#7C6AE8]",
    shadow: "rgba(124, 106, 232, 0.35)",
    glowColor: "rgba(124, 106, 232, 0.4)",
  },
};

export function PacksPromoSection() {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container max-w-5xl">
        {/* Section header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#C3B68F]/10 to-[#9D8DF0]/10 mb-4">
            <Sparkles className="w-4 h-4 text-[#C3B68F]" />
            <span className="text-sm font-medium text-foreground">Offres combinées</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-display-md mb-3 leading-tight">
            Besoin d'une solution{" "}
            <span className="text-gradient-gold">complète</span> ?
          </h2>
          <p className="text-sm md:text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Identité visuelle + site web dans une seule offre. Moins de prestataires, plus de cohérence.
          </p>
        </motion.div>

        {/* Pack cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
          {packs.map((pack, index) => {
            const Icon = pack.icon;
            const styles = themeStyles[pack.theme];

            return (
              <motion.div
                key={pack.title}
                initial={{ 
                  opacity: 0, 
                  y: 40, 
                  rotateX: 15,
                  borderColor: `transparent`
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                  borderColor: "transparent",
                  boxShadow: isMobile ? `0 0 30px -10px ${styles.shadow}` : "none"
                }}
                whileHover={
                  !isMobile
                    ? {
                        y: -8,
                        borderColor: "transparent",
                        boxShadow: `0 0 40px -10px ${styles.shadow}`,
                      }
                    : undefined
                }
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`group relative p-5 md:p-6 rounded-xl bg-gradient-to-br ${styles.gradient} backdrop-blur-sm overflow-hidden`}
                style={{ perspective: "1000px" }}
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${styles.borderColor} 0%, transparent 50%, ${styles.borderColor} 100%)`,
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        background: styles.borderColor,
                        left: `${15 + i * 35}%`,
                        top: `${20 + i * 25}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: 2.5 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: pack.theme === "purple" ? -180 : 15 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                    className={`${styles.iconColor} flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6 md:w-7 md:h-7 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--glow)]" 
                      style={{ "--glow": styles.glowColor } as React.CSSProperties}
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-1">
                      {pack.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {pack.description}
                    </p>
                    <span
                      className="text-lg md:text-xl font-bold"
                      style={{
                        background: `linear-gradient(135deg, ${pack.theme === "gold" ? "#DCCB99, #C3B68F" : "#9D8DF0, #7C6AE8"})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {pack.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/tarifs#packs">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="gold-outline"
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Découvrir tous nos packs
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

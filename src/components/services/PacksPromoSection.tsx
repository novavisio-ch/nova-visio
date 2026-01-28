import { motion } from "framer-motion";
import { Package, RefreshCw, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const packs = [
  {
    icon: Package,
    title: "Pack Digital & Branding",
    description: "Identité visuelle + site web complet pour lancer votre activité avec une image cohérente.",
    price: "2'200 CHF",
    theme: "gold" as const,
  },
  {
    icon: RefreshCw,
    title: "Pack Refonte Globale",
    description: "Audit + repositionnement de marque + modernisation de votre site pour reprendre le contrôle.",
    price: "2'600 CHF",
    theme: "purple" as const,
  },
];

const themeStyles = {
  gold: {
    iconColor: "text-[#C3B68F]",
    borderColor: "border-[#C3B68F]/30",
    hoverBorder: "hover:border-[#C3B68F]/60",
    gradient: "from-[#C3B68F]/10 to-transparent",
    priceGradient: "from-[#DCCB99] to-[#C3B68F]",
    shadow: "rgba(195, 182, 143, 0.3)",
  },
  purple: {
    iconColor: "text-[#9D8DF0]",
    borderColor: "border-[#9D8DF0]/30",
    hoverBorder: "hover:border-[#9D8DF0]/60",
    gradient: "from-[#9D8DF0]/10 to-transparent",
    priceGradient: "from-[#9D8DF0] to-[#7C6AE8]",
    shadow: "rgba(124, 106, 232, 0.3)",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#C3B68F]/10 to-[#9D8DF0]/10 border border-[#C3B68F]/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#C3B68F]" />
            <span className="text-sm font-medium text-foreground">Offres combinées</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-display-md mb-3 leading-tight">
            Besoin d'une solution{" "}
            <span className="text-gradient-gold">complète</span> ?
          </h2>
          <p className="text-sm md:text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Nos packs combinent identité visuelle et création web pour une image cohérente et professionnelle.
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
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={
                  !isMobile
                    ? {
                        y: -6,
                        boxShadow: `0 15px 40px -10px ${styles.shadow}`,
                      }
                    : undefined
                }
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-5 md:p-6 rounded-xl border ${styles.borderColor} ${styles.hoverBorder} bg-gradient-to-br ${styles.gradient} backdrop-blur-sm transition-colors duration-300`}
                style={{ perspective: "1000px" }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: pack.theme === "purple" ? -180 : 0 }}
                    transition={{ duration: 0.4 }}
                    className={`p-2.5 rounded-lg bg-background/50 ${styles.iconColor}`}
                  >
                    <Icon className="w-5 h-5" />
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
                className="group"
              >
                Découvrir tous nos packs
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

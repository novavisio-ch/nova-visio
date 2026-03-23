import { motion } from "framer-motion";
import { Check, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  { text: "Hébergement & nom de domaine", highlight: "géré" },
  { text: "Mises à jour techniques", highlight: "& sécurité" },
  { text: "Sauvegardes automatiques", highlight: "hebdomadaires" },
  { text: "1h de modifications", highlight: "de contenu par mois" },
  { text: "Rapport mensuel de performance", highlight: "(visites, contacts)" },
  { text: "Support réactif", highlight: "sous 48h" },
];

export const MaintenanceCard = () => {
  const isMobile = useIsMobile();

  const hoverVariants = isMobile
    ? {}
    : {
        y: -8,
        boxShadow:
          "0 20px 60px -15px rgba(195, 182, 143, 0.4), 0 0 40px rgba(195, 182, 143, 0.15)",
      };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hoverVariants}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group max-w-[480px] mx-auto w-full"
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, #C3B68F 0%, transparent 50%, #C3B68F 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Badge */}
      <motion.div
        className="absolute -top-3 left-0 right-0 flex justify-center z-10"
        initial={{ opacity: 0, y: -10, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <Badge className="flex items-center gap-1.5 uppercase tracking-wider shadow-lg px-3 py-1">
          <Crown className="w-3 h-3" />
          ⭐ Best-seller
        </Badge>
      </motion.div>

      <div
        className="relative h-full rounded-2xl border p-6 md:p-8 transition-all duration-500 overflow-hidden card-dark-surface"
        style={{ borderColor: "rgba(195, 182, 143, 0.3)" }}
      >
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: "#C3B68F",
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Title */}
        <div className="flex items-start gap-4 mb-5">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-3xl">🔄</span>
          </motion.div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
              Suivi & Maintenance
            </h3>
            <p className="text-sm text-muted-foreground">
              Votre site reste performant, sans effort de votre part.
            </p>
          </div>
        </div>

        {/* Price */}
        <motion.div className="mb-2 relative inline-block" whileHover={{ scale: 1.02 }}>
          <span className="text-sm text-muted-foreground">dès </span>
          <span
            className="text-3xl md:text-4xl font-display font-bold"
            style={{
              background:
                "linear-gradient(135deg, #C3B68F 0%, #DCCB99 50%, #a89860 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            89 CHF/mois
          </span>
        </motion.div>

        <p className="text-xs text-muted-foreground mb-6">
          Sans engagement — résiliable à tout moment
        </p>

        {/* Features */}
        <ul className="space-y-2.5 mb-8">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-2.5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 + 0.3 }}
            >
              <Check
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                style={{ color: "#C3B68F" }}
              />
              <span className="text-foreground-medium text-sm">
                {feature.text}{" "}
                <strong className="text-foreground font-medium">
                  {feature.highlight}
                </strong>
              </span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact?sujet=maintenance">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="w-full group/btn relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #C3B68F 0%, #a89860 100%)",
                color: "#1f1a3d",
              }}
            >
              <span className="relative z-10 flex items-center justify-center w-full">
                Activer le suivi
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

        <p className="text-xs text-muted-foreground text-center mt-4 italic">
          Inclus automatiquement à la fin de chaque projet.
        </p>
      </div>
    </motion.div>
  );
};

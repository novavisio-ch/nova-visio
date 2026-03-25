import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MaintenanceCard } from "@/components/home/MaintenanceCard";

export const MaintenanceTarifsSection = () => {
  return (
    <div className="mb-16 md:mb-20" id="maintenance">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-12"
      >
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider mb-6"
          style={{
            background: "rgba(195, 182, 143, 0.15)",
            color: "#C3B68F",
            border: "none",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          🔄 Récurrent
        </motion.span>

        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Votre site est en ligne.{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #C3B68F 0%, #DCCB99 50%, #a89860 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Maintenant, il faut qu'il le reste.
          </span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Mises à jour, modifs de contenu, performances - on s'en occupe pour que votre site continue à bosser pendant que vous faites votre métier.
        </p>
      </motion.div>

      <MaintenanceCard />

      {/* Info box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-[480px] mx-auto mt-8 rounded-xl p-5 md:p-6 border card-glass-surface"
        style={{ borderColor: "rgba(195, 182, 143, 0.2)" }}
      >
        <h4 className="font-display text-sm font-semibold text-foreground mb-2">
          Besoin de plus de modifications ?
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          Pour les projets avec des besoins réguliers en contenu ou en évolutions,
          le forfait{" "}
          <strong className="text-foreground font-medium">
            Actif à 149 CHF/mois
          </strong>{" "}
          inclut 3h de modifs par mois, mise à jour de contenu et support prioritaire sous 24h.
        </p>
        <Link
          to="/contact?sujet=forfait-actif"
          className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
          style={{ color: "#C3B68F" }}
        >
          Me renseigner sur le forfait Actif
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </motion.div>
    </div>
  );
};

import { motion } from "framer-motion";
import { MaintenanceCard } from "./MaintenanceCard";

export const MaintenanceSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider mb-6"
            style={{
              background: "rgba(195, 182, 143, 0.15)",
              color: "#C3B68F",
              border: "1px solid rgba(195, 182, 143, 0.3)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            🔄 Suivi continu
          </motion.span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Un site livré, c'est bien.{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #C3B68F 0%, #DCCB99 50%, #a89860 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Un site qui reste au top, c'est mieux.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Mises à jour, modifications, performances - on s'occupe de tout
            pour que votre site continue à{" "}
            <strong className="text-foreground font-medium">travailler pour vous</strong>.
          </p>
        </motion.div>

        <MaintenanceCard />
      </div>
    </section>
  );
};

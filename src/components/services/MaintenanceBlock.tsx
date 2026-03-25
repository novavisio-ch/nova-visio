import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface MaintenanceBlockProps {
  text: string;
}

export const MaintenanceBlock = ({ text }: MaintenanceBlockProps) => {
  return (
    <section className="relative py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Separator */}
        <div
          className="w-full h-px mb-10 md:mb-14"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(195, 182, 143, 0.3), transparent)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-6 md:p-8 card-glass-surface"
        >
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
            Et après la livraison ?
          </h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
            {text}
          </p>
          <Link
            to="/tarifs#maintenance"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: "#C3B68F" }}
          >
            Découvrir le suivi mensuel
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

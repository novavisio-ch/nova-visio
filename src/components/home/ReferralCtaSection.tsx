import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ReferralCtaSection() {
  return (
    <section className="py-10 md:py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-6 md:p-10 rounded-2xl bg-gradient-to-br from-primary/15 via-primary/8 to-primary/5 backdrop-blur-sm text-center overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
            <Gift className="w-24 h-24 md:w-32 md:h-32 text-primary" />
          </div>

          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4 leading-tight">
              Recommandez Nova Visio.
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              <span className="text-gradient-gold">Gagnez 100 €.</span>
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-5 md:mb-8 max-w-lg mx-auto leading-relaxed">
              Un proche lance son activité ? <strong className="text-foreground font-medium">Parlez-lui de nous</strong>.{" "}
              <br className="md:hidden" />
              S'il signe un site web, vous recevez <strong className="text-foreground font-medium">100 €</strong>.
            </p>
            <Button asChild variant="gold" size="default" className="md:px-8">
              <Link to="/recommandation">
                Découvrir le programme →
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

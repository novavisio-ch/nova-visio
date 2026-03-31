import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Gift, Users, FileCheck, Banknote, Coins, Globe, Clock, CreditCard, Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Vous recommandez",
    description: "Parlez de Nova Visio à un entrepreneur, artisan ou PME de votre réseau.",
    icon: Users,
  },
  {
    number: "02",
    title: "Il signe un projet",
    description: "Le nouveau client lance un projet de création de site web avec nous.",
    icon: FileCheck,
  },
  {
    number: "03",
    title: "Vous recevez 100 €",
    description: "Dès la mise en ligne du site, on vous envoie votre récompense.",
    icon: Banknote,
  },
];

const conditions = [
  { label: "Montant", value: "100 € par client signé." },
  { label: "Projets concernés", value: "Création de site web (hors prestations ponctuelles mineures)." },
  { label: "Versement", value: "À la mise en ligne du site." },
  { label: "Modalités", value: "Virement bancaire ou avoir sur une prochaine prestation." },
  { label: "Limite", value: "Aucune. Recommandez autant de personnes que vous voulez." },
];

const Recommandation = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 md:pt-36 lg:pt-44 pb-12 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
        </div>

        <div className="container max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm mb-6 md:mb-8">
              <Gift className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm text-primary font-medium">Programme de recommandation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
              Recommandez.
              <br />
              <span className="text-gradient-gold">Gagnez 100 €.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vous êtes satisfait de votre site ?{" "}
              Faites-en profiter votre réseau. Pour chaque nouveau client{" "}
              que vous nous envoyez, on vous offre <strong className="text-foreground">100 €</strong>.{" "}
              Simple, transparent, gagnant-gagnant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-12 md:py-20 lg:py-28 px-4">
        <div className="container max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            3 étapes. <span className="text-gradient-gold">Zéro complication.</span>
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground text-center mb-10 md:mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Pas de formulaire compliqué. Pas de conditions cachées.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-b from-primary/15 to-primary/5 backdrop-blur-sm"
                >
                  <span className="text-4xl md:text-6xl font-bold text-primary/70 leading-none mb-3 md:mb-4 block">
                    {step.number}
                  </span>
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3 md:mb-4" />
                  <h3 className="text-base md:text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-12 md:py-20 lg:py-28 px-4">
        <div className="container max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Conditions <span className="text-gradient-gold">simples.</span>
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground text-center mb-10 md:mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tout est clair dès le départ.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {conditions.map((condition, index) => (
              <motion.div
                key={condition.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative p-6 md:p-9 rounded-2xl bg-gradient-to-b from-primary/15 to-primary/5 backdrop-blur-sm border border-primary/15 hover:border-primary/30 hover:shadow-[0_0_40px_-12px_hsl(var(--primary)/0.3)] transition-all duration-500 group"
              >
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary mb-4 md:mb-5" />
                <h3 className="text-lg md:text-2xl font-extrabold md:font-bold text-foreground mb-2 md:mb-3">{condition.label}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {condition.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 lg:py-28 relative overflow-hidden px-4">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] md:w-[500px] h-[150px] md:h-[300px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
        </div>

        <div className="container max-w-3xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Prêt à recommander ?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 md:mb-10 max-w-xl mx-auto">
              Contactez-nous pour nous transmettre{" "}
              le nom de la personne que vous recommandez.
            </p>
            <Button asChild variant="gold" size="lg">
              <Link to="/contact?sujet=recommandation">
                Recommander quelqu'un →
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Recommandation;

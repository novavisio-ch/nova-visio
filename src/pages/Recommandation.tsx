import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Gift, Users, FileCheck, Banknote, Coins, Globe, Clock, CreditCard, Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";

const Recommandation = () => {
  const { t } = useLanguage();

  const steps = [
    { number: "01", title: t("recommandation.s1.title"), description: t("recommandation.s1.desc"), icon: Users },
    { number: "02", title: t("recommandation.s2.title"), description: t("recommandation.s2.desc"), icon: FileCheck },
    { number: "03", title: t("recommandation.s3.title"), description: t("recommandation.s3.desc"), icon: Banknote },
  ];

  const conditions = [
    { label: t("recommandation.c1.label"), value: t("recommandation.c1.value"), icon: Coins },
    { label: t("recommandation.c2.label"), value: t("recommandation.c2.value"), icon: Globe },
    { label: t("recommandation.c3.label"), value: t("recommandation.c3.value"), icon: Clock },
    { label: t("recommandation.c4.label"), value: t("recommandation.c4.value"), icon: CreditCard },
    { label: t("recommandation.c5.label"), value: t("recommandation.c5.value"), icon: Infinity },
  ];

  return (
    <Layout>
      <section className="pt-28 md:pt-36 lg:pt-44 pb-12 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
        </div>
        <div className="container max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm mb-6 md:mb-8">
              <Gift className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm text-primary font-medium">{t("recommandation.badge")}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
              {t("recommandation.title.1")}<br /><span className="text-gradient-gold">{t("recommandation.title.highlight")}</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("recommandation.subtitle.1")}{" "}<br className="md:hidden" />
              {t("recommandation.subtitle.2")} <strong className="text-foreground">{t("recommandation.subtitle.bold1")}</strong>,{" "}
              {t("recommandation.subtitle.3")} <strong className="text-foreground">{t("recommandation.subtitle.bold2")}</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-28 px-4">
        <div className="container max-w-5xl mx-auto">
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-6 leading-tight" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {t("recommandation.steps.title")} <span className="text-gradient-gold">{t("recommandation.steps.highlight")}</span>
          </motion.h2>
          <motion.p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center mb-10 md:mb-16 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            {t("recommandation.steps.subtitle")}{" "}<br className="md:hidden" />
            Pas de <strong className="text-foreground font-medium">{t("recommandation.steps.subtitle.bold")}</strong>.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-b from-primary/15 to-primary/5 backdrop-blur-sm">
                  <span className="text-4xl md:text-6xl font-bold text-primary/70 leading-none mb-3 md:mb-4 block">{step.number}</span>
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3 md:mb-4" />
                  <h3 className="text-base md:text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-28 px-4">
        <div className="container max-w-5xl mx-auto">
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-6 leading-tight" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {t("recommandation.conditions.title")} <span className="text-gradient-gold">{t("recommandation.conditions.highlight")}</span>
          </motion.h2>
          <motion.p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center mb-10 md:mb-16 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <strong className="text-foreground font-medium">{t("recommandation.conditions.subtitle.bold")}</strong>{" "}<br className="md:hidden" />{t("recommandation.conditions.subtitle")}
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
            {conditions.map((condition, index) => {
              const colSpan = index < 3 ? "lg:col-span-2" : "lg:col-span-3";
              return (
                <motion.div key={condition.label} initial={{ opacity: 0, y: 24, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }} className={`relative p-6 md:p-8 rounded-2xl bg-[#13131B] hover:shadow-[0_0_50px_-12px_hsl(var(--primary)/0.25)] transition-all duration-500 group ${colSpan}`}>
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="shrink-0 mt-1">
                      <condition.icon className="w-5 h-5 md:w-6 md:h-6 text-primary drop-shadow-[0_0_8px_rgba(195,182,143,0.4)] group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-1.5">{condition.label}</h3>
                      <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">{condition.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-28 relative overflow-hidden px-4">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] md:w-[500px] h-[150px] md:h-[300px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
        </div>
        <div className="container max-w-3xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">{t("recommandation.cta.title")}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 md:mb-10 max-w-xl mx-auto">
              {t("recommandation.cta.subtitle.1")} <strong className="text-foreground font-medium">{t("recommandation.cta.subtitle.bold")}</strong>{" "}<br className="md:hidden" />{t("recommandation.cta.subtitle.2")}
            </p>
            <Button asChild variant="gold" size="lg">
              <Link to="/contact?sujet=recommandation">{t("recommandation.cta.button")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Recommandation;

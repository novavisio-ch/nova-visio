import { motion } from "framer-motion";
import { MessageCircle, Search, Palette, Layout, Rocket } from "lucide-react";
import { useIsTabletOrMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/hooks/use-language";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

export function StepsSection() {
  const isMobile = useIsTabletOrMobile();
  const { t } = useLanguage();

  const steps = [
    { number: "01", title: t("steps.s1.title"), subtitle: t("steps.s1.subtitle"), description: t("steps.s1.desc"), icon: MessageCircle, color: "from-primary/20 to-primary/5" },
    { number: "02", title: t("steps.s2.title"), subtitle: t("steps.s2.subtitle"), description: t("steps.s2.desc"), icon: Search, color: "from-purple-500/20 to-purple-500/5" },
    { number: "03", title: t("steps.s3.title"), subtitle: t("steps.s3.subtitle"), description: t("steps.s3.desc"), icon: Palette, color: "from-primary/20 to-primary/5" },
    { number: "04", title: t("steps.s4.title"), subtitle: t("steps.s4.subtitle"), description: t("steps.s4.desc"), icon: Layout, color: "from-purple-500/20 to-purple-500/5" },
    { number: "05", title: t("steps.s5.title"), subtitle: t("steps.s5.subtitle"), description: t("steps.s5.desc"), icon: Rocket, color: "from-primary/20 to-primary/5" },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-28 px-4 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 leading-tight">
            {t("steps.title")} <span className="text-gradient-gold">{t("steps.title.highlight")}</span>
          </h2>
          <p className="text-body text-xs sm:text-sm md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Un processus <strong className="text-foreground font-medium">{t("steps.subtitle.bold1")}</strong>,{" "}
            <br className="md:hidden" />
            <strong className="text-foreground font-medium">{t("steps.subtitle.bold2")}</strong> {t("steps.subtitle.rest")}
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-50px" }} className="relative">
          <div className="hidden lg:block absolute top-[72px] left-[10%] right-[10%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary to-primary/60 origin-left" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.number} variants={cardVariants} className="group relative"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }}>
                  <motion.div
                    className={`relative h-full p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-b ${step.color} backdrop-blur-sm`}
                    initial={{ boxShadow: "none", y: 0 }}
                    whileInView={isMobile ? { boxShadow: "0 0 30px -10px #C3B68F" } : undefined}
                    whileHover={!isMobile ? { boxShadow: "0 0 50px -12px #C3B68F", y: -8 } : undefined}
                    viewport={isMobile ? { once: true, margin: "-30px" } : undefined}
                    transition={{ duration: 0.5 }}>
                    <span className="text-3xl md:text-6xl font-bold text-primary/80 leading-none mb-2 md:mb-4 block">{step.number}</span>
                    <motion.div className="mb-2 md:mb-4"
                      whileInView={isMobile ? { scale: 1.1 } : undefined}
                      whileHover={!isMobile ? { scale: 1.25 } : undefined}
                      viewport={isMobile ? { once: true, margin: "-30px" } : undefined}
                      transition={{ duration: 0.3 }}>
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-sm md:text-xl font-bold text-foreground mb-0.5 md:mb-1 leading-tight">{step.title}</h3>
                    <p className="text-primary text-[10px] md:text-sm font-medium mb-2 md:mb-3">{step.subtitle}</p>
                    <p className="text-body text-[10px] md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">{step.description}</p>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }} transition={{ delay: 0.3 + index * 0.15 }}
                          className="w-6 h-6 rounded-full bg-background flex items-center justify-center">
                          <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 md:mt-16 flex justify-center">
          <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-primary/5 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-body text-[10px] md:text-sm">{t("steps.bottom")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

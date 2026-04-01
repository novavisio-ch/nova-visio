import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function BenefitsSection() {
  const { t } = useLanguage();

  const benefits = [
    { text: t("benefits.b1.text"), highlight: t("benefits.b1.highlight"), rest: t("benefits.b1.rest") },
    { text: t("benefits.b2.text"), highlight: t("benefits.b2.highlight"), rest: t("benefits.b2.rest") },
    { text: t("benefits.b3.text"), highlight: t("benefits.b3.highlight"), rest: t("benefits.b3.rest") },
    { text: t("benefits.b4.text"), highlight: t("benefits.b4.highlight"), rest: t("benefits.b4.rest") },
  ];

  return <section className="section-white py-12 md:py-20 lg:py-28 px-4">
      <div className="container max-w-6xl">
        <div className="text-left">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-display-lg lg:text-display-xl font-bold mb-3 md:mb-6 text-center leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#2D284D]">{t("benefits.title.1")}</span>
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            <span className="text-[#C9BC8F]">{t("benefits.title.2")}</span>
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base md:text-xl lg:text-2xl text-[#5a5577] mb-6 md:mb-12 lg:mb-16 max-w-3xl leading-relaxed text-center mx-auto font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("benefits.subtitle")}{" "}
            <br className="hidden sm:block" />
            {t("benefits.subtitle2")}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-3 sm:gap-5 md:gap-8 lg:gap-10">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex items-start gap-2 md:gap-4"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mt-0.5 md:mt-1">
                  <CheckCircle className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#C9BC8F]" strokeWidth={2} />
                </div>
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-[#6b6487] leading-relaxed">
                  {benefit.text}<span className="font-bold text-[#2D284D]">{benefit.highlight}</span>{benefit.rest}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>;
}

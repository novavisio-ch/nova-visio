import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useIsTabletOrMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/hooks/use-language";

type ColorTheme = "gold" | "purple";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: { text: string; highlight: string }[];
  ctaText: string;
  ctaLink: string;
  theme: ColorTheme;
  isMobile: boolean;
  price?: string;
}

const themeStyles = {
  gold: {
    badgeGradient: "bg-gradient-to-r from-[#DCCB99] to-[#C3B68F]",
    iconColor: "text-[#C3B68F]",
    accentGradient: "from-[#C3B68F]/10 to-transparent",
  },
  purple: {
    badgeGradient: "bg-gradient-to-r from-[#9D8DF0] to-[#7C6AE8]",
    iconColor: "text-[#7C6AE8]",
    accentGradient: "from-[#7C6AE8]/10 to-transparent",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function ServiceCard({ title, description, benefits, ctaText, ctaLink, theme, isMobile, price }: ServiceCardProps) {
  const styles = themeStyles[theme];
  const shadowColor = theme === "gold" ? "rgba(195, 182, 143, 0.4)" : "rgba(124, 106, 232, 0.4)";
  
  return (
    <motion.div 
      className={`group relative flex flex-col items-center text-center p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl bg-gradient-to-br ${styles.accentGradient} backdrop-blur-sm`}
      variants={cardVariants}
      initial={{ opacity: 0, y: 40, scale: 0.95, boxShadow: "none" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, boxShadow: isMobile ? `0 0 30px -10px ${shadowColor}` : "none" }}
      whileHover={!isMobile ? { boxShadow: `0 0 40px -10px ${shadowColor}` } : undefined}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <span className={`inline-block px-2 py-1 md:px-4 md:py-1.5 rounded-full ${styles.badgeGradient} text-background text-[8px] md:text-xs font-semibold tracking-wide mb-3 md:mb-6`}>
        {title === "Site vitrine et landing page" || title === "Showcase website and landing page" 
          ? "" : ""}
      </span>

      <h3 className="text-lg sm:text-xl md:text-display-sm lg:text-display-md text-foreground mb-1 md:mb-2 text-center leading-tight">
        {title.includes(" et ") ? (<>{title.split(" et ")[0]}<br />et {title.split(" et ")[1]}</>) 
        : title.includes(" & ") ? (<>{title.split(" & ")[0]}<br />& {title.split(" & ")[1]}</>) 
        : title.includes(" and ") ? (<>{title.split(" and ")[0]}<br />and {title.split(" and ")[1]}</>) 
        : title}
      </h3>

      {price && <p className="text-sm md:text-base font-medium text-[#C3B68F] mb-2 md:mb-4">{price}</p>}

      <p className="mb-4 md:mb-8 max-w-sm text-foreground-medium text-sm sm:text-base md:text-display-sm text-center leading-relaxed">
        {description}
      </p>

      <ul className="space-y-1.5 md:space-y-3 mb-4 md:mb-8 text-left w-full max-w-sm">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 md:gap-3">
            <CheckCircle className={`w-4 h-4 md:w-5 md:h-5 ${styles.iconColor} mt-0.5 flex-shrink-0`} />
            <span className="text-muted-foreground text-xs sm:text-sm md:text-lg lg:text-xl leading-relaxed">
              {benefit.text} <strong className="text-foreground">{benefit.highlight}</strong>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto w-full sm:w-auto">
        <Button 
          variant={theme === "gold" ? "gold-outline" : "outline"} 
          size="lg" 
          className={`w-full sm:w-auto text-sm md:text-base ${theme === "purple" ? "border-[#7C6AE8] text-[#7C6AE8] hover:bg-[#7C6AE8] hover:text-background" : ""}`}
          asChild
        >
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const isMobile = useIsTabletOrMobile();
  const { t } = useLanguage();

  const webBenefits = [
    { text: t("services.web.b1"), highlight: t("services.web.b1h") },
    { text: t("services.web.b2"), highlight: t("services.web.b2h") },
    { text: t("services.web.b3"), highlight: t("services.web.b3h") },
    { text: t("services.web.b4"), highlight: t("services.web.b4h") },
    { text: t("services.web.b5"), highlight: t("services.web.b5h") },
  ];

  const brandBenefits = [
    { text: t("services.brand.b1"), highlight: t("services.brand.b1h") },
    { text: t("services.brand.b2"), highlight: t("services.brand.b2h") },
    { text: t("services.brand.b3"), highlight: t("services.brand.b3h") },
    { text: t("services.brand.b4"), highlight: t("services.brand.b4h") },
    { text: t("services.brand.b5"), highlight: t("services.brand.b5h") },
    { text: t("services.brand.b6"), highlight: t("services.brand.b6h") },
  ];

  return <section className="py-12 md:py-20 lg:py-28 px-4">
      <div className="container">
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-display-md mb-2 md:mb-4 leading-tight">
             {t("services.title.line1")}
            <br className="md:hidden" />
            <span className="hidden md:inline">{" "}</span>
            <span className="text-gradient-gold">{t("services.title.highlight")}</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <strong className="text-foreground font-medium">{t("services.subtitle.1")}</strong>. <strong className="text-foreground font-medium">{t("services.subtitle.2")}</strong>.{" "}
            <br className="md:hidden" />
            <strong className="text-foreground font-medium">{t("services.subtitle.3")}</strong>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          <ServiceCard 
            title={t("services.web.title")}
            description={t("services.web.description")}
            benefits={webBenefits} 
            ctaText={t("services.web.cta")}
            ctaLink="/site-web" 
            theme="gold"
            isMobile={isMobile}
            price={t("services.web.price")}
          />
          <ServiceCard 
            title={t("services.brand.title")}
            description={t("services.brand.description")}
            benefits={brandBenefits} 
            ctaText={t("services.brand.cta")}
            ctaLink="/identite-visuelle" 
            theme="purple"
            isMobile={isMobile}
            price={t("services.brand.price")}
          />
        </div>
      </div>
    </section>;
}

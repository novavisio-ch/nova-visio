import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useIsTabletOrMobile } from "@/hooks/use-mobile";

interface Benefit {
  text: string;
  highlight: string;
}

const webBenefits: Benefit[] = [
  { text: "Gagnez en crédibilité", highlight: "dès les premières secondes" },
  { text: "Convertissez vos visiteurs", highlight: "en clients qualifiés" },
  { text: "Présentez vos offres", highlight: "avec clarté et impact" },
  { text: "Soyez visible sur Google", highlight: "grâce au référencement naturel" },
  { text: "Modifiez votre contenu", highlight: "en toute autonomie" },
  { text: "Un site rapide et fluide", highlight: "sur mobile comme sur ordinateur" },
];

const brandBenefits: Benefit[] = [
  { text: "Soyez reconnu", highlight: "au premier coup d'œil" },
  { text: "Inspirez confiance", highlight: "avant même de parler" },
  { text: "Une image cohérente", highlight: "sur tous vos supports" },
  { text: "Démarquez-vous", highlight: "de vos concurrents" },
  { text: "Un logo professionnel", highlight: "déclinable partout" },
  { text: "Une charte graphique", highlight: "simple à appliquer" },
];

type ColorTheme = "gold" | "purple";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: Benefit[];
  ctaText: string;
  ctaLink: string;
  theme: ColorTheme;
  isMobile: boolean;
  price?: string;
}

const themeStyles = {
  gold: {
    border: "border-[#C3B68F]/30",
    hoverBorder: "hover:border-[#C3B68F]",
    activeBorder: "border-[#C3B68F]",
    hoverShadow: "hover:shadow-[0_0_40px_-10px_#C3B68F]",
    activeShadow: "shadow-[0_0_30px_-10px_#C3B68F]",
    badgeGradient: "bg-gradient-to-r from-[#DCCB99] to-[#C3B68F]",
    iconColor: "text-[#C3B68F]",
    accentGradient: "from-[#C3B68F]/10 to-transparent",
  },
  purple: {
    border: "border-[#7C6AE8]/30",
    hoverBorder: "hover:border-[#7C6AE8]",
    activeBorder: "border-[#7C6AE8]",
    hoverShadow: "hover:shadow-[0_0_40px_-10px_#7C6AE8]",
    activeShadow: "shadow-[0_0_30px_-10px_#7C6AE8]",
    badgeGradient: "bg-gradient-to-r from-[#9D8DF0] to-[#7C6AE8]",
    iconColor: "text-[#7C6AE8]",
    accentGradient: "from-[#7C6AE8]/10 to-transparent",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

function ServiceCard({
  title,
  description,
  benefits,
  ctaText,
  ctaLink,
  theme,
  isMobile,
  price
}: ServiceCardProps) {
  const styles = themeStyles[theme];
  const borderColor = theme === "gold" ? "#C3B68F" : "#7C6AE8";
  const shadowColor = theme === "gold" ? "rgba(195, 182, 143, 0.4)" : "rgba(124, 106, 232, 0.4)";
  
  return (
    <motion.div 
      className={`group relative flex flex-col items-center text-center p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl bg-gradient-to-br ${styles.accentGradient} backdrop-blur-sm`}
      variants={cardVariants}
      initial={{ 
        opacity: 0, 
        y: 40, 
        scale: 0.95,
        boxShadow: "none"
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        boxShadow: isMobile ? `0 0 30px -10px ${shadowColor}` : "none"
      }}
      whileHover={!isMobile ? {
        boxShadow: `0 0 40px -10px ${shadowColor}`
      } : undefined}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Badge */}
      <span className={`inline-block px-2 py-1 md:px-4 md:py-1.5 rounded-full ${styles.badgeGradient} text-background text-[8px] md:text-xs font-semibold tracking-wide mb-3 md:mb-6`}>
        POUR : ARTISANS, PME, FREELANCES, STARTUP
      </span>

      {/* Title */}
      <h3 className="text-lg sm:text-xl md:text-display-sm lg:text-display-md text-foreground mb-1 md:mb-2 text-center leading-tight">
        {title.includes(" et ") ? (
          <>
            {title.split(" et ")[0]}
            <br />
            et {title.split(" et ")[1]}
          </>
        ) : title.includes(" & ") ? (
          <>
            {title.split(" & ")[0]}
            <br />
            & {title.split(" & ")[1]}
          </>
        ) : (
          title
        )}
      </h3>

      {/* Price */}
      {price && (
        <p className="text-sm md:text-base font-medium text-[#C3B68F] mb-2 md:mb-4">{price}</p>
      )}

      {/* Description */}
      <p className="mb-4 md:mb-8 max-w-sm text-foreground-medium text-sm sm:text-base md:text-display-sm text-center leading-relaxed">
        {description}
      </p>

      {/* Benefits list */}
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

      {/* CTA Button */}
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

  return <section className="py-12 md:py-20 lg:py-28 px-4">
      <div className="container">
        {/* Section header */}
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-display-md mb-2 md:mb-4 leading-tight">
             Deux expertises.
            <br className="md:hidden" />
            <span className="hidden md:inline">{" "}</span>
            <span className="text-gradient-gold">Un seul objectif.</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Être vu. Être compris. Être choisi.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          <ServiceCard 
            title="Site vitrine et landing page" 
            description="Vos prospects arrivent, comprennent votre offre en 5 secondes et vous contactent. C'est ça, un bon site." 
            benefits={webBenefits} 
            ctaText="Découvrir nos créations web →" 
            ctaLink="/site-web" 
            theme="gold"
            isMobile={isMobile}
            price="dès 900 CHF"
          />
          <ServiceCard 
            title="Identité visuelle & logo" 
            description="Fini le logo fait sur Canva. Une vraie identité qui vous démarque et que vous pouvez utiliser partout." 
            benefits={brandBenefits} 
            ctaText="Voir nos identités visuelles →" 
            ctaLink="/identite-visuelle" 
            theme="purple"
            isMobile={isMobile}
            price="dès 900 CHF"
          />
        </div>
      </div>
    </section>;
}
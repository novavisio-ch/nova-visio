import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Benefit {
  text: string;
  highlight: string;
}

const webBenefits: Benefit[] = [
  { text: "Site vitrine", highlight: "6 à 8 pages en ligne sur votre nom de domaine" },
  { text: "Structure claire", highlight: "orientée conversion (prise de contact, devis, réservation)" },
  { text: "Rédaction complète", highlight: "de vos pages clés + FAQ pour répondre aux questions essentielles" },
  { text: "Design sur-mesure", highlight: "aligné avec votre identité visuelle et vos photos" },
  { text: "Site responsive", highlight: "optimisé pour le SEO et le chargement rapide" },
  { text: "Mise en ligne clé en main", highlight: "+ guide d'utilisation + 12 mois de support inclus" },
  { text: "Suivi des performances", highlight: "statistiques de visites pour prendre de meilleures décisions" },
  { text: "Base évolutive", highlight: "faites évoluer votre site sans tout recommencer" },
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
  price?: string;
}

const themeStyles = {
  gold: {
    border: "border-[#C3B68F]/30",
    hoverBorder: "hover:border-[#C3B68F]",
    hoverShadow: "hover:shadow-[0_0_40px_-10px_#C3B68F]",
    badgeGradient: "bg-gradient-to-r from-[#DCCB99] to-[#C3B68F]",
    iconColor: "text-[#C3B68F]",
    accentGradient: "from-[#C3B68F]/10 to-transparent",
  },
  purple: {
    border: "border-[#7C6AE8]/30",
    hoverBorder: "hover:border-[#7C6AE8]",
    hoverShadow: "hover:shadow-[0_0_40px_-10px_#7C6AE8]",
    badgeGradient: "bg-gradient-to-r from-[#9D8DF0] to-[#7C6AE8]",
    iconColor: "text-[#7C6AE8]",
    accentGradient: "from-[#7C6AE8]/10 to-transparent",
  },
};

function ServiceCard({
  title,
  description,
  benefits,
  ctaText,
  ctaLink,
  theme,
  price
}: ServiceCardProps) {
  const styles = themeStyles[theme];
  
  return (
    <div className={`group relative flex flex-col items-center text-center p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl ${styles.border} bg-gradient-to-br ${styles.accentGradient} backdrop-blur-sm transition-all duration-500 ${styles.hoverBorder} ${styles.hoverShadow}`}>
      {/* Badge */}
      <span className={`inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full ${styles.badgeGradient} text-background text-[10px] md:text-xs font-semibold tracking-wide mb-4 md:mb-6`}>
        POUR : ARTISANS, PME, FREELANCES, STARTUP
      </span>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl md:text-display-sm lg:text-display-md text-white mb-3 md:mb-4 text-center leading-tight">
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

      {/* Description */}
      <p className="mb-6 md:mb-8 max-w-sm text-white text-base sm:text-lg md:text-display-sm text-center leading-relaxed">
        {description}
      </p>

      {/* Benefits list */}
      <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-left w-full max-w-sm">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 md:gap-3">
            <CheckCircle className={`w-4 h-4 md:w-5 md:h-5 ${styles.iconColor} mt-0.5 flex-shrink-0`} />
            <span className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              {benefit.text} <strong className="text-foreground">{benefit.highlight}</strong>
            </span>
          </li>
        ))}
      </ul>

      {/* Price display */}
      {price && (
        <div className={`mb-6 md:mb-8 px-4 py-3 rounded-xl ${styles.badgeGradient} bg-opacity-10`}>
          <span className={`text-xl md:text-2xl font-bold ${theme === "gold" ? "text-[#C3B68F]" : "text-[#7C6AE8]"}`}>
            {price}
          </span>
        </div>
      )}

      {/* CTA Button */}
      <div className="mt-auto w-full sm:w-auto">
        <Button 
          variant={theme === "gold" ? "gold-outline" : "outline"} 
          size="lg" 
          className={`w-full sm:w-auto ${theme === "purple" ? "border-[#7C6AE8] text-[#7C6AE8] hover:bg-[#7C6AE8] hover:text-white" : ""}`}
          asChild
        >
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </div>
  );
}
export function ServicesSection() {
  return <section className="py-16 md:py-20 lg:py-28 px-4">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-display-md mb-3 md:mb-4 leading-tight">
            Deux services pour structurer votre{" "}
            <span className="text-gradient-gold">présence en ligne</span>
          </h2>
          <p className="text-sm sm:text-base md:text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            NOVA VISIO vous accompagne sur les deux bases essentielles de votre image en ligne : un site clair et une identité visuelle professionnelle.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          <ServiceCard 
            title="Site vitrine et landing page" 
            description="Un site web pensé pour renforcer votre crédibilité et établir la confiance de vos prospects." 
            benefits={webBenefits} 
            ctaText="Découvrir nos créations web →" 
            ctaLink="/site-web" 
            theme="gold"
            price="dès 1'800 CHF"
          />
          <ServiceCard 
            title="Identité visuelle & logo" 
            description="Une identité visuelle professionnelle pour être reconnu et inspirer confiance au premier regard." 
            benefits={brandBenefits} 
            ctaText="Voir nos identités visuelles →" 
            ctaLink="/identite-visuelle" 
            theme="purple" 
          />
        </div>
      </div>
    </section>;
}
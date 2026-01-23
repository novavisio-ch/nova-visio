import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BenefitItem {
  text: string;
  bold: string;
}

const siteBenefits: BenefitItem[] = [
  { text: "Présentation claire de votre activité, vos offres et vos valeurs.", bold: "Présentation claire" },
  { text: "Design professionnel qui renforce votre crédibilité.", bold: "Design professionnel" },
  { text: "Plusieurs pages structurées (accueil, services, à propos, contact…).", bold: "pages structurées" },
  { text: "Site modifiable par vous, sans compétences techniques.", bold: "modifiable par vous" },
  { text: "Optimisé pour le référencement naturel (SEO).", bold: "référencement naturel" },
  { text: "Responsive : parfaitement lisible sur tous les écrans.", bold: "Responsive" },
];

const landingBenefits: BenefitItem[] = [
  { text: "Une seule page, un seul objectif : convertir.", bold: "un seul objectif" },
  { text: "Message ultra-clair orienté vers l'action immédiate.", bold: "action immédiate" },
  { text: "Idéale pour une offre spécifique, un lancement ou une campagne.", bold: "offre spécifique" },
  { text: "Structure optimisée pour capter l'attention et guider vers le CTA.", bold: "capter l'attention" },
  { text: "Parfaite pour tester une idée ou générer des leads rapidement.", bold: "générer des leads" },
  { text: "Intégration facile avec vos outils marketing (emailing, ads…).", bold: "outils marketing" },
];

interface OfferCardProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: BenefitItem[];
  ctaText: string;
  variant: "gold" | "purple";
}

const formatBenefit = (item: BenefitItem) => {
  const parts = item.text.split(item.bold);
  if (parts.length === 2) {
    return (
      <>
        {parts[0]}<strong className="font-semibold">{item.bold}</strong>{parts[1]}
      </>
    );
  }
  return item.text;
};

const OfferCard = ({ title, subtitle, description, benefits, ctaText, variant }: OfferCardProps) => {
  const isGold = variant === "gold";
  
  const borderColor = isGold ? "#C3B68F" : "#7C6AE8";
  const accentColor = isGold ? "#C3B68F" : "#7C6AE8";
  const glowColor = isGold ? "#C3B68F" : "#7C6AE8";
  const badgeGradient = isGold 
    ? "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)" 
    : "linear-gradient(135deg, #9B8AFF 0%, #7C6AE8 100%)";
  const buttonGradient = isGold
    ? "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)"
    : "linear-gradient(135deg, #9B8AFF 0%, #7C6AE8 100%)";

  return (
    <div
      className={`group relative flex flex-col items-center text-center p-10 md:p-12 rounded-2xl border-2 bg-white transition-all duration-500 h-full`}
      style={{ 
        borderColor,
        boxShadow: `0 0 0 0 ${glowColor}`,
      }}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 40px -10px ${glowColor}`}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0 0 ${glowColor}`}
    >
      {/* Badge */}
      <span
        className="inline-block px-5 py-2 rounded-full text-sm font-medium tracking-wide mb-8"
        style={{ background: badgeGradient, color: "#2D284D" }}
      >
        POUR : ARTISANS, PME, FREELANCES, STARTUP
      </span>

      {/* Title */}
      <h3
        className="text-3xl md:text-4xl font-display font-bold mb-3"
        style={{ color: "#2D284D" }}
      >
        {title}
      </h3>
      <p
        className="text-xl font-medium mb-6"
        style={{ color: accentColor }}
      >
        {subtitle}
      </p>

      {/* Description */}
      <p
        className="mb-10 max-w-md text-lg leading-relaxed"
        style={{ color: "#2D284D", opacity: 0.8 }}
      >
        {description}
      </p>

      {/* Benefits list */}
      <ul className="space-y-4 mb-12 text-left w-full flex-grow">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
            <span className="text-base leading-relaxed" style={{ color: "#2D284D", opacity: 0.85 }}>
              {formatBenefit(benefit)}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button
        asChild
        size="lg"
        className="rounded-lg px-10 py-7 text-lg font-semibold transition-all duration-300 mt-auto hover:scale-105"
        style={{
          background: buttonGradient,
          color: "#2D284D",
        }}
      >
        <Link to="/contact">{ctaText}</Link>
      </Button>
    </div>
  );
};

export const WebOfferSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4" style={{ color: "#2D284D" }}>
            Nos offres web
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "#2D284D", opacity: 0.7 }}>
            Deux formats adaptés à vos objectifs,
            <br className="hidden md:block" />
            une même exigence de qualité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <OfferCard
            title="Site vitrine"
            subtitle="Votre vitrine digitale"
            description="Une présence en ligne complète pour asseoir votre crédibilité et présenter l'ensemble de votre activité."
            benefits={siteBenefits}
            ctaText="Créer mon site vitrine"
            variant="gold"
          />
          <OfferCard
            title="Landing page"
            subtitle="Une page, un objectif"
            description="Une page unique et percutante pour convertir vos visiteurs en prospects ou clients."
            benefits={landingBenefits}
            ctaText="Créer ma landing page"
            variant="purple"
          />
        </div>
      </div>
    </section>
  );
};

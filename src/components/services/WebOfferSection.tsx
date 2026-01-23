import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const siteBenefits = [
  "Présentation claire de votre activité, vos offres et vos valeurs.",
  "Design professionnel qui renforce votre crédibilité.",
  "Plusieurs pages structurées (accueil, services, à propos, contact…).",
  "Site modifiable par vous, sans compétences techniques.",
  "Optimisé pour le référencement naturel (SEO).",
  "Responsive : parfaitement lisible sur tous les écrans.",
];

const landingBenefits = [
  "Une seule page, un seul objectif : convertir.",
  "Message ultra-clair orienté vers l'action immédiate.",
  "Idéale pour une offre spécifique, un lancement ou une campagne.",
  "Structure optimisée pour capter l'attention et guider vers le CTA.",
  "Parfaite pour tester une idée ou générer des leads rapidement.",
  "Intégration facile avec vos outils marketing (emailing, ads…).",
];

interface OfferCardProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  ctaText: string;
}

const OfferCard = ({ title, subtitle, description, benefits, ctaText }: OfferCardProps) => (
  <div
    className="group relative flex flex-col items-center text-center p-8 md:p-10 rounded-2xl border-2 bg-white transition-all duration-500 hover:shadow-[0_0_40px_-10px_#C3B68F] h-full"
    style={{ borderColor: "#C3B68F" }}
  >
    {/* Badge */}
    <span
      className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6"
      style={{ background: "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)", color: "#2D284D" }}
    >
      POUR : ARTISANS, PME, FREELANCES, STARTUP
    </span>

    {/* Title */}
    <h3
      className="text-2xl md:text-3xl font-display font-bold mb-2"
      style={{ color: "#2D284D" }}
    >
      {title}
    </h3>
    <p
      className="text-lg font-medium mb-4"
      style={{ color: "#C3B68F" }}
    >
      {subtitle}
    </p>

    {/* Description */}
    <p
      className="mb-8 max-w-md text-base leading-relaxed"
      style={{ color: "#2D284D", opacity: 0.8 }}
    >
      {description}
    </p>

    {/* Benefits list */}
    <ul className="space-y-3 mb-10 text-left w-full flex-grow">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className="w-5 h-5 text-[#C3B68F] mt-0.5 flex-shrink-0" />
          <span className="text-sm" style={{ color: "#2D284D", opacity: 0.8 }}>{benefit}</span>
        </li>
      ))}
    </ul>

    {/* CTA Button */}
    <Button
      asChild
      size="lg"
      className="rounded-lg px-8 py-6 text-base font-semibold transition-all duration-300 mt-auto"
      style={{
        background: "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)",
        color: "#2D284D",
      }}
    >
      <Link to="/contact">{ctaText}</Link>
    </Button>
  </div>
);

export const WebOfferSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <OfferCard
            title="Site vitrine"
            subtitle="Votre vitrine digitale"
            description="Une présence en ligne complète pour asseoir votre crédibilité et présenter l'ensemble de votre activité."
            benefits={siteBenefits}
            ctaText="Créer mon site vitrine"
          />
          <OfferCard
            title="Landing page"
            subtitle="Une page, un objectif"
            description="Une page unique et percutante pour convertir vos visiteurs en prospects ou clients."
            benefits={landingBenefits}
            ctaText="Créer ma landing page"
          />
        </div>
      </div>
    </section>
  );
};

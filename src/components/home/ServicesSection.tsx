import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const webBenefits = ["Structure claire pour présenter vos offres et guider vos visiteurs.", "Design professionnel qui renforce votre crédibilité.", "Pages pensées pour transformer vos visiteurs en clients.", "Site modifiable par vous, sans compétences techniques.", "Optimisé pour être facilement trouvé sur les moteurs de recherche."];
const brandBenefits = ["Un logo simple et lisible, adapté au web et à l'impression.", "Une palette de couleurs cohérente avec votre activité et vos valeurs.", "Des typographies choisies pour renforcer votre crédibilité.", "Une charte graphique claire pour garder la même image partout.", "Des exemples d'utilisation pour appliquer votre identité au quotidien."];
interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
}
function ServiceCard({
  title,
  description,
  benefits,
  ctaText,
  ctaLink
}: ServiceCardProps) {
  return <div className="group relative flex flex-col items-center text-center p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl border border-[#2D284D] bg-transparent backdrop-blur-sm transition-all duration-500 hover:border-[#C3B68F] hover:shadow-[0_0_40px_-10px_#C3B68F]">
      {/* Badge */}
      <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full btn-gradient-gold text-[10px] md:text-xs font-medium tracking-wide mb-4 md:mb-6">
        POUR : ARTISANS, PME, FREELANCES, STARTUP
      </span>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl md:text-display-sm lg:text-display-md text-white mb-3 md:mb-4 text-center leading-tight">
        {title.includes(" et ") ? <>
            {title.split(" et ")[0]}
            <br />
            et {title.split(" et ")[1]}
          </> : title.includes(" & ") ? <>
            {title.split(" & ")[0]}
            <br />
            & {title.split(" & ")[1]}
          </> : title}
      </h3>

      {/* Description */}
      <p className="mb-6 md:mb-8 max-w-sm text-white text-base sm:text-lg md:text-display-sm text-center leading-relaxed">
        {description}
      </p>

      {/* Benefits list */}
      <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-left w-full max-w-sm">
        {benefits.map((benefit, index) => <li key={index} className="flex items-start gap-2 md:gap-3">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">{benefit}</span>
          </li>)}
      </ul>

      {/* CTA Button */}
      <div className="mt-auto w-full sm:w-auto">
        <Button variant="gold-outline" size="lg" className="w-full sm:w-auto" asChild>
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </div>;
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
          <ServiceCard title="Site vitrine et landing page" description="Un site web pensé pour renforcer votre crédibilité et établir la confiance de vos prospects." benefits={webBenefits} ctaText="Parler de votre projet de site" ctaLink="/site-web" />
          <ServiceCard title="Identité visuelle & logo" description="Une identité visuelle professionnelle pour être reconnu et inspirer confiance au premier regard." benefits={brandBenefits} ctaText="Parler de votre identité visuelle" ctaLink="/identite-visuelle" />
        </div>
      </div>
    </section>;
}
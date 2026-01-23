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
  return <div className="group relative flex flex-col items-center text-center p-8 md:p-10 rounded-2xl border border-[#2D284D] bg-transparent backdrop-blur-sm transition-all duration-500 hover:border-[#C3B68F] hover:shadow-[0_0_40px_-10px_#C3B68F]">
      {/* Badge */}
      <span className="inline-block px-4 py-1.5 rounded-full btn-gradient-gold text-xs font-medium tracking-wide mb-6">
        POUR : ARTISANS, PME, FREELANCES, STARTUP
      </span>

      {/* Title */}
      <h3 className="text-display-sm md:text-display-md text-white mb-4 text-center">
        {title.includes("et") ? <>
            {title.split(" et ")[0]}
            <br />
            et {title.split(" et ")[1]}
          </> : title}
      </h3>

      {/* Description */}
      <p className="mb-8 max-w-sm text-white text-display-sm text-center">
        {description.split(" ").reduce((acc: string[][], word, i, arr) => {
        const third = Math.ceil(arr.length / 3);
        const lineIndex = Math.min(Math.floor(i / third), 2);
        if (!acc[lineIndex]) acc[lineIndex] = [];
        acc[lineIndex].push(word);
        return acc;
      }, []).map((line, i, arr) => <span key={i}>
            {line.join(" ")}
            {i < arr.length - 1 && <br />}
          </span>)}
      </p>

      {/* Benefits list */}
      <ul className="space-y-3 mb-8 text-left w-full max-w-sm">
        {benefits.map((benefit, index) => <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground text-2xl">{benefit}</span>
          </li>)}
      </ul>

      {/* CTA Button */}
      <div className="mt-auto">
        <Button variant="gold-outline" size="lg" asChild>
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </div>;
}
export function ServicesSection() {
  return <section className="section-padding">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-display-md mb-4">
            Deux services pour structurer votre{" "}
            <span className="text-gradient-gold">présence en ligne</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            NOVA VISIO vous accompagne sur les deux bases essentielles de votre image en ligne : un site clair et une identité visuelle professionnelle.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ServiceCard title="Site vitrine et landing page" description="Un site web pensé pour renforcer votre crédibilité et établir la confiance de vos prospects." benefits={webBenefits} ctaText="Parler de votre projet de site" ctaLink="/site-web" />
          <ServiceCard title="Identité visuelle & logo" description="Une identité visuelle professionnelle pour être reconnu et inspirer confiance au premier regard." benefits={brandBenefits} ctaText="Parler de votre identité visuelle" ctaLink="/identite-visuelle" />
        </div>
      </div>
    </section>;
}
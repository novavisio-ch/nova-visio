import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  "Structure claire pour présenter vos offres et guider vos visiteurs.",
  "Design professionnel qui renforce votre crédibilité.",
  "Pages pensées pour transformer vos visiteurs en clients.",
  "Site modifiable par vous, sans compétences techniques.",
  "Optimisé pour être facilement trouvé sur les moteurs de recherche.",
];

export function WebServiceCard() {
  return (
    <section className="section-padding">
      <div className="container max-w-3xl">
        <div className="group rounded-2xl border border-[#2D284D] hover:border-[#C3B68F] bg-transparent backdrop-blur-sm transition-all duration-500 p-8 md:p-12">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Target Badge */}
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#1F1A3D]/80 border border-[#2D284D]">
              <span className="text-sm font-medium text-foreground tracking-wide">
                POUR : ARTISANS, PME, FREELANCES
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-display-md md:text-display-lg font-display font-bold text-foreground">
              Site vitrine et landing page
            </h2>

            {/* Subtitle */}
            <p className="text-body-lg text-muted-foreground max-w-xl leading-relaxed">
              Un site web pensé pour renforcer votre crédibilité et établir la confiance de vos prospects.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 text-left w-full max-w-lg">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-body-md text-foreground/90 leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button variant="gold" size="lg" asChild className="mt-4">
              <Link to="/contact">Parler de votre projet</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

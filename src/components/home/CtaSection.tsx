import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const reassurances = [
  "Aucun engagement obligatoire à la fin de l'échange.",
  "Un regard structuré sur votre situation actuelle.",
  "Des pistes concrètes pour avancer sereinement.",
];

export function CtaSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28 relative overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-display-lg lg:text-display-xl mb-4 md:mb-6 leading-tight">
            Prêt à clarifier votre{" "}
            <span className="text-gradient-gold">présence en ligne</span> ?
          </h2>

          {/* Subtitle */}
          <p className="text-body text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 text-muted-foreground max-w-xl mx-auto text-center">
            Vous avez un projet ou une activité, mais votre site, votre image
            ou vos réseaux ne reflètent pas encore votre valeur. Prenons un moment
            pour faire le point, calmement, et voir ce qui peut être simplifié.
          </p>

          {/* Reassurance bullets */}
          <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 inline-block text-left">
            {reassurances.map((item, index) => (
              <li key={index} className="flex items-center gap-2 md:gap-3">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Button asChild variant="gold" size="lg" className="w-full sm:w-auto">
              <Link to="/contact">Parler de votre projet</Link>
            </Button>
            <Button asChild variant="gold-outline" size="lg" className="w-full sm:w-auto">
              <a href="mailto:contact@novavisio.ch">Nous écrire par mail</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

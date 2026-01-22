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
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-display-lg md:text-display-xl mb-6">
            Prêt à clarifier votre{" "}
            <span className="text-gradient-gold">présence en ligne</span> ?
          </h2>

          {/* Subtitle */}
          <p className="text-body text-lg md:text-xl leading-relaxed mb-10 text-muted-foreground max-w-xl mx-auto text-center">
            Vous avez un projet ou une activité, mais votre site, votre image
            <br className="hidden md:block" />
            ou vos réseaux ne reflètent pas encore votre valeur. Prenons un moment
            <br className="hidden md:block" />
            pour faire le point, calmement, et voir ce qui peut être simplifié.
          </p>

          {/* Reassurance bullets */}
          <ul className="space-y-4 mb-10 inline-block text-left">
            {reassurances.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">Parler de votre projet</Link>
            </Button>
            <Button asChild variant="gold-outline" size="lg">
              <a href="mailto:contact@novavisio.ch">Nous écrire par mail</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

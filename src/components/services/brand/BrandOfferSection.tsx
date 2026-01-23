import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const deliverables = [
  "Logo principal et variantes (horizontale, verticale, icône).",
  "Palette de couleurs complète avec usages recommandés.",
  "Typographies titres et textes, avec recommandations.",
  "Charte graphique synthétique (PDF) avec exemples d'utilisation.",
  "Déclinaisons pour le web et les réseaux sociaux.",
  "Fichiers sources et exports dans tous les formats nécessaires.",
];

export const BrandOfferSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        <div
          className="group relative flex flex-col items-center text-center p-8 md:p-12 rounded-2xl border-2 bg-white transition-all duration-500 hover:shadow-[0_0_40px_-10px_#C3B68F]"
          style={{ borderColor: "#C3B68F" }}
        >
          {/* Badge */}
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6"
            style={{ backgroundColor: "#f5f3ee", color: "#2D284D" }}
          >
            POUR : ARTISANS, PME, FREELANCES
          </span>

          {/* Title */}
          <h3
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4"
            style={{ color: "#2D284D" }}
          >
            Logo & identité visuelle
            <br />
            complète
          </h3>

          {/* Description */}
          <p
            className="mb-8 max-w-lg text-lg leading-relaxed"
            style={{ color: "#2D284D", opacity: 0.8 }}
          >
            Une identité visuelle professionnelle pour être reconnu
            <br />
            et inspirer confiance au premier regard.
          </p>

          {/* Deliverables list */}
          <ul className="space-y-3 mb-10 text-left w-full max-w-lg">
            {deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#C3B68F] mt-0.5 flex-shrink-0" />
                <span style={{ color: "#2D284D", opacity: 0.8 }}>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="rounded-lg px-8 py-6 text-base font-semibold transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)",
              color: "#2D284D",
            }}
          >
            <Link to="/contact">Parler de votre identité visuelle</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

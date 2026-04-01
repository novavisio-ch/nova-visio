import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import illustratorIcon from "@/assets/icons/illustrator.svg";
import photoshopIcon from "@/assets/icons/photoshop.svg";
import { useLanguage } from "@/hooks/use-language";

export function BrandIdentityHero() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const bulletPoints = isFr
    ? [
        "Un logo qui fonctionne en grand comme en petit, sur écran comme sur papier.",
        "Des couleurs et typos choisies pour vous - pas piochées au hasard.",
        "Des règles simples pour garder la même image partout, sans se prendre la tête.",
      ]
    : [
        "A logo that works at any size, on screen and in print.",
        "Colours and fonts chosen for you — not picked at random.",
        "Simple guidelines to keep a consistent image everywhere, hassle-free.",
      ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full glass-card">
              <span className="text-xs text-primary">{isFr ? "Logo & identité visuelle sur mesure" : "Custom logo & brand identity"}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#FF7C00]/10">
              <img src={illustratorIcon} alt="Adobe Illustrator" className="w-4 h-4" />
              <span className="text-xs font-medium text-[#FF7C00]">Illustrator</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#31A8FF]/10">
              <img src={photoshopIcon} alt="Adobe Photoshop" className="w-4 h-4" />
              <span className="text-xs font-medium text-[#31A8FF]">Photoshop</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-display-lg lg:text-display-xl mb-4 md:mb-8 animate-fade-up leading-tight" style={{ animationDelay: "0.1s" }}>
            {isFr ? <>Votre image.<br className="md:hidden" /><span className="hidden md:inline">{" "}</span><span className="text-gradient-gold">Enfin à la hauteur.</span></> : <>Your brand.<br className="md:hidden" /><span className="hidden md:inline">{" "}</span><span className="text-gradient-gold">Finally up to standard.</span></>}
          </h1>

          <p className="text-sm sm:text-base md:text-body-lg text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 animate-fade-up leading-relaxed" style={{ animationDelay: "0.15s" }}>
            {isFr ? <>Logo, couleurs, typographies,{" "}<br className="md:hidden" />charte graphique.{" "}<br className="md:hidden" />Tout est créé de A à Z pour une marque{" "}<br className="md:hidden" />reconnaissable, cohérente{" "}<br className="sm:hidden" />et utilisable partout.</> : <>Logo, colours, typography,{" "}<br className="md:hidden" />brand guidelines.{" "}<br className="md:hidden" />Everything designed from scratch for a brand{" "}<br className="md:hidden" />that's recognisable, consistent,{" "}<br className="sm:hidden" />and ready to use everywhere.</>}
          </p>

          <ul className="space-y-2 md:space-y-3 mb-8 md:mb-10 animate-fade-up inline-block text-left" style={{ animationDelay: "0.2s" }}>
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2 md:gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base md:text-body-md text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>

          <div className="animate-fade-up mb-6 md:mb-8" style={{ animationDelay: "0.22s" }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm md:text-base font-medium" style={{ background: "rgba(195, 182, 143, 0.15)", color: "#C3B68F", border: "1px solid rgba(195, 182, 143, 0.3)" }}>
              {isFr ? "Identité visuelle complète dès 900 CHF" : "Complete brand identity from CHF 900"}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact?sujet=appel-decouverte">{isFr ? "Réserver un appel gratuit →" : "Book a free call →"}</Link>
            </Button>
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/tarifs">{isFr ? "Voir les tarifs →" : "View pricing →"}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

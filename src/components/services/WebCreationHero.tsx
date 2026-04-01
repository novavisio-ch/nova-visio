import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Code } from "lucide-react";
import figmaIcon from "@/assets/icons/figma.png";
import webflowIcon from "@/assets/icons/webflow.png";
import { useLanguage } from "@/hooks/use-language";

export function WebCreationHero() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const bulletPoints = isFr
    ? [
        "Des pages structurées qui expliquent clairement votre offre.",
        "Un design qui rassure vos prospects - pas qui vous flatte.",
        "Un site que vous pouvez modifier vous-même, sans appeler un développeur.",
      ]
    : [
        "Structured pages that clearly explain what you offer.",
        "A design that reassures your prospects — not one that just looks nice.",
        "A website you can update yourself, without calling a developer.",
      ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full glass-card">
              <span className="text-xs text-primary">{isFr ? "Création de sites web & landing pages" : "Website & landing page design"}</span>
            </div>
            <div className="inline-flex items-center px-2.5 py-1.5 rounded-full glass-card gap-1.5">
              <img src={webflowIcon} alt="Webflow" className="w-4 h-4" />
              <span className="text-xs text-muted-foreground">Webflow</span>
            </div>
            <div className="inline-flex items-center px-2.5 py-1.5 rounded-full glass-card gap-1.5">
              <img src={figmaIcon} alt="Figma" className="w-4 h-4" />
              <span className="text-xs text-muted-foreground">Figma</span>
            </div>
            <div className="inline-flex items-center px-2.5 py-1.5 rounded-full glass-card gap-1.5">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">Code</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-display-lg lg:text-display-xl mb-4 md:mb-8 animate-fade-up leading-tight" style={{ animationDelay: "0.1s" }}>
            {isFr ? <>Votre site.<br className="md:hidden" /><span className="hidden md:inline">{" "}</span><span className="text-gradient-gold">Votre meilleur commercial.</span></> : <>Your website.<br className="md:hidden" /><span className="hidden md:inline">{" "}</span><span className="text-gradient-gold">Your best salesperson.</span></>}
          </h1>

          <p className="text-sm sm:text-base md:text-body-lg text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 animate-fade-up leading-relaxed" style={{ animationDelay: "0.15s" }}>
            {isFr ? <>Ce que vous faites,{" "}<br className="md:hidden" />pourquoi vous faire confiance,{" "}<br className="md:hidden" />comment travailler avec vous.{" "}<br className="sm:hidden" />Un site qui convertit. Point.</> : <>What you do,{" "}<br className="md:hidden" />why people should trust you,{" "}<br className="md:hidden" />how to work with you.{" "}<br className="sm:hidden" />A website that converts. Period.</>}
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
              {isFr ? "Site vitrine dès 1'500 CHF - Livraison en 7 à 14 jours" : "Showcase website from CHF 1,500 — Delivered in 7 to 14 days"}
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

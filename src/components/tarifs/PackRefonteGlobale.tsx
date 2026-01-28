import { RefreshCw, Palette, Monitor, Check, ArrowRight, Users, History, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const targetAudience = [
  {
    icon: History,
    text: "Marques déjà lancées qui ne se reconnaissent plus dans leur identité actuelle.",
  },
  {
    icon: TrendingUp,
    text: "Sites en ligne depuis plusieurs années, devenus peu lisibles, datés ou peu efficaces.",
  },
  {
    icon: Users,
    text: "Entreprises qui ont évolué (positionnement, offres, cible) et ont besoin d'une mise à jour globale cohérente.",
  },
];

const brandingHighlights = [
  "Audit de votre identité actuelle",
  "Logo refondu + déclinaisons",
  "Palette & typographies mises à jour",
  "Moodboard de refonte",
  "Brandboard & mini charte graphique",
];

const webHighlights = [
  "Audit de votre site actuel",
  "Refonte 6 à 8 pages sur nouvelle structure",
  "Webdesign aligné sur nouvelle identité",
  "Site responsive + bases SEO",
  "Mise en ligne + support post-refonte",
];

const mainBullets = [
  "Audit complet de votre identité et de votre site actuel",
  "Refonte de marque : logo, palette, typographies et univers visuel",
  "Nouvelle charte graphique synthétique",
  "Refonte de site vitrine (6 à 8 pages) structurée pour vos objectifs",
  "Webdesign sur-mesure, responsive et aligné à votre nouvelle identité",
  "Accompagnement de l'audit à la mise en ligne",
];

export function PackRefonteGlobale() {
  return (
    <div className="relative">
      {/* Main Pack Card */}
      <div
        className="relative rounded-3xl border overflow-hidden"
        style={{
          background: "linear-gradient(180deg, rgba(15,15,20,0.98) 0%, rgba(25,20,40,0.98) 100%)",
          borderColor: "rgba(124, 106, 232, 0.3)",
        }}
      >
        <div className="relative z-10 p-6 md:p-10 lg:p-12">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <div className="flex items-center justify-center mb-6">
              <RefreshCw className="w-8 h-8 text-[#9D8DF0]" />
            </div>

            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              Pack Refonte Globale
            </h3>
            <p
              className="text-xl md:text-2xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #9D8DF0 0%, #C3B68F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Reprenez le contrôle de votre image
            </p>
            <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-6">
              Une refonte <strong className="text-white font-semibold">cohérente</strong> de votre identité visuelle et de votre site web pour{" "}
              <strong className="text-[#9D8DF0] font-semibold">aligner votre image</strong> avec le niveau réel de votre activité.
            </p>
            
            {/* Price */}
            <div className="inline-flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-display font-bold text-[#9D8DF0]">2'600</span>
              <span className="text-xl md:text-2xl font-semibold text-[#9D8DF0]">CHF</span>
            </div>
          </div>

          {/* Target Audience */}
          <div className="mb-8 md:mb-10">
            <h4 className="font-display text-lg md:text-xl font-bold text-white mb-5 flex items-center gap-3">
              <Users className="w-5 h-5 text-[#9D8DF0]" />
              À qui s'adresse ce pack ?
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {targetAudience.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-[#9D8DF0]/20"
                    style={{ background: "rgba(124, 106, 232, 0.03)" }}
                  >
                    <Icon className="w-6 h-6 text-[#9D8DF0] mb-3" />
                    <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary bullets */}
          <div
            className="mb-8 md:mb-10 p-5 md:p-6 rounded-xl border"
            style={{
              background: "linear-gradient(135deg, rgba(124, 106, 232, 0.05) 0%, rgba(195, 182, 143, 0.05) 100%)",
              borderColor: "rgba(124, 106, 232, 0.2)",
            }}
          >
            <h4 className="font-display text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Check className="w-5 h-5 text-[#9D8DF0]" />
              En résumé
            </h4>
            <ul className="grid md:grid-cols-2 gap-3">
              {mainBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#9D8DF0] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Two columns: Branding & Web */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
            {/* Branding Section */}
            <div
              className="p-5 md:p-6 rounded-xl border border-[#C3B68F]/30"
              style={{ background: "rgba(195, 182, 143, 0.03)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-5 h-5 text-[#C3B68F]" />
                <h5 className="font-display text-lg font-bold text-[#C3B68F]">
                  Refonte de marque
                </h5>
              </div>
              <ul className="space-y-2.5">
                {brandingHighlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C3B68F] mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Web Section */}
            <div
              className="p-5 md:p-6 rounded-xl border border-[#9D8DF0]/30"
              style={{ background: "rgba(124, 106, 232, 0.03)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-5 h-5 text-[#9D8DF0]" />
                <h5 className="font-display text-lg font-bold text-[#9D8DF0]">
                  Modernisation digitale
                </h5>
              </div>
              <ul className="space-y-2.5">
                {webHighlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#9D8DF0] mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-6 border-t border-white/10">
            <Button
              size="lg"
              className="px-8"
              style={{
                background: "linear-gradient(135deg, #9D8DF0 0%, #C3B68F 100%)",
                color: "#1f1a3d",
              }}
              asChild
            >
              <Link to="/contact">
                <span className="flex items-center font-semibold">
                  Demander un devis pour ce pack
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

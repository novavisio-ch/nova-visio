import { Palette, Monitor, Check, ArrowRight, Users, Clock, Star, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const targetAudience = [
  {
    icon: Users,
    text: "Aux indépendants, studios et petites entreprises qui souhaitent lancer ou refondre leur image avec une identité claire et un site web professionnel.",
  },
  {
    icon: Package,
    text: "Aux projets qui veulent éviter de multiplier les prestataires et recherchent un accompagnement global : branding + site, dans une seule offre.",
  },
  {
    icon: Clock,
    text: "Aux personnes qui manquent de temps et veulent un parcours cadré, des livrables prêts à l'emploi et un résultat facilement utilisable au quotidien.",
  },
];

const brandingHighlights = [
  "Logo sur-mesure + déclinaisons",
  "Palette couleurs & typographies",
  "Moodboard & directions créatives",
  "Brandboard synthétique",
  "Mini charte graphique (PDF)",
  "Carte de visite prête à imprimer",
];

const webHighlights = [
  "Site vitrine 6 à 8 pages",
  "Design aligné sur votre identité",
  "Responsive (mobile, tablette, desktop)",
  "Formulaire de contact fonctionnel",
  "Bases SEO sur les pages clés",
  "Mise en ligne sur votre domaine",
];

export function PackDigitalBranding() {
  return (
    <div className="relative">
      {/* Main Pack Card */}
      <div
        className="relative rounded-3xl border overflow-hidden"
        style={{
          background: "linear-gradient(180deg, rgba(15,15,20,0.98) 0%, rgba(20,15,35,0.98) 100%)",
          borderColor: "rgba(195, 182, 143, 0.3)",
        }}
      >
        <div className="relative z-10 p-6 md:p-10 lg:p-12">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Palette className="w-8 h-8 text-[#C3B68F]" />
              <span className="text-2xl text-white/30">+</span>
              <Monitor className="w-8 h-8 text-[#9D8DF0]" />
            </div>

            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              Pack Digital & Branding
            </h3>
            <p
              className="text-xl md:text-2xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #C3B68F 0%, #9D8DF0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Identité de marque & site vitrine
            </p>
            <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-6">
              Une identité visuelle <strong className="text-white font-semibold">sur-mesure</strong> et un site vitrine complet de{" "}
              <strong className="text-[#C3B68F] font-semibold">6 à 8 pages</strong>, conçus ensemble pour une présence en ligne{" "}
              <strong className="text-white font-semibold">cohérente et professionnelle</strong>.
            </p>
            
            {/* Price */}
            <div className="inline-flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-display font-bold text-[#C3B68F]">2'200</span>
              <span className="text-xl md:text-2xl font-semibold text-[#C3B68F]">CHF</span>
            </div>
          </div>

          {/* Target Audience */}
          <div className="mb-8 md:mb-10">
            <h4 className="font-display text-lg md:text-xl font-bold text-white mb-5 flex items-center gap-3">
              <Star className="w-5 h-5 text-[#C3B68F]" />
              À qui s'adresse ce pack ?
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {targetAudience.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-[#C3B68F]/20"
                    style={{ background: "rgba(195, 182, 143, 0.03)" }}
                  >
                    <Icon className="w-6 h-6 text-[#C3B68F] mb-3" />
                    <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* What you get - Two columns */}
          <div className="mb-8 md:mb-10">
            <h4 className="font-display text-lg md:text-xl font-bold text-white mb-5 flex items-center gap-3">
              <Package className="w-5 h-5 text-[#C3B68F]" />
              Ce que vous obtenez
            </h4>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Branding Section */}
              <div
                className="p-5 md:p-6 rounded-xl border border-[#C3B68F]/30"
                style={{ background: "rgba(195, 182, 143, 0.03)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Palette className="w-5 h-5 text-[#C3B68F]" />
                  <h5 className="font-display text-lg font-bold text-[#C3B68F]">
                    Branding complet
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
                    Site vitrine 6 à 8 pages
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
          </div>

          {/* CTA */}
          <div className="text-center pt-6 border-t border-white/10">
            <Button
              size="lg"
              className="px-8"
              style={{
                background: "linear-gradient(135deg, #C3B68F 0%, #9D8DF0 100%)",
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

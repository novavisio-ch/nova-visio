import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import identityMockup from "@/assets/services/identity-mockup.jpg";
import { LogosSection } from "@/components/home/LogosSection";

export const BrandIdentityContent = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column - Left */}
          <div className="order-1 lg:order-1">
            <div className="relative">
              <img
                src={identityMockup}
                alt="Moodboard et éléments d'identité visuelle"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Subtle decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl -z-10 blur-2xl" />
            </div>
          </div>

          {/* Text Column - Right */}
          <div className="order-2 lg:order-2 space-y-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight text-gray-900">
              Votre identité visuelle ne se résume pas à un logo.
            </h2>

            <div className="space-y-5 text-gray-700 font-body text-lg leading-relaxed">
              <p>
                Un logo seul ne suffit pas à créer une image de marque forte. Votre identité visuelle, 
                c'est l'ensemble des éléments qui permettent à vos clients de vous reconnaître immédiatement, 
                quel que soit le support : site web, réseaux sociaux, cartes de visite, ou documents.
              </p>

              <p>
                Une identité bien pensée renforce la confiance et la crédibilité. Elle montre que vous 
                prenez votre activité au sérieux et que vous êtes un professionnel sur lequel on peut compter.
              </p>

              <p>
                Chez NOVA VISIO, nous créons des identités visuelles conçues pour durer et s'adapter 
                facilement à tous vos supports. Notre objectif : vous donner une image claire, cohérente 
                et professionnelle, sans complexité inutile.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-3 transition-all duration-300 group mt-4"
            >
              Discuter de votre projet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Logo Marquee */}
      <LogosSection />
    </section>
  );
};

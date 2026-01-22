import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import webMockup from "@/assets/web-mockup-creative.jpg";

export const WebCreationContent = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column - Left */}
          <div className="order-1 lg:order-1">
            <div className="relative">
              <img
                src={webMockup}
                alt="Mockup d'un site web créatif et personnalisé"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Subtle decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl -z-10 blur-2xl" />
            </div>
          </div>

          {/* Text Column - Right */}
          <div className="order-2 lg:order-2 space-y-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight text-gray-900">
              Un site web ne se limite pas au design : c'est un outil sur mesure pour faire grandir votre activité.
            </h2>

            <div className="space-y-5 text-gray-700 font-body text-lg leading-relaxed">
              <p>
                Un bon site ne sert pas seulement à "faire joli". Il doit aider vos visiteurs à comprendre qui vous êtes, ce que vous proposez et pourquoi ils devraient vous faire confiance, avec une esthétique qui vous ressemble vraiment.
              </p>

              <p>
                Chez NOVA VISIO, chaque projet de création web est pensé sur mesure : nous partons de vos envies, de votre univers visuel et de votre façon de travailler, puis nous les traduisons dans une structure de pages, des messages et une expérience de navigation alignés sur une stratégie claire.
              </p>

              <p>
                Notre priorité : créer un site unique, cohérent avec votre identité et vos objectifs, qui rassure vos prospects et leur donne envie de passer à l'étape suivante (prise de contact, demande de devis, achat). L'originalité visuelle reste au service d'un parcours réfléchi, pas l'inverse.
              </p>

              <p>
                C'est avec cette logique que nous abordons chaque projet de création de site vitrine ou de landing page, en combinant vos souhaits esthétiques avec une stratégie digitale solide.
              </p>
            </div>

            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-3 transition-all duration-300 group mt-4"
            >
              Voir des exemples de projets
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

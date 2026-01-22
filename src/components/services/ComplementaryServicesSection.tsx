import { ArrowRight } from "lucide-react";
import identityMockup from "@/assets/services/identity-mockup.jpg";
import funnelMockup from "@/assets/services/funnel-mockup.jpg";
import blogMockup from "@/assets/services/blog-mockup.jpg";
import ecommerceMockup from "@/assets/services/ecommerce-mockup.jpg";

const services = [
  {
    id: "identity",
    title: "Identité visuelle",
    intro:
      "Nous créons ou faisons évoluer votre identité visuelle pour qu'elle soit cohérente sur votre site, vos réseaux sociaux et vos supports de communication.",
    bullets: [
      "Logo, palette de couleurs et typographies adaptés à votre univers.",
      "Charte graphique claire pour garder la même image partout.",
      "Guides d'usage pour appliquer facilement votre identité au quotidien.",
    ],
    link: "En savoir plus",
    image: identityMockup,
  },
  {
    id: "funnels",
    title: "Tunnels de vente",
    intro:
      "Nous concevons des parcours simples et efficaces pour accompagner vos visiteurs jusqu'à l'achat ou la prise de rendez-vous.",
    bullets: [
      "Cartographie du parcours prospect : de la découverte à la conversion.",
      "Pages clés (capture, offre, confirmation) pensées pour rassurer et convaincre.",
      "Mise en place ou coordination avec vos outils d'emailing et d'automatisation.",
    ],
    link: "Découvrir les possibilités",
    image: funnelMockup,
  },
  {
    id: "blog",
    title: "Blog & contenus",
    intro:
      "Nous structurons votre blog pour qu'il serve à la fois votre crédibilité, votre référencement et la compréhension de votre expertise.",
    bullets: [
      "Arborescence et catégories alignées avec vos offres.",
      "Templates d'articles lisibles et adaptés au mobile.",
      "Conseils éditoriaux pour publier des contenus utiles et réguliers.",
    ],
    link: "Organiser votre blog",
    image: blogMockup,
  },
  {
    id: "ecommerce",
    title: "Boutiques en ligne",
    intro:
      "Nous mettons en place des boutiques en ligne adaptées à la taille de votre activité, sans usine à gaz technique.",
    bullets: [
      "Parcours d'achat clair : de la fiche produit au paiement.",
      "Mise en avant de vos produits phares et offres récurrentes.",
      "Intégration avec vos outils de paiement et de gestion des commandes.",
    ],
    link: "Mettre en place votre boutique",
    image: ecommerceMockup,
  },
];

export const ComplementaryServicesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Services complémentaires
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Des services additionnels pour compléter votre site web et structurer votre écosystème digital.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-6 md:space-y-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl border border-primary/40 bg-[#0a0f1f]/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] hover:scale-[1.01]"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Text Content - Left */}
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-base md:text-lg mb-6 leading-relaxed">
                    {service.intro}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold group/link hover:gap-3 transition-all duration-300"
                  >
                    {service.link}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>

                {/* Image - Right */}
                <div className="relative h-64 md:h-auto bg-[#060d1f]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1f]/50 to-transparent md:block hidden" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

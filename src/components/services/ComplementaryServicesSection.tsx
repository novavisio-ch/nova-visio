import { ArrowRight, Filter, FileText, ShoppingBag } from "lucide-react";
import identityMockup from "@/assets/services/identity-mockup.jpg";

const secondaryServices = [
  {
    id: "funnels",
    icon: Filter,
    title: "Tunnels de vente",
    description: "Nous concevons des parcours simples pour guider vos visiteurs depuis la découverte de votre offre jusqu'à la prise de rendez-vous ou à l'achat, en cohérence avec votre site et votre identité."
  },
  {
    id: "blog",
    icon: FileText,
    title: "Blog & contenus",
    description: "Nous structurons votre blog et vos pages de contenus pour valoriser votre expertise, améliorer votre référencement et offrir à vos visiteurs des ressources claires et utiles."
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "Boutiques en ligne",
    description: "Nous mettons en place des boutiques en ligne adaptées à la taille de votre activité, avec un parcours d'achat lisible et des produits présentés de manière professionnelle."
  }
];

export const ComplementaryServicesSection = () => {
  return (
    <section 
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, #030827 0%, #2D284D 100%)" }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Services complémentaires
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Des services additionnels pour renforcer votre image et compléter votre site web.
          </p>
        </div>

        {/* Main Card - Identité visuelle */}
        <div className="group mb-10 md:mb-14 rounded-2xl border border-[#C3B68F]/40 bg-[#0a0f2c]/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(195,182,143,0.25)] hover:scale-[1.01]">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Text Content */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Identité visuelle
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Nous concevons ou faisons évoluer votre identité visuelle pour qu'elle soit claire, reconnaissable et cohérente sur votre site, vos réseaux sociaux et vos supports de communication.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3B68F] mt-2 flex-shrink-0" />
                  <span className="text-white/70">Logo, palette de couleurs et typographies adaptés à votre univers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3B68F] mt-2 flex-shrink-0" />
                  <span className="text-white/70">Charte graphique et règles d'usage pour garder la même image partout.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3B68F] mt-2 flex-shrink-0" />
                  <span className="text-white/70">Déclinaisons pour votre site, vos réseaux sociaux et vos supports imprimés.</span>
                </li>
              </ul>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-[#C3B68F] font-medium group/link hover:gap-3 transition-all duration-300"
              >
                En savoir plus sur l'identité visuelle
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
            {/* Image */}
            <div className="relative h-64 md:h-auto">
              <img 
                src={identityMockup} 
                alt="Moodboard identité visuelle" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0f2c]/30 md:bg-gradient-to-r" />
            </div>
          </div>
        </div>

        {/* Secondary Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {secondaryServices.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="group rounded-xl border border-[#C3B68F]/30 bg-[#0a0f2c]/60 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:shadow-[0_0_25px_rgba(195,182,143,0.2)] hover:scale-[1.02] hover:border-[#C3B68F]/50"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C3B68F]/10 flex items-center justify-center mb-5 group-hover:bg-[#C3B68F]/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#C3B68F]" />
                </div>
                <h4 className="font-display text-xl font-bold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
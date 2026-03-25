import { ArrowRight, Filter, FileText, ShoppingBag } from "lucide-react";
import identityMockup from "@/assets/services/identity-mockup.jpg";
const secondaryServices = [{
  id: "funnels",
  icon: Filter,
  title: "Tunnels de vente",
  description: "Des parcours simples qui guident vos visiteurs du \"je découvre\" au \"je prends rendez-vous\". Pas de usine à gaz - juste un chemin clair vers l'action."
}, {
  id: "blog",
  icon: FileText,
  title: "Blog & contenus",
  description: "Un blog structuré qui montre que vous savez de quoi vous parlez, booste votre référencement et donne à vos visiteurs des raisons de revenir."
}, {
  id: "ecommerce",
  icon: ShoppingBag,
  title: "Boutiques en ligne",
  description: "Une boutique adaptée à votre taille, avec un parcours d'achat lisible et des produits bien présentés. Pas besoin de Shopify pour 20 produits."
}];
export const ComplementaryServicesSection = () => {
  return <section className="py-20 md:py-28 section-gradient-main">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Services complémentaires.
          </h2>
          <p className="text-lg text-foreground-medium max-w-2xl mx-auto">
            Pour aller plus loin, selon vos besoins.
          </p>
        </div>

        {/* Main Card - Identité visuelle */}
        <div className="group mb-10 md:mb-14 rounded-2xl border border-[#C3B68F]/40 bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(195,182,143,0.25)] hover:scale-[1.01]">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Text Content */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center section-white">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Identité visuelle
              </h3>
              <p className="text-foreground-medium mb-6 leading-relaxed">
                Nous concevons ou faisons évoluer votre identité visuelle pour qu'elle soit claire, reconnaissable et cohérente sur votre site, vos réseaux sociaux et vos supports de communication.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3B68F] mt-2 flex-shrink-0" />
                  <span className="text-foreground-medium">Logo, palette de couleurs et typographies adaptés à votre univers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3B68F] mt-2 flex-shrink-0" />
                  <span className="text-foreground-medium">Charte graphique et règles d'usage pour garder la même image partout.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3B68F] mt-2 flex-shrink-0" />
                  <span className="text-foreground-medium">Déclinaisons pour votre site, vos réseaux sociaux et vos supports imprimés.</span>
                </li>
              </ul>
              <a href="/identite-visuelle" className="inline-flex items-center gap-2 text-[#C3B68F] font-medium group/link hover:gap-3 transition-all duration-300">
                En savoir plus sur l'identité visuelle
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
            {/* Image */}
            <div className="relative h-64 md:h-auto section-white">
              <img src={identityMockup} alt="Moodboard identité visuelle" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Secondary Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {secondaryServices.map(service => {
          const Icon = service.icon;
          return <div key={service.id} className="group rounded-xl border border-[#C3B68F]/30 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:shadow-[0_0_25px_rgba(195,182,143,0.2)] hover:scale-[1.02] hover:border-[#C3B68F]/50 section-gradient-main">
                <div className="mb-5">
                  <Icon className="w-8 h-8 text-[#C3B68F]" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h4>
                <p className="text-foreground-medium text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
};

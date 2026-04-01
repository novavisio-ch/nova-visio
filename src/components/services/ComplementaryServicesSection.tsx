import { ArrowRight, Filter, FileText, ShoppingBag } from "lucide-react";
import identityMockup from "@/assets/services/identity-mockup.jpg";
import { useLanguage } from "@/hooks/use-language";

export const ComplementaryServicesSection = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const secondaryServices = [
    {
      id: "funnels",
      icon: Filter,
      title: isFr ? "Tunnels de vente" : "Sales Funnels",
      description: isFr
        ? "Des parcours simples qui guident vos visiteurs du \"je découvre\" au \"je prends rendez-vous\". Pas de usine à gaz - juste un chemin clair vers l'action."
        : "Simple journeys that guide visitors from \"just browsing\" to \"let's book a call.\" No over-engineering — just a clear path to action."
    },
    {
      id: "blog",
      icon: FileText,
      title: isFr ? "Blog & contenus" : "Blog & Content",
      description: isFr
        ? "Un blog structuré qui montre que vous savez de quoi vous parlez, booste votre référencement et donne à vos visiteurs des raisons de revenir."
        : "A structured blog that demonstrates your expertise, boosts your SEO, and gives visitors a reason to come back."
    },
    {
      id: "ecommerce",
      icon: ShoppingBag,
      title: isFr ? "Boutiques en ligne" : "Online Stores",
      description: isFr
        ? "Une boutique adaptée à votre taille, avec un parcours d'achat lisible et des produits bien présentés. Pas besoin de Shopify pour 20 produits."
        : "A store tailored to your size, with a clear checkout flow and well-presented products. You don't need Shopify for 20 items."
    }
  ];

  return (
    <section className="py-20 md:py-28 section-gradient-main">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {isFr ? "Services complémentaires." : "Additional services."}
          </h2>
          <p className="text-lg text-foreground-medium max-w-2xl mx-auto">
            {isFr ? "Pour aller plus loin, selon vos besoins." : "To go further, based on your needs."}
          </p>
        </div>

        <div className="group mb-10 md:mb-14 rounded-2xl bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(195,182,143,0.25)] hover:scale-[1.01]">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center section-white">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {isFr ? "Identité visuelle" : "Brand Identity"}
              </h3>
              <p className="text-foreground-medium mb-6 leading-relaxed">
                {isFr
                  ? "On crée ou on fait évoluer votre identité pour qu'elle soit claire, reconnaissable et cohérente partout - site, réseaux, supports print. Pas de logo fait sur Canva."
                  : "We create or refine your brand identity so it's clear, recognisable, and consistent everywhere — website, social media, and print. No Canva logos."}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3B68F] mt-2 flex-shrink-0" />
                  <span className="text-foreground-medium">{isFr ? "Logo, palette de couleurs et typographies adaptés à votre univers." : "Logo, colour palette, and fonts tailored to your world."}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3B68F] mt-2 flex-shrink-0" />
                  <span className="text-foreground-medium">{isFr ? "Charte graphique et règles d'usage pour garder la même image partout." : "Brand guidelines and usage rules for a consistent image everywhere."}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3B68F] mt-2 flex-shrink-0" />
                  <span className="text-foreground-medium">{isFr ? "Déclinaisons pour votre site, vos réseaux sociaux et vos supports imprimés." : "Variations for your website, social media, and printed materials."}</span>
                </li>
              </ul>
              <a href="/identite-visuelle" className="inline-flex items-center gap-2 text-[#C3B68F] font-medium group/link hover:gap-3 transition-all duration-300">
                {isFr ? "En savoir plus sur l'identité visuelle" : "Learn more about brand identity"}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
            <div className="relative h-64 md:h-auto section-white">
              <img src={identityMockup} alt={isFr ? "Moodboard identité visuelle" : "Brand identity moodboard"} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {secondaryServices.map(service => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="group rounded-xl backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:shadow-[0_0_25px_rgba(195,182,143,0.2)] hover:scale-[1.02] section-gradient-main">
                <div className="mb-5">
                  <Icon className="w-8 h-8 text-[#C3B68F]" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h4>
                <p className="text-foreground-medium text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import webMockup from "@/assets/services/web-creation-mockup.png";
import { LogosSection } from "@/components/home/LogosSection";
import { useLanguage } from "@/hooks/use-language";

export const WebCreationContent = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="relative">
              <img src={webMockup} alt={isFr ? "Mockup d'un site web créatif et personnalisé" : "Creative custom website mockup"} className="w-full h-auto rounded-2xl shadow-2xl" />
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl -z-10 blur-2xl" />
            </div>
          </div>
          <div className="order-2 lg:order-2 space-y-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight text-foreground">
              {isFr ? "Un beau site qui ne vend pas, c'est juste une jolie vitrine vide." : "A beautiful website that doesn't sell is just a pretty empty window."}
            </h2>
            <div className="space-y-5 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                {isFr
                  ? <>Vos prospects arrivent sur votre site. En 3 secondes, ils décident de rester ou de partir. Ce qui fait la différence ? Pas les animations ou les effets - mais une structure qui dit clairement <strong className="text-foreground"> qui vous êtes, ce que vous proposez, et pourquoi vous faire confiance</strong>.</>
                  : <>Your prospects land on your website. In 3 seconds, they decide to stay or leave. What makes the difference? Not animations or effects — but a structure that clearly says <strong className="text-foreground"> who you are, what you offer, and why they should trust you</strong>.</>}
              </p>
              <p>
                {isFr
                  ? "Nous partons de votre activité, de vos vrais objectifs, et nous construisons un site où chaque page a un rôle précis : rassurer, guider, convaincre. Le design est au service du parcours, pas l'inverse. Résultat : vos visiteurs comprennent votre offre et passent à l'action - prise de contact, demande de devis, achat."
                  : "We start from your business, your real goals, and build a site where every page has a specific role: reassure, guide, convince. Design serves the journey, not the other way around. The result: visitors understand your offer and take action — contact, quote request, or purchase."}
              </p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-3 transition-all duration-300 group mt-4">
              {isFr ? "Parler de votre projet" : "Discuss your project"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      <LogosSection />
    </section>
  );
};

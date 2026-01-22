import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Palette, Instagram, ArrowRight, Zap, BookOpen, ShoppingBag, Settings } from "lucide-react";
const mainServices = [{
  icon: Globe,
  title: "Création de Sites Web",
  description: "Un outil puissant qui travaille pour vous, 24h/24 et 7j/7.",
  features: ["Des sites vitrine professionnels pour présenter votre expertise.", "Des pages de vente optimisées pour convertir vos visiteurs.", "De petites boutiques en ligne simples pour démarrer la vente."]
}, {
  icon: Palette,
  title: "Identité de Marque Complète",
  description: "Une image cohérente qui inspire confiance et vous rend reconnaissable.",
  features: ["Positionnement de marque clair et distinctif.", "Création de logo simple et mémorable.", "Palette de couleurs et typographies harmonieuses.", "Directives d'utilisation pour tous vos supports."]
}, {
  icon: Instagram,
  title: "Stratégie Médias Sociaux",
  description: "Engagez votre audience avec un contenu clair et attrayant, sans stress.",
  features: ["Création ou refonte de vos comptes Instagram & TikTok.", "Définition de votre style visuel et thématiques de contenu.", "Templates personnalisés pour vos posts et vidéos.", "Accompagnement continu ou gestion partielle optionnelle."]
}];
const additionalServices = [{
  icon: Zap,
  title: "Tunnels de Vente Simples",
  description: "Pour guider vos prospects vers l'achat."
}, {
  icon: BookOpen,
  title: "Mise en place et support Blog",
  description: "Pour établir votre autorité et attirer du trafic organique."
}, {
  icon: ShoppingBag,
  title: "Boutiques en ligne avancées",
  description: "Pour des besoins e-commerce spécifiques."
}, {
  icon: Settings,
  title: "Systèmes de vente complets",
  description: "Écosystèmes numériques pour une automatisation légère."
}];
const Services = () => {
  return <Layout>
      {/* Hero */}
      

      {/* Main Services */}
      

      {/* Additional Services */}
      <section className="section-padding border-t border-border/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-display-md mb-4">
              Services <span className="text-gradient-gold">Complémentaires</span>
            </h2>
            <p className="text-body-md text-muted-foreground max-w-2xl mx-auto">
              Ces outils sont proposés uniquement si une discussion approfondie révèle leur réelle pertinence pour votre activité. Nous ne faisons pas d'ajouts superflus.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {additionalServices.map((service, index) => <div key={index} className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-display-sm mb-2">{service.title}</h3>
                <p className="text-body-sm text-muted-foreground">{service.description}</p>
              </div>)}
          </div>

          <div className="text-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Discutons de vos besoins
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Services;
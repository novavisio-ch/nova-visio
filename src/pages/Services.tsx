import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, BookOpen, ShoppingBag, Settings } from "lucide-react";
import { WebCreationHero } from "@/components/services/WebCreationHero";
import { WebCreationContent } from "@/components/services/WebCreationContent";
import { ShowcaseSection } from "@/components/services/ShowcaseSection";
import { ServicesOverviewSection } from "@/components/services/ServicesOverviewSection";
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
      {/* Hero Section */}
      <WebCreationHero />

      {/* Content Section - White background (includes LogosSection) */}
      <WebCreationContent />

      {/* Showcase Carousel */}
      <ShowcaseSection />

      {/* Services Overview - Split layout */}
      <ServicesOverviewSection />

      {/* Additional Services */}
      
    </Layout>;
};
export default Services;
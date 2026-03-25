import { Layout } from "@/components/layout/Layout";
import { WebCreationHero } from "@/components/services/WebCreationHero";
import { WebCreationContent } from "@/components/services/WebCreationContent";
import { ShowcaseSection } from "@/components/services/ShowcaseSection";
import { ServicesOverviewSection } from "@/components/services/ServicesOverviewSection";
import { WebOfferSection } from "@/components/services/WebOfferSection";
import { PacksPromoSection } from "@/components/services/PacksPromoSection";
import { WebStepsSection } from "@/components/services/WebStepsSection";
import { FaqSection } from "@/components/services/FaqSection";
import { FinalCtaSection } from "@/components/services/FinalCtaSection";
import { MaintenanceBlock } from "@/components/services/MaintenanceBlock";

const SiteWeb = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <WebCreationHero />

      {/* Content Section - White background (includes LogosSection) */}
      <WebCreationContent />

      {/* Showcase Carousel */}
      <ShowcaseSection />

      {/* Services Overview - Split layout */}
      <ServicesOverviewSection />

      {/* Web Offer Section */}
      <WebOfferSection />

      {/* Packs Promo Section */}
      <PacksPromoSection />

      {/* Web Steps / Timeline */}
      <WebStepsSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Maintenance Block */}
      <MaintenanceBlock
        text="Votre site est livré - mais votre présence en ligne ne s'arrête pas là. Mises à jour, modifs de contenu, suivi des performances : notre suivi mensuel à 89 CHF/mois prend le relais pour que votre site reste un outil qui bosse pour vous."
      />

      {/* Final CTA Section */}
      <FinalCtaSection />
    </Layout>
  );
};

export default SiteWeb;

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

      {/* Final CTA Section */}
      <FinalCtaSection />
    </Layout>
  );
};

export default SiteWeb;

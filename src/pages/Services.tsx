import { Layout } from "@/components/layout/Layout";
import { WebCreationHero } from "@/components/services/WebCreationHero";
import { WebCreationContent } from "@/components/services/WebCreationContent";
import { ShowcaseSection } from "@/components/services/ShowcaseSection";
import { ServicesOverviewSection } from "@/components/services/ServicesOverviewSection";
import { ComplementaryServicesSection } from "@/components/services/ComplementaryServicesSection";
import { FaqSection } from "@/components/services/FaqSection";
import { FinalCtaSection } from "@/components/services/FinalCtaSection";

const Services = () => {
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

      {/* Complementary Services */}
      <ComplementaryServicesSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Final CTA Section */}
      <FinalCtaSection />
    </Layout>
  );
};

export default Services;
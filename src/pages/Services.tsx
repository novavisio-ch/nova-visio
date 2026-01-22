import { Layout } from "@/components/layout/Layout";
import { WebCreationHero } from "@/components/services/WebCreationHero";
import { WebCreationContent } from "@/components/services/WebCreationContent";
import { ShowcaseSection } from "@/components/services/ShowcaseSection";
import { ServicesOverviewSection } from "@/components/services/ServicesOverviewSection";
import { ComplementaryServicesSection } from "@/components/services/ComplementaryServicesSection";
const Services = () => {
  return (
    <Layout>
      <div
        className="min-h-screen"
        style={{ background: "linear-gradient(135deg, #030827 0%, #2D284D 100%)" }}
      >
        {/* Hero Section - transparent, on gradient */}
        <WebCreationHero />

        {/* Content Section - White card */}
        <div className="container px-4 md:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <WebCreationContent />
          </div>
        </div>

        {/* Showcase Carousel - White card */}
        <div className="container px-4 md:px-8 mt-8 md:mt-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <ShowcaseSection />
          </div>
        </div>

        {/* Services Overview - White card */}
        <div className="container px-4 md:px-8 mt-8 md:mt-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <ServicesOverviewSection />
          </div>
        </div>

        {/* Complementary Services - transparent, on gradient */}
        <ComplementaryServicesSection />
      </div>
    </Layout>
  );
};
export default Services;
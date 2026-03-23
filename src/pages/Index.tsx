import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { LogosSection } from "@/components/home/LogosSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { MaintenanceSection } from "@/components/home/MaintenanceSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { StepsSection } from "@/components/home/StepsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { BlogSection } from "@/components/home/BlogSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <LogosSection />
      <ServicesSection />
      <MaintenanceSection />
      <BenefitsSection />
      <WhyUsSection />
      <StepsSection />
      <CtaSection />
      <BlogSection />
    </Layout>
  );
};

export default Index;

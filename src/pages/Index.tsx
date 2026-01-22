import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { StepsSection } from "@/components/home/StepsSection";
import { CtaSection } from "@/components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <WhyUsSection />
      <StepsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;

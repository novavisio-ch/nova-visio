import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WebServiceCard } from "@/components/home/WebServiceCard";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { StepsSection } from "@/components/home/StepsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WebServiceCard />
      <BenefitsSection />
      <WhyUsSection />
      <StepsSection />
    </Layout>
  );
};

export default Index;

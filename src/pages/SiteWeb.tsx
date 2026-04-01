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
import { ReferralCtaSection } from "@/components/home/ReferralCtaSection";
import { useLanguage } from "@/hooks/use-language";

const SiteWeb = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <Layout>
      <WebCreationHero />
      <WebCreationContent />
      <ShowcaseSection />
      <ServicesOverviewSection />
      <WebOfferSection />
      <PacksPromoSection />
      <WebStepsSection />
      <FaqSection />
      <MaintenanceBlock
        text={isFr
          ? "Votre site est livré - mais votre présence en ligne ne s'arrête pas là. Mises à jour, modifs de contenu, suivi des performances : notre suivi mensuel à 89 CHF/mois prend le relais pour que votre site reste un outil qui bosse pour vous."
          : "Your website is delivered — but your online presence doesn't stop there. Updates, content changes, performance monitoring: our monthly plan at CHF 89/month takes over so your site keeps working for you."}
      />
      <FinalCtaSection />
      <ReferralCtaSection />
    </Layout>
  );
};

export default SiteWeb;

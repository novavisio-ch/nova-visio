import { Layout } from "@/components/layout/Layout";
import { BrandIdentityHero } from "@/components/services/brand/BrandIdentityHero";
import { BrandIdentityContent } from "@/components/services/brand/BrandIdentityContent";
import { BrandBenefitsSection } from "@/components/services/brand/BrandBenefitsSection";
import { BrandOfferSection } from "@/components/services/brand/BrandOfferSection";
import { BrandOfferDetailsSection } from "@/components/services/brand/BrandOfferDetailsSection";
import { PacksPromoSection } from "@/components/services/PacksPromoSection";
import { BrandStepsSection } from "@/components/services/brand/BrandStepsSection";
import { BrandComplementarySection } from "@/components/services/brand/BrandComplementarySection";
import { BrandFaqSection } from "@/components/services/brand/BrandFaqSection";
import { BrandFinalCtaSection } from "@/components/services/brand/BrandFinalCtaSection";
import { MaintenanceBlock } from "@/components/services/MaintenanceBlock";
import { ReferralCtaSection } from "@/components/home/ReferralCtaSection";
import { useLanguage } from "@/hooks/use-language";

const IdentiteVisuelle = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <Layout>
      <BrandIdentityHero />
      <BrandIdentityContent />
      <BrandBenefitsSection />
      <BrandOfferSection />
      <BrandOfferDetailsSection />
      <PacksPromoSection />
      <BrandStepsSection />
      <BrandComplementarySection />
      <BrandFaqSection />
      <MaintenanceBlock
        text={isFr
          ? "Votre identité est livrée - maintenant il faut la déployer partout sans se perdre. Notre suivi mensuel à 89 CHF/mois veille sur votre présence en ligne pendant que vous vous concentrez sur votre métier."
          : "Your brand identity is delivered — now it needs to be deployed everywhere without losing consistency. Our monthly plan at CHF 89/month keeps an eye on your online presence while you focus on your business."}
      />
      <BrandFinalCtaSection />
      <ReferralCtaSection />
    </Layout>
  );
};

export default IdentiteVisuelle;

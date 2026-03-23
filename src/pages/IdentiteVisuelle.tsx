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

const IdentiteVisuelle = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <BrandIdentityHero />

      {/* Content Section - Why custom identity */}
      <BrandIdentityContent />

      {/* Benefits Section */}
      <BrandBenefitsSection />

      {/* Offer Section - What's included */}
      <BrandOfferSection />

      {/* Offer Details Section - Full breakdown */}
      <BrandOfferDetailsSection />

      {/* Packs Promo Section */}
      <PacksPromoSection />

      {/* Steps / Timeline */}
      <BrandStepsSection />

      {/* Complementary Services */}
      <BrandComplementarySection />

      {/* FAQ Section */}
      <BrandFaqSection />

      {/* Maintenance Block */}
      <MaintenanceBlock
        text="Votre identité est livrée - maintenant déployez-la sans vous perdre dans les détails techniques. Notre suivi mensuel à 89 CHF/mois veille sur votre présence en ligne et vous libère pour vous concentrer sur votre métier."
      />

      {/* Final CTA Section */}
      <BrandFinalCtaSection />
    </Layout>
  );
};

export default IdentiteVisuelle;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 lg:py-28 relative overflow-hidden px-4">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-display-lg lg:text-display-xl mb-4 md:mb-6 leading-tight">
            {t("cta.title.1")}
            <br className="md:hidden" />
            <span className="hidden md:inline">{" "}</span>
            <span className="text-gradient-gold">{t("cta.title.highlight")}</span>
          </h2>

          <p className="text-body text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 text-muted-foreground max-w-xl mx-auto text-center">
            {t("cta.subtitle.1")} <strong className="text-foreground font-medium">{t("cta.subtitle.bold1")}</strong>.{" "}
            <br className="md:hidden" />
            {t("cta.subtitle.2")} <strong className="text-foreground font-medium">{t("cta.subtitle.bold2")}</strong> {t("cta.subtitle.3")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-4">
            <Button asChild variant="gold" size="lg" className="w-full sm:w-auto">
              <Link to="/contact?sujet=appel-decouverte">
                {t("cta.primary")}
              </Link>
            </Button>
            <Button asChild variant="gold-outline" size="lg" className="w-full sm:w-auto">
              <Link to="/tarifs">{t("cta.secondary")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

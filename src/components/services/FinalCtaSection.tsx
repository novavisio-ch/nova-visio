import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export const FinalCtaSection = () => {
  const { t, language } = useLanguage();
  const isFr = language === "fr";
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 section-gradient-main">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 md:mb-6 font-display text-3xl sm:text-4xl md:text-display-lg lg:text-display-xl font-bold leading-tight text-foreground">
            {t("finalcta.web.title.1")}<br className="md:hidden" /><span className="hidden md:inline">{" "}</span><span className="text-gradient-gold">{t("finalcta.web.title.highlight")}</span>
          </h2>
          <p className="mx-auto mb-8 md:mb-10 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
            <strong className="text-foreground font-medium">{t("finalcta.web.subtitle.bold1")}</strong> {t("finalcta.web.subtitle.1")}{" "}<br className="md:hidden" />
            {t("finalcta.web.subtitle.2")} <strong className="text-foreground font-medium">{t("finalcta.web.subtitle.bold2")}</strong>.
          </p>
          <Button asChild size="lg" className="group rounded-lg px-8 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl md:text-lg btn-gradient-gold">
            <Link to="/contact">{t("finalcta.web.cta")}<ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function HeroSection() {
  const { t } = useLanguage();

  return <section className="py-16 md:py-20 lg:py-28 relative overflow-hidden px-4">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-card mb-6 md:mb-8 animate-fade-up">
            <span className="text-xs md:text-body-sm text-primary">✦</span>
            <span className="text-xs md:text-body-sm text-muted-foreground">{t("hero.badge")}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-display-lg lg:text-display-xl mb-4 md:mb-6 animate-fade-up leading-tight" style={{ animationDelay: "0.1s" }}>
             {t("hero.title.line1")}
             <br className="md:hidden" />
             <span className="hidden md:inline">{" "}</span>
             <span className="text-gradient-gold">{t("hero.title.highlight")}</span>
          </h1>

          <p className="max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-up font-sans text-sm sm:text-base md:text-xl lg:text-2xl font-light text-foreground-strong leading-relaxed" style={{ animationDelay: "0.2s" }}>
            {t("hero.subtitle")}{" "}
            <br className="md:hidden" />
            {t("hero.subtitle2")}{" "}
            <br className="md:hidden" />
            {t("hero.subtitle3")} <strong className="font-semibold">{t("hero.subtitle.price")}</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="gold" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/contact">
                {t("hero.cta.primary")}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
              </Link>
            </Button>
            <Button variant="gold-outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/site-web">{t("hero.cta.secondary")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
}

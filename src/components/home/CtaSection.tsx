import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28 relative overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-display-lg lg:text-display-xl mb-4 md:mb-6 leading-tight">
            Vous avez un projet ?{" "}
            <span className="text-gradient-gold">Parlons-en 15 minutes.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-body text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 text-muted-foreground max-w-xl mx-auto text-center">
            Un appel gratuit, sans engagement. On fait le point sur votre situation
            et on vous dit honnêtement si on peut vous aider - ou pas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-4">
            <Button asChild variant="gold" size="lg" className="w-full sm:w-auto">
              <Link to="/contact?sujet=appel-decouverte">
                Réserver un appel gratuit →
              </Link>
            </Button>
            <Button asChild variant="gold-outline" size="lg" className="w-full sm:w-auto">
              <Link to="/tarifs">Voir nos tarifs →</Link>
            </Button>
          </div>

          {/* Phone number */}
          <p className="text-xs sm:text-sm text-muted-foreground">
            📞 Ou appelez-nous directement : +41 XX XXX XX XX
          </p>
        </div>
      </div>
    </section>
  );
}

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
          <h2 className="text-3xl sm:text-4xl md:text-display-lg lg:text-display-xl mb-4 md:mb-6 leading-tight">
            15 minutes.
            <br className="md:hidden" />
            <span className="hidden md:inline">{" "}</span>
            <span className="text-gradient-gold">Sans engagement.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-body text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 text-muted-foreground max-w-xl mx-auto text-center">
            On fait le point sur <strong className="text-foreground font-medium">votre situation</strong>.{" "}
            <br className="md:hidden" />
            On vous dit <strong className="text-foreground font-medium">franchement</strong> si on peut vous aider.
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

        </div>
      </div>
    </section>
  );
}

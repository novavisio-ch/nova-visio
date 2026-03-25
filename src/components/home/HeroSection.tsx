import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export function HeroSection() {
  return <section className="py-16 md:py-20 lg:py-28 relative overflow-hidden px-4">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-card mb-6 md:mb-8 animate-fade-up">
            <span className="text-xs md:text-body-sm text-primary">✦</span>
            <span className="text-xs md:text-body-sm text-muted-foreground">Made in Switzerland · Pour artisans, indépendants & petites entreprises</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-display-lg lg:text-display-xl mb-4 md:mb-6 animate-fade-up leading-tight" style={{
          animationDelay: "0.1s"
        }}>
            Nous créons votre site et votre identité visuelle pour{" "}
            <span className="text-gradient-gold">rendre vos ventes plus faciles</span>.
          </h1>

          <p className="max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-up font-sans text-sm sm:text-base md:text-xl lg:text-2xl font-light text-foreground-strong leading-relaxed" style={{
          animationDelay: "0.2s"
        }}>
            Vous êtes artisan, indépendant ou gérez une petite entreprise ?
            Nova Visio crée votre site vitrine et votre identité visuelle
            pour que vos clients vous trouvent, vous fassent confiance
            et vous contactent - dès 1'500 CHF.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button variant="gold" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/contact">
                Parler de votre projet
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
              </Link>
            </Button>
            <Button variant="gold-outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
}
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
export function HeroSection() {
  return <section className="py-16 md:py-20 lg:py-28 relative overflow-hidden px-4">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-card mb-6 md:mb-8 animate-fade-up">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-body-sm text-muted-foreground">Made in Switzerland</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-display-lg lg:text-display-xl mb-4 md:mb-6 animate-fade-up leading-tight" style={{
          animationDelay: "0.1s"
        }}>
            Nous créons votre site et votre image de marque pour vous aider à{" "}
            <span className="text-gradient-gold">vendre plus simplement</span>.
          </h1>

          <p className="max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-up font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/90 leading-relaxed" style={{
          animationDelay: "0.2s"
        }}>
            Simplifiez votre présence en ligne avec NOVA VISIO : un site web clair et une identité visuelle
            professionnelle cohérente pour que vos clients vous comprennent et achètent sans effort.
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
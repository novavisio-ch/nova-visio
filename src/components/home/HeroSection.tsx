import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
export function HeroSection() {
  return <section className="section-padding relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-body-sm text-muted-foreground">Made in Switzerland</span>
          </div>

          <h1 className="text-display-lg md:text-display-xl mb-6 animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>
            Nous créons votre site et votre image de marque pour vous aider à{" "}
            <span className="text-gradient-gold">vendre plus simplement</span>.
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up text-display-sm font-sans font-normal" style={{
          animationDelay: "0.2s"
        }}>
            Simplifiez votre présence en ligne avec NOVA VISIO : un site web clair et une identité visuelle
            professionnelle cohérente pour que vos clients vous comprennent et achètent sans effort.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Parler de votre projet
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
}
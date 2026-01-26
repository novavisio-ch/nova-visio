import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import illustratorIcon from "@/assets/icons/illustrator.svg";
import photoshopIcon from "@/assets/icons/photoshop.svg";

const bulletPoints = [
  "Un logo clair et mémorable, adapté à tous vos supports.",
  "Une palette de couleurs cohérente avec votre positionnement.",
  "Des règles d'usage simples pour une image constante.",
];

export function BrandIdentityHero() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sur-titre / Label with tool badges */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 mb-6 animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full glass-card">
              <span className="text-xs text-primary">
                Logo & identité visuelle sur mesure
              </span>
            </div>
            
            {/* Adobe Illustrator Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#FF7C00]/10 border border-[#FF7C00]/30">
              <img src={illustratorIcon} alt="Adobe Illustrator" className="w-4 h-4" />
              <span className="text-xs font-medium text-[#FF7C00]">Illustrator</span>
            </div>
            
            {/* Adobe Photoshop Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#31A8FF]/10 border border-[#31A8FF]/30">
              <img src={photoshopIcon} alt="Adobe Photoshop" className="w-4 h-4" />
              <span className="text-xs font-medium text-[#31A8FF]">Photoshop</span>
            </div>
          </div>

          {/* Main Title */}
          <h1
            className="text-display-lg md:text-display-xl mb-8 animate-fade-up leading-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Une identité visuelle claire pour{" "}
            <span className="text-gradient-gold">rendre votre marque mémorable.</span>
          </h1>

          {/* Intro Paragraph */}
          <p
            className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up leading-relaxed"
            style={{ animationDelay: "0.15s" }}
          >
            Nous créons des identités visuelles sur mesure : logo, couleurs, typographies et règles d'usage,
            pour que votre marque soit cohérente sur votre site, vos réseaux sociaux et vos supports.
          </p>

          {/* Bullet Points */}
          <ul
            className="space-y-3 mb-10 animate-fade-up inline-block text-left"
            style={{ animationDelay: "0.2s" }}
          >
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-body-md text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Parler de votre identité visuelle
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

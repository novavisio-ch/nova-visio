import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Code } from "lucide-react";
import figmaIcon from "@/assets/icons/figma.png";
import webflowIcon from "@/assets/icons/webflow.png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const bulletPoints = [
  "Architecture claire de vos pages et de vos offres.",
  "Contenus structurés pour rassurer et guider vos visiteurs.",
  "Un site modifiable par vous, sans jargon technique.",
];

export function WebCreationHero() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8 animate-fade-up">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Accueil
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-muted-foreground/50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-foreground">Site web</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Sur-titre / Labels */}
          <div 
            className="flex flex-wrap items-center gap-3 mb-6 animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card">
              <span className="text-body-sm text-primary">
                Création de sites web & landing pages
              </span>
            </div>
            <div className="inline-flex items-center px-3 py-2 rounded-full glass-card gap-2">
              <img src={webflowIcon} alt="Webflow" className="w-5 h-5" />
              <span className="text-body-sm text-muted-foreground">Webflow</span>
            </div>
            <div className="inline-flex items-center px-3 py-2 rounded-full glass-card gap-2">
              <img src={figmaIcon} alt="Figma" className="w-5 h-5" />
              <span className="text-body-sm text-muted-foreground">Figma</span>
            </div>
            <div className="inline-flex items-center px-3 py-2 rounded-full glass-card gap-2">
              <Code className="w-5 h-5 text-primary" />
              <span className="text-body-sm text-muted-foreground">Code</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 
            className="text-display-lg md:text-display-xl mb-8 animate-fade-up leading-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Votre site web{" "}
            <span className="text-gradient-gold">au service de vos objectifs.</span>
          </h1>

          {/* Intro Paragraph */}
          <p 
            className="text-body-lg text-muted-foreground max-w-3xl mb-8 animate-fade-up leading-relaxed"
            style={{ animationDelay: "0.15s" }}
          >
            NOVA VISIO conçoit des sites vitrines et des landing pages pensés pour clarifier votre offre, 
            renforcer votre crédibilité et rendre la décision simple pour vos prospects. 
            Pas de surenchère d'effets : un design sobre, lisible et orienté résultats.
          </p>

          {/* Bullet Points */}
          <ul 
            className="space-y-4 mb-10 animate-fade-up"
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
                Discutons de votre projet
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

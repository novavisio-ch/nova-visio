import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const BrandFinalCtaSection = () => {
  return (
    <section
      className="py-16 md:py-24 lg:py-32 px-4"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1f1a3d 100%)",
      }}
    >
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          {/* Title */}
          <h2 className="mb-4 md:mb-6 font-display text-2xl sm:text-3xl md:text-display-lg lg:text-display-xl font-bold leading-tight text-white">
            Prêt à clarifier{" "}
            <span className="text-gradient-gold">
              l'image de votre marque ?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mb-8 md:mb-10 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
            Une identité visuelle claire et cohérente peut transformer la perception de votre activité.
            Discutons de votre projet pour créer une image qui vous ressemble.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="group rounded-lg px-8 py-6 text-base font-semibold text-[#2D284D] shadow-lg transition-all duration-300 hover:shadow-xl md:text-lg"
            style={{
              background: "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)",
            }}
          >
            <Link to="/contact">
              Discuter de votre identité visuelle
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

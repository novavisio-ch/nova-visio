import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCtaSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 section-gradient-main">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 md:mb-6 font-display text-2xl sm:text-3xl md:text-display-lg lg:text-display-xl font-bold leading-tight text-foreground">
            Faites de votre présence en ligne un{" "}
            <span className="text-gradient-gold">
              catalyseur de croissance.
            </span>
          </h2>

          <p className="mx-auto mb-8 md:mb-10 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
            Un site clair, une identité forte et des parcours bien pensés
            peuvent transformer votre activité. Le rôle de NOVA VISIO : vous
            aider à aligner tout cela, sans complexifier votre quotidien.
          </p>

          <Button
            asChild
            size="lg"
            className="group rounded-lg px-8 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl md:text-lg btn-gradient-gold"
          >
            <Link to="/contact">
              Devenir votre catalyseur
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

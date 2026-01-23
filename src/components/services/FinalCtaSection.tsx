import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCtaSection = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{
        background: "linear-gradient(135deg, #030827 0%, #2D284D 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Title */}
          <h2 className="mb-6 font-bricolage text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Faites de votre présence en ligne un catalyseur de croissance.
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            Un site clair, une identité forte et des parcours bien pensés
            peuvent transformer votre activité. Le rôle de NOVA VISIO : vous
            aider à aligner tout cela, sans complexifier votre quotidien.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="group rounded-lg bg-white px-8 py-6 text-base font-semibold text-[#2D284D] shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl md:text-lg"
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

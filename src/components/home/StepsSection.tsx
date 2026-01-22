import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const steps = [{
  number: "01",
  title: "Vous nous exposez votre projet",
  description: "Partagez vos défis et vos objectifs lors d'un premier échange."
}, {
  number: "02",
  title: "Diagnostic personnalisé",
  description: "Nous analysons votre situation et identifions les solutions adaptées."
}, {
  number: "03",
  title: "Plan d'action clair",
  description: "Une feuille de route détaillée avec des objectifs précis."
}, {
  number: "04",
  title: "Création ensemble",
  description: "Nous créons ou améliorons votre site, marque et réseaux sociaux."
}];
export function StepsSection() {
  return <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-display-md mb-4">
            Les prochaines <span className="text-gradient-gold">étapes</span>
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto text-white">
            Un processus simple et transparent pour transformer votre présence digitale.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => <div key={index} className="relative">
              {/* Connecting line */}
              {index < steps.length - 1 && <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />}
              
              <div className="text-center">
                <div className="text-display-lg text-gradient-gold mb-4">{step.number}</div>
                <h3 className="text-display-sm mb-3">{step.title}</h3>
                <p className="text-body-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>)}
        </div>

        <div className="text-center">
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Commencer maintenant
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>;
}
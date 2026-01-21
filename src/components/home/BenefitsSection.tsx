import { Check } from "lucide-react";
const benefits = ["Vos clients comprennent immédiatement ce que vous proposez.", "Vous bénéficiez d'une image professionnelle et cohérente partout.", "Vous vendez plus facilement, sans y passer tout votre temps.", "Votre charge mentale liée au digital diminue considérablement."];
export function BenefitsSection() {
  return <section className="section-padding">
      <div className="container">
        <div className="glass-card p-10 md:p-16 max-w-4xl mx-auto relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 blur-[80px] rounded-full" />
          
          <div className="relative">
            <h2 className="text-display-md mb-4">
              Vos bénéfices <span className="text-gradient-gold">concrets</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10">
              Ce que vous obtenez en travaillant avec nous.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-4">
                  
                  <p className="text-body-md text-foreground/90">{benefit}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}
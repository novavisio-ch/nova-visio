import benefitIcon from "@/assets/benefit-icon.svg";
const benefits = ["Vos clients comprennent immédiatement ce que vous proposez.", "Vous bénéficiez d'une image professionnelle et cohérente partout.", "Vous vendez plus facilement, sans y passer tout votre temps.", "Votre charge mentale liée au digital diminue considérablement."];
export function BenefitsSection() {
  return <section className="section-padding bg-white">
      <div className="container">
        <div className="glass-card p-10 md:p-16 max-w-4xl mx-auto relative overflow-hidden border-0 border-none bg-white">
          {/* Decorative gradient */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 blur-[80px] rounded-full" />
          
          <div className="relative">
            <h2 className="text-display-md mb-4 text-primary-foreground">
              Vos bénéfices <span className="text-gradient-gold">concrets</span>
            </h2>
            <p className="text-body-lg mb-10 text-primary-foreground">
              Ce que vous obtenez en travaillant avec nous.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-4">
                  <img src={benefitIcon} alt="" className="w-8 h-8 flex-shrink-0 mt-0.5" />
                  <p className="text-body-md text-primary-foreground">{benefit}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    text: "Vos clients comprennent ",
    highlight: "en quelques secondes",
    rest: " ce que vous faites et comment travailler avec vous."
  },
  {
    text: "Vous bénéficiez d'une ",
    highlight: "image professionnelle, cohérente et alignée",
    rest: " sur toutes vos plateformes."
  },
  {
    text: "Vous ",
    highlight: "vendez plus facilement",
    rest: ", sans devoir passer tout votre temps à \"gérer le digital\"."
  },
  {
    text: "Votre ",
    highlight: "charge mentale liée au digital diminue",
    rest: ", vous pouvez vous concentrer sur votre cœur de métier."
  }
];
export function BenefitsSection() {
  return <section className="bg-white py-16 md:py-20 lg:py-28 px-4">
      <div className="container max-w-6xl">
        <div className="text-left">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-display-lg lg:text-display-xl font-bold mb-4 md:mb-6 text-center leading-tight">
            <span className="text-slate-900">Vos </span>
            <span className="text-accent">bénéfices</span>
            
          </h2>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 md:mb-12 lg:mb-16 max-w-3xl leading-relaxed text-center mx-auto font-bold">
            Ce que vous gagnez en clarifiant votre image
            <br className="hidden sm:block" />
            et votre présence en ligne avec NOVA VISIO.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 mt-0.5 md:mt-1">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-accent" strokeWidth={2} />
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-800 leading-relaxed">
                  {benefit.text}<span className="font-bold text-slate-900">{benefit.highlight}</span>{benefit.rest}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}
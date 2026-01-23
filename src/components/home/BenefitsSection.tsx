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
  return <section className="bg-white py-20 md:py-28">
      <div className="container max-w-6xl">
        <div className="text-left">
          {/* Title */}
          <h2 className="text-display-lg md:text-display-xl font-bold mb-6 text-center">
            <span className="text-slate-900">Vos </span>
            <span className="text-accent">bénéfices</span>
            
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-12 md:mb-16 max-w-3xl leading-relaxed text-center mx-auto font-bold">
            Ce que vous gagnez en clarifiant votre image<br />
            et votre présence en ligne avec NOVA VISIO.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-7 h-7 text-accent" strokeWidth={2} />
                </div>
                <p className="text-lg md:text-xl text-slate-800 leading-relaxed">
                  {benefit.text}<span className="font-bold text-slate-900">{benefit.highlight}</span>{benefit.rest}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}
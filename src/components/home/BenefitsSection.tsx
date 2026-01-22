import { CheckCircle } from "lucide-react";

const benefits = [
  "Vos clients comprennent en quelques secondes ce que vous faites et comment travailler avec vous.",
  "Vous bénéficiez d'une image professionnelle, cohérente et alignée sur toutes vos plateformes.",
  "Vous vendez plus facilement, sans devoir passer tout votre temps à \"gérer le digital\".",
  "Votre charge mentale liée au digital diminue, vous pouvez vous concentrer sur votre cœur de métier."
];

export function BenefitsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container max-w-6xl">
        <div className="text-left">
          {/* Title */}
          <h2 className="text-display-lg md:text-display-xl font-bold mb-6 text-center">
            <span className="text-slate-900">Vos </span>
            <span className="text-accent">bénéfices</span>
            <span className="text-slate-900"> concrets</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-12 md:mb-16 max-w-3xl leading-relaxed text-center mx-auto font-bold">
            Ce que vous gagnez en clarifiant votre image<br />
            et votre présence en ligne avec NOVA VISIO.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-7 h-7 text-accent" strokeWidth={2} />
                </div>
                <p className="text-lg md:text-xl text-slate-800 leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

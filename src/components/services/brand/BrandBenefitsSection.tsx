import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Reconnaissance immédiate",
    description: "Vos clients vous reconnaissent en un coup d'œil, quel que soit le support.",
  },
  {
    title: "Image professionnelle",
    description: "Votre image inspire plus de confiance et de professionnalisme.",
  },
  {
    title: "Gain de temps",
    description: "Vos supports sont plus simples à créer, car les règles sont claires.",
  },
  {
    title: "Cohérence dans la durée",
    description: "Votre communication est cohérente (site, réseaux, documents).",
  },
];

export const BrandBenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-display-md text-gray-900 mb-4">
            Vos bénéfices avec une<br className="hidden md:block" />
            <span className="text-gradient-gold">identité visuelle claire</span>
          </h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Une identité visuelle professionnelle simplifie votre quotidien
            <br className="hidden md:block" />
            et renforce la perception de votre marque.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#C3B68F] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

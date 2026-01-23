import { Layout, FileText, Monitor } from "lucide-react";

const services = [
  {
    id: "social",
    icon: Layout,
    title: "Templates réseaux sociaux",
    description:
      "Posts, stories et bannières aux couleurs de votre marque, prêts à être personnalisés pour vos publications.",
  },
  {
    id: "presentation",
    icon: FileText,
    title: "Supports de présentation",
    description:
      "Slides et PDF professionnels pour vos présentations commerciales, propositions et documents clients.",
  },
  {
    id: "web",
    icon: Monitor,
    title: "Adaptation au site web",
    description:
      "Accompagnement pour intégrer votre nouvelle identité à votre site web existant ou en création.",
  },
];

export const BrandComplementarySection = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services complémentaires
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des extensions pour exploiter pleinement votre nouvelle identité visuelle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl border border-gray-100 p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-[#C3B68F]/30"
              >
                <div className="mb-5">
                  <Icon className="w-8 h-8 text-[#C3B68F]" />
                </div>
                <h4 className="font-display text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

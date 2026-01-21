import serviceSocialIcon from "@/assets/service-social-icon.svg";
import serviceWebIcon from "@/assets/service-web-icon.svg";
import serviceBrandIcon from "@/assets/service-brand-icon.svg";

const services = [
  {
    customIcon: serviceWebIcon,
    title: "Des sites web clairs",
    description:
      "Pour présenter votre activité, attirer des prospects et transformer vos visiteurs en clients, avec une interface professionnelle et facile à naviguer.",
  },
  {
    customIcon: serviceBrandIcon,
    title: "Une identité de marque professionnelle",
    description:
      "Pour un positionnement unique, un logo mémorable et une charte visuelle qui inspire confiance et que vous pourrez décliner partout.",
  },
  {
    customIcon: serviceSocialIcon,
    title: "Des réseaux sociaux cohérents",
    description:
      "Pour construire votre communauté sur Instagram et TikTok, avec un style visuel aligné à votre marque et des idées de contenu qui captivent votre audience.",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-display-md mb-4">
            Ce que nous <span className="text-gradient-gold">créons</span> pour vous
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Trois piliers essentiels pour une présence digitale qui inspire confiance et convertit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 group hover:glow-gold transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <img src={service.customIcon} alt="" className="w-7 h-7" />
              </div>
              <h3 className="text-display-sm mb-4">{service.title}</h3>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

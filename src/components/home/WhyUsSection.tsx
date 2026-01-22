import { MessageCircle, Users, Shield, Star } from "lucide-react";
const reasons = [{
  icon: MessageCircle,
  title: "Langage simple",
  description: "Sans jargon technique, nous vous expliquons tout clairement."
}, {
  icon: Users,
  title: "Accompagnement pas à pas",
  description: "Nous vous guidons à chaque étape de votre transformation digitale."
}, {
  icon: Shield,
  title: "Clarté et durabilité",
  description: "La priorité à la clarté et à la durabilité, pas aux solutions miracles."
}, {
  icon: Star,
  title: "Qualité maximale",
  description: "Un nombre limité de projets simultanés pour une attention totale."
}];
export function WhyUsSection() {
  return <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-display-lg">
            Pourquoi choisir <span className="text-gradient-gold">NOVA VISIO</span> ?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => <div key={index} className="group text-center p-6">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5">
                <reason.icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-125" />
              </div>
              <h3 className="text-display-sm mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-body-lg">
                {reason.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}
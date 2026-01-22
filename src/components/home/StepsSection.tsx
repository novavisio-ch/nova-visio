const steps = [
  {
    number: "01",
    title: "Clarification du projet",
    description:
      "Un premier échange approfondi pour comprendre votre activité, vos objectifs, votre positionnement et vos contraintes. Nous posons les bases du projet et identifions ce qui doit être clarifié avant toute création.",
  },
  {
    number: "02",
    title: "Diagnostic stratégique",
    description:
      "Nous analysons votre situation actuelle : image de marque, site existant, cohérence visuelle, messages et parcours utilisateur. Cette étape permet d'identifier les leviers pertinents et d'éliminer les éléments inutiles ou contre-productifs.",
  },
  {
    number: "03",
    title: "Fondations de marque & identité",
    description:
      "Nous définissons ou consolidons les fondations de votre marque : positionnement, identité visuelle, tonalité et structure des messages. L'objectif est de créer une base claire et cohérente avant la conception du site et des supports.",
  },
  {
    number: "04",
    title: "Conception web & parcours utilisateur",
    description:
      "Nous concevons un site web structuré, lisible et orienté crédibilité : architecture des pages, hiérarchie de l'information, expérience utilisateur et design. Chaque élément est pensé pour rassurer, clarifier et faciliter la décision.",
  },
  {
    number: "05",
    title: "Déploiement & accompagnement",
    description:
      "Nous finalisons la mise en ligne et vous accompagnons dans la prise en main : ajustements, évolutions et cohérence dans le temps. Le site et l'identité deviennent des outils durables, pas des supports figés.",
  },
];

export function StepsSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Notre méthode, <span className="text-gradient-gold">étape par étape</span>
          </h2>
          <p className="text-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Chaque projet suit un processus clair. L'objectif : réduire la complexité, 
            structurer vos idées et créer des supports durables.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line - visible on all screens */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10 transform md:-translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number circle - positioned on the line */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_30px_-5px_#C3B68F] group-hover:scale-110">
                    <span className="text-primary font-bold text-lg">{step.number}</span>
                  </div>
                </div>

                {/* Spacer for mobile layout */}
                <div className="w-12 md:hidden" />

                {/* Content card */}
                <div
                  className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  }`}
                >
                  <div className="glass-card p-6 md:p-8 transition-all duration-300 hover:border-primary/40 hover:glow-gold">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-body leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

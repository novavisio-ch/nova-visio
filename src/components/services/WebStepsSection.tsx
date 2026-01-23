const steps = [
  {
    number: "01",
    title: "Clarification du projet",
    description:
      "Nous échangeons pour comprendre votre activité, vos objectifs et les besoins de vos visiteurs.",
  },
  {
    number: "02",
    title: "Diagnostic",
    description:
      "Analyse de votre situation actuelle : site existant, concurrence, forces et points à améliorer.",
  },
  {
    number: "03",
    title: "Fondations",
    description:
      "Définition de l'architecture du site, des messages clés et de la structure des pages.",
  },
  {
    number: "04",
    title: "Conception web",
    description:
      "Création des maquettes, design sur mesure et développement de votre site.",
  },
  {
    number: "05",
    title: "Déploiement & accompagnement",
    description:
      "Mise en ligne, formation à l'utilisation et accompagnement pour les premiers ajustements.",
  },
];

export const WebStepsSection = () => {
  return (
    <section
      className="py-20 md:py-28"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1f1a3d 100%)",
      }}
    >
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display-md text-white mb-4">
            Notre méthode pour{" "}
            <span className="text-gradient-gold">votre site web</span>
          </h2>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
            Un processus clair et structuré, de la première discussion
            <br className="hidden md:block" />
            jusqu'à la mise en ligne de votre site.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#C3B68F]/30 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step content */}
                <div
                  className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div
                    className="group p-6 rounded-xl border border-[#C3B68F]/30 bg-[#0a0f2c]/50 backdrop-blur-sm transition-all duration-300 hover:border-[#C3B68F] hover:shadow-[0_0_30px_rgba(195,182,143,0.2)] hover:scale-[1.02]"
                  >
                    <h3 className="text-xl font-display font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step number circle */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#1f1a3d] border-2 border-[#C3B68F] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(195,182,143,0.4)]">
                    <span className="text-[#C3B68F] font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

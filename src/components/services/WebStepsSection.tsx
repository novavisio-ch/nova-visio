import { useEffect, useRef, useState } from "react";

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

const StepCard = ({
  step,
  index,
  isVisible,
}: {
  step: (typeof steps)[0];
  index: number;
  isVisible: boolean;
}) => {
  return (
    <div
      className={`
        relative flex items-center gap-6 md:gap-8
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Step number - floating pill */}
      <div
        className={`
          relative z-10 flex-shrink-0
          w-14 h-14 md:w-16 md:h-16
          rounded-2xl
          flex items-center justify-center
          font-display font-bold text-lg md:text-xl
          transition-all duration-500 ease-out
          bg-gradient-to-br from-[#C3B68F] to-[#A69B6B]
          text-[#1a1535]
          shadow-[0_8px_32px_rgba(195,182,143,0.3)]
          group-hover:shadow-[0_12px_40px_rgba(195,182,143,0.5)]
          group-hover:scale-110
        `}
      >
        {step.number}
      </div>

      {/* Connector line */}
      {index < steps.length - 1 && (
        <div
          className={`
            absolute left-7 md:left-8 top-16 md:top-[4.5rem] w-0.5 h-16 md:h-20
            bg-gradient-to-b from-[#C3B68F]/50 to-transparent
            transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}
          `}
          style={{ 
            transitionDelay: `${index * 150 + 300}ms`,
            transformOrigin: "top"
          }}
        />
      )}

      {/* Content card */}
      <div
        className={`
          group flex-1 p-6 md:p-8
          rounded-2xl
          bg-white/[0.03] backdrop-blur-md
          border border-white/10
          transition-all duration-500 ease-out
          hover:bg-white/[0.06]
          hover:border-[#C3B68F]/40
          hover:shadow-[0_0_60px_-20px_rgba(195,182,143,0.3)]
          hover:translate-x-2
        `}
      >
        <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#C3B68F]">
          {step.title}
        </h3>
        <p className="text-white/60 leading-relaxed text-base md:text-lg transition-colors duration-300 group-hover:text-white/80">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export const WebStepsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger staggered animation
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1f1a3d 100%)",
      }}
    >
      {/* Ambient background effects */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#C3B68F]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#C3B68F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div
            className={`
              inline-flex items-center px-4 py-2 rounded-full 
              bg-white/[0.05] backdrop-blur-sm border border-white/10
              mb-6 transition-all duration-700
              ${visibleSteps[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <span className="text-sm text-[#C3B68F] font-medium">
              Processus de création
            </span>
          </div>
          
          <h2
            className={`
              text-display-md md:text-display-lg text-white mb-6
              transition-all duration-700 delay-100
              ${visibleSteps[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            Notre méthode pour<br className="hidden md:block" />
            <span className="text-gradient-gold">votre site web</span>
          </h2>
          
          <p
            className={`
              text-body-lg text-white/60 max-w-2xl mx-auto leading-relaxed
              transition-all duration-700 delay-200
              ${visibleSteps[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            Un processus clair et structuré, de la première discussion
            jusqu'à la mise en ligne de votre site.
          </p>
        </div>

        {/* Timeline - Modern vertical layout */}
        <div className="space-y-6 md:space-y-8">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              isVisible={visibleSteps[index]}
            />
          ))}
        </div>

        {/* Bottom accent */}
        <div
          className={`
            mt-16 text-center transition-all duration-700
            ${visibleSteps[steps.length - 1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          style={{ transitionDelay: `${steps.length * 150 + 200}ms` }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#C3B68F]/10 border border-[#C3B68F]/20">
            <div className="w-2 h-2 rounded-full bg-[#C3B68F] animate-pulse" />
            <span className="text-sm text-white/70">
              Durée moyenne : 4 à 8 semaines
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

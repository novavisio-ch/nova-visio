import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "La prise de contact",
    description: "Un premier échange simple pour comprendre votre situation et vos objectifs, sans engagement.",
  },
  {
    number: "02",
    title: "Le diagnostic personnalisé",
    description: "Nous analysons vos besoins et identifions les solutions les plus adaptées.",
  },
  {
    number: "03",
    title: "Le plan d'action clair",
    description: "Une feuille de route détaillée avec des objectifs précis et un calendrier réaliste.",
  },
  {
    number: "04",
    title: "La réalisation",
    description: "La création de votre site, de votre marque ou de vos contenus sociaux avec une communication transparente.",
  },
  {
    number: "05",
    title: "Les ajustements et le lancement",
    description: "Finalisations et mise en ligne, avec votre validation à chaque étape.",
  },
  {
    number: "06",
    title: "Le support (optionnel)",
    description: "Un accompagnement post-lancement pour vous assurer une autonomie progressive.",
  },
];

const wontFind = [
  "Des promesses irréalistes de succès instantané.",
  "Du jargon technique incompréhensible.",
  "Un fardeau d'outils et de plateformes complexes.",
  "Des tactiques de vente agressives ou manipulatrices.",
];

const willGet = [
  "Une base digitale solide et professionnelle.",
  "Une image de marque qui inspire confiance.",
  "Une réduction significative du stress lié au digital.",
  "Des résultats concrets et mesurables pour votre activité.",
];

const Approach = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg md:text-display-xl mb-6">
              Notre <span className="text-gradient-gold">Approche</span>
            </h1>
            <p className="text-body-lg text-muted-foreground">
              Nous transformons la complexité digitale en clarté. Découvrez comment nous vous aidons à construire une présence en ligne solide, étape par étape.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="glass-card p-8 flex flex-col md:flex-row gap-6 items-start hover:glow-gold transition-all duration-500"
                >
                  <div className="text-display-lg text-gradient-gold flex-shrink-0 w-16">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-display-sm mb-2">{step.title}</h3>
                    <p className="text-body-md text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you won't find / What you get */}
      <section className="section-padding border-t border-border/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Won't Find */}
            <div className="glass-card p-8">
              <h2 className="text-display-sm mb-6">
                Ce que vous <span className="text-destructive">ne trouverez pas</span> chez nous
              </h2>
              <div className="space-y-4">
                {wontFind.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <p className="text-body-md text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Will Get */}
            <div className="glass-card p-8 glow-gold">
              <h2 className="text-display-sm mb-6">
                Ce que vous <span className="text-gradient-gold">obtenez</span>
              </h2>
              <div className="space-y-4">
                {willGet.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-body-md text-foreground/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Commencer votre projet
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Approach;

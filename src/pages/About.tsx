import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Feather, Sparkles, Handshake, Calendar } from "lucide-react";
const values = [{
  icon: Sparkles,
  title: "Clarté",
  description: "Des solutions simples et compréhensibles."
}, {
  icon: Eye,
  title: "Structure",
  description: "Une approche méthodique et organisée."
}, {
  icon: Feather,
  title: "Simplicité",
  description: "L'essentiel, sans superflu."
}, {
  icon: Handshake,
  title: "Pédagogie",
  description: "Nous vous accompagnons et vous formons."
}];
const About = () => {
  return <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg md:text-display-xl mb-6">
              À <span className="text-gradient-gold">Propos</span>
            </h1>
            <p className="text-body-lg text-muted-foreground">Au-delà de la confusion digitale, il y a la clarté.</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="pb-20">
        <div className="container">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <p className="text-body-lg text-foreground/90 leading-relaxed mb-6">NOVA VISIO est né d'un constat simple : beaucoup d'entrepreneurs se sentent perdus face au digital. Entre les multiples plateformes, les tendances changeantes et le jargon technique, créer une présence en ligne cohérente peut sembler insurmontable.

Nous accompagnons les marques locales et internationales dans la création d’identités fortes, de contenus impactants et de sites web performants. Chaque projet est une collaboration unique, et notre mission est de le sublimer.</p>
            <p className="text-body-lg text-foreground/90 leading-relaxed mb-6">NOVA VISIO est né d'un constat simple : beaucoup d'entrepreneurs se sentent perdus face au digital. Entre les multiples plateformes, les tendances changeantes et le jargon technique, créer une présence en ligne cohérente peut sembler insurmontable.</p>
            <p className="text-body-lg text-foreground/90 leading-relaxed mb-6">Nous accompagnons les marques locales et internationales dans la création d'identités fortes, de contenus impactants et de sites web performants. Chaque projet est une collaboration unique, et notre mission est de le sublimer.</p>
            <p className="text-body-lg text-foreground/90 leading-relaxed">
              Nous sommes là pour{" "}
              <span className="text-primary font-semibold">simplifier, structurer et éclaircir</span> votre présence en
              ligne. Notre mission est de vous permettre de vous concentrer sur ce que vous faites le mieux, pendant que
              nous prenons soin de votre image digitale.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding border-t border-border/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-md mb-4">
                Notre <span className="text-gradient-gold">Vision</span>
              </h2>
            </div>
            <div className="glass-card p-8 md:p-12 glow-gold">
              <p className="text-body-lg text-foreground/90 text-center leading-relaxed">
                Créer des sites web, des identités et des présences sociales qui sont{" "}
                <span className="text-primary font-semibold">sobres, clairs et durables</span>. Nous nous concentrons
                sur la compréhension mutuelle et la continuité pour des résultats qui tiennent dans le temps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-display-md mb-4">
              Nos <span className="text-gradient-gold">Valeurs</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => <div key={index} className="glass-card p-6 text-center border border-[#2D284D] transition-all duration-500 hover:border-[#C3B68F] hover:shadow-[0_0_40px_-10px_#C3B68F] group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-125" />
                </div>
                <h3 className="text-display-sm mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-display-sm">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-padding border-t border-border/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-md mb-4">
                Notre façon de <span className="text-gradient-gold">travailler</span>
              </h2>
            </div>
            <div className="glass-card p-8 md:p-12">
              <p className="text-body-lg text-foreground/90 leading-relaxed mb-6">
                Nous travaillons avec des <span className="text-primary font-semibold">explications simples</span>, un
                processus étape par étape et une <span className="text-primary font-semibold">transparence totale</span>
                .
              </p>
              <p className="text-body-lg text-foreground/90 leading-relaxed mb-8">
                Notre relation se construit sur la confiance et l'absence de toute pression commerciale. Votre succès
                est notre boussole.
              </p>
              <div className="text-center">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/contact">
                    Parlons de votre projet
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;
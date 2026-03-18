import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogArticleSiteVitrineLanding = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container-narrow">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Retour aux articles
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">Article</span>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>2 Fév 2026</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 min de lecture</span></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Site vitrine vs landing page : quel format choisir pour votre activité ?
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Nous comparons clairement les deux formats et vous aidons à faire le choix le plus adapté à votre activité, que vous soyez artisan, TPE ou PME en Suisse romande.
            </h2>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 md:pb-24">
        <div className="container-narrow">
          <article className="max-w-4xl article-card p-6 md:p-10 lg:p-12">

            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Vous vous demandez sans doute si votre entreprise a besoin d'un site vitrine complet ou d'une simple landing page. Dans cet article, nous comparons clairement les deux formats et vous aidons à faire le choix le plus adapté à votre activité, que vous soyez artisan, TPE ou PME en Suisse romande.
              </p>
            </div>

            {/* Section 1 - Site vitrine */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">C'est quoi un site vitrine ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Un site vitrine est une présence en ligne complète qui présente votre entreprise, vos services, vos valeurs et votre équipe. Il contient généralement plusieurs pages :</p>
              <ul className="space-y-3 mb-6">
                {["une page d'accueil,", "une page « À propos »,", "une page « Services » ou « Réalisations »,", "une page contact,", "et parfois une page blog ou une page de témoignages."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary mb-6">
                <p className="text-sm text-muted-foreground italic">👉 Objectif principal : informer le client, rassurer et montrer votre sérieux sur le long terme.</p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2 font-semibold">👉 Idéal pour :</p>
              <ul className="space-y-3 mb-6">
                {["bureaux d'architecture,", "entreprises multi‑services (construction, plomberie, électricité, etc.),", "cabinets ou agences qui veulent démontrer expérience et expertise."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2 - Landing page */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">C'est quoi une landing page ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Une landing page (ou "page de capture") est une page unique, ultra ciblée, conçue pour convertir les visiteurs en clients. Elle est souvent créée pour :</p>
              <ul className="space-y-3 mb-6">
                {["un seul service principal,", "une offre spéciale,", "une campagne publicitaire (Google Ads, Facebook, etc.)."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary mb-6">
                <p className="text-sm text-muted-foreground italic">👉 Objectif principal : obtenir une action précise — appel, formulaire, devis, inscription, téléchargement d'un guide.</p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2 font-semibold">👉 Idéal pour :</p>
              <ul className="space-y-3 mb-6">
                {["un artisan qui veut surtout des rendez‑vous (plombier, chauffagiste, vitrier),", "une offre de lancement (par exemple « remise de 15 % sur votre premier devis »),", "une campagne marketing ponctuelle."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 - Comparaison */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Site vitrine vs landing page : comparaison claire</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary/30">
                      <th className="text-left py-3 px-4 text-foreground font-bold">Critère</th>
                      <th className="text-left py-3 px-4 text-foreground font-bold">Site vitrine</th>
                      <th className="text-left py-3 px-4 text-foreground font-bold">Landing page</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    {[
                      ["Nombre de pages", "Plusieurs pages (5 à +10)", "Une seule page concentrée"],
                      ["Objectif", "Image de marque, crédibilité à long terme", "Conversion rapide (appel, devis, formulaire)"],
                      ["Temps de réalisation", "Plus long (planning, contenu, design)", "Plus rapide et plus simple à mettre en place"],
                      ["Budget moyen", "Plus élevé (structure complète)", "Plus abordable (un seul format)"],
                      ["Meilleur usage", "Entreprises multi‑services, agences", "Offres ciblées, artisans, campagnes"],
                    ].map(([critere, vitrine, landing], i) => (
                      <tr key={i} className="border-b border-border">
                        <td className="py-3 px-4 font-semibold">{critere}</td>
                        <td className="py-3 px-4">{vitrine}</td>
                        <td className="py-3 px-4">{landing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4 - Quand choisir site vitrine */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Quand choisir un site vitrine ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Pensez au site vitrine si :</p>
              <ul className="space-y-3 mb-6">
                {["vous proposez plusieurs activités ou services différents,", "vous souhaitez développer une image de marque durable,", "vous voulez expliquer votre processus, votre expertise et vos valeurs,", "vous prévoyez d'ajouter un blog ou des contenus réguliers pour attirer du trafic organique."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">💡 Le site vitrine est particulièrement adapté pour les entreprises qui veulent se positionner comme un partenaire de confiance sur le long terme.</p>
              </div>
            </div>

            {/* Section 5 - Quand choisir landing page */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Quand choisir une landing page ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Optez plutôt pour une landing page si :</p>
              <ul className="space-y-3 mb-6">
                {["votre activité se concentre sur un seul service principal (ex. : plomberie d'urgence, chauffage, rénovation),", "vous voulez surtout obtenir des appels ou des demandes de devis rapidement,", "vous lancez une offre spéciale ou une promotion limitée dans le temps,", "vous utilisez des publicités en ligne (Google Ads, Facebook Ads) et avez besoin d'une page ultra ciblée."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">💡 La landing page est idéale pour transformer le trafic en clients concrets, sans charger votre visiteur avec trop d'informations.</p>
              </div>
            </div>

            {/* Section 6 - Cas pratique */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Un cas pratique : artisan vs cabinet</h2>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Exemple 1 – Plombier</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Un plombier qui veut surtout des appels d'urgence peut se contenter d'une landing page claire avec :</p>
              <ul className="space-y-3 mb-8">
                {["son service principal,", "un numéro de téléphone gros et visible,", "un formulaire de rendez‑vous rapide,", "une zone de zones de chantier (ex. « interventions à Genève, Lausanne, Nyon »)."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Exemple 2 – Bureau d'architecture</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Un bureau d'architecture, qui parle de projet global, de processus, de valeurs et de réalisations, aura plus besoin d'un site vitrine complet avec plusieurs pages et une vraie narration de marque.</p>
            </div>

            {/* Section 7 - Combiner les deux */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Peut‑on combiner les deux ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Oui ! Beaucoup d'entreprises utilisent une landing page dynamique pour leurs campagnes (publicités, offres spéciales) et un site vitrine comme base de leur présence en ligne. Par exemple :</p>
              <ul className="space-y-3 mb-6">
                {["votre site vitrine reste votre « maison » principale,", "vos landing pages sont vos « portes d'entrée » ciblées pour que les clients puissent agir rapidement."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 8 - Comment choisir */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Comment faire le bon choix pour votre activité ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Posez‑vous ces 3 questions simples :</p>
              <div className="article-recap p-6 md:p-8 mb-6">
                <ul className="space-y-4">
                  {["Offrez‑vous un service unique ou plusieurs services ?", "Voulez‑vous surtout attirer des appels rapides ou développer une image de marque durable ?", "Planifiez‑vous des campagnes publicitaires en ligne ?"].map((q, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                      <span className="text-lg text-muted-foreground">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Si vous avez surtout besoin de transformer le trafic en clients, une landing page est souvent la solution la plus efficace. Si vous voulez montrer votre expertise et votre crédibilité, un site vitrine est le format le plus adapté.</p>
            </div>

            {/* Section 9 - CTA */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Besoin d'aide pour choisir ou créer votre site ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Chez Nova Visio, nous accompagnons les artisans et petites entreprises à définir le format le plus adapté à leur activité : site vitrine, landing page ou les deux. Vous pouvez nous confier :</p>
              <ul className="space-y-3 mb-8">
                {["la création de votre landing page optimisée pour la conversion,", "la mise en place d'un site vitrine professionnel et clair,", "ou encore l'optimisation de vos pages existantes pour qu'elles génèrent plus de clients."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Button asChild size="lg" variant="gold" className="text-base px-8 py-6">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Discutons de votre projet
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">Un audit rapide de votre présence en ligne et un devis sur mesure.</p>
              </div>
            </div>

          </article>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticleSiteVitrineLanding;

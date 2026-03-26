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
                Vous vous demandez sans doute si votre entreprise a besoin d'un <strong>site vitrine complet</strong> ou d'une simple <strong>landing page</strong>. Dans cet article, nous comparons clairement les deux formats et vous aidons à faire le choix le plus adapté à votre activité.
              </p>
            </div>

            {/* Site vitrine */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">C'est quoi un site vitrine ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Un site vitrine est une <strong>présence en ligne complète</strong> qui présente votre entreprise, vos services, vos valeurs et votre équipe. Il contient généralement plusieurs pages :</p>
              <ul className="space-y-3 mb-6">
                {["une page d'accueil,", "une page « À propos »,", "une page « Services » ou « Réalisations »,", "une page contact,", "et parfois une page blog ou une page de témoignages."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary mb-6">
                <p className="text-sm text-muted-foreground italic">👉 Objectif principal : <strong>informer le client, rassurer</strong> et montrer votre sérieux sur le long terme.</p>
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

            {/* Landing page */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">C'est quoi une landing page ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Une landing page (ou "page de capture") est une <strong>page unique, ultra ciblée</strong>, conçue pour <strong>convertir les visiteurs en clients</strong>. Elle est souvent créée pour :</p>
              <ul className="space-y-3 mb-6">
                {["un seul service principal,", "une offre spéciale,", "une campagne publicitaire (Google Ads, Facebook, etc.)."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary mb-6">
                <p className="text-sm text-muted-foreground italic">👉 Objectif principal : obtenir <strong>une action précise</strong> - appel, formulaire, devis, inscription, téléchargement d'un guide.</p>
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

            {/* Comparaison */}
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

            {/* Quand choisir site vitrine */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Quand choisir un site vitrine ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Pensez au site vitrine si :</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">vous proposez <strong>plusieurs activités ou services</strong> différents,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">vous souhaitez développer une <strong>image de marque durable</strong>,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">vous voulez expliquer votre <strong>processus, votre expertise</strong> et vos valeurs,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">vous prévoyez d'ajouter un <strong>blog ou des contenus réguliers</strong> pour attirer du trafic organique.</span>
                </li>
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">💡 Le site vitrine est particulièrement adapté pour les entreprises qui veulent se positionner comme un <strong>partenaire de confiance</strong> sur le long terme.</p>
              </div>
            </div>

            {/* Quand choisir landing page */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Quand choisir une landing page ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Optez plutôt pour une landing page si :</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">votre activité se concentre sur <strong>un seul service principal</strong>,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">vous voulez surtout obtenir <strong>des appels ou des demandes de devis</strong> rapidement,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">vous lancez une <strong>offre spéciale</strong> ou une promotion limitée dans le temps,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">vous utilisez des <strong>publicités en ligne</strong> et avez besoin d'une page ultra ciblée.</span>
                </li>
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">💡 La landing page est idéale pour <strong>transformer le trafic en clients concrets</strong>, sans charger votre visiteur avec trop d'informations.</p>
              </div>
            </div>

            {/* Cas pratique */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Un cas pratique : artisan vs cabinet</h2>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Exemple 1 – Plombier</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Un plombier qui veut surtout des <strong>appels d'urgence</strong> peut se contenter d'une landing page claire avec :</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">son <strong>service principal</strong>,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">un <strong>numéro de téléphone</strong> gros et visible,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">un <strong>formulaire de rendez‑vous</strong> rapide,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">une <strong>zone d'intervention</strong> (ex. « Genève, Lausanne, Nyon »).</span>
                </li>
              </ul>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Exemple 2 – Bureau d'architecture</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Un bureau d'architecture, qui parle de <strong>projet global</strong>, de processus, de valeurs et de réalisations, aura plus besoin d'un <strong>site vitrine complet</strong> avec plusieurs pages et une vraie narration de marque.</p>
            </div>

            {/* Combiner les deux */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Peut‑on combiner les deux ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Oui ! Beaucoup d'entreprises utilisent une <strong>landing page dynamique</strong> pour leurs campagnes et un <strong>site vitrine</strong> comme base de leur présence en ligne. Par exemple :</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">votre site vitrine reste votre <strong>« maison » principale</strong>,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">vos landing pages sont vos <strong>« portes d'entrée » ciblées</strong> pour que les clients puissent agir rapidement.</span>
                </li>
              </ul>
            </div>

            {/* Comment choisir */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Comment faire le bon choix pour votre activité ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Posez‑vous ces <strong>3 questions simples</strong> :</p>
              <div className="article-recap p-6 md:p-8 mb-6">
                <ul className="space-y-4">
                  {["Offrez‑vous un service unique ou plusieurs services ?", "Voulez‑vous surtout attirer des appels rapides ou développer une image de marque durable ?", "Planifiez‑vous des campagnes publicitaires en ligne ?"].map((q, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                      <span className="text-lg text-muted-foreground"><strong>{q}</strong></span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Si vous avez surtout besoin de <strong>transformer le trafic en clients</strong>, une landing page est souvent la solution la plus efficace. Si vous voulez montrer votre <strong>expertise et votre crédibilité</strong>, un site vitrine est le format le plus adapté.</p>
            </div>

            {/* CTA */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Besoin d'aide pour choisir ou créer votre site ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Chez Nova Visio, nous accompagnons les artisans et petites entreprises à définir le <strong>format le plus adapté</strong> à leur activité : site vitrine, landing page ou les deux. Vous pouvez nous confier :</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">la création de votre <strong>landing page optimisée</strong> pour la conversion,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">la mise en place d'un <strong>site vitrine professionnel</strong> et clair,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">ou encore <strong>l'optimisation de vos pages existantes</strong> pour qu'elles génèrent plus de clients.</span>
                </li>
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
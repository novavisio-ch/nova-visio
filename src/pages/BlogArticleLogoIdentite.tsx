import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/blog/logo-identite-visuelle.jpg";

const BlogArticleLogoIdentite = () => {
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
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>9 Mar 2026</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>12 min de lecture</span></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pourquoi votre logo n'est pas "juste un dessin" : l'impact d'une bonne identité visuelle
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Un logo bien pensé est l'un des piliers de votre identité visuelle et influence directement la confiance, la perception de votre prix et la mémorisation de votre marque.
            </h2>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-8">
        <div className="container-narrow">
          <div className="max-w-4xl rounded-2xl overflow-hidden shadow-lg">
            <img src={heroImage} alt="Évolution des logos à travers l'histoire" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 md:pb-24">
        <div className="container-narrow">
          <article className="max-w-4xl article-card p-6 md:p-10 lg:p-12">

            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Pour beaucoup d'entrepreneurs, un logo semble être un simple "dessin" à mettre sur un site, une carte de visite ou un véhicule.
                En réalité, un logo bien pensé est l'un des <strong>piliers de votre identité visuelle</strong> et influence directement la <strong>confiance</strong>, la <strong>perception de votre prix</strong> et la <strong>mémorisation de votre marque</strong>.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Un bref historique du logo : des symboles aux marques modernes</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">L'histoire des logos remonte bien avant l'ère du marketing moderne, à l'époque des <strong>symboles, blasons et enseignes</strong> de boutiques. Dans l'Antiquité et au Moyen Âge, les familles, guildes et artisans utilisaient déjà des signes distinctifs pour se faire reconnaître.</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Avec l'invention de <strong>l'imprimerie par Gutenberg</strong> au XV<sup>e</sup> siècle, les imprimeurs commencent à utiliser des marques visuelles pour signer leurs ouvrages. À partir de la <strong>Révolution industrielle</strong>, les logos deviennent de vrais repères commerciaux pour reconnaître rapidement une marque.</p>
              <p className="text-lg text-muted-foreground leading-relaxed">Au XX<sup>e</sup> siècle, avec la publicité de masse, la télévision puis le numérique, les logos <strong>se simplifient et gagnent en impact visuel</strong>. Les grands designers modernistes misent sur des formes simples, des couleurs fortes et des concepts clairs.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Logos célèbres : ce qu'ils nous apprennent</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Certains logos sont devenus de <strong>véritables icônes culturelles</strong>, reconnus partout dans le monde. Ils illustrent parfaitement à quel point un logo peut porter l'histoire et la personnalité d'une marque.</p>
              <ul className="space-y-4 mb-6">
                {[
                  { name: "Coca‑Cola", desc: "créé en 1886, son lettrage script unique est resté pratiquement inchangé, incarnant la tradition, la continuité et une forte reconnaissance visuelle." },
                  { name: "Apple", desc: "la marque est passée d'une illustration complexe à une pomme ultra simple, puis à un symbole immédiatement identifiable." },
                  { name: "Nike", desc: "le \"swoosh\" est un exemple de logo minimaliste qui transmet à lui seul le mouvement et l'énergie." },
                  { name: "Google", desc: "son logo a évolué vers une typographie simple et moderne, montrant comment un léger ajustement peut renforcer la lisibilité sans perdre l'ADN de la marque." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground"><strong>{item.name} :</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">💡 Ces exemples montrent qu'un bon logo peut <strong>traverser les décennies</strong> avec seulement quelques ajustements.</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">En quoi un bon logo change la perception de votre entreprise</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Pour une petite entreprise, un artisan ou une PME locale, le logo n'est pas un luxe réservé aux grandes marques. Il influence directement la manière dont vos clients <strong>vous perçoivent dès les premières secondes</strong>.</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Un bon logo permet notamment de :</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Dégager une impression de <strong>sérieux et de fiabilité</strong> (surtout si vos concurrents ont des logos vieillissants).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Donner une <strong>image professionnelle</strong> alignée avec la qualité de vos services et vos tarifs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Faciliter la <strong>mémorisation de votre nom</strong>, surtout dans un secteur concurrentiel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Créer une <strong>cohérence visuelle</strong> sur tous vos supports : site web, devis, véhicules, réseaux sociaux.</span>
                </li>
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">💡 Un logo approximatif peut envoyer un signal négatif : <strong>"amateur", "pas sérieux"</strong>, même si votre travail est excellent.</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Logo, identité visuelle et conversions sur votre site web</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Votre logo est le <strong>point de départ de votre identité visuelle</strong> : couleurs, typographies, styles d'images, mise en page. Sur un site web, ces éléments jouent un rôle important dans la façon dont les visiteurs se sentent et agissent.</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Un logo cohérent et bien intégré aide à :</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground"><strong>Rassurer le visiteur</strong> dès l'arrivée sur la page d'accueil.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Donner une impression d'entreprise <strong>structurée, digne de confiance</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground"><strong>Augmenter la probabilité</strong> qu'un prospect remplisse un formulaire, demande un devis ou passe un appel.</span>
                </li>
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">💡 Un logo pixelisé ou incohérent peut créer une <strong>dissonance visuelle</strong> et faire douter le visiteur.</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Quelques leçons à retenir pour votre propre logo</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">En résumé, l'histoire et les grands logos mondiaux nous apprennent plusieurs choses utiles, même pour une petite structure locale :</p>
              <div className="article-recap p-6 md:p-8">
                <ul className="space-y-4">
                  {[
                    { num: 1, text: "La simplicité fonctionne sur la durée : un symbole ou un mot‑symbole clair est souvent plus fort qu'un dessin trop compliqué." },
                    { num: 2, text: "La cohérence est essentielle : un bon logo doit fonctionner partout (web, papier, enseigne, véhicule, réseaux sociaux)." },
                    { num: 3, text: "La pérennité compte : mieux vaut un logo bien pensé, que l'on fera évoluer légèrement dans le temps, plutôt que de tout changer tous les deux ans." },
                  ].map((item) => (
                    <li key={item.num} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</span>
                      <span className="text-lg text-muted-foreground"><strong>{item.text.split(":")[0]}:</strong>{item.text.split(":").slice(1).join(":")}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Comment Nova Visio peut vous accompagner</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Chez Nova Visio, nous aidons les artisans, indépendants et petites entreprises à créer un logo et une identité visuelle qui <strong>reflètent réellement leur niveau de professionnalisme</strong>.</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">Concrètement, nous pouvons vous accompagner sur :</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">La <strong>création ou la refonte</strong> de votre logo (clair, lisible et adapté à vos supports).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">La définition d'une <strong>palette de couleurs et de typographies</strong> cohérentes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">L'<strong>intégration de cette identité</strong> dans votre site web, vos documents et vos réseaux sociaux.</span>
                </li>
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">💡 Un bon logo n'est pas "juste un dessin" : c'est le <strong>premier investissement visuel</strong> dans la confiance que vos futurs clients vous accordent.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center article-recap p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Envie d'un logo qui reflète vraiment votre activité ?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discutons ensemble de votre identité visuelle. Nous vous accompagnons <strong>de A à Z</strong> pour créer un logo professionnel, cohérent et mémorable.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-background font-semibold px-8 py-6 text-lg rounded-xl">
                  Nous contacter
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

          </article>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticleLogoIdentite;
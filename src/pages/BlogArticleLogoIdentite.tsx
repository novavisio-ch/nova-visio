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
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux articles
          </Link>

          {/* Article Header */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                Article
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>9 Mar 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min de lecture</span>
              </div>
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
            <img
              src={heroImage}
              alt="Évolution des logos à travers l'histoire"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 md:pb-24">
        <div className="container-narrow">
          <article className="max-w-4xl bg-white rounded-2xl p-6 md:p-10 lg:p-12 shadow-lg">

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Pour beaucoup d'entrepreneurs, un logo semble être un simple "dessin" à mettre sur un site, une carte de visite ou un véhicule.
                En réalité, un logo bien pensé est l'un des piliers de votre identité visuelle et influence directement la confiance, la perception de votre prix et la mémorisation de votre marque.
              </p>
            </div>

            {/* Section 1 – Historique */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Un bref historique du logo : des symboles aux marques modernes
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                L'histoire des logos remonte bien avant l'ère du marketing moderne, à l'époque des symboles, blasons et enseignes de boutiques.
                Dans l'Antiquité et au Moyen Âge, les familles, guildes et artisans utilisaient déjà des signes distinctifs gravés sur la pierre, les bannières ou les enseignes de tavernes pour se faire reconnaître.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Avec l'invention de l'imprimerie par Gutenberg au XV<sup>e</sup> siècle, les imprimeurs commencent à utiliser des marques visuelles pour signer leurs ouvrages, ce qui prépare le terrain pour le logo moderne.
                À partir de la Révolution industrielle, les entreprises doivent se distinguer dans un marché de plus en plus concurrentiel : les logos deviennent alors de vrais repères commerciaux pour reconnaître rapidement une marque.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Au XX<sup>e</sup> siècle, avec la publicité de masse, la télévision puis le numérique, les logos se simplifient et gagnent en impact visuel.
                Les grands designers modernistes misent sur des formes simples, des couleurs fortes et des concepts clairs pour créer des logos facilement mémorisables dans tous les supports (affiches, emballages, écrans).
              </p>
            </div>

            {/* Section 2 – Logos célèbres */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Logos célèbres : ce qu'ils nous apprennent
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Certains logos sont devenus de véritables icônes culturelles, reconnus partout dans le monde.
                Ils illustrent parfaitement à quel point un logo peut porter l'histoire et la personnalité d'une marque.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">
                    <strong>Coca‑Cola :</strong> créé en 1886, son lettrage script unique est resté pratiquement inchangé, incarnant la tradition, la continuité et une forte reconnaissance visuelle.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">
                    <strong>Apple :</strong> la marque est passée d'une illustration complexe (Newton sous un arbre) à une pomme ultra simple, puis à un symbole décliné en différentes finitions tout en restant immédiatement identifiable.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">
                    <strong>Nike :</strong> le "swoosh" est un exemple de logo minimaliste qui transmet à lui seul le mouvement et l'énergie, sans besoin d'ajouter le nom de la marque dans certains contextes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">
                    <strong>Google :</strong> son logo a évolué vers une typographie simple et moderne, avec des couleurs vives et cohérentes, montrant comment un léger ajustement typographique peut renforcer la lisibilité et la modernité sans perdre l'ADN de la marque.
                  </span>
                </li>
              </ul>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm text-gray-600 italic">
                  💡 Ces exemples montrent qu'un bon logo peut traverser les décennies avec seulement quelques ajustements, tout en restant ancré dans l'esprit du public.
                </p>
              </div>
            </div>

            {/* Section 3 – Impact perception */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                En quoi un bon logo change la perception de votre entreprise
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Pour une petite entreprise, un artisan ou une PME locale, le logo n'est pas un luxe réservé aux grandes marques.
                Il influence directement la manière dont vos clients vous perçoivent dès les premières secondes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Un bon logo permet notamment de :
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Dégager une impression de sérieux et de fiabilité (surtout si vos concurrents ont des logos vieillissants ou incohérents).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Donner une image professionnelle alignée avec la qualité de vos services et vos tarifs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Faciliter la mémorisation de votre nom, surtout si vous êtes dans un secteur concurrentiel (construction, rénovation, services à domicile, etc.).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Créer une cohérence visuelle sur tous vos supports : site web, devis, véhicules, vêtements, réseaux sociaux.</span>
                </li>
              </ul>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm text-gray-600 italic">
                  💡 Un logo approximatif ou bricolé à la va‑vite peut envoyer un signal négatif : "amateur", "pas sérieux", "bas de gamme", même si votre travail est excellent.
                </p>
              </div>
            </div>

            {/* Section 4 – Conversions site web */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Logo, identité visuelle et conversions sur votre site web
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Votre logo est le point de départ de votre identité visuelle : couleurs, typographies, styles d'images, mise en page.
                Sur un site web, ces éléments jouent un rôle important dans la façon dont les visiteurs se sentent et agissent.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Un logo cohérent et bien intégré dans un univers graphique harmonieux aide à :
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Rassurer le visiteur dès l'arrivée sur la page d'accueil.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Donner une impression d'entreprise structurée, digne de confiance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Augmenter la probabilité qu'un prospect remplisse un formulaire, demande un devis ou passe un appel.</span>
                </li>
              </ul>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm text-gray-600 italic">
                  💡 À l'inverse, un logo pixelisé, disproportionné ou qui ne correspond pas au reste du design peut créer une dissonance visuelle et faire douter le visiteur.
                </p>
              </div>
            </div>

            {/* Section 5 – Leçons à retenir */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Quelques leçons à retenir pour votre propre logo
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                En résumé, l'histoire et les grands logos mondiaux nous apprennent plusieurs choses utiles, même pour une petite structure locale :
              </p>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 md:p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                    <span className="text-lg text-gray-700"><strong>La simplicité fonctionne sur la durée :</strong> un symbole ou un mot‑symbole clair est souvent plus fort qu'un dessin trop compliqué.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                    <span className="text-lg text-gray-700"><strong>La cohérence est essentielle :</strong> un bon logo doit fonctionner partout (web, papier, enseigne, véhicule, réseaux sociaux).</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                    <span className="text-lg text-gray-700"><strong>La pérennité compte :</strong> mieux vaut un logo bien pensé, que l'on fera évoluer légèrement dans le temps, plutôt que de tout changer tous les deux ans.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 6 – Nova Visio CTA */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Comment Nova Visio peut vous accompagner
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Chez Nova Visio, nous aidons les artisans, indépendants et petites entreprises à créer un logo et une identité visuelle qui reflètent réellement leur niveau de professionnalisme.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Concrètement, nous pouvons vous accompagner sur :
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">La création ou la refonte de votre logo (clair, lisible et adapté à vos supports).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">La définition d'une palette de couleurs et de typographies cohérentes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">L'intégration de cette identité dans votre site web, vos documents et vos réseaux sociaux.</span>
                </li>
              </ul>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm text-gray-600 italic">
                  💡 Un bon logo n'est pas "juste un dessin" : c'est le premier investissement visuel dans la confiance que vos futurs clients vous accordent.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Envie d'un logo qui reflète vraiment votre activité ?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Discutons ensemble de votre identité visuelle. Nous vous accompagnons de A à Z pour créer un logo professionnel, cohérent et mémorable.
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

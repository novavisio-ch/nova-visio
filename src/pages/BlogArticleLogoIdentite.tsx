import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/blog/logo-identite-visuelle.jpg";
import { useLanguage } from "@/hooks/use-language";

const BlogArticleLogoIdentite = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const famousLogos = isFr
    ? [
        { name: "Coca‑Cola", desc: "créé en 1886, son lettrage script unique est resté pratiquement inchangé, incarnant la tradition, la continuité et une forte reconnaissance visuelle." },
        { name: "Apple", desc: "la marque est passée d'une illustration complexe à une pomme ultra simple, puis à un symbole immédiatement identifiable." },
        { name: "Nike", desc: "le \"swoosh\" est un exemple de logo minimaliste qui transmet à lui seul le mouvement et l'énergie." },
        { name: "Google", desc: "son logo a évolué vers une typographie simple et moderne, montrant comment un léger ajustement peut renforcer la lisibilité sans perdre l'ADN de la marque." },
      ]
    : [
        { name: "Coca‑Cola", desc: "created in 1886, its unique script lettering has remained virtually unchanged, embodying tradition, continuity and strong visual recognition." },
        { name: "Apple", desc: "the brand evolved from a complex illustration to an ultra-simple apple, then to an instantly recognisable symbol." },
        { name: "Nike", desc: "the \"swoosh\" is a masterclass in minimalist logo design — conveying movement and energy all on its own." },
        { name: "Google", desc: "its logo evolved into a simple, modern typeface, showing how a subtle tweak can enhance readability without losing the brand's DNA." },
      ];

  const lessons = isFr
    ? [
        { num: 1, text: "La simplicité fonctionne sur la durée : un symbole ou un mot‑symbole clair est souvent plus fort qu'un dessin trop compliqué." },
        { num: 2, text: "La cohérence est essentielle : un bon logo doit fonctionner partout (web, papier, enseigne, véhicule, réseaux sociaux)." },
        { num: 3, text: "La pérennité compte : mieux vaut un logo bien pensé, que l'on fera évoluer légèrement dans le temps, plutôt que de tout changer tous les deux ans." },
      ]
    : [
        { num: 1, text: "Simplicity works long-term: a clear symbol or wordmark is often stronger than an overly complex design." },
        { num: 2, text: "Consistency is essential: a good logo must work everywhere — web, print, signage, vehicles, social media." },
        { num: 3, text: "Longevity matters: it's better to invest in a well-thought-out logo and evolve it gradually than to redesign from scratch every couple of years." },
      ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container-narrow">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {isFr ? "Retour aux articles" : "Back to articles"}
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">Article</span>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{isFr ? "9 Mar 2026" : "9 Mar 2026"}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{isFr ? "12 min de lecture" : "12 min read"}</span></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isFr
                ? "Pourquoi votre logo n'est pas \"juste un dessin\" : l'impact d'une bonne identité visuelle"
                : "Why your logo isn't \"just a drawing\": the impact of strong brand identity"}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {isFr
                ? "Un logo bien pensé est l'un des piliers de votre identité visuelle et influence directement la confiance, la perception de votre prix et la mémorisation de votre marque."
                : "A well-designed logo is one of the cornerstones of your visual identity — directly influencing trust, price perception and how well people remember your brand."}
            </h2>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-8">
        <div className="container-narrow">
          <div className="max-w-4xl rounded-2xl overflow-hidden shadow-lg">
            <img src={heroImage} alt={isFr ? "Évolution des logos à travers l'histoire" : "The evolution of logos through history"} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 md:pb-24">
        <div className="container-narrow">
          <article className="max-w-4xl article-card p-6 md:p-10 lg:p-12">

            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Pour beaucoup d'entrepreneurs, un logo semble être un simple "dessin" à mettre sur un site, une carte de visite ou un véhicule. En réalité, un logo bien pensé est l'un des <strong>piliers de votre identité visuelle</strong> et influence directement la <strong>confiance</strong>, la <strong>perception de votre prix</strong> et la <strong>mémorisation de votre marque</strong>.</>
                  : <>For many business owners, a logo seems like just a "drawing" to put on a website, business card or vehicle. In reality, a well-designed logo is one of the <strong>cornerstones of your visual identity</strong> and directly influences <strong>trust</strong>, <strong>price perception</strong> and <strong>brand recall</strong>.</>}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Un bref historique du logo : des symboles aux marques modernes" : "A brief history of logos: from symbols to modern brands"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>L'histoire des logos remonte bien avant l'ère du marketing moderne, à l'époque des <strong>symboles, blasons et enseignes</strong> de boutiques. Dans l'Antiquité et au Moyen Âge, les familles, guildes et artisans utilisaient déjà des signes distinctifs pour se faire reconnaître.</>
                  : <>The history of logos stretches far back before modern marketing, to the era of <strong>symbols, coats of arms and shop signs</strong>. In antiquity and the Middle Ages, families, guilds and craftsmen already used distinctive marks to be recognised.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Avec l'invention de <strong>l'imprimerie par Gutenberg</strong> au XV<sup>e</sup> siècle, les imprimeurs commencent à utiliser des marques visuelles pour signer leurs ouvrages. À partir de la <strong>Révolution industrielle</strong>, les logos deviennent de vrais repères commerciaux pour reconnaître rapidement une marque.</>
                  : <>With <strong>Gutenberg's invention of the printing press</strong> in the 15th century, printers began using visual marks to sign their work. From the <strong>Industrial Revolution</strong> onwards, logos became true commercial markers for quick brand recognition.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {isFr
                  ? <>Au XX<sup>e</sup> siècle, avec la publicité de masse, la télévision puis le numérique, les logos <strong>se simplifient et gagnent en impact visuel</strong>. Les grands designers modernistes misent sur des formes simples, des couleurs fortes et des concepts clairs.</>
                  : <>In the 20th century, with mass advertising, television and then digital, logos <strong>became simpler and more visually impactful</strong>. Modernist designers favoured clean shapes, bold colours and clear concepts.</>}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Logos célèbres : ce qu'ils nous apprennent" : "Famous logos: what they teach us"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Certains logos sont devenus de <strong>véritables icônes culturelles</strong>, reconnus partout dans le monde. Ils illustrent parfaitement à quel point un logo peut porter l'histoire et la personnalité d'une marque.</>
                  : <>Some logos have become <strong>genuine cultural icons</strong>, recognised worldwide. They perfectly illustrate how a logo can carry a brand's history and personality.</>}
              </p>
              <ul className="space-y-4 mb-6">
                {famousLogos.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground"><strong>{item.name}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  {isFr
                    ? <>💡 Ces exemples montrent qu'un bon logo peut <strong>traverser les décennies</strong> avec seulement quelques ajustements.</>
                    : <>💡 These examples show that a good logo can <strong>stand the test of time</strong> with just a few tweaks.</>}
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "En quoi un bon logo change la perception de votre entreprise" : "How a good logo changes the way people see your business"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Pour une petite entreprise, un artisan ou une PME locale, le logo n'est pas un luxe réservé aux grandes marques. Il influence directement la manière dont vos clients <strong>vous perçoivent dès les premières secondes</strong>.</>
                  : <>For a small business, a craftsperson or a local SME, a logo isn't a luxury reserved for big brands. It directly influences how your clients <strong>perceive you from the very first second</strong>.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr ? "Un bon logo permet notamment de :" : "A good logo helps you:"}
              </p>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <>Dégager une impression de <strong>sérieux et de fiabilité</strong> (surtout si vos concurrents ont des logos vieillissants).</>,
                  <>Donner une <strong>image professionnelle</strong> alignée avec la qualité de vos services et vos tarifs.</>,
                  <>Faciliter la <strong>mémorisation de votre nom</strong>, surtout dans un secteur concurrentiel.</>,
                  <>Créer une <strong>cohérence visuelle</strong> sur tous vos supports : site web, devis, véhicules, réseaux sociaux.</>,
                ] : [
                  <>Project an impression of <strong>reliability and professionalism</strong> (especially if your competitors have dated logos).</>,
                  <>Convey a <strong>professional image</strong> aligned with the quality of your services and pricing.</>,
                  <>Make your <strong>name easier to remember</strong>, particularly in a competitive market.</>,
                  <>Create <strong>visual consistency</strong> across all touchpoints: website, quotes, vehicles, social media.</>,
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  {isFr
                    ? <>💡 Un logo approximatif peut envoyer un signal négatif : <strong>"amateur", "pas sérieux"</strong>, même si votre travail est excellent.</>
                    : <>💡 A sloppy logo can send the wrong message: <strong>"amateur", "not serious"</strong> — even when your work is excellent.</>}
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Logo, identité visuelle et conversions sur votre site web" : "Logo, visual identity and website conversions"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Votre logo est le <strong>point de départ de votre identité visuelle</strong> : couleurs, typographies, styles d'images, mise en page. Sur un site web, ces éléments jouent un rôle important dans la façon dont les visiteurs se sentent et agissent.</>
                  : <>Your logo is the <strong>starting point of your visual identity</strong>: colours, typefaces, image styles, layout. On a website, these elements play a crucial role in how visitors feel and act.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr ? "Un logo cohérent et bien intégré aide à :" : "A cohesive, well-integrated logo helps:"}
              </p>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <><strong>Rassurer le visiteur</strong> dès l'arrivée sur la page d'accueil.</>,
                  <>Donner une impression d'entreprise <strong>structurée, digne de confiance</strong>.</>,
                  <><strong>Augmenter la probabilité</strong> qu'un prospect remplisse un formulaire, demande un devis ou passe un appel.</>,
                ] : [
                  <><strong>Reassure visitors</strong> the moment they land on your homepage.</>,
                  <>Convey the impression of a <strong>well-structured, trustworthy business</strong>.</>,
                  <><strong>Increase the likelihood</strong> that a prospect fills in a form, requests a quote or picks up the phone.</>,
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  {isFr
                    ? <>💡 Un logo pixelisé ou incohérent peut créer une <strong>dissonance visuelle</strong> et faire douter le visiteur.</>
                    : <>💡 A pixelated or inconsistent logo can create <strong>visual dissonance</strong> and make visitors doubt you.</>}
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Quelques leçons à retenir pour votre propre logo" : "Key takeaways for your own logo"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? "En résumé, l'histoire et les grands logos mondiaux nous apprennent plusieurs choses utiles, même pour une petite structure locale :"
                  : "In short, the history of iconic logos teaches us several useful lessons — even for a small, local business:"}
              </p>
              <div className="article-recap p-6 md:p-8">
                <ul className="space-y-4">
                  {lessons.map((item) => (
                    <li key={item.num} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</span>
                      <span className="text-lg text-muted-foreground"><strong>{item.text.split(":")[0]}:</strong>{item.text.split(":").slice(1).join(":")}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Comment Nova Visio peut vous accompagner" : "How Nova Visio can help"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Chez Nova Visio, nous aidons les artisans, indépendants et petites entreprises à créer un logo et une identité visuelle qui <strong>reflètent réellement leur niveau de professionnalisme</strong>.</>
                  : <>At Nova Visio, we help craftspeople, freelancers and small businesses create a logo and visual identity that <strong>truly reflect their level of professionalism</strong>.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr ? "Concrètement, nous pouvons vous accompagner sur :" : "Specifically, we can help you with:"}
              </p>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <>La <strong>création ou la refonte</strong> de votre logo (clair, lisible et adapté à vos supports).</>,
                  <>La définition d'une <strong>palette de couleurs et de typographies</strong> cohérentes.</>,
                  <>L'<strong>intégration de cette identité</strong> dans votre site web, vos documents et vos réseaux sociaux.</>,
                ] : [
                  <><strong>Creating or redesigning</strong> your logo (clear, readable and adapted to all your formats).</>,
                  <>Defining a <strong>cohesive colour palette and typography</strong> system.</>,
                  <><strong>Integrating this identity</strong> into your website, documents and social media.</>,
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  {isFr
                    ? <>💡 Un bon logo n'est pas "juste un dessin" : c'est le <strong>premier investissement visuel</strong> dans la confiance que vos futurs clients vous accordent.</>
                    : <>💡 A good logo isn't "just a drawing": it's the <strong>first visual investment</strong> in the trust your future clients will place in you.</>}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center article-recap p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                {isFr ? "Envie d'un logo qui reflète vraiment votre activité ?" : "Want a logo that truly reflects your business?"}
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {isFr
                  ? <>Discutons ensemble de votre identité visuelle. Nous vous accompagnons <strong>de A à Z</strong> pour créer un logo professionnel, cohérent et mémorable.</>
                  : <>Let's talk about your visual identity. We'll guide you <strong>from start to finish</strong> to create a professional, cohesive and memorable logo.</>}
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-background font-semibold px-8 py-6 text-lg rounded-xl">
                  {isFr ? "Nous contacter" : "Get in touch"}
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

import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import blogHero from "@/assets/blog/site-vitrine-vs-landing-page.jpg";

const BlogArticleSiteVitrineLanding = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const showcasePages = isFr
    ? ["une page d'accueil,", "une page « À propos »,", "une page « Services » ou « Réalisations »,", "une page contact,", "et parfois une page blog ou une page de témoignages."]
    : ["a homepage,", "an About page,", "a Services or Portfolio page,", "a contact page,", "and sometimes a blog or testimonials page."];

  const showcaseIdeal = isFr
    ? ["bureaux d'architecture,", "entreprises multi‑services (construction, plomberie, électricité, etc.),", "cabinets ou agences qui veulent démontrer expérience et expertise."]
    : ["architecture firms,", "multi-service companies (construction, plumbing, electrical, etc.),", "consultancies or agencies that want to demonstrate experience and expertise."];

  const landingUses = isFr
    ? ["un seul service principal,", "une offre spéciale,", "une campagne publicitaire (Google Ads, Facebook, etc.)."]
    : ["a single main service,", "a special offer,", "an advertising campaign (Google Ads, Facebook, etc.)."];

  const landingIdeal = isFr
    ? ["un artisan qui veut surtout des rendez‑vous (plombier, chauffagiste, vitrier),", "une offre de lancement (par exemple « remise de 15 % sur votre premier devis »),", "une campagne marketing ponctuelle."]
    : ["a tradesperson who mainly wants bookings (plumber, heating engineer, glazier),", "a launch offer (e.g. \"15% off your first quote\"),", "a one-off marketing campaign."];

  const tableRows = isFr
    ? [
        ["Nombre de pages", "Plusieurs pages (5 à +10)", "Une seule page concentrée"],
        ["Objectif", "Image de marque, crédibilité à long terme", "Conversion rapide (appel, devis, formulaire)"],
        ["Temps de réalisation", "Plus long (planning, contenu, design)", "Plus rapide et plus simple à mettre en place"],
        ["Budget moyen", "Plus élevé (structure complète)", "Plus abordable (un seul format)"],
        ["Meilleur usage", "Entreprises multi‑services, agences", "Offres ciblées, artisans, campagnes"],
      ]
    : [
        ["Number of pages", "Multiple pages (5 to 10+)", "A single focused page"],
        ["Goal", "Brand image, long-term credibility", "Quick conversion (call, quote, form)"],
        ["Timeline", "Longer (planning, content, design)", "Faster and simpler to set up"],
        ["Average budget", "Higher (full structure)", "More affordable (single format)"],
        ["Best for", "Multi-service businesses, agencies", "Targeted offers, tradespeople, campaigns"],
      ];

  const tableHeaders = isFr
    ? ["Critère", "Site vitrine", "Landing page"]
    : ["Criteria", "Showcase website", "Landing page"];

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container-narrow">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {isFr ? "Retour aux articles" : "Back to articles"}
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">Article</span>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{isFr ? "2 Fév 2026" : "2 Feb 2026"}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{isFr ? "8 min de lecture" : "8 min read"}</span></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isFr ? "Site vitrine vs landing page : quel format choisir pour votre activité ?" : "Showcase website vs landing page: which format suits your business?"}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {isFr
                ? "Nous comparons clairement les deux formats et vous aidons à faire le choix le plus adapté à votre activité, que vous soyez artisan, TPE ou PME en Suisse romande."
                : "We clearly compare both formats and help you choose the one that best fits your business — whether you're a craftsperson, a small business or an SME."}
            </h2>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-narrow">
          <article className="max-w-4xl article-card p-6 md:p-10 lg:p-12">

            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Vous vous demandez sans doute si votre entreprise a besoin d'un <strong>site vitrine complet</strong> ou d'une simple <strong>landing page</strong>. Dans cet article, nous comparons clairement les deux formats et vous aidons à faire le choix le plus adapté à votre activité.</>
                  : <>You're probably wondering whether your business needs a <strong>full showcase website</strong> or a simple <strong>landing page</strong>. In this article, we clearly compare both formats and help you make the right choice for your business.</>}
              </p>
            </div>

            {/* Site vitrine */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "C'est quoi un site vitrine ?" : "What is a showcase website?"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Un site vitrine est une <strong>présence en ligne complète</strong> qui présente votre entreprise, vos services, vos valeurs et votre équipe. Il contient généralement plusieurs pages :</>
                  : <>A showcase website is a <strong>complete online presence</strong> that presents your business, services, values and team. It typically contains several pages:</>}
              </p>
              <ul className="space-y-3 mb-6">
                {showcasePages.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary mb-6">
                <p className="text-sm text-muted-foreground italic">
                  {isFr
                    ? <>👉 Objectif principal : <strong>informer le client, rassurer</strong> et montrer votre sérieux sur le long terme.</>
                    : <>👉 Main goal: <strong>inform the client, build trust</strong> and demonstrate your long-term credibility.</>}
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2 font-semibold">
                {isFr ? "👉 Idéal pour :" : "👉 Ideal for:"}
              </p>
              <ul className="space-y-3 mb-6">
                {showcaseIdeal.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Landing page */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "C'est quoi une landing page ?" : "What is a landing page?"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Une landing page (ou "page de capture") est une <strong>page unique, ultra ciblée</strong>, conçue pour <strong>convertir les visiteurs en clients</strong>. Elle est souvent créée pour :</>
                  : <>A landing page is a <strong>single, highly focused page</strong> designed to <strong>convert visitors into clients</strong>. It's typically created for:</>}
              </p>
              <ul className="space-y-3 mb-6">
                {landingUses.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary mb-6">
                <p className="text-sm text-muted-foreground italic">
                  {isFr
                    ? <>👉 Objectif principal : obtenir <strong>une action précise</strong> – appel, formulaire, devis, inscription, téléchargement d'un guide.</>
                    : <>👉 Main goal: get <strong>one specific action</strong> — a call, a form submission, a quote request, a sign-up or a download.</>}
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2 font-semibold">
                {isFr ? "👉 Idéal pour :" : "👉 Ideal for:"}
              </p>
              <ul className="space-y-3 mb-6">
                {landingIdeal.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comparaison */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Site vitrine vs landing page : comparaison claire" : "Showcase website vs landing page: a clear comparison"}
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary/30">
                      {tableHeaders.map((h, i) => (
                        <th key={i} className="text-left py-3 px-4 text-foreground font-bold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    {tableRows.map(([col1, col2, col3], i) => (
                      <tr key={i} className="border-b border-border">
                        <td className="py-3 px-4 font-semibold">{col1}</td>
                        <td className="py-3 px-4">{col2}</td>
                        <td className="py-3 px-4">{col3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* When showcase */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Quand choisir un site vitrine ?" : "When to choose a showcase website"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr ? "Pensez au site vitrine si :" : "Choose a showcase website if:"}
              </p>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <>vous proposez <strong>plusieurs activités ou services</strong> différents,</>,
                  <>vous souhaitez développer une <strong>image de marque durable</strong>,</>,
                  <>vous voulez expliquer votre <strong>processus, votre expertise</strong> et vos valeurs,</>,
                  <>vous prévoyez d'ajouter un <strong>blog ou des contenus réguliers</strong> pour attirer du trafic organique.</>,
                ] : [
                  <>you offer <strong>multiple services or activities</strong>,</>,
                  <>you want to build a <strong>lasting brand image</strong>,</>,
                  <>you want to explain your <strong>process, expertise</strong> and values,</>,
                  <>you plan to add a <strong>blog or regular content</strong> to attract organic traffic.</>,
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
                    ? <>💡 Le site vitrine est particulièrement adapté pour les entreprises qui veulent se positionner comme un <strong>partenaire de confiance</strong> sur le long terme.</>
                    : <>💡 A showcase website is particularly suited for businesses that want to position themselves as a <strong>trusted long-term partner</strong>.</>}
                </p>
              </div>
            </div>

            {/* When landing */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Quand choisir une landing page ?" : "When to choose a landing page"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr ? "Optez plutôt pour une landing page si :" : "Go with a landing page if:"}
              </p>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <>votre activité se concentre sur <strong>un seul service principal</strong>,</>,
                  <>vous voulez surtout obtenir <strong>des appels ou des demandes de devis</strong> rapidement,</>,
                  <>vous lancez une <strong>offre spéciale</strong> ou une promotion limitée dans le temps,</>,
                  <>vous utilisez des <strong>publicités en ligne</strong> et avez besoin d'une page ultra ciblée.</>,
                ] : [
                  <>your business focuses on <strong>one main service</strong>,</>,
                  <>you mainly want to get <strong>calls or quote requests</strong> quickly,</>,
                  <>you're launching a <strong>special offer</strong> or limited-time promotion,</>,
                  <>you're running <strong>online ads</strong> and need a highly targeted page.</>,
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
                    ? <>💡 La landing page est idéale pour <strong>transformer le trafic en clients concrets</strong>, sans charger votre visiteur avec trop d'informations.</>
                    : <>💡 A landing page is ideal for <strong>turning traffic into actual clients</strong> without overloading visitors with information.</>}
                </p>
              </div>
            </div>

            {/* Practical example */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Un cas pratique : artisan vs cabinet" : "A practical example: tradesperson vs consultancy"}
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Exemple 1 – Plombier" : "Example 1 – Plumber"}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Un plombier qui veut surtout des <strong>appels d'urgence</strong> peut se contenter d'une landing page claire avec :</>
                  : <>A plumber who mainly wants <strong>emergency calls</strong> can get by with a clear landing page featuring:</>}
              </p>
              <ul className="space-y-3 mb-8">
                {(isFr ? [
                  <>son <strong>service principal</strong>,</>,
                  <>un <strong>numéro de téléphone</strong> gros et visible,</>,
                  <>un <strong>formulaire de rendez‑vous</strong> rapide,</>,
                  <>une <strong>zone d'intervention</strong> (ex. « Genève, Lausanne, Nyon »).</>,
                ] : [
                  <>their <strong>main service</strong>,</>,
                  <>a <strong>large, visible phone number</strong>,</>,
                  <>a quick <strong>booking form</strong>,</>,
                  <>a <strong>service area</strong> (e.g. "Geneva, Lausanne, Nyon").</>,
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Exemple 2 – Bureau d'architecture" : "Example 2 – Architecture firm"}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Un bureau d'architecture, qui parle de <strong>projet global</strong>, de processus, de valeurs et de réalisations, aura plus besoin d'un <strong>site vitrine complet</strong> avec plusieurs pages et une vraie narration de marque.</>
                  : <>An architecture firm, which talks about <strong>the bigger picture</strong> — process, values and completed projects — will need a <strong>full showcase website</strong> with multiple pages and genuine brand storytelling.</>}
              </p>
            </div>

            {/* Combine */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Peut‑on combiner les deux ?" : "Can you combine both?"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Oui ! Beaucoup d'entreprises utilisent une <strong>landing page dynamique</strong> pour leurs campagnes et un <strong>site vitrine</strong> comme base de leur présence en ligne.</>
                  : <>Yes! Many businesses use a <strong>dynamic landing page</strong> for their campaigns and a <strong>showcase website</strong> as the foundation of their online presence.</>}
              </p>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <>votre site vitrine reste votre <strong>« maison » principale</strong>,</>,
                  <>vos landing pages sont vos <strong>« portes d'entrée » ciblées</strong> pour que les clients puissent agir rapidement.</>,
                ] : [
                  <>your showcase site remains your <strong>"main home"</strong>,</>,
                  <>your landing pages are your <strong>targeted "front doors"</strong> so clients can act quickly.</>,
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to choose */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Comment faire le bon choix pour votre activité ?" : "How to make the right choice for your business"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr ? <>Posez‑vous ces <strong>3 questions simples</strong> :</> : <>Ask yourself these <strong>3 simple questions</strong>:</>}
              </p>
              <div className="article-recap p-6 md:p-8 mb-6">
                <ul className="space-y-4">
                  {(isFr
                    ? ["Offrez‑vous un service unique ou plusieurs services ?", "Voulez‑vous surtout attirer des appels rapides ou développer une image de marque durable ?", "Planifiez‑vous des campagnes publicitaires en ligne ?"]
                    : ["Do you offer one service or several?", "Do you mainly want quick calls or long-term brand building?", "Are you planning to run online advertising campaigns?"]
                  ).map((q, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                      <span className="text-lg text-muted-foreground"><strong>{q}</strong></span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Si vous avez surtout besoin de <strong>transformer le trafic en clients</strong>, une landing page est souvent la solution la plus efficace. Si vous voulez montrer votre <strong>expertise et votre crédibilité</strong>, un site vitrine est le format le plus adapté.</>
                  : <>If you mainly need to <strong>turn traffic into clients</strong>, a landing page is often the most effective solution. If you want to showcase your <strong>expertise and credibility</strong>, a showcase website is the better format.</>}
              </p>
            </div>

            {/* CTA */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Besoin d'aide pour choisir ou créer votre site ?" : "Need help choosing or building your website?"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Chez Nova Visio, nous accompagnons les artisans et petites entreprises à définir le <strong>format le plus adapté</strong> à leur activité : site vitrine, landing page ou les deux.</>
                  : <>At Nova Visio, we help craftspeople and small businesses determine the <strong>best format</strong> for their needs: showcase website, landing page or both.</>}
              </p>
              <ul className="space-y-3 mb-8">
                {(isFr ? [
                  <>la création de votre <strong>landing page optimisée</strong> pour la conversion,</>,
                  <>la mise en place d'un <strong>site vitrine professionnel</strong> et clair,</>,
                  <>ou encore <strong>l'optimisation de vos pages existantes</strong> pour qu'elles génèrent plus de clients.</>,
                ] : [
                  <>creating a <strong>conversion-optimised landing page</strong>,</>,
                  <>building a <strong>professional, clear showcase website</strong>,</>,
                  <>or <strong>optimising your existing pages</strong> to generate more clients.</>,
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Button asChild size="lg" variant="gold" className="text-base px-8 py-6">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    {isFr ? "Discutons de votre projet" : "Let's discuss your project"}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  {isFr ? "Un audit rapide de votre présence en ligne et un devis sur mesure." : "A quick audit of your online presence and a tailored quote."}
                </p>
              </div>
            </div>

          </article>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticleSiteVitrineLanding;

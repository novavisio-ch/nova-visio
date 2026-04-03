import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/blog/budget-site-web-professionnel.jpg";
import { useLanguage } from "@/hooks/use-language";

const BlogArticleBudgetSiteWeb = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const whatYouPay = isFr
    ? [
        <>La <strong>clarification de votre offre</strong>, pour que l'on comprenne rapidement ce que vous faites et pour qui.</>,
        <>La <strong>structure des pages</strong>, pour guider le visiteur sans le perdre.</>,
        <>Le <strong>design et l'identité visuelle</strong>, pour inspirer confiance.</>,
        <>L'<strong>intégration responsive</strong>, pour que le site soit agréable sur mobile comme sur ordinateur.</>,
        <>Les <strong>formulaires, appels à l'action, bases SEO</strong> et mise en ligne technique.</>,
      ]
    : [
        <><strong>Clarifying your offering</strong> so visitors instantly understand what you do and who you serve.</>,
        <><strong>Page structure</strong> that guides visitors without losing them.</>,
        <><strong>Design and visual identity</strong> that inspires trust.</>,
        <><strong>Responsive integration</strong> so the site looks great on mobile and desktop alike.</>,
        <><strong>Forms, calls to action, SEO foundations</strong> and technical launch.</>,
      ];

  const casStudies = isFr
    ? [
        {
          num: 1,
          title: "L'artisan local",
          desc: "Il veut surtout être trouvé, rassurer et permettre une prise de contact rapide. Un site vitrine clair de 3 à 5 pages peut souvent se situer autour de 1 500 à 2 500 € ou 1 500 à 3 500 CHF selon le marché et le prestataire.",
        },
        {
          num: 2,
          title: "L'indépendant ambitieux",
          desc: "Un site plus travaillé, avec une image de marque plus forte, un meilleur discours commercial et une structure pensée pour convertir. Enveloppe autour de 2 500 à 4 500 CHF chez un freelance, parfois davantage selon les visuels et les fonctionnalités.",
        },
        {
          num: 3,
          title: "La petite entreprise",
          desc: "Un site plus ambitieux avec plusieurs pages, une vraie logique SEO, un blog, des contenus poussés ou des besoins spécifiques. Les budgets peuvent grimper nettement, en particulier en agence ou sur des projets très personnalisés.",
        },
      ]
    : [
        {
          num: 1,
          title: "The local tradesperson",
          desc: "They primarily need to be found, build trust and make it easy for prospects to get in touch. A clean 3–5 page showcase site typically falls in the CHF 1,500–3,500 range, depending on market and provider.",
        },
        {
          num: 2,
          title: "The ambitious freelancer",
          desc: "A more polished site with stronger branding, sharper messaging and a structure designed to convert. Budget usually sits around CHF 2,500–4,500 with a freelancer — sometimes more depending on visuals and features.",
        },
        {
          num: 3,
          title: "The small business",
          desc: "A more ambitious site with multiple pages, a real SEO strategy, a blog, in-depth content or specific requirements. Budgets can climb significantly, particularly with agencies or highly customised projects.",
        },
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
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{isFr ? "3 Avr 2026" : "3 Apr 2026"}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{isFr ? "10 min de lecture" : "10 min read"}</span></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isFr
                ? "Combien investir dans un site web professionnel quand on est artisan ou indépendant ?"
                : "How much should you invest in a professional website as a tradesperson or freelancer?"}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {isFr
                ? "Le budget final dépend toujours du niveau de personnalisation, du contenu et de l'accompagnement demandé. Voici les ordres de grandeur du marché."
                : "The final budget always depends on the level of customisation, content and support required. Here are the market benchmarks."}
            </h2>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-8">
        <div className="container-narrow">
          <div className="max-w-4xl rounded-2xl overflow-hidden shadow-lg">
            <img src={heroImage} alt={isFr ? "Budget site web professionnel" : "Professional website budget"} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 md:pb-24">
        <div className="container-narrow">
          <article className="max-w-4xl article-card p-6 md:p-10 lg:p-12">

            {/* Intro */}
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Quand on lance ou développe son activité, la question revient presque toujours au même moment : <strong>combien faut-il prévoir pour créer un site web professionnel ?</strong> Et surtout, comment savoir si ce budget est raisonnable, rentable et adapté à la réalité de son entreprise ?</>
                  : <>When you're launching or growing a business, the same question always comes up: <strong>how much should you budget for a professional website?</strong> And more importantly, how do you know whether that budget is reasonable, profitable and suited to your business reality?</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {isFr
                  ? <>La vérité, c'est qu'un site web n'est pas seulement une dépense technique. Pour un artisan, un indépendant ou une petite structure, c'est souvent un outil de <strong>visibilité</strong>, de <strong>crédibilité</strong> et de <strong>prise de contact</strong>.</>
                  : <>The truth is, a website isn't just a technical expense. For a tradesperson, a freelancer or a small business, it's often a tool for <strong>visibility</strong>, <strong>credibility</strong> and <strong>generating enquiries</strong>.</>}
              </p>
            </div>

            {/* Un site web, ça coûte combien ? */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Un site web, ça coûte combien ?" : "How much does a website actually cost?"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Il n'existe pas un tarif unique, parce qu'un site peut aller d'une simple présence minimale à un vrai support commercial pensé pour <strong>convaincre et générer des demandes</strong>.</>
                  : <>There's no single price tag, because a website can range from a basic online presence to a genuine commercial tool designed to <strong>convince and generate leads</strong>.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Les fourchettes observées pour un site vitrine réalisé par un freelance tournent souvent autour de <strong>1 000 à 4 500 CHF</strong>, avec un cœur de marché fréquent entre <strong>1 500 et 3 500 CHF</strong> pour un site professionnel de quelques pages.</>
                  : <>A showcase website built by a freelancer typically falls between <strong>CHF 1,000 and 4,500</strong>, with the sweet spot sitting around <strong>CHF 1,500–3,500</strong> for a professional site of a few pages.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>En agence, les budgets montent généralement plus haut, souvent entre <strong>3 500 et 8 000 CHF</strong> pour un projet vitrine classique, et davantage si le besoin est plus poussé ou plus stratégique.</>
                  : <>With an agency, budgets tend to run higher — typically <strong>CHF 3,500–8,000</strong> for a standard showcase project, and more for complex or strategic requirements.</>}
              </p>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  {isFr
                    ? <>💡 Ces fourchettes restent des ordres de grandeur. Le budget final dépend toujours du <strong>niveau de personnalisation</strong>, du contenu et de l'accompagnement demandé.</>
                    : <>💡 These ranges are market benchmarks. The final budget always depends on the <strong>level of customisation</strong>, content and support required.</>}
                </p>
              </div>
            </div>

            {/* Ce que vous payez vraiment */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Ce que vous payez vraiment" : "What you're really paying for"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Quand on parle du prix d'un site, on pense souvent uniquement au design ou à la technique. En réalité, ce que vous payez, c'est surtout un <strong>ensemble de décisions</strong> qui rendent votre présence en ligne claire, rassurante et utile pour vos futurs clients.</>
                  : <>When people think about the cost of a website, they usually think of design or code. In reality, what you're paying for is a <strong>set of strategic decisions</strong> that make your online presence clear, reassuring and useful for your future clients.</>}
              </p>
              <ul className="space-y-3 mb-6">
                {whatYouPay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  {isFr
                    ? <>💡 Vous ne payez pas juste "des pages". Vous investissez dans un outil qui doit vous aider à <strong>présenter votre activité</strong>, à <strong>être trouvé plus facilement</strong> et à <strong>faciliter le contact</strong>.</>
                    : <>💡 You're not just paying for "pages". You're investing in a tool that helps you <strong>present your business</strong>, <strong>get found more easily</strong> and <strong>make it simple for prospects to reach out</strong>.</>}
                </p>
              </div>
            </div>

            {/* Trois cas concrets */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Trois cas concrets" : "Three real-world scenarios"}
              </h2>
              <div className="article-recap p-6 md:p-8">
                <ul className="space-y-6">
                  {casStudies.map((item) => (
                    <li key={item.num} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</span>
                      <div>
                        <span className="text-lg font-bold text-foreground">{item.title}</span>
                        <p className="text-lg text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Comment savoir si c'est rentable */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Comment savoir si c'est rentable" : "How to know if it's worth it"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Le bon réflexe n'est pas seulement de demander "combien ça coûte ?", mais plutôt <strong>"combien de clients ce site doit-il m'apporter pour être rentabilisé ?"</strong>.</>
                  : <>The right question isn't just "how much does it cost?" but rather <strong>"how many clients does this site need to bring in to pay for itself?"</strong>.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Imaginons un site à 2 000 €. Si votre panier moyen est de 300 €, il suffit d'environ <strong>7 clients</strong> pour rembourser l'investissement initial. S'il est de 500 €, <strong>4 clients</strong> suffisent déjà.</>
                  : <>Picture a website costing €2,000. If your average transaction is €300, you only need about <strong>7 clients</strong> to break even. At €500, just <strong>4 clients</strong> cover the cost.</>}
              </p>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  {isFr
                    ? <>💡 Il est logique de considérer un bon site comme un <strong>levier commercial</strong> plutôt qu'un simple poste de dépense.</>
                    : <>💡 It makes far more sense to see a good website as a <strong>commercial lever</strong> than a simple line item on a budget sheet.</>}
                </p>
              </div>
            </div>

            {/* Quel budget choisir ? */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Quel budget choisir ?" : "What's the right budget?"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Le meilleur budget n'est pas "le moins cher possible". C'est celui qui correspond à <strong>votre stade de développement</strong>, à votre objectif et au rôle que votre site doit jouer dans votre activité.</>
                  : <>The best budget isn't "as cheap as possible". It's the one that matches <strong>your stage of growth</strong>, your goals and the role your website needs to play in your business.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {isFr
                  ? <>Si vous avez juste besoin d'exister en ligne proprement, un budget contenu peut suffire. Si votre site doit <strong>rassurer, vous démarquer et générer des demandes qualifiées</strong>, il faut souvent investir davantage dans le message, la structure, le design et l'accompagnement.</>
                  : <>If you simply need a clean online presence, a modest budget may be enough. But if your site needs to <strong>build trust, set you apart and generate qualified leads</strong>, you'll typically need to invest more in messaging, structure, design and support.</>}
              </p>
            </div>

            {/* CTA Nova Visio */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "L'approche Nova Visio" : "The Nova Visio approach"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Chez Nova Visio, l'idée n'est pas de pousser vers la solution la plus lourde, mais vers <strong>celle qui a du sens pour votre activité</strong>. Un site efficace commence rarement par "combien de pages voulez-vous ?", mais plutôt par <strong>"qu'avez-vous besoin que ce site fasse pour vous ?"</strong>.</>
                  : <>At Nova Visio, the goal isn't to push you towards the most expensive option — it's to find <strong>the one that makes sense for your business</strong>. An effective website rarely starts with "how many pages do you want?" but rather with <strong>"what do you need this site to do for you?"</strong>.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Si vous voulez estimer le budget le plus cohérent pour votre projet, partez de trois questions : <strong>quel est votre objectif</strong>, <strong>quel est votre niveau d'urgence</strong>, et <strong>combien vaut pour vous un nouveau client</strong> gagné grâce à votre présence en ligne ?</>
                  : <>To estimate the most sensible budget for your project, start with three questions: <strong>what's your goal</strong>, <strong>how urgently do you need it</strong>, and <strong>what's a new client worth to you</strong> — one gained through your online presence?</>}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="article-recap p-6 md:p-8 text-center">
                <p className="text-xl font-bold text-foreground mb-3">
                  {isFr
                    ? "Envie d'estimer le budget adapté à votre projet ?"
                    : "Want to estimate the right budget for your project?"}
                </p>
                <p className="text-muted-foreground mb-6">
                  {isFr
                    ? "Discutons ensemble de vos objectifs et trouvons la solution la plus cohérente pour votre activité."
                    : "Let's discuss your goals and find the solution that makes the most sense for your business."}
                </p>
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-background font-semibold px-8 py-3 rounded-full">
                    {isFr ? "Demander un devis gratuit" : "Request a free quote"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

          </article>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticleBudgetSiteWeb;

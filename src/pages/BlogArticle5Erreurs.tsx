import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, CheckCircle2, XCircle } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const BlogArticle5Erreurs = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const erreurs = isFr
    ? [
        "Pas d'objectif clair.",
        "Page d'accueil confuse.",
        "Mobile et performance ignorés.",
        "Contenu flou et centré sur vous.",
        "Pas de chemin clair vers la prise de contact.",
      ]
    : [
        "No clear goal.",
        "Cluttered homepage.",
        "Mobile and performance ignored.",
        "Vague, self-centred content.",
        "No clear path to getting in touch.",
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
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">{isFr ? "Article" : "Article"}</span>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{isFr ? "1 Déc 2025" : "1 Dec 2025"}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{isFr ? "8 min de lecture" : "8 min read"}</span></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isFr
                ? "5 erreurs courantes qui plombent votre site web (et comment les éviter)"
                : "5 common mistakes that are hurting your website (and how to fix them)"}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {isFr
                ? "Transformez votre site en véritable outil de développement, pas en simple carte de visite."
                : "Turn your website into a real growth tool — not just a digital business card."}
            </h2>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 md:pb-24">
        <div className="container-narrow">
          <article className="max-w-4xl article-card p-6 md:p-10 lg:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Pourquoi votre site web ne \"travaille\" pas vraiment pour vous" : "Why your website isn't really working for you"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Avoir un site web ne suffit plus. Beaucoup d'entreprises ont déjà une présence en ligne, mais leur site <strong>ne génère ni demandes de contact, ni rendez-vous, ni demandes de devis</strong>. Il reste là, comme une carte de visite figée, alors qu'il pourrait devenir un <strong>véritable levier de développement</strong>.</>
                  : <>Having a website is no longer enough. Many businesses already have an online presence, but their site <strong>generates no enquiries, no bookings, no quote requests</strong>. It just sits there like a static business card, when it could be a <strong>genuine growth engine</strong>.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Dans cet article, nous passons en revue <strong>5 erreurs très fréquentes</strong> que nous voyons sur les sites de TPE/PME et de studios, et surtout <strong>comment les éviter</strong> pour que votre site commence enfin à travailler pour vous.</>
                  : <>In this article, we review <strong>5 very common mistakes</strong> we see on small business and studio websites, and more importantly, <strong>how to fix them</strong> so your site finally starts working for you.</>}
              </p>
              
              <div className="article-callout p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                      <XCircle className="w-8 h-8 text-red-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">{isFr ? "Site fouillis, sans direction" : "Messy site, no direction"}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-amber-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">{isFr ? "Site clair, orienté action" : "Clear site, action-oriented"}</p>
                  </div>
                </div>
                <div className="article-callout p-6 border-l-4 border-primary mt-6">
                  <p className="text-sm text-muted-foreground italic">
                    {isFr
                      ? <>💡 Un site qui se contente d'exister… et un site qui <strong>donne envie de passer à l'action</strong>.</>
                      : <>💡 A site that merely exists… versus one that <strong>makes visitors want to take action</strong>.</>}
                  </p>
                </div>
              </div>
            </div>

            {/* Erreur 1 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Erreur 1 – Créer un site sans objectif clair" : "Mistake 1 – Building a website without a clear goal"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Beaucoup de sites ont été conçus autour d'une idée vague : "il nous faut un site vitrine". Le problème, c'est qu'un site <strong>sans objectif précis</strong> ne peut pas être efficace. On y trouve quelques pages génériques, mais nulle part on ne comprend ce que vous attendez concrètement de votre visiteur.</>
                  : <>Many sites were built around a vague idea: "we need a website." The problem is that a site <strong>without a specific goal</strong> can never be effective. It has a few generic pages, but nowhere does the visitor understand what you actually want them to do.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Sans objectif clair, <strong>impossible de savoir si votre site fonctionne</strong>. Vous ne pouvez pas mesurer si vous recevez assez de demandes, si les bons prospects vous contactent, ni ajuster votre contenu en conséquence.</>
                  : <>Without a clear goal, <strong>you can't tell whether your site is working</strong>. You can't measure if you're getting enough enquiries, if the right prospects are reaching out, or adjust your content accordingly.</>}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Comment corriger cette erreur" : "How to fix this"}
              </h3>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <>Définissez un <strong>objectif principal</strong> : prise de rendez-vous, demande de devis, demande d'appel découverte, inscription à une newsletter, etc.</>,
                  <>Identifiez <strong>1 ou 2 objectifs secondaires</strong> (par exemple téléchargement d'un PDF, consultation d'un portfolio, inscription à un webinar).</>,
                  <>Vérifiez que chaque page importante <strong>oriente vers cet objectif</strong> : CTA visibles, texte qui pousse naturellement vers la prise de contact.</>,
                ] : [
                  <>Define a <strong>primary goal</strong>: booking a call, requesting a quote, signing up for a newsletter, etc.</>,
                  <>Identify <strong>1–2 secondary goals</strong> (e.g. downloading a PDF, browsing a portfolio, registering for a webinar).</>,
                  <>Make sure every key page <strong>steers towards that goal</strong>: visible CTAs, copy that naturally guides visitors to get in touch.</>,
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
                    ? <>💡 Chaque page importante doit conduire clairement vers <strong>une action clé</strong>.</>
                    : <>💡 Every important page should clearly lead to <strong>one key action</strong>.</>}
                </p>
              </div>
            </div>

            {/* Erreur 2 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Erreur 2 – Une page d'accueil surchargée et confuse" : "Mistake 2 – A cluttered, confusing homepage"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>La page d'accueil est souvent traitée comme un <strong>grand fourre-tout</strong> : on y empile des blocs, des carrousels, des informations, des actualités. Résultat : un visiteur qui arrive ne comprend pas en quelques secondes <strong>qui vous êtes, ce que vous faites et pour qui</strong>.</>
                  : <>The homepage is often treated as a <strong>catch-all</strong>: blocks, carousels, news and information piled on top of each other. The result? A visitor can't tell within a few seconds <strong>who you are, what you do and who you do it for</strong>.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Quand le message clé n'est pas clair, l'utilisateur scrolle un peu, se perd, puis <strong>quitte le site</strong>. Non pas parce que votre offre est mauvaise, mais parce qu'elle n'a jamais été formulée de manière simple et lisible.</>
                  : <>When the core message isn't clear, the visitor scrolls a bit, gets lost, and <strong>leaves</strong>. Not because your offering is bad, but because it was never presented in a simple, readable way.</>}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Comment corriger cette erreur" : "How to fix this"}
              </h3>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <>Travaillez un <strong>message d'accroche clair</strong> (titre + sous-titre) qui répond à : "Qui êtes-vous ? Pour qui ? Et quel résultat principal apportez-vous ?"</>,
                  <>Structurez la page en <strong>blocs lisibles</strong> : présentation de votre valeur, services principaux, preuves, processus, appel à l'action.</>,
                  <><strong>Limitez le nombre d'éléments</strong> dans le menu et évitez les sections qui n'apportent rien à l'objectif principal.</>,
                ] : [
                  <>Craft a <strong>clear headline</strong> (title + subtitle) that answers: "Who are you? Who do you serve? What's the main outcome?"</>,
                  <>Structure the page into <strong>readable blocks</strong>: value proposition, core services, proof, process, call to action.</>,
                  <><strong>Limit the number of elements</strong> in the navigation and drop sections that don't serve the primary goal.</>,
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
                    ? <>💡 Une page d'accueil structurée comme un <strong>pitch clair</strong> plutôt qu'un fourre-tout d'informations.</>
                    : <>💡 A homepage structured as a <strong>clear pitch</strong> rather than an information dump.</>}
                </p>
              </div>
            </div>

            {/* Erreur 3 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Erreur 3 – Ignorer l'expérience mobile et la performance" : "Mistake 3 – Ignoring mobile experience and performance"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Un site peut être très joli sur un grand écran, mais <strong>complètement inutilisable sur un smartphone</strong>. Textes minuscules, boutons trop serrés, sections mal alignées… Sans parler des images trop lourdes qui ralentissent le chargement.</>
                  : <>A site can look great on a large screen but be <strong>completely unusable on a smartphone</strong>. Tiny text, cramped buttons, misaligned sections… not to mention oversized images that slow everything down.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Le problème, c'est qu'une <strong>grande partie de vos visiteurs</strong> arrivent aujourd'hui depuis leur téléphone. Si le site met trop de temps à charger ou semble cassé sur mobile, ils n'attendront pas : ils <strong>quittent la page</strong> et passent au suivant.</>
                  : <>The problem is that <strong>a large share of your visitors</strong> now browse on their phone. If the site takes too long to load or looks broken on mobile, they won't wait — they'll <strong>leave</strong> and move on.</>}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Comment corriger cette erreur" : "How to fix this"}
              </h3>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <>Pensez <strong>"mobile first"</strong> : textes lisibles, boutons cliquables sans zoomer, sections qui s'enchaînent de manière fluide.</>,
                  <><strong>Optimisez les images et vidéos</strong> : formats adaptés, compression, pas d'images en très haute définition pour un simple visuel de fond.</>,
                  <>Testez votre site sur <strong>de vrais appareils</strong> (pas seulement dans un simulateur) : prenez votre téléphone et essayez de faire une action complète.</>,
                ] : [
                  <>Think <strong>"mobile first"</strong>: readable text, tappable buttons, sections that flow smoothly.</>,
                  <><strong>Optimise images and videos</strong>: use the right formats, compress them, and avoid ultra-high-res images for simple backgrounds.</>,
                  <>Test your site on <strong>real devices</strong> (not just a simulator): pick up your phone and try to complete a full action.</>,
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
                    ? <>💡 Un site pensé pour le mobile <strong>renforce votre image professionnelle</strong> dès le premier contact.</>
                    : <>💡 A mobile-first site <strong>strengthens your professional image</strong> from the very first touchpoint.</>}
                </p>
              </div>
            </div>

            {/* Erreur 4 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Erreur 4 – Un contenu flou, centré sur vous plutôt que sur le client" : "Mistake 4 – Vague content focused on you rather than your client"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>La plupart des sites parlent beaucoup de "nous" : notre histoire, notre équipe, nos valeurs. C'est important, mais ce n'est pas ce que le visiteur cherche en premier. Ce qu'il veut comprendre, c'est : <strong>"Est-ce que cette personne peut m'aider avec mon problème ?"</strong></>
                  : <>Most websites talk a lot about "us": our story, our team, our values. That matters, but it's not what the visitor is looking for first. What they really want to know is: <strong>"Can this person help me with my problem?"</strong></>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Quand le contenu est flou, rempli de jargon ou trop centré sur l'entreprise, <strong>le prospect ne se reconnaît pas</strong>. Il ne voit pas ses enjeux ni ses objectifs dans ce que vous racontez. Il passe donc à un autre prestataire.</>
                  : <>When content is vague, full of jargon or too company-centric, <strong>prospects can't see themselves in it</strong>. They don't recognise their challenges or goals in what you're saying — so they move on to someone else.</>}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Comment corriger cette erreur" : "How to fix this"}
              </h3>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <>Reformulez vos textes en partant des <strong>problèmes de vos clients</strong> : manque de visibilité, site obsolète, image de marque peu cohérente.</>,
                  <>Mettez en avant les <strong>résultats concrets</strong> : plus de demandes, meilleure clarté de l'offre, meilleure perception de la marque.</>,
                  <>Utilisez un <strong>langage simple</strong>, sans jargon technique inutile, et ajoutez des cas clients, des avis et une FAQ.</>,
                ] : [
                  <>Rewrite your copy starting from your <strong>clients' problems</strong>: lack of visibility, outdated website, inconsistent branding.</>,
                  <>Highlight <strong>tangible results</strong>: more enquiries, clearer offering, stronger brand perception.</>,
                  <>Use <strong>plain language</strong> — no unnecessary jargon — and add case studies, reviews and a FAQ.</>,
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
                    ? <>💡 Les <strong>preuves concrètes</strong> parlent plus fort que les promesses génériques.</>
                    : <>💡 <strong>Concrete proof</strong> speaks louder than generic promises.</>}
                </p>
              </div>
            </div>

            {/* Erreur 5 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Erreur 5 – Ne pas guider clairement vers la prise de contact" : "Mistake 5 – No clear path to getting in touch"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Dernière erreur fréquente : le site <strong>n'indique jamais clairement la prochaine étape</strong>. Le formulaire est caché dans une sous-page, les boutons "Contact" sont noyés dans le menu, et il n'y a aucune indication sur ce qui se passe après la prise de contact.</>
                  : <>The last common mistake: the site <strong>never clearly indicates the next step</strong>. The form is buried in a sub-page, the "Contact" buttons are lost in the menu, and there's no indication of what happens after the visitor reaches out.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Même un visiteur convaincu par votre travail peut <strong>abandonner</strong> simplement parce qu'il ne sait pas comment engager la conversation, ou qu'il n'a pas envie de remplir un <strong>formulaire interminable</strong>.</>
                  : <>Even a visitor convinced by your work may <strong>give up</strong> simply because they don't know how to start a conversation, or they don't want to fill out an <strong>endless form</strong>.</>}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Comment corriger cette erreur" : "How to fix this"}
              </h3>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <>Ajoutez un <strong>appel à l'action clair et récurrent</strong> : "Parler de votre projet", "Demander un devis", "Réserver un appel de 20 minutes".</>,
                  <><strong>Simplifiez votre formulaire</strong> de contact : commencez avec les champs essentiels et posez les questions détaillées plus tard.</>,
                  <><strong>Rassurez</strong> en expliquant ce qui se passe après l'envoi : délai de réponse, format de l'échange, absence d'engagement immédiat.</>,
                ] : [
                  <>Add a <strong>clear, recurring call to action</strong>: "Talk about your project", "Request a quote", "Book a 20-minute call".</>,
                  <><strong>Simplify your contact form</strong>: start with the essentials and ask detailed questions later.</>,
                  <><strong>Reassure visitors</strong> by explaining what happens after they submit: response time, conversation format, no immediate commitment.</>,
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
                    ? <>💡 Un chemin de contact <strong>clair et rassurant</strong> augmente fortement vos chances d'être sollicité.</>
                    : <>💡 A <strong>clear and reassuring</strong> contact path dramatically increases your chances of being contacted.</>}
                </p>
              </div>
            </div>

            {/* Récapitulatif */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Récapitulatif : les 5 erreurs qui plombent votre site" : "Recap: the 5 mistakes hurting your website"}
              </h2>
              <div className="article-recap p-6 md:p-8">
                <ul className="space-y-4">
                  {erreurs.map((erreur, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-lg text-muted-foreground"><strong>{erreur}</strong></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Conclusion / CTA */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Faire de votre site un allié, pas une contrainte" : "Make your website an ally, not a burden"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Un site web n'est pas une obligation administrative à remplir une fois pour toutes. C'est un <strong>outil de développement</strong>, un point de contact avec vos futurs clients, et un reflet de la qualité de votre travail. S'il est bien conçu, il vous aide à <strong>attirer des demandes qualifiées</strong> et à convertir des visiteurs en prospects sans effort constant.</>
                  : <>A website isn't an administrative box to tick once and forget. It's a <strong>growth tool</strong>, a touchpoint with future clients, and a reflection of the quality of your work. When it's well designed, it helps you <strong>attract qualified leads</strong> and convert visitors into prospects without constant effort.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {isFr
                  ? <>En corrigeant les 5 erreurs de cet article, vous passez d'un site "carte de visite" à <strong>un site qui bosse pour vous</strong>. Avec Nova Visio, nous vous accompagnons à clarifier votre offre, structurer votre message, et créer un site vraiment aligné avec vos objectifs.</>
                  : <>By fixing these 5 mistakes, you go from a "digital business card" to <strong>a website that works for you</strong>. At Nova Visio, we help you clarify your offering, structure your message, and build a site that's truly aligned with your goals.</>}
              </p>

              <div className="text-center">
                <Button asChild size="lg" variant="gold" className="text-base px-8 py-6">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    {isFr ? "Parler de mon projet" : "Talk about my project"}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  {isFr
                    ? "Un premier échange pour faire le point sur votre site actuel et voir comment le faire évoluer."
                    : "A first conversation to review your current site and explore how to improve it."}
                </p>
              </div>
            </div>

          </article>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticle5Erreurs;

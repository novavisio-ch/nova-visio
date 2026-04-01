import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, Target, Users, Lightbulb, ListChecks, Settings, FileText } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const BlogArticleClarifierOffre = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const recapItems = isFr
    ? [
        { icon: Users, text: "À qui vous parlez : vos clients idéaux et leurs contextes." },
        { icon: Lightbulb, text: "La valeur de votre offre : ce que votre travail change concrètement pour eux." },
        { icon: ListChecks, text: "La structure de vos offres : 3–4 propositions claires, pas un catalogue infini." },
        { icon: Settings, text: "Votre processus : comment ça se passe, étape par étape." },
        { icon: FileText, text: "Les contenus essentiels : messages clés, offres, preuves, présentation." },
      ]
    : [
        { icon: Users, text: "Who you're talking to: your ideal clients and their situations." },
        { icon: Lightbulb, text: "The value of your offering: what your work actually changes for them." },
        { icon: ListChecks, text: "Your offer structure: 3–4 clear options, not an endless catalogue." },
        { icon: Settings, text: "Your process: how things work, step by step." },
        { icon: FileText, text: "Essential content: key messages, offers, proof, presentation." },
      ];

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
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{isFr ? "3 Nov 2025" : "3 Nov 2025"}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{isFr ? "10 min de lecture" : "10 min read"}</span></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isFr ? "Clarifier votre offre avant de créer votre site web" : "Clarify your offering before building your website"}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {isFr
                ? "Un site efficace commence bien avant le design : il commence avec une offre claire."
                : "An effective website starts long before design — it starts with a clear offering."}
            </h2>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-narrow">
          <article className="max-w-4xl article-card p-6 md:p-10 lg:p-12">
            
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Pourquoi votre site ne peut pas compenser une offre floue" : "Why your website can't compensate for a vague offering"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>On pense souvent qu'un "beau site" va régler un problème de visibilité ou de ventes. En réalité, si votre offre est floue, <strong>même le meilleur webdesign du monde ne pourra pas la rendre convaincante</strong>. Un site n'est qu'un amplificateur : il clarifie, met en valeur et diffuse ce que vous avez déjà défini en amont. S'il n'y a pas de message clair à amplifier, il <strong>amplifie surtout la confusion</strong>.</>
                  : <>People often think a "nice-looking site" will solve a visibility or sales problem. In reality, if your offering is vague, <strong>even the best web design in the world can't make it convincing</strong>. A website is just an amplifier: it clarifies, showcases and broadcasts what you've already defined. If there's no clear message to amplify, it <strong>mostly amplifies the confusion</strong>.</>}
              </p>
              
              <div className="article-callout p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                      <Target className="w-8 h-8 text-red-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">{isFr ? "Offre floue = site confus" : "Vague offering = confusing site"}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                      <Target className="w-8 h-8 text-amber-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">{isFr ? "Offre claire = site efficace" : "Clear offering = effective site"}</p>
                  </div>
                </div>
                <div className="article-callout p-6 border-l-4 border-primary mt-6">
                  <p className="text-sm text-muted-foreground italic">
                    {isFr
                      ? <>💡 Avant d'investir dans un site, <strong>alignez d'abord vos idées, vos offres et vos messages</strong>.</>
                      : <>💡 Before investing in a website, <strong>first align your ideas, your offers and your messages</strong>.</>}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Étape 1 : Identifier clairement vos clients idéaux" : "Step 1: Clearly identify your ideal clients"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>La première question à vous poser n'est pas "À quoi va ressembler mon site ?", mais <strong>"À qui s'adresse-t-il ?"</strong>. Voulez-vous parler à des TPE locales, à des créateurs indépendants, à des studios, à des associations, à des coachs ? Selon la cible, les mots, les exemples et même la structure du site vont changer.</>
                  : <>The first question to ask yourself isn't "What will my site look like?" but rather <strong>"Who is it for?"</strong>. Are you speaking to local small businesses, independent creators, studios, charities, coaches? Depending on the audience, the words, examples and even the site structure will change.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Quand vous essayez de parler à tout le monde, <strong>vous ne touchez vraiment personne</strong>. Un visiteur doit pouvoir se dire en quelques secondes : "C'est pour moi, cette personne comprend mon contexte".</>
                  : <>When you try to speak to everyone, <strong>you truly reach no one</strong>. A visitor should be able to think within seconds: "This is for me — they understand my situation."</>}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Questions pratiques pour clarifier votre cible" : "Practical questions to clarify your target"}
              </h3>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <>Qui sont mes <strong>meilleurs clients actuels</strong> (ceux avec lesquels j'aime travailler et qui tirent le plus de valeur de mon travail) ?</>,
                  <>Quels <strong>types de projets</strong> je veux attirer davantage : sites vitrines, refontes complètes, identités globales, lancements ?</>,
                  <>Dans quel <strong>secteur ou dans quelle situation</strong> se trouvent-ils (lancement, repositionnement, croissance, refonte) ?</>,
                ] : [
                  <>Who are my <strong>best current clients</strong> (the ones I enjoy working with and who get the most value from my work)?</>,
                  <>What <strong>types of projects</strong> do I want more of: showcase sites, full redesigns, complete brand identities, launches?</>,
                  <>What <strong>industry or situation</strong> are they in (launching, repositioning, growing, rebranding)?</>,
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
                    ? <>💡 Plus votre cible est claire, plus votre site peut <strong>lui parler directement</strong>.</>
                    : <>💡 The clearer your target, the more your site can <strong>speak directly to them</strong>.</>}
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Étape 2 : Formuler ce que vous apportez vraiment" : "Step 2: Articulate what you truly deliver"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>"Création de site web" ou "identité visuelle" sont des intitulés que l'on retrouve partout. Ce qui va convaincre un prospect, ce n'est pas seulement ce que vous faites, mais <strong>ce que cela change pour lui</strong>.</>
                  : <>"Website design" or "visual identity" are labels you find everywhere. What actually convinces a prospect isn't just what you do, but <strong>what it changes for them</strong>.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Une offre claire met en avant des <strong>bénéfices concrets</strong>, pas uniquement une liste de livrables. Au lieu de parler seulement de "pages, logos, typographies", parlez de <strong>"clarté, confiance, cohérence, conversion"</strong>.</>
                  : <>A clear offering highlights <strong>tangible benefits</strong>, not just a list of deliverables. Instead of talking only about "pages, logos, typefaces", talk about <strong>"clarity, trust, consistency, conversion"</strong>.</>}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Exemples de reformulation orientée bénéfices" : "Benefit-oriented rewording examples"}
              </h3>
              <div className="space-y-4 mb-6">
                {(isFr ? [
                  { before: "Création de site vitrine pour TPE et indépendants", after: "Concevoir un site qui explique clairement ce que vous faites et donne envie de vous contacter." },
                  { before: "Refonte d'identité visuelle", after: "Aligner votre image avec le niveau réel de votre activité pour être perçu à votre juste valeur." },
                  { before: "Accompagnement stratégie digitale", after: "Clarifier votre positionnement et vos messages pour attirer des clients qui vous ressemblent." },
                ] : [
                  { before: "Showcase website for small businesses and freelancers", after: "Build a site that clearly explains what you do and makes people want to get in touch." },
                  { before: "Visual identity redesign", after: "Align your image with the true level of your business so you're perceived at your real value." },
                  { before: "Digital strategy consulting", after: "Clarify your positioning and messaging to attract clients who are the right fit." },
                ]).map((ex, i) => (
                  <div key={i} className="article-callout p-4">
                    <p className="text-sm text-muted-foreground mb-1">{isFr ? "Avant :" : "Before:"}</p>
                    <p className="text-muted-foreground mb-2">{ex.before}</p>
                    <p className="text-sm text-muted-foreground mb-1">{isFr ? "Après :" : "After:"}</p>
                    <p className="text-primary font-medium"><strong>{ex.after}</strong></p>
                  </div>
                ))}
              </div>

              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  {isFr
                    ? <>💡 Un simple <strong>changement de formulation</strong> peut rendre votre offre beaucoup plus évidente.</>
                    : <>💡 A simple <strong>change in wording</strong> can make your offering far more compelling.</>}
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Étape 3 : Limiter le nombre d'offres pour gagner en clarté" : "Step 3: Reduce your number of offers for greater clarity"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Beaucoup de sites alignent une <strong>liste interminable de services</strong>. Pour le visiteur, c'est difficile de comprendre ce qui est vraiment au cœur de votre expertise. <strong>Trop d'options créent de la confusion</strong>.</>
                  : <>Many websites list an <strong>endless catalogue of services</strong>. For visitors, it's hard to tell what's really at the core of your expertise. <strong>Too many options create confusion</strong>.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Structurer vos offres, c'est accepter de <strong>simplifier</strong> : regrouper, nommer clairement et réduire le nombre de possibilités visibles.</>
                  : <>Structuring your offers means accepting the need to <strong>simplify</strong>: group them, name them clearly and reduce the visible number of options.</>}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Comment simplifier vos offres" : "How to simplify your offers"}
              </h3>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <>Regroupez vos services en <strong>3 à 4 offres principales</strong> (par exemple : Site web, Identité visuelle, Pack complet, Accompagnement).</>,
                  <>Donnez-leur un <strong>nom et un positionnement clairs</strong> (à qui c'est destiné, dans quel cas c'est pertinent).</>,
                  <>Indiquez pour chaque offre : le <strong>résultat principal</strong>, ce qui est inclus, et ce qui n'est volontairement pas inclus.</>,
                ] : [
                  <>Group your services into <strong>3–4 main offers</strong> (e.g. Website, Visual Identity, Full Package, Consulting).</>,
                  <>Give each one a <strong>clear name and positioning</strong> (who it's for, when it's relevant).</>,
                  <>For each offer, state: the <strong>main outcome</strong>, what's included, and what's intentionally not included.</>,
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
                    ? <>💡 Une offre claire aide vos visiteurs à <strong>se repérer et à se projeter</strong> rapidement.</>
                    : <>💡 A clear offering helps visitors <strong>find their bearings and see themselves working with you</strong> quickly.</>}
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Étape 4 : Montrer comment vous travaillez, étape par étape" : "Step 4: Show how you work, step by step"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Même quand une offre donne envie, beaucoup de prospects n'osent pas passer à l'action parce qu'ils <strong>ne savent pas ce qui va se passer ensuite</strong>. <strong>L'inconnu crée un blocage</strong>.</>
                  : <>Even when an offering is appealing, many prospects hesitate because they <strong>don't know what happens next</strong>. <strong>The unknown creates a roadblock</strong>.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Un <strong>processus clair rassure</strong> : il montre que vous avez une méthode, que vous maîtrisez votre façon de travailler et que vous guidez vos clients du début à la fin.</>
                  : <>A <strong>clear process reassures</strong>: it shows you have a method, that you're in control of how you work, and that you guide your clients from start to finish.</>}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Un exemple de processus simple à présenter sur votre site" : "A simple process example to feature on your site"}
              </h3>
              <div className="space-y-4 mb-6">
                {(isFr ? [
                  { title: "Appel découverte", desc: "Comprendre votre activité, vos besoins et vos priorités." },
                  { title: "Clarification de l'offre et du positionnement", desc: "Aligner vos messages et vos objectifs." },
                  { title: "Conception (identité + site)", desc: "Traduire votre stratégie en design et en structure de pages." },
                  { title: "Mise en ligne et ajustements", desc: "Déploiement, tests et améliorations après les premiers retours." },
                ] : [
                  { title: "Discovery call", desc: "Understand your business, needs and priorities." },
                  { title: "Offering and positioning clarity", desc: "Align your messages and goals." },
                  { title: "Design (identity + site)", desc: "Translate your strategy into design and page structure." },
                  { title: "Launch and refinements", desc: "Deployment, testing and improvements based on initial feedback." },
                ]).map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 article-callout rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-background font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground"><strong>{step.title}</strong></p>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  {isFr
                    ? <>💡 Un processus lisible <strong>rassure vos prospects</strong> et fluidifie vos projets.</>
                    : <>💡 A readable process <strong>reassures your prospects</strong> and streamlines your projects.</>}
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Étape 5 : Écrire l'essentiel avant de penser aux pixels" : "Step 5: Write the essentials before thinking about pixels"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Un blocage courant dans la création de site vient du <strong>contenu</strong> : textes, photos, cas clients, offres. Si vous attaquez le design sans avoir une idée claire de ce que vous allez dire, le projet prend du retard.</>
                  : <>A common bottleneck in website creation is <strong>content</strong>: copy, photos, case studies, offers. If you dive into design without a clear idea of what you're going to say, the project stalls.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Préparer vos contenus ne signifie pas rédiger un roman, mais avoir des <strong>bases solides</strong> : messages clés, argumentaire principal, quelques cas clients, une bio courte, des visuels cohérents.</>
                  : <>Preparing your content doesn't mean writing a novel, but having <strong>solid foundations</strong>: key messages, main arguments, a few case studies, a short bio, consistent visuals.</>}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Contenus à préparer en priorité" : "Content to prepare first"}
              </h3>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <><strong>3 à 5 phrases</strong> qui résument ce que vous faites et pour qui.</>,
                  <>Une <strong>description claire</strong> pour chaque offre (résultat, pour qui, ce qui est inclus).</>,
                  <><strong>1 à 3 témoignages</strong> ou mini cas clients.</>,
                  <>Une courte présentation <strong>"À propos"</strong> centrée sur la valeur pour vos clients.</>,
                ] : [
                  <><strong>3–5 sentences</strong> summarising what you do and who you do it for.</>,
                  <>A <strong>clear description</strong> for each offer (outcome, who it's for, what's included).</>,
                  <><strong>1–3 testimonials</strong> or mini case studies.</>,
                  <>A short <strong>"About"</strong> section focused on the value you bring to clients.</>,
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
                    ? <>💡 Des contenus préparés en amont <strong>accélèrent la création</strong> de votre site et améliorent le résultat final.</>
                    : <>💡 Content prepared upfront <strong>speeds up the build</strong> and improves the final result.</>}
                </p>
              </div>
            </div>

            {/* Récapitulatif */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Ce qu'il faut avoir clarifié avant de lancer votre site" : "What you need to have clarified before launching your site"}
              </h2>
              <div className="article-recap p-6 md:p-8">
                <ul className="space-y-4">
                  {recapItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-lg text-muted-foreground"><strong>{item.text.split(":")[0]}:</strong>{item.text.split(":").slice(1).join(":")}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Un site clair commence par une offre claire" : "A clear website starts with a clear offering"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Clarifier votre offre avant de créer votre site, ce n'est pas une étape "en plus", c'est <strong>la fondation de tout le reste</strong>.</>
                  : <>Clarifying your offering before building your site isn't an "extra step" — it's <strong>the foundation of everything else</strong>.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {isFr
                  ? <>Si vous avez l'impression que votre offre est encore <strong>un peu floue ou difficile à expliquer</strong>, c'est probablement le bon moment d'y mettre de l'ordre. Avec Nova Visio, nous vous accompagnons à clarifier vos offres, votre message et votre processus, puis à les traduire dans un site et une identité visuelle qui <strong>vous ressemblent vraiment</strong>.</>
                  : <>If you feel your offering is still <strong>a bit vague or hard to explain</strong>, it's probably the right time to get things in order. At Nova Visio, we help you clarify your offers, your message and your process, then translate them into a website and visual identity that <strong>truly reflect who you are</strong>.</>}
              </p>

              <div className="text-center">
                <Button asChild size="lg" variant="gold" className="text-base px-8 py-6">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    {isFr ? "Clarifier mon offre avec Nova Visio" : "Clarify my offering with Nova Visio"}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  {isFr
                    ? "Un premier échange pour faire le point sur votre situation actuelle et voir comment votre site peut vraiment soutenir votre activité."
                    : "A first conversation to take stock of where you are and explore how your website can truly support your business."}
                </p>
              </div>
            </div>

          </article>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticleClarifierOffre;

import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, CheckCircle2, Target, Users, Lightbulb, ListChecks, Settings, FileText } from "lucide-react";

const BlogArticleClarifierOffre = () => {
  const recapItems = [
    { icon: Users, text: "À qui vous parlez : vos clients idéaux et leurs contextes." },
    { icon: Lightbulb, text: "La valeur de votre offre : ce que votre travail change concrètement pour eux." },
    { icon: ListChecks, text: "La structure de vos offres : 3–4 propositions claires, pas un catalogue infini." },
    { icon: Settings, text: "Votre processus : comment ça se passe, étape par étape." },
    { icon: FileText, text: "Les contenus essentiels : messages clés, offres, preuves, présentation." },
  ];

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
                <span>3 Nov 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min de lecture</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Clarifier votre offre avant de créer votre site web
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Un site efficace commence bien avant le design : il commence avec une offre claire.
            </h2>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 md:pb-24">
        <div className="container-narrow">
          <article className="max-w-4xl bg-white rounded-2xl p-6 md:p-10 lg:p-12 shadow-lg">
            
            {/* Section 1 - Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Pourquoi votre site ne peut pas compenser une offre floue
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                On pense souvent qu'un "beau site" va régler un problème de visibilité ou de ventes. En réalité, si votre offre est floue, même le meilleur webdesign du monde ne pourra pas la rendre convaincante. Un site n'est qu'un amplificateur : il clarifie, met en valeur et diffuse ce que vous avez déjà défini en amont. S'il n'y a pas de message clair à amplifier, il amplifie surtout la confusion.
              </p>
              
              {/* Illustration */}
              <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                      <Target className="w-8 h-8 text-red-500" />
                    </div>
                    <p className="text-sm text-gray-600">Offre floue = site confus</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                      <Target className="w-8 h-8 text-amber-600" />
                    </div>
                    <p className="text-sm text-gray-600">Offre claire = site efficace</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary mt-6">
                  <p className="text-sm text-gray-600 italic">
                    💡 Avant d'investir dans un site, alignez d'abord vos idées, vos offres et vos messages.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 - Étape 1 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Étape 1 : Identifier clairement vos clients idéaux
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La première question à vous poser n'est pas "À quoi va ressembler mon site ?", mais "À qui s'adresse-t-il ?". Voulez-vous parler à des TPE locales, à des créateurs indépendants, à des studios, à des associations, à des coachs ? Selon la cible, les mots, les exemples, les objections et même la structure du site vont changer.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Quand vous essayez de parler à tout le monde, vous ne touchez vraiment personne. Un visiteur doit pouvoir se dire en quelques secondes : "C'est pour moi, cette personne comprend mon contexte". Sans ce sentiment de reconnaissance, il part chercher un prestataire qui lui ressemble davantage.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Questions pratiques pour clarifier votre cible
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Qui sont mes meilleurs clients actuels (ceux avec lesquels j'aime travailler et qui tirent le plus de valeur de mon travail) ?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Quels types de projets je veux attirer davantage : sites vitrines, refontes complètes, identités globales, lancements de nouvelles offres ?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Dans quel secteur ou dans quelle situation se trouvent-ils (lancement, repositionnement, croissance, refonte) ?</span>
                </li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm text-gray-600 italic">
                  💡 Plus votre cible est claire, plus votre site peut lui parler directement.
                </p>
              </div>
            </div>

            {/* Section 3 - Étape 2 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Étape 2 : Formuler ce que vous apportez vraiment
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                "Création de site web" ou "identité visuelle" sont des intitulés que l'on retrouve partout. Ce qui va convaincre un prospect, ce n'est pas seulement ce que vous faites, mais ce que cela change pour lui. Aide-t-il ses clients à vendre plus, à être plus crédibles, à se démarquer de la concurrence, à mieux expliquer ce qu'ils font ?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Une offre claire met en avant des bénéfices concrets, pas uniquement une liste de livrables. Au lieu de parler seulement de "pages, logos, typographies", parlez de "clarté, confiance, cohérence, conversion". C'est ce langage-là que vos prospects comprennent et recherchent.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Exemples de reformulation orientée bénéfices
              </h3>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Avant :</p>
                  <p className="text-gray-600 mb-2">"Création de site vitrine pour TPE et indépendants"</p>
                  <p className="text-sm text-gray-500 mb-1">Après :</p>
                  <p className="text-amber-700 font-medium">"Concevoir un site qui explique clairement ce que vous faites et donne envie de vous contacter."</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Avant :</p>
                  <p className="text-gray-600 mb-2">"Refonte d'identité visuelle"</p>
                  <p className="text-sm text-gray-500 mb-1">Après :</p>
                  <p className="text-amber-700 font-medium">"Aligner votre image avec le niveau réel de votre activité pour être perçu à votre juste valeur."</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Avant :</p>
                  <p className="text-gray-600 mb-2">"Accompagnement stratégie digitale"</p>
                  <p className="text-sm text-gray-500 mb-1">Après :</p>
                  <p className="text-amber-700 font-medium">"Clarifier votre positionnement et vos messages pour attirer des clients qui vous ressemblent."</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm text-gray-600 italic">
                  💡 Un simple changement de formulation peut rendre votre offre beaucoup plus évidente.
                </p>
              </div>
            </div>

            {/* Section 4 - Étape 3 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Étape 3 : Limiter le nombre d'offres pour gagner en clarté
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Beaucoup de sites alignent une liste interminable de services : logo, cartes de visite, site, SEO, réseaux sociaux, print, etc. Pour le visiteur, c'est difficile de comprendre ce qui est vraiment au cœur de votre expertise. Trop d'options créent de la confusion et donnent parfois l'impression que vous faites "un peu de tout".
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Structurer vos offres, c'est accepter de simplifier : regrouper, nommer clairement et réduire le nombre de possibilités visibles. Cela ne vous empêche pas de proposer des ajustements sur mesure, mais vous donne une base lisible qui rassure les prospects.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Comment simplifier vos offres
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Regroupez vos services en 3 à 4 offres principales (par exemple : Site web, Identité visuelle, Pack complet, Accompagnement).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Donnez-leur un nom et un positionnement clairs (à qui c'est destiné, dans quel cas c'est pertinent).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Indiquez pour chaque offre : le résultat principal, ce qui est inclus, et ce qui n'est volontairement pas inclus.</span>
                </li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm text-gray-600 italic">
                  💡 Une offre claire aide vos visiteurs à se repérer et à se projeter rapidement.
                </p>
              </div>
            </div>

            {/* Section 5 - Étape 4 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Étape 4 : Montrer comment vous travaillez, étape par étape
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Même quand une offre donne envie, beaucoup de prospects n'osent pas passer à l'action parce qu'ils ne savent pas ce qui va se passer ensuite. Combien de temps ça dure, quelles sont les étapes, quel niveau d'implication on attend d'eux, comment se passent les échanges, etc. L'inconnu crée un blocage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Un processus clair rassure : il montre que vous avez une méthode, que vous maîtrisez votre façon de travailler et que vous guidez vos clients du début à la fin. Cela vous distingue de ceux qui "improvisent" projet par projet.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Un exemple de processus simple à présenter sur votre site
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-background font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Appel découverte</p>
                    <p className="text-sm text-gray-600">Comprendre votre activité, vos besoins et vos priorités.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-background font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Clarification de l'offre et du positionnement</p>
                    <p className="text-sm text-gray-600">Aligner vos messages et vos objectifs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-background font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Conception (identité + site)</p>
                    <p className="text-sm text-gray-600">Traduire votre stratégie en design et en structure de pages.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-background font-bold text-sm">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Mise en ligne et ajustements</p>
                    <p className="text-sm text-gray-600">Déploiement, tests et améliorations après les premiers retours.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm text-gray-600 italic">
                  💡 Un processus lisible rassure vos prospects et fluidifie vos projets.
                </p>
              </div>
            </div>

            {/* Section 6 - Étape 5 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Étape 5 : Écrire l'essentiel avant de penser aux pixels
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Un blocage courant dans la création de site vient du contenu : textes, photos, cas clients, offres. Si vous attaquez le design sans avoir une idée claire de ce que vous allez dire, le projet prend du retard, et vous finissez avec des pages remplies à la va-vite.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Préparer vos contenus ne signifie pas rédiger un roman, mais avoir des bases solides : messages clés, argumentaire principal, quelques cas clients, une bio courte, des visuels cohérents. Sur cette base, le design devient un travail d'habillage et de mise en valeur, pas un sauvetage.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Contenus à préparer en priorité
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">3 à 5 phrases qui résument ce que vous faites et pour qui.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Une description claire pour chaque offre (résultat, pour qui, ce qui est inclus).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">1 à 3 témoignages ou mini cas clients.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Une courte présentation "À propos" centrée sur la valeur pour vos clients.</span>
                </li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm text-gray-600 italic">
                  💡 Des contenus préparés en amont accélèrent la création de votre site et améliorent le résultat final.
                </p>
              </div>
            </div>

            {/* Section 7 - Récapitulatif */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Ce qu'il faut avoir clarifié avant de lancer votre site
              </h2>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 md:p-8">
                <ul className="space-y-4">
                  {recapItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-lg text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 8 - Conclusion / CTA */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Un site clair commence par une offre claire
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Clarifier votre offre avant de créer votre site, ce n'est pas une étape "en plus", c'est la fondation de tout le reste. Un site bien conçu amplifie ce travail : il met en forme, en scène et en mouvement ce que vous avez décidé d'assumer sur votre positionnement, vos offres et votre façon de travailler.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Si vous avez l'impression que votre offre est encore un peu floue ou difficile à expliquer, c'est probablement le bon moment d'y mettre de l'ordre avant d'investir dans un nouveau site. Avec Nova Visio, nous vous accompagnons à clarifier vos offres, votre message et votre processus, puis à les traduire dans un site et une identité visuelle qui vous ressemblent vraiment.
              </p>

              <div className="text-center">
                <Button asChild size="lg" variant="gold" className="text-base px-8 py-6">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Clarifier mon offre avec Nova Visio
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Un premier échange pour faire le point sur votre situation actuelle et voir comment votre site peut vraiment soutenir votre activité.
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

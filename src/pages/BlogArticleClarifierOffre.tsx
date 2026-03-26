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
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Retour aux articles
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">Article</span>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>3 Nov 2025</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>10 min de lecture</span></div>
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
            
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Pourquoi votre site ne peut pas compenser une offre floue
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                On pense souvent qu'un "beau site" va régler un problème de visibilité ou de ventes. En réalité, si votre offre est floue, <strong>même le meilleur webdesign du monde ne pourra pas la rendre convaincante</strong>. Un site n'est qu'un amplificateur : il clarifie, met en valeur et diffuse ce que vous avez déjà défini en amont. S'il n'y a pas de message clair à amplifier, il <strong>amplifie surtout la confusion</strong>.
              </p>
              
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
                    💡 Avant d'investir dans un site, <strong>alignez d'abord vos idées, vos offres et vos messages</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Étape 1 : Identifier clairement vos clients idéaux
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La première question à vous poser n'est pas "À quoi va ressembler mon site ?", mais <strong>"À qui s'adresse-t-il ?"</strong>. Voulez-vous parler à des TPE locales, à des créateurs indépendants, à des studios, à des associations, à des coachs ? Selon la cible, les mots, les exemples et même la structure du site vont changer.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Quand vous essayez de parler à tout le monde, <strong>vous ne touchez vraiment personne</strong>. Un visiteur doit pouvoir se dire en quelques secondes : "C'est pour moi, cette personne comprend mon contexte".
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Questions pratiques pour clarifier votre cible
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Qui sont mes <strong>meilleurs clients actuels</strong> (ceux avec lesquels j'aime travailler et qui tirent le plus de valeur de mon travail) ?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Quels <strong>types de projets</strong> je veux attirer davantage : sites vitrines, refontes complètes, identités globales, lancements ?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Dans quel <strong>secteur ou dans quelle situation</strong> se trouvent-ils (lancement, repositionnement, croissance, refonte) ?</span>
                </li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm text-gray-600 italic">
                  💡 Plus votre cible est claire, plus votre site peut <strong>lui parler directement</strong>.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Étape 2 : Formuler ce que vous apportez vraiment
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                "Création de site web" ou "identité visuelle" sont des intitulés que l'on retrouve partout. Ce qui va convaincre un prospect, ce n'est pas seulement ce que vous faites, mais <strong>ce que cela change pour lui</strong>. Aide-t-il ses clients à vendre plus, à être plus crédibles, à se démarquer ?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Une offre claire met en avant des <strong>bénéfices concrets</strong>, pas uniquement une liste de livrables. Au lieu de parler seulement de "pages, logos, typographies", parlez de <strong>"clarté, confiance, cohérence, conversion"</strong>.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Exemples de reformulation orientée bénéfices
              </h3>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Avant :</p>
                  <p className="text-gray-600 mb-2">"Création de site vitrine pour TPE et indépendants"</p>
                  <p className="text-sm text-gray-500 mb-1">Après :</p>
                  <p className="text-amber-700 font-medium">"Concevoir un site qui <strong>explique clairement</strong> ce que vous faites et <strong>donne envie de vous contacter</strong>."</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Avant :</p>
                  <p className="text-gray-600 mb-2">"Refonte d'identité visuelle"</p>
                  <p className="text-sm text-gray-500 mb-1">Après :</p>
                  <p className="text-amber-700 font-medium">"Aligner votre image avec le <strong>niveau réel de votre activité</strong> pour être perçu à votre juste valeur."</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Avant :</p>
                  <p className="text-gray-600 mb-2">"Accompagnement stratégie digitale"</p>
                  <p className="text-sm text-gray-500 mb-1">Après :</p>
                  <p className="text-amber-700 font-medium">"Clarifier votre <strong>positionnement et vos messages</strong> pour attirer des clients qui vous ressemblent."</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm text-gray-600 italic">
                  💡 Un simple <strong>changement de formulation</strong> peut rendre votre offre beaucoup plus évidente.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Étape 3 : Limiter le nombre d'offres pour gagner en clarté
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Beaucoup de sites alignent une <strong>liste interminable de services</strong> : logo, cartes de visite, site, SEO, réseaux sociaux, print, etc. Pour le visiteur, c'est difficile de comprendre ce qui est vraiment au cœur de votre expertise. <strong>Trop d'options créent de la confusion</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Structurer vos offres, c'est accepter de <strong>simplifier</strong> : regrouper, nommer clairement et réduire le nombre de possibilités visibles. Cela ne vous empêche pas de proposer des ajustements sur mesure, mais vous donne une <strong>base lisible</strong> qui rassure les prospects.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Comment simplifier vos offres
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Regroupez vos services en <strong>3 à 4 offres principales</strong> (par exemple : Site web, Identité visuelle, Pack complet, Accompagnement).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Donnez-leur un <strong>nom et un positionnement clairs</strong> (à qui c'est destiné, dans quel cas c'est pertinent).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Indiquez pour chaque offre : le <strong>résultat principal</strong>, ce qui est inclus, et ce qui n'est volontairement pas inclus.</span>
                </li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm text-gray-600 italic">
                  💡 Une offre claire aide vos visiteurs à <strong>se repérer et à se projeter</strong> rapidement.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Étape 4 : Montrer comment vous travaillez, étape par étape
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Même quand une offre donne envie, beaucoup de prospects n'osent pas passer à l'action parce qu'ils <strong>ne savent pas ce qui va se passer ensuite</strong>. Combien de temps ça dure, quelles sont les étapes, quel niveau d'implication on attend d'eux. <strong>L'inconnu crée un blocage</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Un <strong>processus clair rassure</strong> : il montre que vous avez une méthode, que vous maîtrisez votre façon de travailler et que vous guidez vos clients du début à la fin.
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
                    <p className="font-medium text-gray-900"><strong>Appel découverte</strong></p>
                    <p className="text-sm text-gray-600">Comprendre votre activité, vos besoins et vos priorités.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-background font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900"><strong>Clarification de l'offre</strong> et du positionnement</p>
                    <p className="text-sm text-gray-600">Aligner vos messages et vos objectifs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-background font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900"><strong>Conception</strong> (identité + site)</p>
                    <p className="text-sm text-gray-600">Traduire votre stratégie en design et en structure de pages.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-background font-bold text-sm">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900"><strong>Mise en ligne</strong> et ajustements</p>
                    <p className="text-sm text-gray-600">Déploiement, tests et améliorations après les premiers retours.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm text-gray-600 italic">
                  💡 Un processus lisible <strong>rassure vos prospects</strong> et fluidifie vos projets.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D1C084' }}>
                Étape 5 : Écrire l'essentiel avant de penser aux pixels
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Un blocage courant dans la création de site vient du <strong>contenu</strong> : textes, photos, cas clients, offres. Si vous attaquez le design sans avoir une idée claire de ce que vous allez dire, le projet prend du retard, et vous finissez avec des pages <strong>remplies à la va-vite</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Préparer vos contenus ne signifie pas rédiger un roman, mais avoir des <strong>bases solides</strong> : messages clés, argumentaire principal, quelques cas clients, une bio courte, des visuels cohérents. Sur cette base, le design devient un travail d'habillage et de mise en valeur.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Contenus à préparer en priorité
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700"><strong>3 à 5 phrases</strong> qui résument ce que vous faites et pour qui.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Une <strong>description claire</strong> pour chaque offre (résultat, pour qui, ce qui est inclus).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700"><strong>1 à 3 témoignages</strong> ou mini cas clients.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Une courte présentation <strong>"À propos"</strong> centrée sur la valeur pour vos clients.</span>
                </li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm text-gray-600 italic">
                  💡 Des contenus préparés en amont <strong>accélèrent la création</strong> de votre site et améliorent le résultat final.
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
                      <span className="text-lg text-gray-700"><strong>{item.text.split(":")[0]}:</strong>{item.text.split(":").slice(1).join(":")}</span>
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
                Clarifier votre offre avant de créer votre site, ce n'est pas une étape "en plus", c'est <strong>la fondation de tout le reste</strong>. Un site bien conçu amplifie ce travail : il met en forme, en scène et en mouvement ce que vous avez décidé d'assumer.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Si vous avez l'impression que votre offre est encore <strong>un peu floue ou difficile à expliquer</strong>, c'est probablement le bon moment d'y mettre de l'ordre. Avec Nova Visio, nous vous accompagnons à clarifier vos offres, votre message et votre processus, puis à les traduire dans un site et une identité visuelle qui <strong>vous ressemblent vraiment</strong>.
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
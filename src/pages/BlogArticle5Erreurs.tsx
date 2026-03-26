import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, CheckCircle2, XCircle } from "lucide-react";

const BlogArticle5Erreurs = () => {
  const erreurs = [
    "Pas d'objectif clair.",
    "Page d'accueil confuse.",
    "Mobile et performance ignorés.",
    "Contenu flou et centré sur vous.",
    "Pas de chemin clair vers la prise de contact.",
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
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>1 Déc 2025</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 min de lecture</span></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              5 erreurs courantes qui plombent votre site web (et comment les éviter)
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Transformez votre site en véritable outil de développement, pas en simple carte de visite.
            </h2>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 md:pb-24">
        <div className="container-narrow">
          <article className="max-w-4xl article-card p-6 md:p-10 lg:p-12">
            
            {/* Section 1 - Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Pourquoi votre site web ne "travaille" pas vraiment pour vous
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Avoir un site web ne suffit plus. Beaucoup d'entreprises ont déjà une présence en ligne, mais leur site <strong>ne génère ni demandes de contact, ni rendez-vous, ni demandes de devis</strong>. Il reste là, comme une carte de visite figée, alors qu'il pourrait devenir un <strong>véritable levier de développement</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Dans cet article, nous passons en revue <strong>5 erreurs très fréquentes</strong> que nous voyons sur les sites de TPE/PME et de studios, et surtout <strong>comment les éviter</strong> pour que votre site commence enfin à travailler pour vous.
              </p>
              
              <div className="article-callout p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                      <XCircle className="w-8 h-8 text-red-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">Site fouillis, sans direction</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-amber-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Site clair, orienté action</p>
                  </div>
                </div>
                <div className="article-callout p-6 border-l-4 border-primary mt-6">
                  <p className="text-sm text-muted-foreground italic">
                    💡 Un site qui se contente d'exister… et un site qui <strong>donne envie de passer à l'action</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Erreur 1 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Erreur 1 – Créer un site sans objectif clair
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Beaucoup de sites ont été conçus autour d'une idée vague : "il nous faut un site vitrine". Le problème, c'est qu'un site <strong>sans objectif précis</strong> ne peut pas être efficace. On y trouve quelques pages génériques, mais nulle part on ne comprend ce que vous attendez concrètement de votre visiteur.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sans objectif clair, <strong>impossible de savoir si votre site fonctionne</strong>. Vous ne pouvez pas mesurer si vous recevez assez de demandes, si les bons prospects vous contactent, ni ajuster votre contenu en conséquence.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Comment corriger cette erreur</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Définissez un <strong>objectif principal</strong> : prise de rendez-vous, demande de devis, demande d'appel découverte, inscription à une newsletter, etc.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Identifiez <strong>1 ou 2 objectifs secondaires</strong> (par exemple téléchargement d'un PDF, consultation d'un portfolio, inscription à un webinar).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Vérifiez que chaque page importante <strong>oriente vers cet objectif</strong> : CTA visibles, texte qui pousse naturellement vers la prise de contact.</span>
                </li>
              </ul>

              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  💡 Chaque page importante doit conduire clairement vers <strong>une action clé</strong>.
                </p>
              </div>
            </div>

            {/* Erreur 2 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Erreur 2 – Une page d'accueil surchargée et confuse
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                La page d'accueil est souvent traitée comme un <strong>grand fourre-tout</strong> : on y empile des blocs, des carrousels, des informations, des actualités. Résultat : un visiteur qui arrive ne comprend pas en quelques secondes <strong>qui vous êtes, ce que vous faites et pour qui</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Quand le message clé n'est pas clair, l'utilisateur scrolle un peu, se perd, puis <strong>quitte le site</strong>. Non pas parce que votre offre est mauvaise, mais parce qu'elle n'a jamais été formulée de manière simple et lisible.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Comment corriger cette erreur</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Travaillez un <strong>message d'accroche clair</strong> (titre + sous-titre) qui répond à : "Qui êtes-vous ? Pour qui ? Et quel résultat principal apportez-vous ?"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Structurez la page en <strong>blocs lisibles</strong> : présentation de votre valeur, services principaux, preuves, processus, appel à l'action.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground"><strong>Limitez le nombre d'éléments</strong> dans le menu et évitez les sections qui n'apportent rien à l'objectif principal.</span>
                </li>
              </ul>

              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  💡 Une page d'accueil structurée comme un <strong>pitch clair</strong> plutôt qu'un fourre-tout d'informations.
                </p>
              </div>
            </div>

            {/* Erreur 3 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Erreur 3 – Ignorer l'expérience mobile et la performance
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Un site peut être très joli sur un grand écran, mais <strong>complètement inutilisable sur un smartphone</strong>. Textes minuscules, boutons trop serrés, sections mal alignées… Sans parler des images trop lourdes qui ralentissent le chargement.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Le problème, c'est qu'une <strong>grande partie de vos visiteurs</strong> arrivent aujourd'hui depuis leur téléphone. Si le site met trop de temps à charger ou semble cassé sur mobile, ils n'attendront pas : ils <strong>quittent la page</strong> et passent au suivant.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Comment corriger cette erreur</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Pensez <strong>"mobile first"</strong> : textes lisibles, boutons cliquables sans zoomer, sections qui s'enchaînent de manière fluide.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground"><strong>Optimisez les images et vidéos</strong> : formats adaptés, compression, pas d'images en très haute définition pour un simple visuel de fond.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Testez votre site sur <strong>de vrais appareils</strong> (pas seulement dans un simulateur) : prenez votre téléphone et essayez de faire une action complète.</span>
                </li>
              </ul>

              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  💡 Un site pensé pour le mobile <strong>renforce votre image professionnelle</strong> dès le premier contact.
                </p>
              </div>
            </div>

            {/* Erreur 4 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Erreur 4 – Un contenu flou, centré sur vous plutôt que sur le client
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                La plupart des sites parlent beaucoup de "nous" : notre histoire, notre équipe, nos valeurs. C'est important, mais ce n'est pas ce que le visiteur cherche en premier. Ce qu'il veut comprendre, c'est : <strong>"Est-ce que cette personne peut m'aider avec mon problème ?"</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Quand le contenu est flou, rempli de jargon ou trop centré sur l'entreprise, <strong>le prospect ne se reconnaît pas</strong>. Il ne voit pas ses enjeux ni ses objectifs dans ce que vous racontez. Il passe donc à un autre prestataire.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Comment corriger cette erreur</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Reformulez vos textes en partant des <strong>problèmes de vos clients</strong> : manque de visibilité, site obsolète, image de marque peu cohérente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Mettez en avant les <strong>résultats concrets</strong> : plus de demandes, meilleure clarté de l'offre, meilleure perception de la marque.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Utilisez un <strong>langage simple</strong>, sans jargon technique inutile, et ajoutez des cas clients, des avis et une FAQ.</span>
                </li>
              </ul>

              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  💡 Les <strong>preuves concrètes</strong> parlent plus fort que les promesses génériques.
                </p>
              </div>
            </div>

            {/* Erreur 5 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Erreur 5 – Ne pas guider clairement vers la prise de contact
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Dernière erreur fréquente : le site <strong>n'indique jamais clairement la prochaine étape</strong>. Le formulaire est caché dans une sous-page, les boutons "Contact" sont noyés dans le menu, et il n'y a aucune indication sur ce qui se passe après la prise de contact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Même un visiteur convaincu par votre travail peut <strong>abandonner</strong> simplement parce qu'il ne sait pas comment engager la conversation, ou qu'il n'a pas envie de remplir un <strong>formulaire interminable</strong>.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Comment corriger cette erreur</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Ajoutez un <strong>appel à l'action clair et récurrent</strong> : "Parler de votre projet", "Demander un devis", "Réserver un appel de 20 minutes".</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground"><strong>Simplifiez votre formulaire</strong> de contact : commencez avec les champs essentiels et posez les questions détaillées plus tard.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground"><strong>Rassurez</strong> en expliquant ce qui se passe après l'envoi : délai de réponse, format de l'échange, absence d'engagement immédiat.</span>
                </li>
              </ul>

              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  💡 Un chemin de contact <strong>clair et rassurant</strong> augmente fortement vos chances d'être sollicité.
                </p>
              </div>
            </div>

            {/* Récapitulatif */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Récapitulatif : les 5 erreurs qui plombent votre site
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
                Faire de votre site un allié, pas une contrainte
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Un site web n'est pas une obligation administrative à remplir une fois pour toutes. C'est un <strong>outil de développement</strong>, un point de contact avec vos futurs clients, et un reflet de la qualité de votre travail. S'il est bien conçu, il vous aide à <strong>attirer des demandes qualifiées</strong> et à convertir des visiteurs en prospects sans effort constant.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                En corrigeant les 5 erreurs de cet article, vous passez d'un site "carte de visite" à <strong>un site qui bosse pour vous</strong>. Avec Nova Visio, nous vous accompagnons à clarifier votre offre, structurer votre message, et créer un site vraiment aligné avec vos objectifs.
              </p>

              <div className="text-center">
                <Button asChild size="lg" variant="gold" className="text-base px-8 py-6">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Parler de mon projet
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Un premier échange pour faire le point sur votre site actuel et voir comment le faire évoluer.
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
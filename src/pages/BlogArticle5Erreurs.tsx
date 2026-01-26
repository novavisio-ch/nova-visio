import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";

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
      {/* Hero - stays with gradient background */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="container max-w-4xl">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux articles
          </Link>
          
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/90 text-background rounded-full mb-6">
            Article
          </span>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            5 erreurs courantes qui plombent votre site web{" "}
            <span className="text-gradient-gold">(et comment les éviter)</span>
          </h1>
          
          <h2 className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Transformez votre site en véritable outil de développement, pas en simple carte de visite.
          </h2>
        </div>
      </section>

      {/* Article Content - White background */}
      <article className="bg-white py-16 md:py-20 lg:py-24 px-4">
        <div className="container max-w-4xl">
          
          {/* Section 1 - Introduction */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
              Pourquoi votre site web ne "travaille" pas vraiment pour vous
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Avoir un site web ne suffit plus. Beaucoup d'entreprises ont déjà une présence en ligne, mais leur site ne génère ni demandes de contact, ni rendez-vous, ni demandes de devis. Il reste là, comme une carte de visite figée, alors qu'il pourrait devenir un véritable levier de développement.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dans cet article, on passe en revue 5 erreurs très fréquentes que je vois sur les sites de TPE/PME et de studios, et surtout comment les éviter pour que votre site commence enfin à travailler pour vous.
              </p>
            </div>
            
            {/* Illustration avant/après */}
            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                    <XCircle className="w-8 h-8 text-red-500" />
                  </div>
                  <p className="text-sm text-gray-600">Site fouillis, sans direction</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-amber-600" />
                  </div>
                  <p className="text-sm text-gray-600">Site clair, orienté action</p>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-6 italic">
                Un site qui se contente d'exister… et un site qui donne envie de passer à l'action.
              </p>
            </div>
          </section>

          {/* Section 2 - Erreur 1 */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-amber-700">
              Erreur 1 – Créer un site sans objectif clair
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Beaucoup de sites ont été conçus autour d'une idée vague : "il nous faut un site vitrine". Le problème, c'est qu'un site sans objectif précis ne peut pas être efficace. On y trouve quelques pages génériques ("Accueil", "À propos", "Services"), mais nulle part on ne comprend ce que vous attendez concrètement de votre visiteur.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Sans objectif clair, impossible de savoir si votre site fonctionne. Vous ne pouvez pas mesurer si vous recevez assez de demandes, si les bons prospects vous contactent, ni ajuster votre contenu en conséquence. Le site devient juste un endroit où l'on vient consommer de l'information, sans passer à l'action.
              </p>
            </div>
            
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">Comment corriger cette erreur</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Définissez un objectif principal : prise de rendez-vous, demande de devis, demande d'appel découverte, inscription à une newsletter, etc.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Identifiez 1 ou 2 objectifs secondaires (par exemple téléchargement d'un PDF, consultation d'un portfolio, inscription à un webinar).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Vérifiez que chaque page importante oriente vers cet objectif : CTA visibles, texte qui pousse naturellement vers la prise de contact ou l'étape suivante.</span>
              </li>
            </ul>
            
            <p className="text-center text-xs text-gray-500 mt-6 italic">
              Chaque page importante doit conduire clairement vers une action clé.
            </p>
          </section>

          {/* Section 3 - Erreur 2 */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-amber-700">
              Erreur 2 – Une page d'accueil surchargée et confuse
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                La page d'accueil est souvent traitée comme un grand fourre-tout : on y empile des blocs, des carrousels, des informations, des actualités. Résultat : un visiteur qui arrive ne comprend pas en quelques secondes qui vous êtes, ce que vous faites et pour qui vous le faites.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Or, c'est exactement ce qu'il cherche à savoir. Quand le message clé n'est pas clair, l'utilisateur scrolle un peu, se perd, puis quitte le site. Non pas parce que votre offre est mauvaise, mais parce qu'elle n'a jamais été formulée de manière simple et lisible.
              </p>
            </div>
            
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">Comment corriger cette erreur</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Travaillez un message d'accroche clair (titre + sous-titre) qui répond à : "Qui êtes-vous ? Pour qui ? Et quel résultat principal apportez-vous ?"</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Structurez la page d'accueil en blocs lisibles : présentation de votre valeur (bénéfices pour le client), services principaux, preuves (avis, logos clients, avant/après), processus de collaboration, appel à l'action.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Limitez le nombre d'éléments dans le menu et évitez les sections qui n'apportent rien à l'objectif principal.</span>
              </li>
            </ul>
            
            <p className="text-center text-xs text-gray-500 mt-6 italic">
              Une page d'accueil structurée comme un pitch clair plutôt qu'un fourre-tout d'informations.
            </p>
          </section>

          {/* Section 4 - Erreur 3 */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-amber-700">
              Erreur 3 – Ignorer l'expérience mobile et la performance
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Un site peut être très joli sur un grand écran, mais complètement inutilisable sur un smartphone. Textes minuscules, boutons trop serrés, sections mal alignées… Sans parler des images trop lourdes qui ralentissent le chargement.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Le problème, c'est qu'une grande partie de vos visiteurs arrivent aujourd'hui depuis leur téléphone. Si le site met trop de temps à charger ou semble cassé sur mobile, ils n'attendront pas : ils quittent la page et passent au suivant.
              </p>
            </div>
            
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">Comment corriger cette erreur</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Pensez "mobile first" : est-ce que les textes se lisent facilement sur un petit écran, est-ce que les boutons sont cliquables sans zoomer, est-ce que les sections s'enchaînent de manière fluide.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Optimisez les images et vidéos : formats adaptés, compression, pas d'images en très haute définition pour un simple visuel de fond.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Testez votre site sur de vrais appareils (pas seulement dans un simulateur) : prenez votre téléphone, celui d'un proche, et essayez de faire une action complète, par exemple envoyer un message via le formulaire.</span>
              </li>
            </ul>
            
            <p className="text-center text-xs text-gray-500 mt-6 italic">
              Un site pensé pour le mobile renforce votre image professionnelle dès le premier contact.
            </p>
          </section>

          {/* Section 5 - Erreur 4 */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-amber-700">
              Erreur 4 – Un contenu flou, centré sur vous plutôt que sur le client
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                La plupart des sites parlent beaucoup de "nous" : notre histoire, notre équipe, nos valeurs, notre ADN. C'est important, mais ce n'est pas ce que le visiteur cherche en premier. Ce qu'il veut comprendre, c'est : "Est-ce que cette personne ou ce studio peut m'aider avec mon problème ?"
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Quand le contenu est flou, rempli de jargon ou trop centré sur l'entreprise, le prospect ne se reconnaît pas. Il ne voit pas ses enjeux, ses frustrations ou ses objectifs dans ce que vous racontez. Il passe donc à un autre prestataire, qui aura su parler de lui, pas seulement de soi.
              </p>
            </div>
            
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">Comment corriger cette erreur</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Reformulez vos textes en partant des problèmes de vos clients : manque de visibilité, site obsolète, image de marque peu cohérente, etc.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Mettez en avant les résultats concrets : plus de demandes, meilleure clarté de l'offre, meilleure perception de la marque.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Utilisez un langage simple, sans jargon technique inutile, et ajoutez des cas clients, des avis et une FAQ qui répond aux questions que vous entendez en rendez-vous.</span>
              </li>
            </ul>
            
            <p className="text-center text-xs text-gray-500 mt-6 italic">
              Les preuves concrètes parlent plus fort que les promesses génériques.
            </p>
          </section>

          {/* Section 6 - Erreur 5 */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-amber-700">
              Erreur 5 – Ne pas guider clairement vers la prise de contact
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Dernière erreur fréquente : le site n'indique jamais clairement la prochaine étape. Le formulaire est caché dans une sous-page, les boutons "Contact" sont noyés dans le menu, et il n'y a aucune indication sur ce qui se passe après la prise de contact.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Même un visiteur convaincu par votre travail peut abandonner simplement parce qu'il ne sait pas comment engager la conversation, ou qu'il n'a pas envie de remplir un formulaire interminable dont il ne sait pas ce qu'il va déclencher.
              </p>
            </div>
            
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">Comment corriger cette erreur</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Ajoutez un appel à l'action clair et récurrent : "Parler de votre projet", "Demander un devis", "Réserver un appel de 20 minutes".</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Simplifiez votre formulaire de contact : commencez avec les champs essentiels (nom, email, type de projet, message) et posez les questions détaillées plus tard, une fois le contact établi.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Rassurez en expliquant ce qui se passe après l'envoi : délai de réponse, format de l'échange (email, visio, téléphone), absence d'engagement immédiat.</span>
              </li>
            </ul>
            
            <p className="text-center text-xs text-gray-500 mt-6 italic">
              Un chemin de contact clair et rassurant augmente fortement vos chances d'être sollicité.
            </p>
          </section>

          {/* Section 7 - Récapitulatif */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
              Récapitulatif : les 5 erreurs qui plombent votre site
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
              <ul className="space-y-4">
                {erreurs.map((erreur, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{erreur}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 8 - Conclusion / CTA */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
              Faire de votre site un allié, pas une contrainte
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Un site web efficace n'est pas forcément le plus spectaculaire visuellement. C'est celui qui est clair, centré sur vos clients, agréable à utiliser, et qui les guide naturellement vers la prise de contact. En évitant ces 5 erreurs, vous faites déjà un grand pas vers un site qui vous aide vraiment à développer votre activité.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Si, en lisant cet article, vous vous êtes reconnu dans plusieurs de ces points, c'est probablement le bon moment de revoir les bases : clarifier votre offre, simplifier votre message, repenser la structure de vos pages clés. Chez Nova Visio, j'accompagne les studios, indépendant·es et petites entreprises à concevoir un site et une identité qui donnent envie de vous contacter – et pas seulement de vous regarder.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10"
            >
              <Button asChild variant="gold" size="lg" className="mb-4">
                <Link to="/contact">Parler de votre projet</Link>
              </Button>
              <p className="text-xs text-gray-400">
                Je vous réponds sous 24–48h avec une première réponse personnalisée, sans engagement.
              </p>
            </motion.div>
          </section>

        </div>
      </article>
    </Layout>
  );
};

export default BlogArticle5Erreurs;

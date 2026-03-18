import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogArticleCouleurs = () => {
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
                <span>5 Jan 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min de lecture</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Comment choisir les couleurs de votre marque
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Des couleurs bien choisies rendent votre marque plus mémorable, plus lisible… et plus désirable.
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
                Pourquoi vos couleurs ne sont pas qu'une question de goût
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Beaucoup d'entrepreneurs choisissent les couleurs de leur marque "au feeling" : un bleu qu'ils aiment bien, un beige vu chez un concurrent, un vert parce que "ça fait écolo". Le problème, c'est qu'une palette choisie uniquement au goût personnel ne traduit pas forcément votre positionnement ni la personnalité de votre marque. Vos couleurs parlent pour vous avant même que quelqu'un lise un mot sur votre site. Bien les choisir, c'est aligner ce que vous montrez avec ce que vous voulez réellement transmettre.
              </p>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  💡 Vos couleurs donnent le ton de votre marque avant même que l'on lise votre message.
                </p>
              </div>
            </div>

            {/* Section 2 - Étape 1 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Traduire votre personnalité en ambiance colorée
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Avant de parler de teintes précises, il faut clarifier la personnalité de votre marque. Est-elle plutôt sérieuse ou accessible, minimaliste ou expressive, premium ou conviviale ? Les mêmes couleurs ne raconteront pas la même histoire pour un cabinet de conseil B2B, un studio créatif ou une marque de bien-être.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                L'idée n'est pas de coller à des stéréotypes rigides ("le bleu pour le sérieux, le vert pour le bio"), mais d'identifier l'ambiance globale : douce, contrastée, lumineuse, sombre, vibrante, etc. C'est cette ambiance qui servira de guide pour sélectionner ensuite les nuances.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Questions pour poser la base
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">3 mots pour décrire votre marque (ex : chaleureux, structuré, audacieux).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Comment voulez-vous que vos clients se sentent au contact de votre marque (rassurés, inspirés, boostés, apaisés) ?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Où vous situez-vous plutôt : minimaliste ou coloré, classique ou original, discret ou assumé ?</span>
                </li>
              </ul>

              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  💡 Une ambiance claire vous aide à choisir des couleurs cohérentes, pas juste "jolies".
                </p>
              </div>
            </div>

            {/* Section 3 - Étape 2 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Couleur principale, secondaire, d'accent : qui fait quoi ?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Une bonne palette ne se résume pas à une seule couleur. En général, on distingue une couleur principale (celle qui incarne le plus votre marque), une ou deux couleurs secondaires (pour les fonds, sections, éléments visuels) et une couleur d'accent (pour les boutons, liens, éléments importants). Chacune a un rôle précis dans l'interface et dans votre communication.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Si tout est de la même couleur, rien ne ressort. Si vous utilisez trop de couleurs différentes, l'ensemble devient brouillon. L'équilibre vient de la hiérarchie : certaines couleurs structurent, d'autres soutiennent, une ou deux attirent l'attention.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Structure simple de palette
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground"><strong>1 couleur principale :</strong> identitaire, souvent utilisée pour le logo et les éléments forts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground"><strong>1 à 2 couleurs secondaires :</strong> pour les fonds, blocs, sections de votre site, supports print.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground"><strong>1 couleur d'accent :</strong> pour les boutons d'appel à l'action, les liens importants, les badges.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground"><strong>1 à 2 neutres</strong> (blancs, gris, noirs) : pour le texte, les arrière-plans et l'équilibre général.</span>
                </li>
              </ul>

              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  💡 Une palette structurée aide votre site et vos supports à rester cohérents sur la durée.
                </p>
              </div>
            </div>

            {/* Section 4 - Étape 3 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Priorité absolue : que ce soit lisible
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                On peut aimer les couleurs très claires, les pastels ou les contrastes subtils, mais si votre texte devient difficile à lire, vos visiteurs décrochent. Un titre gris clair sur un fond beige peut être élégant dans un moodboard, mais pénible à lire sur un écran de téléphone. La lisibilité doit toujours passer avant le "joli".
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Un bon contraste entre texte et fond améliore aussi l'accessibilité : personnes malvoyantes, écrans peu lumineux, vision rapide sur mobile. C'est un point souvent oublié, mais qui impacte directement l'expérience utilisateur et la perception de votre professionnalisme.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Bonnes pratiques de contraste
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Utiliser des couleurs suffisamment foncées pour les textes (en particulier les textes longs).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Éviter les textes importants sur des photos très chargées ou des dégradés compliqués.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Tester vos palettes sur différents supports : écran d'ordinateur, smartphone, tablette, en conditions de lumière variées.</span>
                </li>
              </ul>

              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  💡 Une palette réussie, ce sont des couleurs belles sur le moodboard et lisibles en situation réelle.
                </p>
              </div>
            </div>

            {/* Section 5 - Étape 4 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Se positionner sans copier
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Chaque secteur a ses codes : le bleu rassurant dans le B2B, le vert dans l'éco-responsable, les pastels dans le bien-être, les tons sombres et dorés dans le luxe. Ignorer complètement ces codes peut rendre votre marque difficile à lire, mais les copier à l'identique peut vous rendre interchangeable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                L'objectif est de trouver un équilibre : utiliser les codes quand ils aident à faire passer le bon message, tout en introduisant des nuances ou des associations de couleurs qui vous différencient. Vous n'avez pas besoin de réinventer la roue, mais vous pouvez ajuster sa couleur.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Exercice simple de positionnement visuel
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Listez les sites de 5 à 10 concurrents directs : quelles couleurs reviennent le plus ?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Notez ce que vous aimez et ce que vous trouvez brouillon ou cliché.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Demandez-vous : dans ce paysage, où est-ce que j'ai envie de me placer (plus minimaliste, plus chaleureux, plus audacieux) ?</span>
                </li>
              </ul>

              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  💡 Respecter les codes de votre secteur tout en trouvant votre propre place visuelle.
                </p>
              </div>
            </div>

            {/* Section 6 - Étape 5 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Ne vous arrêtez pas au moodboard
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Une palette peut sembler parfaite dans un document, mais se révéler peu pratique une fois appliquée sur votre site, vos posts et vos documents. C'est normal : les couleurs vivent différemment selon les contextes, les surfaces, les typographies utilisées.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Avant de figer vos choix, testez vos couleurs sur quelques maquettes : une page d'accueil, un post de réseau social, une slide de présentation, un visuel de newsletter. Si vous sentez que vous forcez constamment pour faire fonctionner la palette, c'est qu'elle a besoin d'ajustements.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Ce que vous pouvez tester rapidement
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Un bloc "hero" de page d'accueil avec titre, sous-titre et bouton.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Un post type "annonce" ou "conseil" pour les réseaux sociaux.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-muted-foreground">Un visuel simple de newsletter ou d'email de bienvenue.</span>
                </li>
              </ul>

              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  💡 Ce n'est qu'en contexte que vous voyez si votre palette soutient vraiment vos contenus.
                </p>
              </div>
            </div>

            {/* Section 7 - Récapitulatif */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Les clés pour une palette de marque cohérente
              </h2>
              <div className="article-recap p-6 md:p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                    <span className="text-lg text-muted-foreground">Partir de la personnalité de votre marque, pas uniquement de vos goûts.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                    <span className="text-lg text-muted-foreground">Définir des rôles clairs pour chaque couleur : principale, secondaires, accent, neutres.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                    <span className="text-lg text-muted-foreground">Prioriser la lisibilité et le contraste, surtout pour les textes.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</span>
                    <span className="text-lg text-muted-foreground">Tenir compte des codes de votre secteur sans devenir une copie de vos concurrents.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">5</span>
                    <span className="text-lg text-muted-foreground">Tester vos couleurs en situation réelle avant de les figer.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 8 - Conclusion / CTA */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Des couleurs qui vous ressemblent et qui durent
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Choisir les couleurs de votre marque, ce n'est pas chercher "la couleur à la mode du moment", c'est construire un langage visuel qui va vous accompagner sur le long terme. Une bonne palette vous aide à être reconnaissable, cohérent·e sur tous vos supports et aligné·e avec ce que vous voulez réellement transmettre.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Si vous hésitez entre plusieurs palettes, ou si vous avez l'impression que vos couleurs actuelles ne reflètent plus vraiment qui vous êtes, c'est probablement le bon moment de faire le point. Avec Nova Visio, nous vous aidons à clarifier la personnalité de votre marque et à construire une identité visuelle (couleurs, typographies, univers) qui soutient votre site et votre communication sur la durée.
              </p>

              <div className="text-center">
                <Button asChild size="lg" variant="gold" className="text-base px-8 py-6">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Travailler mes couleurs de marque
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Un accompagnement pour passer d'une palette choisie "au feeling" à une identité colorée vraiment alignée avec votre marque.
                </p>
              </div>
            </div>

          </article>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticleCouleurs;

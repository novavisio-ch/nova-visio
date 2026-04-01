import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

const BlogArticleCouleurs = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

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
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{isFr ? "5 Jan 2026" : "5 Jan 2026"}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{isFr ? "10 min de lecture" : "10 min read"}</span></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isFr ? "Comment choisir les couleurs de votre marque" : "How to choose your brand colours"}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {isFr
                ? "Des couleurs bien choisies rendent votre marque plus mémorable, plus lisible… et plus désirable."
                : "Well-chosen colours make your brand more memorable, more readable… and more desirable."}
            </h2>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 md:pb-24">
        <div className="container-narrow">
          <article className="max-w-4xl article-card p-6 md:p-10 lg:p-12">
            
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Pourquoi vos couleurs ne sont pas qu'une question de goût" : "Why your colours aren't just a matter of taste"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Beaucoup d'entrepreneurs choisissent les couleurs de leur marque <strong>"au feeling"</strong> : un bleu qu'ils aiment bien, un beige vu chez un concurrent, un vert parce que "ça fait écolo". Le problème, c'est qu'une palette choisie uniquement au goût personnel <strong>ne traduit pas forcément votre positionnement</strong> ni la personnalité de votre marque. Vos couleurs <strong>parlent pour vous</strong> avant même que quelqu'un lise un mot sur votre site. Bien les choisir, c'est aligner ce que vous montrez avec ce que vous voulez réellement transmettre.</>
                  : <>Many entrepreneurs choose their brand colours <strong>"by feel"</strong>: a blue they like, a beige they saw on a competitor's site, a green because "it looks eco-friendly." The problem is that a palette chosen purely by personal taste <strong>doesn't necessarily convey your positioning</strong> or your brand personality. Your colours <strong>speak for you</strong> before anyone reads a single word on your site. Choosing them well means aligning what you show with what you truly want to communicate.</>}
              </p>
              <div className="article-callout p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  {isFr
                    ? <>💡 Vos couleurs donnent le ton de votre marque <strong>avant même que l'on lise votre message</strong>.</>
                    : <>💡 Your colours set the tone of your brand <strong>before anyone even reads your message</strong>.</>}
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Traduire votre personnalité en ambiance colorée" : "Translating your personality into a colour mood"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Avant de parler de teintes précises, il faut <strong>clarifier la personnalité de votre marque</strong>. Est-elle plutôt sérieuse ou accessible, minimaliste ou expressive, premium ou conviviale ? Les mêmes couleurs ne raconteront pas la même histoire pour un cabinet de conseil B2B, un studio créatif ou une marque de bien-être.</>
                  : <>Before discussing specific hues, you need to <strong>clarify your brand personality</strong>. Is it more serious or approachable, minimalist or expressive, premium or friendly? The same colours won't tell the same story for a B2B consultancy, a creative studio or a wellness brand.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>L'idée n'est pas de coller à des stéréotypes rigides ("le bleu pour le sérieux, le vert pour le bio"), mais d'identifier <strong>l'ambiance globale</strong> : douce, contrastée, lumineuse, sombre, vibrante, etc. C'est cette ambiance qui servira de guide pour sélectionner ensuite les nuances.</>
                  : <>The idea isn't to stick to rigid stereotypes ("blue for seriousness, green for eco"), but to identify the <strong>overall mood</strong>: soft, high-contrast, bright, dark, vibrant, etc. This mood will then guide your selection of specific shades.</>}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Questions pour poser la base" : "Questions to lay the foundation"}
              </h3>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <><strong>3 mots</strong> pour décrire votre marque (ex : chaleureux, structuré, audacieux).</>,
                  <>Comment voulez-vous que vos clients <strong>se sentent</strong> au contact de votre marque (rassurés, inspirés, boostés, apaisés) ?</>,
                  <>Où vous situez-vous plutôt : <strong>minimaliste ou coloré</strong>, classique ou original, discret ou assumé ?</>,
                ] : [
                  <><strong>3 words</strong> to describe your brand (e.g. warm, structured, bold).</>,
                  <>How do you want your clients to <strong>feel</strong> when they encounter your brand (reassured, inspired, energised, at ease)?</>,
                  <>Where do you sit: <strong>minimalist or colourful</strong>, classic or original, subtle or assertive?</>,
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
                    ? <>💡 Une ambiance claire vous aide à choisir des couleurs <strong>cohérentes</strong>, pas juste "jolies".</>
                    : <>💡 A clear mood helps you choose colours that are <strong>cohesive</strong> — not just "pretty".</>}
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Couleur principale, secondaire, d'accent : qui fait quoi ?" : "Primary, secondary, accent: what does each colour do?"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Une bonne palette ne se résume pas à une seule couleur. En général, on distingue une <strong>couleur principale</strong> (celle qui incarne le plus votre marque), une ou deux <strong>couleurs secondaires</strong> (pour les fonds, sections, éléments visuels) et une <strong>couleur d'accent</strong> (pour les boutons, liens, éléments importants). Chacune a un rôle précis dans l'interface et dans votre communication.</>
                  : <>A good palette isn't just one colour. Typically, you have a <strong>primary colour</strong> (the one that best embodies your brand), one or two <strong>secondary colours</strong> (for backgrounds, sections, visual elements), and an <strong>accent colour</strong> (for buttons, links, key elements). Each has a specific role in your interface and communication.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Si tout est de la même couleur, <strong>rien ne ressort</strong>. Si vous utilisez trop de couleurs différentes, l'ensemble devient brouillon. L'équilibre vient de la <strong>hiérarchie</strong> : certaines couleurs structurent, d'autres soutiennent, une ou deux attirent l'attention.</>
                  : <>If everything is the same colour, <strong>nothing stands out</strong>. If you use too many different colours, the result looks messy. Balance comes from <strong>hierarchy</strong>: some colours structure, others support, and one or two grab attention.</>}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Structure simple de palette" : "A simple palette structure"}
              </h3>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <><strong>1 couleur principale :</strong> identitaire, souvent utilisée pour le logo et les éléments forts.</>,
                  <><strong>1 à 2 couleurs secondaires :</strong> pour les fonds, blocs, sections de votre site, supports print.</>,
                  <><strong>1 couleur d'accent :</strong> pour les boutons d'appel à l'action, les liens importants, les badges.</>,
                  <><strong>1 à 2 neutres</strong> (blancs, gris, noirs) : pour le texte, les arrière-plans et l'équilibre général.</>,
                ] : [
                  <><strong>1 primary colour:</strong> the one that defines your brand — often used in your logo and key elements.</>,
                  <><strong>1–2 secondary colours:</strong> for backgrounds, blocks, site sections and print materials.</>,
                  <><strong>1 accent colour:</strong> for call-to-action buttons, important links and badges.</>,
                  <><strong>1–2 neutrals</strong> (whites, greys, blacks): for text, backgrounds and overall balance.</>,
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
                    ? <>💡 Une palette <strong>structurée</strong> aide votre site et vos supports à rester cohérents sur la durée.</>
                    : <>💡 A <strong>structured</strong> palette keeps your site and materials consistent over time.</>}
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Priorité absolue : que ce soit lisible" : "Top priority: readability"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>On peut aimer les couleurs très claires, les pastels ou les contrastes subtils, mais si votre texte devient <strong>difficile à lire</strong>, vos visiteurs décrochent. Un titre gris clair sur un fond beige peut être élégant dans un moodboard, mais pénible à lire sur un écran de téléphone. La <strong>lisibilité</strong> doit toujours passer avant le "joli".</>
                  : <>You may love light colours, pastels or subtle contrasts, but if your text becomes <strong>hard to read</strong>, visitors will disengage. A light grey heading on a beige background might look elegant on a moodboard, but it's painful to read on a phone screen. <strong>Readability</strong> must always come before "pretty".</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Un bon <strong>contraste entre texte et fond</strong> améliore aussi l'accessibilité : personnes malvoyantes, écrans peu lumineux, vision rapide sur mobile. C'est un point souvent oublié, mais qui impacte directement <strong>l'expérience utilisateur</strong> et la perception de votre professionnalisme.</>
                  : <>Good <strong>contrast between text and background</strong> also improves accessibility: for visually impaired users, dim screens and quick mobile browsing. It's a point often overlooked, but it directly impacts <strong>user experience</strong> and how professional you're perceived to be.</>}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Bonnes pratiques de contraste" : "Contrast best practices"}
              </h3>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <>Utiliser des couleurs <strong>suffisamment foncées</strong> pour les textes (en particulier les textes longs).</>,
                  <>Éviter les textes importants sur des <strong>photos très chargées</strong> ou des dégradés compliqués.</>,
                  <><strong>Tester vos palettes</strong> sur différents supports : écran d'ordinateur, smartphone, tablette, en conditions de lumière variées.</>,
                ] : [
                  <>Use colours that are <strong>dark enough</strong> for body text (especially long-form content).</>,
                  <>Avoid placing important text over <strong>busy photos</strong> or complex gradients.</>,
                  <><strong>Test your palette</strong> across different devices: desktop, smartphone, tablet — and in different lighting conditions.</>,
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
                    ? <>💡 Une palette réussie, ce sont des couleurs belles sur le moodboard et <strong>lisibles en situation réelle</strong>.</>
                    : <>💡 A successful palette means colours that look great on a moodboard and are <strong>readable in real-life conditions</strong>.</>}
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Se positionner sans copier" : "Stand out without copying"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Chaque secteur a ses <strong>codes visuels</strong> : le bleu rassurant dans le B2B, le vert dans l'éco-responsable, les pastels dans le bien-être, les tons sombres et dorés dans le luxe. Ignorer complètement ces codes peut rendre votre marque difficile à lire, mais <strong>les copier à l'identique</strong> peut vous rendre interchangeable.</>
                  : <>Every industry has its <strong>visual codes</strong>: reassuring blue in B2B, green in eco-friendly brands, pastels in wellness, dark and gold tones in luxury. Ignoring these codes entirely can make your brand hard to read, but <strong>copying them exactly</strong> can make you interchangeable.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>L'objectif est de trouver un <strong>équilibre</strong> : utiliser les codes quand ils aident à faire passer le bon message, tout en introduisant des nuances ou des associations de couleurs qui <strong>vous différencient</strong>. Vous n'avez pas besoin de réinventer la roue, mais vous pouvez ajuster sa couleur.</>
                  : <>The goal is to find a <strong>balance</strong>: use industry codes when they help convey the right message, while introducing nuances or colour combinations that <strong>set you apart</strong>. You don't need to reinvent the wheel — but you can change its colour.</>}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Exercice simple de positionnement visuel" : "A simple visual positioning exercise"}
              </h3>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <>Listez les sites de <strong>5 à 10 concurrents</strong> directs : quelles couleurs reviennent le plus ?</>,
                  <>Notez ce que vous aimez et ce que vous trouvez <strong>brouillon ou cliché</strong>.</>,
                  <>Demandez-vous : dans ce paysage, <strong>où est-ce que j'ai envie de me placer</strong> (plus minimaliste, plus chaleureux, plus audacieux) ?</>,
                ] : [
                  <>List the websites of <strong>5–10 direct competitors</strong>: which colours appear most often?</>,
                  <>Note what you like and what feels <strong>messy or clichéd</strong>.</>,
                  <>Ask yourself: in this landscape, <strong>where do I want to position myself</strong> (more minimalist, warmer, bolder)?</>,
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
                    ? <>💡 Respecter les codes de votre secteur tout en trouvant <strong>votre propre place visuelle</strong>.</>
                    : <>💡 Respect your industry's codes while finding <strong>your own visual space</strong>.</>}
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Ne vous arrêtez pas au moodboard" : "Don't stop at the moodboard"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Une palette peut sembler parfaite dans un document, mais se révéler <strong>peu pratique</strong> une fois appliquée sur votre site, vos posts et vos documents. C'est normal : les couleurs vivent différemment selon les contextes, les surfaces, les typographies utilisées.</>
                  : <>A palette can look perfect in a document but turn out to be <strong>impractical</strong> once applied to your site, social posts and documents. That's normal: colours behave differently depending on context, surface area and typography.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isFr
                  ? <>Avant de figer vos choix, <strong>testez vos couleurs</strong> sur quelques maquettes : une page d'accueil, un post de réseau social, une slide de présentation, un visuel de newsletter. Si vous sentez que vous forcez constamment pour faire fonctionner la palette, c'est qu'elle a besoin d'ajustements.</>
                  : <>Before locking in your choices, <strong>test your colours</strong> on a few mockups: a homepage, a social media post, a presentation slide, a newsletter visual. If you find yourself constantly forcing the palette to work, it needs adjusting.</>}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {isFr ? "Ce que vous pouvez tester rapidement" : "Quick tests you can run"}
              </h3>
              <ul className="space-y-3 mb-6">
                {(isFr ? [
                  <>Un bloc <strong>"hero"</strong> de page d'accueil avec titre, sous-titre et bouton.</>,
                  <>Un post type <strong>"annonce" ou "conseil"</strong> pour les réseaux sociaux.</>,
                  <>Un visuel simple de <strong>newsletter ou d'email</strong> de bienvenue.</>,
                ] : [
                  <>A homepage <strong>"hero" block</strong> with a title, subtitle and button.</>,
                  <>A sample <strong>"announcement" or "tip"</strong> post for social media.</>,
                  <>A simple <strong>newsletter or welcome email</strong> visual.</>,
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
                    ? <>💡 Ce n'est qu'<strong>en contexte</strong> que vous voyez si votre palette soutient vraiment vos contenus.</>
                    : <>💡 It's only <strong>in context</strong> that you can tell whether your palette truly supports your content.</>}
                </p>
              </div>
            </div>

            {/* Section 7 - Récapitulatif */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Les clés pour une palette de marque cohérente" : "Keys to a cohesive brand palette"}
              </h2>
              <div className="article-recap p-6 md:p-8">
                <ul className="space-y-4">
                  {(isFr ? [
                    "Partir de la personnalité de votre marque, pas uniquement de vos goûts.",
                    "Définir des rôles clairs pour chaque couleur : principale, secondaires, accent, neutres.",
                    "Prioriser la lisibilité et le contraste, surtout pour les textes.",
                    "Tenir compte des codes de votre secteur sans devenir une copie de vos concurrents.",
                    "Tester vos couleurs en situation réelle avant de les figer.",
                  ] : [
                    "Start from your brand personality, not just your personal taste.",
                    "Assign clear roles to each colour: primary, secondary, accent, neutrals.",
                    "Prioritise readability and contrast, especially for text.",
                    "Consider your industry's codes without becoming a copy of your competitors.",
                    "Test your colours in real-life situations before locking them in.",
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                      <span className="text-lg text-muted-foreground"><strong>{item}</strong></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Conclusion / CTA */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {isFr ? "Des couleurs qui vous ressemblent et qui durent" : "Colours that reflect you — and last"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {isFr
                  ? <>Choisir les couleurs de votre marque, ce n'est pas chercher "la couleur à la mode du moment", c'est construire un <strong>langage visuel</strong> qui va vous accompagner sur le long terme. Une bonne palette vous aide à être <strong>reconnaissable</strong>, cohérent·e sur tous vos supports et aligné·e avec ce que vous voulez réellement transmettre.</>
                  : <>Choosing your brand colours isn't about chasing "this season's trendy shade" — it's about building a <strong>visual language</strong> that will serve you for years. A good palette helps you be <strong>recognisable</strong>, consistent across all touchpoints, and aligned with what you truly want to communicate.</>}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {isFr
                  ? <>Si vous hésitez entre plusieurs palettes, ou si vous avez l'impression que vos couleurs actuelles <strong>ne reflètent plus vraiment qui vous êtes</strong>, c'est probablement le bon moment de faire le point. Avec Nova Visio, nous vous aidons à clarifier la personnalité de votre marque et à construire une identité visuelle qui soutient votre site et votre communication sur la durée.</>
                  : <>If you're torn between several palettes, or feel that your current colours <strong>no longer reflect who you really are</strong>, it's probably the right time to take stock. At Nova Visio, we help you clarify your brand personality and build a visual identity that supports your website and communications for the long haul.</>}
              </p>

              <div className="text-center">
                <Button asChild size="lg" variant="gold" className="text-base px-8 py-6">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    {isFr ? "Travailler mes couleurs de marque" : "Work on my brand colours"}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  {isFr
                    ? "Un accompagnement pour passer d'une palette choisie \"au feeling\" à une identité colorée vraiment alignée avec votre marque."
                    : "Expert guidance to go from a palette chosen \"by feel\" to a colour identity truly aligned with your brand."}
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

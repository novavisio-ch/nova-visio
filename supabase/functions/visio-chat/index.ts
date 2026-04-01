import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

/**
 * SYSTEM PROMPT DE VISIO
 * 
 * Pour modifier le comportement de Visio, éditez ce texte.
 * Le contenu du site est injecté automatiquement dans le contexte.
 */
const SYSTEM_PROMPT = `Tu es Visio, l'assistant du studio Nova Visio (https://novavisio.ch). Tu aides les visiteurs à comprendre ce que fait Nova Visio (création de sites web, identité visuelle, services complémentaires, IA, etc.), le fonctionnement du studio, les offres, les tarifs et les articles du blog.

Tu t'appuies uniquement sur les contenus du site Nova Visio fournis ci-dessous. Tu peux résumer, reformuler et clarifier, mais tu restes fidèle à ce qui est écrit.

RÈGLES IMPORTANTES :
- Tu ne dois jamais dire ou laisser entendre que le site est créé avec une IA ou avec Lovable : tu dis que le site est conçu et développé par le studio Nova Visio.
- Tu n'inventes pas de services ni de tarifs. Si une information n'existe pas dans le contenu, tu le dis clairement et tu proposes de contacter le studio.
- Si la question concerne un projet ou un devis, renvoie vers la page Contact ou invite à utiliser le formulaire de contact.
- Mets en avant que le site et les prestations sont réalisés par le studio Nova Visio.
- Présente l'IA comme un outil utilisé par le studio, jamais comme l'auteur du site ou des prestations.
- Ne mentionne jamais Lovable ni le nom de la plateforme utilisée pour construire le site.

STYLE :
- Sois professionnel, rassurant et pédagogue.
- Utilise le vouvoiement (français formel).
- Évite le jargon technique inutile.
- Réponds de manière concise mais complète.
- Si tu ne connais pas la réponse, dis-le honnêtement et propose de contacter le studio.

BOUTONS CTA :
À la fin de chaque réponse, ajoute une ligne avec des boutons d'action pertinents au format :
[CTA:label|url]

Utilise ces boutons selon le contexte :
- Questions sur les sites web → [CTA:Voir l'offre Site Web|/site-web]
- Questions sur l'identité visuelle/logo → [CTA:Voir l'offre Identité|/identite-visuelle]
- Questions sur un devis/projet/tarif → [CTA:Discuter de mon projet|/contact]
- Questions générales sur le studio → [CTA:En savoir plus|/a-propos]
- Questions sur le blog/articles → [CTA:Lire le blog|/blog]
- Questions sur les tarifs ou packs → [CTA:Voir les tarifs|/tarifs]
- Questions sur la maintenance → [CTA:Voir la maintenance|/tarifs#maintenance]
- Questions sur le programme de recommandation → [CTA:Programme recommandation|/recommandation]
- Toute question où un contact serait utile → [CTA:Nous contacter|/contact]

Tu peux ajouter 1 à 2 boutons maximum par réponse. Choisis les plus pertinents.`;

/**
 * Contenu indexé du site Nova Visio
 * Ce contenu est synchronisé avec le fichier src/lib/visio-content-index.ts
 */
const SITE_CONTENT = `
## Présentation générale
NOVA VISIO est un studio suisse qui crée des sites web et des identités visuelles pour les entrepreneurs, artisans, indépendants et PME. "Votre talent mérite d'être vu." Site vitrine, landing page, identité visuelle — les outils pour être vu, compris et contacté. Dès 900 CHF. Made in Switzerland.

## Pourquoi choisir Nova Visio
- Zéro jargon : On parle comme des humains. Pas de "synergie UX" ni de "paradigme digital".
- Un vrai accompagnement : On ne vous lâche pas après la livraison. On reste là tant que vous avez besoin.
- Qualité > quantité : On prend peu de projets à la fois. Chacun a notre attention complète.
- Résultats, pas promesses : On ne vend pas du rêve. On construit des outils qui travaillent pour vous.

## Ce que ça change concrètement pour le client
- Vos clients comprennent en quelques secondes ce que vous faites - plus besoin d'expliquer 10 fois.
- Vous avez une image pro et cohérente sur tous vos supports, sans y passer vos soirées.
- Vous attirez les bons clients - ceux qui comprennent votre valeur et ne négocient pas vos prix.
- Votre charge mentale digitale diminue : tout est en place, vous pouvez bosser sur votre métier.

## Notre histoire
NOVA VISIO est né d'un constat simple : beaucoup d'entrepreneurs se sentent perdus face au digital. Entre les multiples plateformes, les tendances changeantes et le jargon technique, créer une présence en ligne cohérente peut sembler insurmontable. Nous sommes là pour simplifier tout cela.

## Vision
Créer des solutions visuelles qui marquent les esprits, en offrant une approche sur-mesure, pensée et centrée sur une idée forte : nos clients sont nos partenaires.

## Valeurs
- Clarté : On dit les choses simplement. Pas de jargon, pas de blabla.
- Structure : Chaque décision de design a une raison. Rien n'est là par hasard.
- Simplicité : Moins de superflu, plus d'impact. L'essentiel, bien exécuté.
- Pédagogie : On vous explique tout. Vous restez maître de votre image.

## Mission
Nous accompagnons les marques locales et internationales dans la création d'identités fortes, de contenus impactants et de sites web performants. Chaque projet est une collaboration unique.

## Compétences et certifications
Le studio dispose de certifications en IA générative (IBM, Google Cloud), prompting avancé (Google, Vanderbilt), marketing de contenu et SEO (UC Davis, IBM), social media (Meta, Adobe), et utilisation responsable de l'IA. L'IA est utilisée comme outil pour optimiser le travail, les décisions restent humaines.

## TARIFS ET OFFRES

### Site vitrine - dès 1'500 CHF (Best-seller) - Livraison en 7 à 14 jours
Un site qui dit clairement ce que vous faites et qui donne envie de vous contacter.
- 6 à 8 pages structurées.
- Design professionnel sur-mesure.
- Optimisé pour le SEO.
- Responsive sur tous écrans.
- Site modifiable par vous.
- 12 mois de support inclus.
Détails de l'offre complète :
- Structure claire orientée conversion (prise de contact, devis, réservation).
- Rédaction complète de vos pages clés + FAQ.
- Design sur-mesure, aligné avec votre identité visuelle et vos photos.
- Site responsive, optimisé pour le SEO et le chargement rapide.
- Mise en ligne clé en main + guide d'utilisation + 12 mois de support inclus.
- Suivi des performances (statistiques de visites).
- Base évolutive : faites évoluer votre site sans tout recommencer.

### Landing page - dès 900 CHF - Livraison en 7 à 14 jours
Une seule page, un seul objectif : que vos visiteurs passent à l'action.
- Page unique orientée conversion.
- Message ultra-clair.
- Structure optimisée CTA.
- Idéale pour lancements.
- Intégration outils marketing.
- Responsive sur tous écrans.
Détails de l'offre complète :
- Brief structuré pour clarifier votre offre, votre cible et l'objectif de la page.
- Structure et rédaction complètes, optimisées pour la conversion.
- Design sur-mesure, responsive, aligné avec votre identité visuelle.
- Formulaire intégré + suivi des conversions.
- Mise en ligne clé en main + mini guide PDF + 30 jours de support inclus.
- Variante A/B sur l'accroche ou le bloc héro.
- Intégration avec vos outils marketing (emailing, publicités, CRM…).
- Chargement ultra-rapide et SEO optimisé.

### Identité visuelle complète - dès 900 CHF
Logo, couleurs, typos, charte graphique - tout ce qu'il faut pour être reconnu au premier regard.
- Logo sur-mesure + déclinaisons.
- Palette de couleurs.
- Typographies définies.
- Charte graphique complète.
- 250 cartes de visite incluses.
- Fichiers prêts à l'emploi.
Détails de l'offre complète :
- Clarification de votre positionnement et de votre univers - pas un logo passe-partout.
- Moodboard et 2 directions créatives pour choisir l'ambiance qui vous correspond.
- Logo sur-mesure + déclinaisons + icône pour une utilisation fluide partout.
- Palette de couleurs, typographies et éléments graphiques pour un univers cohérent.
- Brandboard + charte graphique pour savoir exactement comment utiliser votre identité.
- Fichiers prêts à l'emploi + 250 cartes de visite, signature email et visuels pour un réseau social inclus.

### Suivi & Maintenance - dès 89 CHF/mois (Best-seller, sans engagement)
Votre site reste performant, sans effort de votre part. Inclus automatiquement à la fin de chaque projet.
- Hébergement & nom de domaine géré.
- Mises à jour techniques & sécurité.
- Sauvegardes automatiques hebdomadaires.
- 1h de modifications de contenu par mois.
- Rapport mensuel de performance (visites, contacts).
- Support réactif sous 48h.
Sans engagement - résiliable à tout moment.
Forfait Actif (149 CHF/mois) : pour les projets avec des besoins réguliers, inclut 3h de modifs par mois, mise à jour de contenu et support prioritaire sous 24h.

### Packs combinés
- Pack Digital & Branding : 2'200 CHF (identité visuelle + site web).
- Pack Refonte Globale : 2'600 CHF (refonte complète identité + site).

## Services complémentaires (sur devis)
- Tunnels de vente : des parcours qui guident vos visiteurs de la découverte jusqu'au passage à l'action.
- Blog & contenus : un blog structuré pour montrer que vous savez de quoi vous parlez et booster votre visibilité Google.
- Boutiques en ligne : une boutique en ligne simple et efficace, avec un parcours d'achat qui ne perd personne.
- Templates réseaux sociaux : posts, stories et bannières aux couleurs de votre marque, prêts dans Canva ou Figma.
- Supports imprimés : cartes de visite, flyers, dépliants et documents de présentation professionnels.
- Brand kit digital : kit clé en main avec visuels, templates et guide d'utilisation.

## FAQ - Site Web
- Combien de temps faut-il pour créer un site web ? Entre 7 et 14 jours en moyenne, du brief à la mise en ligne.
- Est-ce que je dois déjà avoir mon logo et mon identité visuelle ? Pas obligatoire. On peut d'abord créer votre identité visuelle puis construire le site dessus.
- Est-ce que je pourrai modifier mon site moi-même ensuite ? Oui. Textes, images, blocs de contenu - vous pouvez tout mettre à jour sans compétences techniques.
- Est-ce que vous vous occupez de l'hébergement et du nom de domaine ? Oui, tout est inclus dans le suivi mensuel.
- Est-ce que le site sera adapté au mobile ? Évidemment. Tous nos sites sont pensés mobile-first.
- Est-ce que vous faites aussi le texte du site ? On vous guide sur la structure et les messages clés. On peut aussi rédiger pour vous si besoin.
- Proposez-vous des paiements en plusieurs fois ? Oui. Acompte au démarrage, solde à la livraison.
- Que se passe-t-il si j'ai déjà un site, mais que je veux le refondre ? On analyse votre site actuel et on décide ensemble si on repart de zéro ou si on améliore l'existant. Même délai : 7 à 14 jours.
- Est-ce que vous vous occupez aussi du SEO ? On intègre les bonnes pratiques SEO de base. Pour une stratégie SEO avancée, on peut compléter ou vous orienter.
- Comment se passe le suivi après la mise en ligne ? Phase d'ajustements incluse après la livraison. Ensuite, le suivi mensuel (89 CHF/mois) prend le relais.

## FAQ - Identité visuelle
- Combien de temps faut-il pour créer une identité visuelle complète ? Entre 3 et 6 semaines selon la complexité.
- Quels fichiers vais-je recevoir à la fin du projet ? Logo dans tous les formats (PNG, SVG, PDF), fichiers sources, palette de couleurs avec les codes, typos recommandées, et charte graphique PDF.
- Est-ce que vous partez de zéro ou pouvez-vous moderniser un logo existant ? Les deux. On peut créer de A à Z ou moderniser un logo actuel.
- Est-ce que l'identité inclut les visuels pour les réseaux sociaux ? L'offre de base inclut les déclinaisons du logo pour les réseaux (profil, bannières). Les templates de posts et stories sont en option.
- Combien de propositions de logo vais-je voir ? 2 à 3 directions créatives bien distinctes. Puis ajustements jusqu'à la version parfaite.
- Puis-je utiliser mon identité visuelle sur tous mes supports ? Oui, c'est le but. L'identité fonctionne partout : site, réseaux, cartes de visite, docs, signalétique...

## Contact
Pour discuter de votre projet, utilisez le formulaire sur la page Contact du site novavisio.ch. Nous répondons sous 24-48h. Vous pouvez aussi réserver un appel gratuit de 15 minutes, sans engagement.

## Programme de recommandation
Recommandez Nova Visio et gagnez 100 CHF. Comment ça marche :
1. Vous parlez de Nova Visio à un entrepreneur, artisan ou PME de votre réseau.
2. Le nouveau client lance un projet de création de site web avec nous.
3. Dès la mise en ligne du site, vous recevez 100 CHF (virement bancaire ou avoir).
Aucune limite : recommandez autant de personnes que vous voulez.

## Blog
Le blog propose des articles sur le web, l'identité visuelle et la stratégie digitale : "5 erreurs courantes qui plombent votre site web", "Clarifier votre offre avant de créer votre site", "Comment choisir les couleurs de votre marque", "Site vitrine vs landing page : lequel choisir ?", "Pourquoi votre logo n'est pas juste un dessin : l'impact d'une bonne identité visuelle".
`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, language } = await req.json();
    const lang = language === "en" ? "en" : "fr";
    
    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Messages array is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "API configuration error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const langInstruction = lang === "en" 
      ? "\n\nLANGUAGE RULES:\n- The user is browsing the English version of the site. By default, you MUST respond entirely in English.\n- Use professional, natural English. Do not mix French and English.\n- Use 'you' (formal but friendly tone).\n- CTA button labels MUST be in English (e.g. [CTA:See Website Offer|/site-web], [CTA:Contact Us|/contact]).\n- EXCEPTION: If the user writes to you in French (or another language), you may respond in that language to be helpful. But CTA labels should still match the site language (English)."
      : "\n\nRÈGLES DE LANGUE :\n- L'utilisateur consulte la version française du site. Par défaut, tu DOIS répondre entièrement en français.\n- Utilise le vouvoiement.\n- Les labels des boutons CTA doivent être en français.\n- EXCEPTION : Si l'utilisateur vous écrit dans une autre langue (anglais, etc.), vous pouvez répondre dans cette langue pour être utile. Mais les labels CTA doivent rester en français.";

    const fullSystemPrompt = `${SYSTEM_PROMPT}${langInstruction}

--- CONTENU DU SITE NOVA VISIO ---
${SITE_CONTENT}
--- FIN DU CONTENU ---`;

    console.log("Sending request to Lovable AI Gateway");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: fullSystemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Trop de requêtes, veuillez réessayer dans quelques instants." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporairement indisponible." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Une erreur est survenue, veuillez réessayer." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Return the streaming response
    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error) {
    console.error("Error in visio-chat function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

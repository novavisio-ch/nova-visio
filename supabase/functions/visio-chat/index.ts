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
- Toute question où un contact serait utile → [CTA:Nous contacter|/contact]

Tu peux ajouter 1 à 2 boutons maximum par réponse. Choisis les plus pertinents.`;

/**
 * Contenu indexé du site Nova Visio
 * Ce contenu est synchronisé avec le fichier src/lib/visio-content-index.ts
 */
const SITE_CONTENT = `
## Présentation générale
NOVA VISIO est un studio suisse qui crée des sites web et des identités visuelles pour aider les entrepreneurs et petites entreprises à vendre plus et simplement. Notre mission est de simplifier votre présence en ligne avec un site web clair et une identité visuelle professionnelle cohérente pour que vos clients vous comprennent et achètent sans effort. Made in Switzerland.

## Pourquoi choisir Nova Visio
- Langage simple : Sans jargon technique, nous vous expliquons tout clairement.
- Accompagnement pas à pas : Nous vous guidons à chaque étape de votre transformation digitale.
- Clarté et durabilité : La priorité à la clarté et à la durabilité, pas aux solutions miracles.
- Qualité maximale : Un nombre limité de projets simultanés pour une attention totale.

## Notre histoire
NOVA VISIO est né d'un constat simple : beaucoup d'entrepreneurs se sentent perdus face au digital. Entre les multiples plateformes, les tendances changeantes et le jargon technique, créer une présence en ligne cohérente peut sembler insurmontable. Nous sommes là pour simplifier tout cela.

## Vision
Créer des solutions visuelles qui marquent les esprits, en offrant une approche sur-mesure, pensée et centrée sur une idée forte : nos clients sont nos partenaires.

## Valeurs
- Clarté : Des solutions simples et compréhensibles.
- Structure : Une approche méthodique et organisée.
- Simplicité : L'essentiel, sans superflu.
- Pédagogie : Nous vous accompagnons et vous formons.

## Mission
Nous accompagnons les marques locales et internationales dans la création d'identités fortes, de contenus impactants et de sites web performants. Chaque projet est une collaboration unique.

## Compétences et certifications
Le studio dispose de certifications en IA générative (IBM, Google Cloud), prompting avancé (Google, Vanderbilt), marketing de contenu et SEO (UC Davis, IBM), social media (Meta, Adobe), et utilisation responsable de l'IA. L'IA est utilisée comme outil pour optimiser le travail, les décisions restent humaines.

## TARIFS ET OFFRES

### Site vitrine - dès 1'800 CHF
- 6 à 8 pages structurées (accueil, services, à propos, contact…).
- Design professionnel sur-mesure qui renforce votre crédibilité.
- Site modifiable par vous, sans compétences techniques.
- Optimisé pour le référencement naturel (SEO).
- Responsive : parfaitement lisible sur tous les écrans.
- 12 mois de support inclus.

### Landing page - dès 900 CHF
- Une page unique et percutante, conçue sur-mesure pour convertir vos visiteurs en prospects ou clients.
- Message ultra-clair orienté vers l'action immédiate.
- Idéale pour une offre spécifique, un lancement ou une campagne.
- Structure optimisée pour capter l'attention et guider vers le CTA.
- Parfaite pour tester une idée ou générer des leads rapidement.
- Intégration facile avec vos outils marketing (emailing, ads…).

### Identité visuelle complète - dès 1'100 CHF
- Clarification de votre positionnement et de votre univers pour une identité qui vous ressemble.
- Moodboard et 2 directions créatives pour choisir l'ambiance qui vous correspond vraiment.
- Logo sur-mesure + déclinaisons + icône pour une utilisation fluide sur tous vos supports.
- Palette de couleurs, typographies et éléments graphiques pour un univers cohérent et facile à appliquer.
- Brandboard + charte graphique pour savoir exactement comment utiliser votre identité.
- Fichiers prêts à l'emploi + 250 cartes de visite, signature email et visuels pour un réseau social inclus.

## Services complémentaires
- Tunnels de vente : parcours pour guider vos visiteurs vers l'achat.
- Blog & contenus : structure de blog pour valoriser votre expertise.
- Boutique en ligne : intégration e-commerce simple.
- Templates réseaux sociaux : posts et stories aux couleurs de votre marque.
- Supports imprimés : cartes de visite, flyers, dépliants.
- Brand kit digital : kit complet avec guide PDF et accompagnement.

## FAQ - Durée site web
En moyenne, un site vitrine simple demande entre 4 et 8 semaines, de la clarification du projet jusqu'à la mise en ligne.

## FAQ - Durée identité visuelle
Comptez entre 3 et 6 semaines selon la complexité du projet.

## FAQ - Modifier son site
Les sites sont conçus pour que vous puissiez mettre à jour vos textes et images sans compétences techniques. Une prise en main est prévue à la fin du projet.

## FAQ - Hébergement
Nous conseillons sur l'hébergeur et le nom de domaine. Ils restent à votre nom pour que vous gardiez le contrôle.

## FAQ - Site responsive
Tous les sites sont responsive : lisibles sur ordinateur, tablette et smartphone.

## FAQ - Paiement
Paiement en plusieurs fois possible : acompte au lancement, paiement intermédiaire, solde à la mise en ligne.

## FAQ - SEO
Nous travaillons le référencement de base : structure, titres, hiérarchie, bonnes pratiques techniques et rédactionnelles.

## Contact
Pour discuter de votre projet, utilisez le formulaire sur la page Contact du site novavisio.ch. Nous répondons sous 24-48h.

## Blog
Le blog propose des articles sur le web, l'identité visuelle et la stratégie digitale : "5 erreurs courantes qui plombent votre site web", "Clarifier votre offre avant de créer votre site", "Comment choisir les couleurs de votre marque".
`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    
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

    // Build the full system prompt with site content
    const fullSystemPrompt = `${SYSTEM_PROMPT}

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

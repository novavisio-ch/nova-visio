/**
 * Index de contenu pour le chatbot Visio
 * 
 * Ce fichier centralise tout le contenu du site Nova Visio utilisé par Visio
 * pour répondre aux questions des visiteurs.
 * 
 * POUR MODIFIER LE CONTENU DISPONIBLE À VISIO :
 * - Ajoutez ou modifiez les sections ci-dessous
 * - Le contenu est automatiquement utilisé par l'edge function visio-chat
 * 
 * POUR MODIFIER LE COMPORTEMENT DE VISIO :
 * - Voir le fichier supabase/functions/visio-chat/index.ts
 * - Modifier le SYSTEM_PROMPT pour ajuster le ton ou les règles
 */

export interface ContentSection {
  id: string;
  title: string;
  category: "services" | "about" | "faq" | "blog" | "contact" | "general";
  content: string;
  keywords: string[];
}

export const siteContent: ContentSection[] = [
  // === ACCUEIL ===
  {
    id: "home-hero",
    title: "Présentation générale",
    category: "general",
    content: `NOVA VISIO est un studio suisse qui crée des sites web et des identités visuelles pour aider les entrepreneurs et petites entreprises à vendre plus et simplement. Notre mission est de simplifier votre présence en ligne avec un site web clair et une identité visuelle professionnelle cohérente pour que vos clients vous comprennent et achètent sans effort. Made in Switzerland.`,
    keywords: ["nova visio", "studio", "suisse", "site web", "identité visuelle", "présentation"]
  },
  {
    id: "home-why-us",
    title: "Pourquoi choisir Nova Visio",
    category: "about",
    content: `Pourquoi choisir NOVA VISIO :
- Langage simple : Sans jargon technique, nous vous expliquons tout clairement.
- Accompagnement pas à pas : Nous vous guidons à chaque étape de votre transformation digitale.
- Clarté et durabilité : La priorité à la clarté et à la durabilité, pas aux solutions miracles.
- Qualité maximale : Un nombre limité de projets simultanés pour une attention totale.`,
    keywords: ["pourquoi", "avantages", "différence", "choix", "qualité"]
  },

  // === À PROPOS ===
  {
    id: "about-story",
    title: "Notre histoire",
    category: "about",
    content: `NOVA VISIO est né d'un constat simple : beaucoup d'entrepreneurs se sentent perdus face au digital. Entre les multiples plateformes, les tendances changeantes et le jargon technique, créer une présence en ligne cohérente peut sembler insurmontable. Nous sommes là pour simplifier tout cela.`,
    keywords: ["histoire", "origine", "création", "fondation"]
  },
  {
    id: "about-vision",
    title: "Vision",
    category: "about",
    content: `Notre vision : Créer des solutions visuelles qui marquent les esprits, en offrant une approche sur-mesure, pensée et centrée sur une idée forte : nos clients sont nos partenaires.`,
    keywords: ["vision", "objectif", "but"]
  },
  {
    id: "about-values",
    title: "Valeurs",
    category: "about",
    content: `Nos valeurs :
- Clarté : Des solutions simples et compréhensibles.
- Structure : Une approche méthodique et organisée.
- Simplicité : L'essentiel, sans superflu.
- Pédagogie : Nous vous accompagnons et vous formons.`,
    keywords: ["valeurs", "principes", "philosophie"]
  },
  {
    id: "about-mission",
    title: "Mission",
    category: "about",
    content: `Notre mission : Nous accompagnons les marques locales et internationales dans la création d'identités fortes, de contenus impactants et de sites web performants. Chaque projet est une collaboration unique, et notre mission est de le sublimer.`,
    keywords: ["mission", "rôle", "objectif"]
  },
  {
    id: "about-workflow",
    title: "Façon de travailler",
    category: "about",
    content: `Notre façon de travailler : De l'identité visuelle à la création de votre site internet, nous offrons des solutions complètes et modulables.`,
    keywords: ["travail", "méthode", "processus", "façon"]
  },

  // === COMPÉTENCES ===
  {
    id: "skills-ia",
    title: "Compétences IA & stratégie digitale",
    category: "about",
    content: `IA & stratégie digitale : Parcours certifiants autour de l'IA générative et de son usage en marketing digital. Utiliser l'IA pour analyser, optimiser et structurer vos contenus, sans jamais remplacer le regard humain. Certifications : IBM, Google Cloud, Coursera.`,
    keywords: ["ia", "intelligence artificielle", "stratégie", "digital", "certifications"]
  },
  {
    id: "skills-prompting",
    title: "Compétences Prompting & assistants IA",
    category: "about",
    content: `Prompting & assistants IA : Formations dédiées au prompting avancé et à la création d'assistants IA sur mesure. Poser les bonnes questions aux bons outils pour gagner en clarté, en vitesse et en qualité. Certifications : Google, Vanderbilt, Coursera.`,
    keywords: ["prompting", "assistants", "ia", "formation"]
  },
  {
    id: "skills-seo",
    title: "Compétences SEO & marketing de contenu",
    category: "about",
    content: `Marketing de contenu & SEO : Certifications en stratégie de content marketing et en croissance organique. Des textes pensés pour vos clients, structurés pour les moteurs de recherche et les outils d'IA. Certifications : UC Davis, IBM, Coursera.`,
    keywords: ["seo", "référencement", "contenu", "marketing", "google"]
  },
  {
    id: "skills-social",
    title: "Compétences réseaux sociaux",
    category: "about",
    content: `Social media & contenu de marque : Cours spécialisés en social media marketing et stratégie de contenu. Décliner votre identité sur des posts, stories et campagnes cohérentes avec votre site. Certifications : Meta, Adobe, Coursera.`,
    keywords: ["réseaux sociaux", "social media", "instagram", "facebook", "contenu"]
  },
  {
    id: "skills-responsible-ai",
    title: "Utilisation responsable de l'IA",
    category: "about",
    content: `Utilisation responsable de l'IA : Certifications sur les bonnes pratiques, limites et éthique de l'IA. L'IA est un co‑équipier : elle accélère le travail, mais les décisions restent humaines. Certifications : Google, IBM, Coursera.`,
    keywords: ["ia", "éthique", "responsable", "bonnes pratiques"]
  },

  // === SERVICES WEB ===
  {
    id: "service-web-overview",
    title: "Création de site web",
    category: "services",
    content: `Création de site web : Nous créons des sites web professionnels, clairs et performants. Chaque site est pensé pour présenter votre activité, vos offres et vos valeurs de manière simple et efficace. Nos sites sont optimisés pour le référencement naturel (SEO), responsive (adaptés à tous les écrans), et modifiables par vous sans compétences techniques.`,
    keywords: ["site web", "site internet", "création web", "web design"]
  },
  {
    id: "service-web-vitrine",
    title: "Site vitrine",
    category: "services",
    content: `Site vitrine (dès 1'800 CHF) - Ce qu'il comprend :
- Présentation claire de votre activité, vos offres et vos valeurs.
- Design professionnel qui renforce votre crédibilité.
- 6 à 8 pages structurées (accueil, services, à propos, contact…).
- Site modifiable par vous, sans compétences techniques.
- Optimisé pour le référencement naturel (SEO).
- Responsive : parfaitement lisible sur tous les écrans.
- 12 mois de support inclus.`,
    keywords: ["site vitrine", "site", "pages", "entreprise", "présentation", "prix", "tarif", "coût", "1800", "chf"]
  },
  {
    id: "service-web-landing",
    title: "Landing page",
    category: "services",
    content: `Landing page (dès 900 CHF) - Ce qu'elle comprend :
- Une page unique et percutante, conçue sur-mesure sur votre offre pour convertir vos visiteurs en prospects ou clients.
- Message ultra-clair orienté vers l'action immédiate.
- Idéale pour une offre spécifique, un lancement ou une campagne.
- Structure optimisée pour capter l'attention et guider vers le CTA.
- Parfaite pour tester une idée ou générer des leads rapidement.
- Intégration facile avec vos outils marketing (emailing, ads…).`,
    keywords: ["landing page", "page de vente", "conversion", "leads", "campagne", "prix", "tarif", "coût", "900", "chf"]
  },

  // === SERVICES IDENTITÉ VISUELLE ===
  {
    id: "service-identity-overview",
    title: "Identité visuelle",
    category: "services",
    content: `Identité visuelle (dès 1'100 CHF) : Nous créons des identités visuelles complètes et cohérentes. Une identité visuelle professionnelle vous permet d'être reconnu, de renforcer votre crédibilité et de vous démarquer de la concurrence.`,
    keywords: ["identité visuelle", "branding", "image de marque", "logo", "prix", "tarif", "coût", "1100", "chf"]
  },
  {
    id: "service-identity-deliverables",
    title: "Livrables identité visuelle",
    category: "services",
    content: `Ce que comprend le pack identité visuelle (dès 1'100 CHF) :
- Clarification de votre positionnement et de votre univers pour une identité qui vous ressemble.
- Moodboard et 2 directions créatives pour choisir l'ambiance qui vous correspond vraiment.
- Logo sur-mesure + déclinaisons + icône pour une utilisation fluide sur tous vos supports.
- Palette de couleurs, typographies et éléments graphiques pour un univers cohérent et facile à appliquer.
- Brandboard + charte graphique pour savoir exactement comment utiliser votre identité.
- Fichiers prêts à l'emploi + 250 cartes de visite, signature email et visuels pour un réseau social inclus.`,
    keywords: ["logo", "charte graphique", "couleurs", "typographie", "livrables", "prix", "tarif", "coût", "1100", "chf"]
  },

  // === TARIFS ===
  {
    id: "pricing-overview",
    title: "Tarifs Nova Visio",
    category: "services",
    content: `Nos tarifs :
- Site vitrine : dès 1'800 CHF (6 à 8 pages, design sur-mesure, SEO, 12 mois de support)
- Landing page : dès 900 CHF (page unique orientée conversion)
- Identité visuelle complète : dès 1'100 CHF (logo, déclinaisons, charte graphique, 250 cartes de visite incluses)

Ces tarifs sont des points de départ. Le prix final dépend de la complexité et des spécificités de votre projet. Contactez-nous pour obtenir un devis personnalisé.`,
    keywords: ["prix", "tarif", "coût", "combien", "budget", "devis", "chf", "francs", "1800", "900", "1100"]
  },

  // === SERVICES COMPLÉMENTAIRES ===
  {
    id: "service-complementary-funnels",
    title: "Tunnels de vente",
    category: "services",
    content: `Tunnels de vente : Nous concevons des parcours simples pour guider vos visiteurs depuis la découverte de votre offre jusqu'à la prise de rendez-vous ou à l'achat, en cohérence avec votre site et votre identité.`,
    keywords: ["tunnel de vente", "funnel", "conversion", "parcours client"]
  },
  {
    id: "service-complementary-blog",
    title: "Blog & contenus",
    category: "services",
    content: `Blog & contenus : Nous structurons votre blog et vos pages de contenus pour valoriser votre expertise, améliorer votre référencement et offrir à vos visiteurs des ressources claires et utiles.`,
    keywords: ["blog", "contenu", "articles", "rédaction", "seo"]
  },
  {
    id: "service-complementary-ecommerce",
    title: "Boutique en ligne",
    category: "services",
    content: `Boutique en ligne : Si vous vendez des produits, nous pouvons intégrer une boutique en ligne simple et efficace à votre site.`,
    keywords: ["boutique", "e-commerce", "vente en ligne", "produits", "shop"]
  },
  {
    id: "service-complementary-social",
    title: "Templates réseaux sociaux",
    category: "services",
    content: `Templates réseaux sociaux : Posts, stories et bannières aux couleurs de votre marque, prêts à être personnalisés dans Canva ou Figma. Idéal pour garder une communication régulière et cohérente sans repartir de zéro.`,
    keywords: ["templates", "réseaux sociaux", "instagram", "posts", "stories", "canva"]
  },
  {
    id: "service-complementary-print",
    title: "Supports imprimés",
    category: "services",
    content: `Supports imprimés : Cartes de visite (design et impression) et supports papier essentiels : flyers A5, dépliants A4, documents de présentation. Une expérience de marque cohérente, du web au physique.`,
    keywords: ["cartes de visite", "flyers", "impression", "print", "supports"]
  },
  {
    id: "service-complementary-brandkit",
    title: "Brand kit digital",
    category: "services",
    content: `Brand kit digital & contenus : Photo de profil, bannières, templates de posts et stories, visuels de newsletter, réunis dans un kit clé en main. Avec un mini guide PDF et un accompagnement éditorial pour des textes alignés à votre identité.`,
    keywords: ["brand kit", "kit digital", "visuels", "newsletter", "guide"]
  },

  // === FAQ SITE WEB ===
  {
    id: "faq-web-duration",
    title: "Durée création site web",
    category: "faq",
    content: `Combien de temps faut-il pour créer un site web ? La durée dépend de la taille du site et du niveau de préparation de votre contenu. En moyenne, un site vitrine simple demande entre 4 et 8 semaines, de la clarification du projet jusqu'à la mise en ligne.`,
    keywords: ["durée", "temps", "délai", "combien de temps", "semaines"]
  },
  {
    id: "faq-web-identity",
    title: "Logo nécessaire pour site",
    category: "faq",
    content: `Est-ce que je dois déjà avoir mon logo et mon identité visuelle ? Ce n'est pas obligatoire. Si vous avez déjà une identité, nous la reprenons et l'adaptons au web. Si ce n'est pas le cas, nous pouvons d'abord créer ou clarifier votre identité visuelle, puis construire le site à partir de ces bases.`,
    keywords: ["logo", "identité", "nécessaire", "obligatoire", "avant"]
  },
  {
    id: "faq-web-modify",
    title: "Modifier son site",
    category: "faq",
    content: `Est-ce que je pourrai modifier mon site moi-même ensuite ? Oui. Les sites sont conçus pour que vous puissiez mettre à jour vos textes, images et certains blocs de contenu sans compétences techniques avancées. Une courte prise en main est prévue à la fin du projet.`,
    keywords: ["modifier", "changer", "mettre à jour", "autonome", "moi-même"]
  },
  {
    id: "faq-web-hosting",
    title: "Hébergement et domaine",
    category: "faq",
    content: `Est-ce que vous vous occupez de l'hébergement et du nom de domaine ? Nous pouvons vous conseiller sur le choix de l'hébergeur et du nom de domaine, et vous aider à les configurer. L'hébergement et le nom de domaine restent à votre nom, pour que vous gardiez le contrôle sur vos accès.`,
    keywords: ["hébergement", "domaine", "nom de domaine", "serveur", "hoster"]
  },
  {
    id: "faq-web-mobile",
    title: "Site responsive mobile",
    category: "faq",
    content: `Est-ce que le site sera adapté au mobile ? Oui, tous les sites sont pensés en responsive. Le design et la structure sont travaillés pour être lisibles et efficaces sur ordinateur, tablette et smartphone.`,
    keywords: ["mobile", "responsive", "smartphone", "tablette", "adapté"]
  },
  {
    id: "faq-web-text",
    title: "Rédaction des textes",
    category: "faq",
    content: `Est-ce que vous faites aussi le texte du site ? Nous pouvons vous accompagner sur la structure des pages et vous guider pour rédiger des textes clairs et orientés résultats. Selon vos besoins, nous pouvons également proposer une prestation de rédaction plus complète.`,
    keywords: ["texte", "rédaction", "contenu", "écrire", "copywriting"]
  },
  {
    id: "faq-web-payment",
    title: "Paiement en plusieurs fois",
    category: "faq",
    content: `Proposez-vous des paiements en plusieurs fois ? Oui, selon le montant du projet, il est possible de répartir le paiement en plusieurs étapes (par exemple : acompte au lancement, paiement intermédiaire, solde à la mise en ligne).`,
    keywords: ["paiement", "plusieurs fois", "échelonné", "acompte", "modalités"]
  },
  {
    id: "faq-web-redesign",
    title: "Refonte de site",
    category: "faq",
    content: `Que se passe-t-il si j'ai déjà un site, mais que je veux le refondre ? Nous analysons d'abord votre site actuel (structure, contenus, performance, image), puis nous décidons ensemble s'il est plus pertinent de partir d'une base existante ou de repartir sur une nouvelle structure plus claire.`,
    keywords: ["refonte", "redesign", "existant", "améliorer", "refaire"]
  },
  {
    id: "faq-web-seo",
    title: "Référencement SEO",
    category: "faq",
    content: `Est-ce que vous vous occupez aussi du SEO ? Nous travaillons le référencement "de base" : structure des pages, titres, hiérarchie des contenus, bonnes pratiques techniques et rédactionnelles. Pour une stratégie SEO avancée, nous pouvons vous orienter ou compléter avec des actions spécifiques.`,
    keywords: ["seo", "référencement", "google", "visibilité", "recherche"]
  },
  {
    id: "faq-web-afterlaunch",
    title: "Suivi après mise en ligne",
    category: "faq",
    content: `Comment se passe le suivi après la mise en ligne ? Après la mise en ligne, une phase d'ajustements est prévue. Nous pouvons ensuite mettre en place un accompagnement ponctuel ou régulier pour faire évoluer votre site, ajouter des pages ou améliorer certains parcours au fil du temps.`,
    keywords: ["suivi", "après", "maintenance", "accompagnement", "évolution"]
  },

  // === FAQ IDENTITÉ VISUELLE ===
  {
    id: "faq-identity-duration",
    title: "Durée identité visuelle",
    category: "faq",
    content: `Combien de temps faut-il pour créer une identité visuelle complète ? En général, comptez entre 3 et 6 semaines selon la complexité du projet. Ce délai inclut les phases de découverte, d'exploration créative, les itérations et la finalisation des livrables.`,
    keywords: ["durée", "temps", "identité", "logo", "semaines"]
  },
  {
    id: "faq-identity-files",
    title: "Fichiers livrés",
    category: "faq",
    content: `Quels fichiers vais-je recevoir à la fin du projet ? Vous recevrez votre logo dans tous les formats nécessaires (PNG, SVG, PDF), les fichiers sources éditables, votre palette de couleurs avec les codes, les typographies recommandées, et une charte graphique PDF qui résume toutes les règles d'usage.`,
    keywords: ["fichiers", "livrables", "formats", "png", "svg", "pdf"]
  },
  {
    id: "faq-identity-modernize",
    title: "Moderniser logo existant",
    category: "faq",
    content: `Est-ce que vous partez de zéro ou pouvez-vous moderniser un logo existant ? Les deux sont possibles. Nous pouvons créer une identité entièrement nouvelle ou partir de votre logo existant pour le moderniser et le compléter avec une identité visuelle cohérente.`,
    keywords: ["moderniser", "existant", "refaire", "améliorer", "logo"]
  },
  {
    id: "faq-identity-social",
    title: "Visuels réseaux sociaux",
    category: "faq",
    content: `Est-ce que l'identité inclut les visuels pour les réseaux sociaux ? La prestation de base inclut les déclinaisons du logo pour les réseaux sociaux (photos de profil, bannières). Les templates de posts et stories sont proposés en option dans nos services complémentaires.`,
    keywords: ["réseaux sociaux", "instagram", "facebook", "bannières", "profil"]
  },
  {
    id: "faq-identity-proposals",
    title: "Propositions de logo",
    category: "faq",
    content: `Combien de propositions de logo vais-je voir ? Nous présentons généralement 2 à 3 directions créatives distinctes lors de la phase d'exploration. Une fois une direction choisie, nous travaillons ensemble sur les ajustements jusqu'à la version finale.`,
    keywords: ["propositions", "directions", "choix", "versions", "logo"]
  },
  {
    id: "faq-identity-usage",
    title: "Utilisation identité",
    category: "faq",
    content: `Puis-je utiliser mon identité visuelle sur tous mes supports ? Absolument. L'identité est conçue pour fonctionner sur tous vos supports : site web, réseaux sociaux, cartes de visite, documents, signalétique, etc. La charte graphique vous guide pour chaque utilisation.`,
    keywords: ["utilisation", "supports", "usage", "déclinaison", "application"]
  },

  // === CONTACT ===
  {
    id: "contact-info",
    title: "Contact",
    category: "contact",
    content: `Pour discuter de votre projet, vous pouvez nous contacter via le formulaire sur la page Contact du site novavisio.ch. Nous répondons généralement sous 24-48h. Chaque projet commence par un échange pour comprendre vos besoins et vous proposer une solution adaptée.`,
    keywords: ["contact", "formulaire", "projet", "devis", "rendez-vous", "discuter"]
  },

  // === BLOG ===
  {
    id: "blog-overview",
    title: "Blog Nova Visio",
    category: "blog",
    content: `Le blog Nova Visio propose des articles pratiques sur le web, l'identité visuelle et la stratégie digitale. Les articles aident les entrepreneurs à mieux comprendre les enjeux de leur présence en ligne et à prendre des décisions éclairées.`,
    keywords: ["blog", "articles", "conseils", "ressources"]
  },
  {
    id: "blog-5-erreurs",
    title: "Article 5 erreurs site web",
    category: "blog",
    content: `Article : 5 erreurs courantes qui plombent votre site web. Cet article détaille les erreurs fréquentes à éviter lors de la création ou refonte d'un site : manque de clarté sur l'offre, navigation confuse, design daté, contenus mal structurés, et absence d'appel à l'action clair.`,
    keywords: ["erreurs", "site web", "éviter", "améliorer"]
  },
  {
    id: "blog-clarifier-offre",
    title: "Article clarifier offre",
    category: "blog",
    content: `Article : Clarifier votre offre avant de créer votre site web. Cet article explique pourquoi il est essentiel de clarifier son positionnement et son offre avant de se lancer dans la création d'un site web. Un message clair = plus de conversions.`,
    keywords: ["clarifier", "offre", "positionnement", "message"]
  },
  {
    id: "blog-couleurs",
    title: "Article couleurs marque",
    category: "blog",
    content: `Article : Comment choisir les couleurs de votre marque. Cet article guide les entrepreneurs dans le choix de leur palette de couleurs : comprendre la psychologie des couleurs, créer une harmonie visuelle, et assurer la cohérence sur tous les supports.`,
    keywords: ["couleurs", "palette", "marque", "choix", "harmonie"]
  }
];

/**
 * Recherche les sections de contenu les plus pertinentes pour une question donnée
 * Utilise une recherche par mots-clés simple
 */
export function searchContent(query: string, maxResults: number = 5): ContentSection[] {
  const normalizedQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 2);
  
  const scored = siteContent.map(section => {
    let score = 0;
    const normalizedContent = section.content.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalizedTitle = section.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalizedKeywords = section.keywords.map(k => k.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    
    queryWords.forEach(word => {
      // Score plus élevé pour les mots-clés
      if (normalizedKeywords.some(k => k.includes(word))) {
        score += 10;
      }
      // Score pour le titre
      if (normalizedTitle.includes(word)) {
        score += 5;
      }
      // Score pour le contenu
      if (normalizedContent.includes(word)) {
        score += 2;
      }
    });
    
    return { section, score };
  });
  
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(s => s.section);
}

/**
 * Retourne tout le contenu sous forme de texte pour le contexte
 */
export function getAllContentAsText(): string {
  return siteContent
    .map(section => `## ${section.title}\n${section.content}`)
    .join("\n\n");
}

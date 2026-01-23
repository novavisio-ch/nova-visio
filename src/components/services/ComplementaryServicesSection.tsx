import { ArrowRight } from "lucide-react";
import identityMockup from "@/assets/services/identity-mockup.jpg";
import funnelMockup from "@/assets/services/funnel-mockup.jpg";
import blogMockup from "@/assets/services/blog-mockup.jpg";
import ecommerceMockup from "@/assets/services/ecommerce-mockup.jpg";
const services = [{
  id: "identity",
  title: "Identité visuelle",
  intro: "Nous créons ou faisons évoluer votre identité visuelle pour qu'elle soit cohérente sur votre site, vos réseaux sociaux et vos supports de communication.",
  bullets: ["Logo, palette de couleurs et typographies adaptés à votre univers.", "Charte graphique claire pour garder la même image partout.", "Guides d'usage pour appliquer facilement votre identité au quotidien."],
  link: "En savoir plus",
  image: identityMockup
}, {
  id: "funnels",
  title: "Tunnels de vente",
  intro: "Nous concevons des parcours simples et efficaces pour accompagner vos visiteurs jusqu'à l'achat ou la prise de rendez-vous.",
  bullets: ["Cartographie du parcours prospect : de la découverte à la conversion.", "Pages clés (capture, offre, confirmation) pensées pour rassurer et convaincre.", "Mise en place ou coordination avec vos outils d'emailing et d'automatisation."],
  link: "Découvrir les possibilités",
  image: funnelMockup
}, {
  id: "blog",
  title: "Blog & contenus",
  intro: "Nous structurons votre blog pour qu'il serve à la fois votre crédibilité, votre référencement et la compréhension de votre expertise.",
  bullets: ["Arborescence et catégories alignées avec vos offres.", "Templates d'articles lisibles et adaptés au mobile.", "Conseils éditoriaux pour publier des contenus utiles et réguliers."],
  link: "Organiser votre blog",
  image: blogMockup
}, {
  id: "ecommerce",
  title: "Boutiques en ligne",
  intro: "Nous mettons en place des boutiques en ligne adaptées à la taille de votre activité, sans usine à gaz technique.",
  bullets: ["Parcours d'achat clair : de la fiche produit au paiement.", "Mise en avant de vos produits phares et offres récurrentes.", "Intégration avec vos outils de paiement et de gestion des commandes."],
  link: "Mettre en place votre boutique",
  image: ecommerceMockup
}];
export const ComplementaryServicesSection = () => {
  return;
};
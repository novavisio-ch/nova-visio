import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Monitor, Rocket, Palette, Filter, FileText, ShoppingBag, Layout as LayoutIcon, Printer, Package, ArrowRight, Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const mainServices = [
  {
    id: "site-vitrine",
    icon: Monitor,
    title: "Site vitrine",
    subtitle: "Votre vitrine digitale",
    price: "1'500",
    badge: "Best-seller",
    variant: "gold" as const,
    description: "Une présence en ligne sur-mesure, pensée pour vos objectifs, qui donne confiance à vos clients.",
    features: [
      "6 à 8 pages structurées",
      "Design professionnel sur-mesure",
      "Optimisé pour le SEO",
      "Responsive sur tous écrans",
      "Site modifiable par vous",
      "12 mois de support inclus",
    ],
    cta: "Découvrir l'offre",
    link: "/site-web",
  },
  {
    id: "landing-page",
    icon: Rocket,
    title: "Landing page",
    subtitle: "Une page, un objectif",
    price: "900",
    badge: "Starter",
    variant: "purple" as const,
    description: "Une page unique et percutante, conçue pour convertir vos visiteurs en prospects ou clients.",
    features: [
      "Page unique orientée conversion",
      "Message ultra-clair",
      "Structure optimisée CTA",
      "Idéale pour lancements",
      "Intégration outils marketing",
      "Responsive sur tous écrans",
    ],
    cta: "Découvrir l'offre",
    link: "/site-web",
  },
  {
    id: "identite-visuelle",
    icon: Palette,
    title: "Identité visuelle",
    subtitle: "Votre image de marque",
    price: "900",
    badge: "Sur-mesure",
    variant: "gold" as const,
    description: "Une identité visuelle complète et cohérente pour être reconnu et vous démarquer.",
    features: [
      "Logo sur-mesure + déclinaisons",
      "Palette de couleurs",
      "Typographies définies",
      "Charte graphique complète",
      "250 cartes de visite incluses",
      "Fichiers prêts à l'emploi",
    ],
    cta: "Découvrir l'offre",
    link: "/identite-visuelle",
  },
];

const complementaryServices = [
  {
    id: "tunnels",
    icon: Filter,
    title: "Tunnels de vente",
    description: "Parcours guidés depuis la découverte de votre offre jusqu'à l'action.",
    price: "Sur devis",
  },
  {
    id: "blog",
    icon: FileText,
    title: "Blog & contenus",
    description: "Structuration de votre blog pour valoriser votre expertise et améliorer votre SEO.",
    price: "Sur devis",
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "Boutiques en ligne",
    description: "Boutiques e-commerce adaptées à votre activité avec un parcours d'achat clair.",
    price: "Sur devis",
  },
  {
    id: "social",
    icon: LayoutIcon,
    title: "Templates réseaux sociaux",
    description: "Posts, stories et bannières aux couleurs de votre marque, prêts dans Canva ou Figma.",
    price: "Sur devis",
  },
  {
    id: "print",
    icon: Printer,
    title: "Supports imprimés",
    description: "Cartes de visite, flyers, dépliants et documents de présentation professionnels.",
    price: "Sur devis",
  },
  {
    id: "brandkit",
    icon: Package,
    title: "Brand kit digital",
    description: "Kit clé en main avec visuels, templates et guide d'utilisation de votre identité.",
    price: "Sur devis",
  },
];

const ServiceCard = ({ 
  service, 
  index 
}: { 
  service: typeof mainServices[0]; 
  index: number;
}) => {
  const Icon = service.icon;
  const isGold = service.variant === "gold";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Badge */}
      {service.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <Badge className="flex items-center gap-1.5 uppercase tracking-wider">
            {service.badge === "Best-seller" && <Crown className="w-3 h-3" />}
            {service.badge}
          </Badge>
        </div>
      )}
      
      <div 
        className="h-full rounded-2xl border p-6 md:p-8 transition-all duration-300 hover:scale-[1.02]"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)",
          borderColor: isGold ? "rgba(195, 182, 143, 0.4)" : "rgba(124, 106, 232, 0.4)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
        }}
      >
        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-4">
          <div 
            className="p-3 rounded-xl"
            style={{
              background: isGold 
                ? "linear-gradient(135deg, rgba(195, 182, 143, 0.2) 0%, rgba(195, 182, 143, 0.1) 100%)"
                : "linear-gradient(135deg, rgba(124, 106, 232, 0.2) 0%, rgba(124, 106, 232, 0.1) 100%)",
            }}
          >
            <Icon 
              className="w-6 h-6" 
              style={{ color: isGold ? "#C3B68F" : "#9D8DF0" }} 
            />
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-white">
              {service.title}
            </h3>
            <p className="text-sm text-white/60">{service.subtitle}</p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-sm text-white/60">dès </span>
          <span 
            className="text-3xl md:text-4xl font-display font-bold"
            style={{
              background: isGold 
                ? "linear-gradient(135deg, #C3B68F 0%, #a89860 100%)"
                : "linear-gradient(135deg, #9D8DF0 0%, #7C6AE8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {service.price} CHF
          </span>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2.5 mb-8">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Check 
                className="w-4 h-4 mt-0.5 flex-shrink-0" 
                style={{ color: isGold ? "#C3B68F" : "#9D8DF0" }} 
              />
              <span className="text-white/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to={service.link}>
          <Button 
            className="w-full group/btn"
            style={{
              background: isGold 
                ? "linear-gradient(135deg, #C3B68F 0%, #a89860 100%)"
                : "linear-gradient(135deg, #9D8DF0 0%, #7C6AE8 100%)",
              color: "#1f1a3d",
            }}
          >
            {service.cta}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

const ComplementaryCard = ({ 
  service, 
  index 
}: { 
  service: typeof complementaryServices[0]; 
  index: number;
}) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group rounded-xl border border-[#C3B68F]/30 p-5 md:p-6 transition-all duration-300 hover:border-[#C3B68F]/50 hover:shadow-[0_0_20px_rgba(195,182,143,0.15)]"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%)",
      }}
    >
      <div className="flex items-start gap-4">
        <div className="p-2.5 rounded-lg bg-[#C3B68F]/10">
          <Icon className="w-5 h-5 text-[#C3B68F]" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-display text-lg font-semibold text-white">
              {service.title}
            </h4>
            <span className="text-xs font-medium text-[#C3B68F] whitespace-nowrap">
              {service.price}
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Tarifs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1f1a3d 50%, #0a0a0a 100%)",
        }}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[120px] opacity-20"
            style={{ background: "#C3B68F" }}
          />
          <div 
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-[150px] opacity-15"
            style={{ background: "#7C6AE8" }}
          />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider mb-6"
              style={{
                background: "rgba(195, 182, 143, 0.15)",
                color: "#C3B68F",
                border: "1px solid rgba(195, 182, 143, 0.3)",
              }}
            >
              Nos tarifs
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Des offres claires,<br />
              <span 
                style={{
                  background: "linear-gradient(135deg, #C3B68F 0%, #a89860 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                adaptées à vos besoins
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Des prestations sur-mesure pour renforcer votre présence en ligne et votre image de marque.
            </p>
          </motion.div>

          {/* Main Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-28">
            {mainServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Complementary Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Services complémentaires
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Des prestations additionnelles pour compléter votre projet et renforcer votre image.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
            {complementaryServices.map((service, index) => (
              <ComplementaryCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center rounded-2xl p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, rgba(195, 182, 143, 0.1) 0%, rgba(124, 106, 232, 0.1) 100%)",
              border: "1px solid rgba(195, 182, 143, 0.2)",
            }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Vous avez un projet en tête ?
            </h3>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Discutons ensemble de vos besoins pour vous proposer une solution adaptée à votre situation.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Demander un devis gratuit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Tarifs;

import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Monitor, Rocket, Palette, Filter, FileText, ShoppingBag, Layout as LayoutIcon, Printer, Package, ArrowRight, Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ReferralCtaSection } from "@/components/home/ReferralCtaSection";
import { useIsMobile } from "@/hooks/use-mobile";
import { PackDigitalBranding } from "@/components/tarifs/PackDigitalBranding";
import { PackRefonteGlobale } from "@/components/tarifs/PackRefonteGlobale";
import { MaintenanceTarifsSection } from "@/components/tarifs/MaintenanceTarifsSection";
import { useLanguage } from "@/hooks/use-language";

const getMainServices = (isFr: boolean) => [{
  id: "site-vitrine",
  icon: Monitor,
  title: isFr ? "Site vitrine" : "Business Website",
  subtitle: isFr ? "Votre meilleur commercial" : "Your best salesperson",
  price: "1'500",
  badge: isFr ? "Best-seller" : "Best Seller",
  variant: "gold" as const,
  description: isFr ? <>
    Un site qui dit clairement ce que vous faites et qui donne <strong className="text-[#C3B68F] font-medium">envie de vous contacter</strong>.
  </> : <>
    A website that clearly communicates what you do and makes visitors <strong className="text-[#C3B68F] font-medium">want to get in touch</strong>.
  </>,
  features: isFr ? [
    { text: "6 à 8 pages", highlight: "structurées" },
    { text: "Design", highlight: "professionnel sur-mesure" },
    { text: "Optimisé pour le", highlight: "SEO" },
    { text: "Responsive sur", highlight: "tous écrans" },
    { text: "Site modifiable", highlight: "par vous" },
    { text: "12 mois de", highlight: "support inclus" },
  ] : [
    { text: "6 to 8", highlight: "structured pages" },
    { text: "Custom", highlight: "professional design" },
    { text: "Optimised for", highlight: "SEO" },
    { text: "Responsive on", highlight: "all devices" },
    { text: "Easily", highlight: "editable by you" },
    { text: "12 months of", highlight: "support included" },
  ],
  cta: isFr ? "Démarrer ce projet" : "Start this project",
  link: "/contact?sujet=site-vitrine"
}, {
  id: "landing-page",
  icon: Rocket,
  title: "Landing Page",
  subtitle: isFr ? "Un message, une action" : "One message, one action",
  price: "900",
  badge: "Starter",
  variant: "purple" as const,
  description: isFr ? <>
    Une seule page, un seul objectif : que vos visiteurs <strong className="text-[#9D8DF0] font-medium">passent à l'action</strong>.
  </> : <>
    One page, one goal: getting your visitors to <strong className="text-[#9D8DF0] font-medium">take action</strong>.
  </>,
  features: isFr ? [
    { text: "Page unique", highlight: "orientée conversion" },
    { text: "Message", highlight: "ultra-clair" },
    { text: "Structure optimisée", highlight: "CTA" },
    { text: "Idéale pour", highlight: "lancements" },
    { text: "Intégration", highlight: "outils marketing" },
    { text: "Responsive sur", highlight: "tous écrans" },
  ] : [
    { text: "Single page", highlight: "built for conversion" },
    { text: "Crystal-clear", highlight: "messaging" },
    { text: "Optimised", highlight: "CTA structure" },
    { text: "Perfect for", highlight: "launches" },
    { text: "Marketing tool", highlight: "integration" },
    { text: "Responsive on", highlight: "all devices" },
  ],
  cta: isFr ? "Démarrer ce projet" : "Start this project",
  link: "/contact?sujet=landing-page"
}, {
  id: "identite-visuelle",
  icon: Palette,
  title: isFr ? "Identité visuelle" : "Brand Identity",
  subtitle: isFr ? "Fini le logo bricolé" : "No more DIY logos",
  price: "900",
  badge: isFr ? "Sur-mesure" : "Bespoke",
  variant: "gold" as const,
  description: isFr ? <>
    Logo, couleurs, typos, charte graphique - tout ce qu'il faut pour être <strong className="text-[#C3B68F] font-medium">reconnu au premier regard</strong>.
  </> : <>
    Logo, colours, fonts, brand guidelines — everything you need to be <strong className="text-[#C3B68F] font-medium">recognised at first glance</strong>.
  </>,
  features: isFr ? [
    { text: "Logo sur-mesure +", highlight: "déclinaisons" },
    { text: "Palette de", highlight: "couleurs" },
    { text: "Typographies", highlight: "définies" },
    { text: "Charte graphique", highlight: "complète" },
    { text: "250 cartes de visite", highlight: "incluses" },
    { text: "Fichiers", highlight: "prêts à l'emploi" },
  ] : [
    { text: "Custom logo +", highlight: "variations" },
    { text: "Colour", highlight: "palette" },
    { text: "Selected", highlight: "typography" },
    { text: "Complete brand", highlight: "guidelines" },
    { text: "250 business cards", highlight: "included" },
    { text: "Ready-to-use", highlight: "files" },
  ],
  cta: isFr ? "Démarrer ce projet" : "Start this project",
  link: "/contact?sujet=identite-visuelle"
}];

const getComplementaryServices = (isFr: boolean) => [{
  id: "tunnels",
  icon: Filter,
  title: isFr ? "Tunnels de vente" : "Sales Funnels",
  description: isFr ? <>
    Des parcours qui guident vos visiteurs de la <strong className="text-foreground font-semibold">découverte</strong> jusqu'au <strong className="text-[#C3B68F] font-medium">passage à l'action</strong>.
  </> : <>
    Guided journeys that take your visitors from <strong className="text-foreground font-semibold">discovery</strong> to <strong className="text-[#C3B68F] font-medium">action</strong>.
  </>,
  price: isFr ? "Sur devis" : "On request"
}, {
  id: "blog",
  icon: FileText,
  title: isFr ? "Blog & contenus" : "Blog & Content",
  description: isFr ? <>
    Un blog structuré pour <strong className="text-foreground font-semibold">montrer que vous savez de quoi vous parlez</strong> et booster votre <strong className="text-[#C3B68F] font-medium">visibilité Google</strong>.
  </> : <>
    A structured blog that <strong className="text-foreground font-semibold">showcases your expertise</strong> and boosts your <strong className="text-[#C3B68F] font-medium">Google visibility</strong>.
  </>,
  price: isFr ? "Sur devis" : "On request"
}, {
  id: "ecommerce",
  icon: ShoppingBag,
  title: isFr ? "Boutiques en ligne" : "Online Stores",
  description: isFr ? <>
    Une boutique en ligne <strong className="text-foreground font-semibold">simple et efficace</strong>, avec un <strong className="text-[#C3B68F] font-medium">parcours d'achat qui ne perd personne</strong>.
  </> : <>
    A <strong className="text-foreground font-semibold">simple, effective</strong> online store with a <strong className="text-[#C3B68F] font-medium">checkout flow that keeps every customer</strong>.
  </>,
  price: isFr ? "Sur devis" : "On request"
}, {
  id: "social",
  icon: LayoutIcon,
  title: isFr ? "Templates réseaux sociaux" : "Social Media Templates",
  description: isFr ? <>
    Posts, stories et bannières aux couleurs de votre marque, prêts dans <strong className="text-[#C3B68F] font-medium">Canva ou Figma</strong>.
  </> : <>
    Posts, stories, and banners in your brand colours, ready in <strong className="text-[#C3B68F] font-medium">Canva or Figma</strong>.
  </>,
  price: isFr ? "Sur devis" : "On request"
}, {
  id: "print",
  icon: Printer,
  title: isFr ? "Supports imprimés" : "Print Materials",
  description: isFr ? <>
    <strong className="text-foreground font-semibold">Cartes de visite</strong>, flyers, dépliants et documents de présentation <strong className="text-[#C3B68F] font-medium">professionnels</strong>.
  </> : <>
    <strong className="text-foreground font-semibold">Business cards</strong>, flyers, brochures, and <strong className="text-[#C3B68F] font-medium">professional</strong> presentation materials.
  </>,
  price: isFr ? "Sur devis" : "On request"
}, {
  id: "brandkit",
  icon: Package,
  title: isFr ? "Brand kit digital" : "Digital Brand Kit",
  description: isFr ? <>
    Kit <strong className="text-foreground font-semibold">clé en main</strong> avec visuels, templates et <strong className="text-[#C3B68F] font-medium">guide d'utilisation</strong>.
  </> : <>
    A <strong className="text-foreground font-semibold">turnkey kit</strong> with visuals, templates, and a <strong className="text-[#C3B68F] font-medium">usage guide</strong>.
  </>,
  price: isFr ? "Sur devis" : "On request"
}];

const ServiceCard = ({
  service,
  index,
  isFr
}: {
  service: ReturnType<typeof getMainServices>[0];
  index: number;
  isFr: boolean;
}) => {
  const Icon = service.icon;
  const isGold = service.variant === "gold";
  const isMobile = useIsMobile();
  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 15 },
    visible: {
      opacity: 1, y: 0, rotateX: 0,
      transition: { duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };
  const hoverVariants = isMobile ? {} : {
    y: -8,
    boxShadow: isGold ? "0 20px 60px -15px rgba(195, 182, 143, 0.4), 0 0 40px rgba(195, 182, 143, 0.15)" : "0 20px 60px -15px rgba(124, 106, 232, 0.4), 0 0 40px rgba(124, 106, 232, 0.15)"
  };
  const inViewVariants = isMobile ? {
    boxShadow: isGold ? "0 15px 40px -10px rgba(195, 182, 143, 0.3)" : "0 15px 40px -10px rgba(124, 106, 232, 0.3)"
  } : {};
  return <motion.div initial="hidden" whileInView="visible" whileHover={hoverVariants} viewport={{ once: true, margin: "-50px" }} variants={cardVariants} className="relative group" style={{ perspective: "1000px" }}>
      <motion.div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
      background: isGold ? "linear-gradient(135deg, #C3B68F 0%, transparent 50%, #C3B68F 100%)" : "linear-gradient(135deg, #9D8DF0 0%, transparent 50%, #9D8DF0 100%)",
      backgroundSize: "200% 200%"
    }} animate={isMobile ? inViewVariants : {}} />

      {service.badge && <motion.div className="absolute -top-3 left-0 right-0 flex justify-center z-10" initial={{ opacity: 0, y: -10, scale: 0.8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}>
          <Badge className="flex items-center gap-1.5 uppercase tracking-wider shadow-lg px-3 py-1">
            {(service.badge === "Best-seller" || service.badge === "Best Seller") && <Crown className="w-3 h-3" />}
            {service.badge === "Starter" && <Rocket className="w-3 h-3" />}
            {(service.badge === "Sur-mesure" || service.badge === "Bespoke") && <Palette className="w-3 h-3" />}
            {service.badge}
          </Badge>
        </motion.div>}
      
      <div className="relative h-full rounded-2xl p-6 md:p-8 transition-all duration-500 overflow-hidden card-dark-surface">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 rounded-full" style={{
          background: isGold ? "#C3B68F" : "#9D8DF0",
          left: `${20 + i * 30}%`,
          top: `${30 + i * 20}%`
        }} animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }} />)}
        </div>

        <div className="flex items-start gap-4 mb-5">
          <motion.div whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Icon className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 group-hover:drop-shadow-[0_0_12px_rgba(195,182,143,0.5)]" style={{ color: isGold ? "#C3B68F" : "#9D8DF0" }} />
          </motion.div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{service.title}</h3>
            <p className="text-sm text-muted-foreground">{service.subtitle}</p>
          </div>
        </div>

        <motion.div className="mb-5 relative inline-block" whileHover={{ scale: 1.02 }}>
          <span className="text-sm text-muted-foreground">{isFr ? "dès " : "from "}</span>
          <span className="text-3xl md:text-4xl font-display font-bold" style={{
          background: isGold ? "linear-gradient(135deg, #C3B68F 0%, #DCCB99 50%, #a89860 100%)" : "linear-gradient(135deg, #9D8DF0 0%, #B8A9F5 50%, #7C6AE8 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
        }}>
            {service.price} CHF
          </span>
        </motion.div>

        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.description}</p>

        <ul className="space-y-2.5 mb-8">
          {service.features.map((feature, i) => <motion.li key={i} className="flex items-start gap-2.5" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}>
              <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: isGold ? "#C3B68F" : "#9D8DF0" }} />
              <span className="text-foreground-medium text-sm">
                {feature.text} <strong className="text-foreground font-medium">{feature.highlight}</strong>
              </span>
            </motion.li>)}
        </ul>

        <Link to={service.link}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full group/btn relative overflow-hidden" style={{
            background: isGold ? "linear-gradient(135deg, #C3B68F 0%, #a89860 100%)" : "linear-gradient(135deg, #9D8DF0 0%, #7C6AE8 100%)",
            color: "#1f1a3d"
          }}>
              <span className="relative z-10 flex items-center justify-center w-full">
                {service.cta}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </span>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full" animate={{ x: ["100%", "-100%"] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }} />
            </Button>
          </motion.div>
        </Link>
      </div>
    </motion.div>;
};

const ComplementaryCard = ({
  service,
  index
}: {
  service: ReturnType<typeof getComplementaryServices>[0];
  index: number;
}) => {
  const Icon = service.icon;
  return <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ y: -4, boxShadow: "0 15px 40px -10px rgba(195, 182, 143, 0.25)" }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="group rounded-xl p-5 md:p-6 transition-all duration-300 relative overflow-hidden card-dark-surface">
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle at 30% 30%, rgba(195, 182, 143, 0.08) 0%, transparent 60%)" }} />
      <div className="flex items-start gap-4 relative z-10">
        <motion.div whileHover={{ scale: 1.2, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Icon className="w-6 h-6 text-[#C3B68F] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(195,182,143,0.5)]" />
        </motion.div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-[#C3B68F] transition-colors duration-300">{service.title}</h4>
            <span className="text-xs font-medium text-[#C3B68F]/80 whitespace-nowrap px-2 py-0.5 rounded-full">{service.price}</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
        </div>
      </div>
    </motion.div>;
};

const Tarifs = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";
  const mainServices = getMainServices(isFr);
  const complementaryServices = getComplementaryServices(isFr);

  return <Layout>
      <section className="relative py-20 md:py-28 overflow-hidden section-gradient-hero-alt">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[120px] opacity-20" style={{ background: "#C3B68F" }} animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity }} />
          <motion.div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-[150px] opacity-15" style={{ background: "#7C6AE8" }} animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} />
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-5" style={{ background: "linear-gradient(135deg, #C3B68F, #7C6AE8)" }} animate={{ rotate: [0, 360] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} className="text-center mb-16 md:mb-20">
            <motion.span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider mb-6" style={{ background: "rgba(195, 182, 143, 0.15)", color: "#C3B68F", border: "1px solid rgba(195, 182, 143, 0.3)" }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
                {isFr ? "Nos tarifs" : "Our Pricing"}
              </motion.span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="block">
                {isFr ? "Transparence totale." : "Full transparency."}
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} style={{
                background: "linear-gradient(135deg, #C3B68F 0%, #DCCB99 50%, #a89860 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
              }}>
                {isFr ? "Des prix clairs. Point." : "Clear pricing. Period."}
              </motion.span>
            </h1>
            <motion.p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
              {isFr
                ? "Vous savez ce que vous payez. Pas de frais cachés, pas de surprises."
                : "You know exactly what you're paying for. No hidden fees, no surprises."}
            </motion.p>
          </motion.div>

          {/* Reassurance bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 md:mb-14 px-4 py-4 md:py-5 rounded-xl backdrop-blur-sm card-glass-surface">
            <div className="flex items-center gap-2">
              <span className="text-lg">🇨🇭</span>
              <span className="text-sm text-muted-foreground">{isFr ? "Basé en Suisse, actif en France" : "Based in Switzerland, active in France"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">⚡</span>
              <span className="text-sm text-muted-foreground">{isFr ? "Livraison en 7 à 14 jours" : "Delivery in 7 to 14 days"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">💬</span>
              <span className="text-sm text-muted-foreground">{isFr ? "Appel découverte gratuit inclus" : "Free discovery call included"}</span>
            </div>
          </motion.div>

          {/* Main Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8" style={{ perspective: "1200px" }}>
            {mainServices.map((service, index) => <ServiceCard key={service.id} service={service} index={index} isFr={isFr} />)}
          </div>

          {/* Complementary link */}
          <div className="text-center mb-16 md:mb-20">
            <Link to="/contact?sujet=services-complementaires" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {isFr ? "+ Services complémentaires disponibles sur demande →" : "+ Additional services available on request →"}
            </Link>
          </div>

          {/* Maintenance Section */}
          <MaintenanceTarifsSection />

          {/* Packs Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-12">
            <h2 className="font-display text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {isFr ? "Tout en un ? " : "All-in-one? "}<span className="text-[#C3B68F]">{isFr ? "On a ce qu'il faut." : "We've got you covered."}</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {isFr
                ? <>Site + identité visuelle dans une seule offre. Moins de prestataires, plus de cohérence, et un <strong className="text-[#C3B68F] font-medium">meilleur prix</strong>.</>
                : <>Website + brand identity in a single package. Fewer providers, more consistency, and a <strong className="text-[#C3B68F] font-medium">better price</strong>.</>}
            </p>
          </motion.div>

          <div className="mb-10 md:mb-14">
            <PackDigitalBranding />
          </div>

          <div className="mb-20 md:mb-28">
            <PackRefonteGlobale />
          </div>

          {/* CTA Section */}
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center rounded-2xl p-8 md:p-12 relative overflow-hidden" style={{
            background: "linear-gradient(135deg, rgba(195, 182, 143, 0.08) 0%, rgba(124, 106, 232, 0.08) 100%)",
            border: "1px solid rgba(195, 182, 143, 0.2)"
          }}>
            <motion.div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
              background: "linear-gradient(90deg, transparent, rgba(195, 182, 143, 0.3), transparent)",
              backgroundSize: "200% 100%"
            }} animate={{ backgroundPosition: ["200% 0", "-200% 0"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />

            <h3 className="font-display text-3xl md:text-3xl font-bold text-foreground mb-4">
              {isFr
                ? <>Vous savez ce qu'il vous faut ? <span className="text-[#C3B68F]">On en parle.</span></>
                : <>Know what you need? <span className="text-[#C3B68F]">Let's talk.</span></>}
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              {isFr
                ? "15 min d'appel gratuit. On fait le point et on vous dit honnêtement quelle offre correspond à votre situation."
                : "15-minute free call. We assess your needs and honestly recommend the right package for your situation."}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  {isFr ? "Demander un devis gratuit" : "Request a free quote"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <ReferralCtaSection />
    </Layout>;
};
export default Tarifs;

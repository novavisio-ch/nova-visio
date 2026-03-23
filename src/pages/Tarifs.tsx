import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Monitor, Rocket, Palette, Filter, FileText, ShoppingBag, Layout as LayoutIcon, Printer, Package, ArrowRight, Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { PackDigitalBranding } from "@/components/tarifs/PackDigitalBranding";
import { PackRefonteGlobale } from "@/components/tarifs/PackRefonteGlobale";
import { MaintenanceTarifsSection } from "@/components/tarifs/MaintenanceTarifsSection";

const mainServices = [{
  id: "site-vitrine",
  icon: Monitor,
  title: "Site vitrine",
  subtitle: "Votre vitrine digitale",
  price: "1'500",
  badge: "Best-seller",
  variant: "gold" as const,
  description: <>
        Une présence en ligne <strong className="text-foreground font-semibold">sur-mesure</strong>, pensée pour vos objectifs, qui donne <strong className="text-[#C3B68F] font-medium">confiance à vos clients</strong>.
      </>,
  features: [{
    text: "6 à 8 pages",
    highlight: "structurées"
  }, {
    text: "Design",
    highlight: "professionnel sur-mesure"
  }, {
    text: "Optimisé pour le",
    highlight: "SEO"
  }, {
    text: "Responsive sur",
    highlight: "tous écrans"
  }, {
    text: "Site modifiable",
    highlight: "par vous"
  }, {
    text: "12 mois de",
    highlight: "support inclus"
  }],
  cta: "Découvrir l'offre",
  link: "/site-web"
}, {
  id: "landing-page",
  icon: Rocket,
  title: "Landing page",
  subtitle: "Une page, un objectif",
  price: "900",
  badge: "Starter",
  variant: "purple" as const,
  description: <>
        Une page <strong className="text-foreground font-semibold">unique et percutante</strong>, conçue pour <strong className="text-[#9D8DF0] font-medium">convertir vos visiteurs</strong> en prospects.
      </>,
  features: [{
    text: "Page unique",
    highlight: "orientée conversion"
  }, {
    text: "Message",
    highlight: "ultra-clair"
  }, {
    text: "Structure optimisée",
    highlight: "CTA"
  }, {
    text: "Idéale pour",
    highlight: "lancements"
  }, {
    text: "Intégration",
    highlight: "outils marketing"
  }, {
    text: "Responsive sur",
    highlight: "tous écrans"
  }],
  cta: "Découvrir l'offre",
  link: "/site-web"
}, {
  id: "identite-visuelle",
  icon: Palette,
  title: "Identité visuelle",
  subtitle: "Votre image de marque",
  price: "900",
  badge: "Sur-mesure",
  variant: "gold" as const,
  description: <>
        Une identité visuelle <strong className="text-foreground font-semibold">complète et cohérente</strong> pour être <strong className="text-[#C3B68F] font-medium">reconnu et vous démarquer</strong>.
      </>,
  features: [{
    text: "Logo sur-mesure +",
    highlight: "déclinaisons"
  }, {
    text: "Palette de",
    highlight: "couleurs"
  }, {
    text: "Typographies",
    highlight: "définies"
  }, {
    text: "Charte graphique",
    highlight: "complète"
  }, {
    text: "250 cartes de visite",
    highlight: "incluses"
  }, {
    text: "Fichiers",
    highlight: "prêts à l'emploi"
  }],
  cta: "Découvrir l'offre",
  link: "/identite-visuelle"
}];
const complementaryServices = [{
  id: "tunnels",
  icon: Filter,
  title: "Tunnels de vente",
  description: <>
        Parcours guidés depuis la <strong className="text-foreground font-semibold">découverte</strong> de votre offre jusqu'à <strong className="text-[#C3B68F] font-medium">l'action</strong>.
      </>,
  price: "Sur devis"
}, {
  id: "blog",
  icon: FileText,
  title: "Blog & contenus",
  description: <>
        Structuration de votre blog pour <strong className="text-foreground font-semibold">valoriser votre expertise</strong> et améliorer votre <strong className="text-[#C3B68F] font-medium">SEO</strong>.
      </>,
  price: "Sur devis"
}, {
  id: "ecommerce",
  icon: ShoppingBag,
  title: "Boutiques en ligne",
  description: <>
        Boutiques <strong className="text-foreground font-semibold">e-commerce</strong> adaptées avec un <strong className="text-[#C3B68F] font-medium">parcours d'achat clair</strong>.
      </>,
  price: "Sur devis"
}, {
  id: "social",
  icon: LayoutIcon,
  title: "Templates réseaux sociaux",
  description: <>
        Posts, stories et bannières aux couleurs de votre marque, prêts dans <strong className="text-[#C3B68F] font-medium">Canva ou Figma</strong>.
      </>,
  price: "Sur devis"
}, {
  id: "print",
  icon: Printer,
  title: "Supports imprimés",
  description: <>
        <strong className="text-foreground font-semibold">Cartes de visite</strong>, flyers, dépliants et documents de présentation <strong className="text-[#C3B68F] font-medium">professionnels</strong>.
      </>,
  price: "Sur devis"
}, {
  id: "brandkit",
  icon: Package,
  title: "Brand kit digital",
  description: <>
        Kit <strong className="text-foreground font-semibold">clé en main</strong> avec visuels, templates et <strong className="text-[#C3B68F] font-medium">guide d'utilisation</strong>.
      </>,
  price: "Sur devis"
}];
const ServiceCard = ({
  service,
  index
}: {
  service: typeof mainServices[0];
  index: number;
}) => {
  const Icon = service.icon;
  const isGold = service.variant === "gold";
  const isMobile = useIsMobile();
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };
  const hoverVariants = isMobile ? {} : {
    y: -8,
    boxShadow: isGold ? "0 20px 60px -15px rgba(195, 182, 143, 0.4), 0 0 40px rgba(195, 182, 143, 0.15)" : "0 20px 60px -15px rgba(124, 106, 232, 0.4), 0 0 40px rgba(124, 106, 232, 0.15)"
  };
  const inViewVariants = isMobile ? {
    boxShadow: isGold ? "0 15px 40px -10px rgba(195, 182, 143, 0.3)" : "0 15px 40px -10px rgba(124, 106, 232, 0.3)"
  } : {};
  return <motion.div initial="hidden" whileInView="visible" whileHover={hoverVariants} viewport={{
    once: true,
    margin: "-50px"
  }} variants={cardVariants} className="relative group" style={{
    perspective: "1000px"
  }}>
      {/* Animated border glow */}
      <motion.div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
      background: isGold ? "linear-gradient(135deg, #C3B68F 0%, transparent 50%, #C3B68F 100%)" : "linear-gradient(135deg, #9D8DF0 0%, transparent 50%, #9D8DF0 100%)",
      backgroundSize: "200% 200%"
    }} animate={isMobile ? inViewVariants : {}} />

      {/* Badge - centered on card */}
      {service.badge && <motion.div className="absolute -top-3 left-0 right-0 flex justify-center z-10" initial={{
      opacity: 0,
      y: -10,
      scale: 0.8
    }} whileInView={{
      opacity: 1,
      y: 0,
      scale: 1
    }} viewport={{
      once: true
    }} transition={{
      delay: index * 0.15 + 0.3,
      duration: 0.4
    }}>
          <Badge className="flex items-center gap-1.5 uppercase tracking-wider shadow-lg px-3 py-1">
            {service.badge === "Best-seller" && <Crown className="w-3 h-3" />}
            {service.badge === "Starter" && <Rocket className="w-3 h-3" />}
            {service.badge === "Sur-mesure" && <Palette className="w-3 h-3" />}
            {service.badge}
          </Badge>
        </motion.div>}
      
      <div className="relative h-full rounded-2xl border p-6 md:p-8 transition-all duration-500 overflow-hidden card-dark-surface" style={{
      borderColor: isGold ? "rgba(195, 182, 143, 0.3)" : "rgba(124, 106, 232, 0.3)"
    }}>
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 rounded-full" style={{
          background: isGold ? "#C3B68F" : "#9D8DF0",
          left: `${20 + i * 30}%`,
          top: `${30 + i * 20}%`
        }} animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.6, 0.2]
        }} transition={{
          duration: 3 + i,
          repeat: Infinity,
          delay: i * 0.5
        }} />)}
        </div>

        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-5">
          <motion.div whileHover={{
          scale: 1.15,
          rotate: 5
        }} transition={{
          type: "spring",
          stiffness: 300
        }}>
            <Icon className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 group-hover:drop-shadow-[0_0_12px_rgba(195,182,143,0.5)]" style={{
            color: isGold ? "#C3B68F" : "#9D8DF0"
          }} />
          </motion.div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground">{service.subtitle}</p>
          </div>
        </div>

        {/* Price with animated underline */}
        <motion.div className="mb-5 relative inline-block" whileHover={{
        scale: 1.02
      }}>
          <span className="text-sm text-muted-foreground">dès </span>
          <span className="text-3xl md:text-4xl font-display font-bold" style={{
          background: isGold ? "linear-gradient(135deg, #C3B68F 0%, #DCCB99 50%, #a89860 100%)" : "linear-gradient(135deg, #9D8DF0 0%, #B8A9F5 50%, #7C6AE8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
            {service.price} CHF
          </span>
          
        </motion.div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features with staggered animation */}
        <ul className="space-y-2.5 mb-8">
          {service.features.map((feature, i) => <motion.li key={i} className="flex items-start gap-2.5" initial={{
          opacity: 0,
          x: -10
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1 + i * 0.05 + 0.3
        }}>
              <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{
            color: isGold ? "#C3B68F" : "#9D8DF0"
          }} />
              <span className="text-foreground-medium text-sm">
                {feature.text} <strong className="text-foreground font-medium">{feature.highlight}</strong>
              </span>
            </motion.li>)}
        </ul>

        {/* CTA with shine effect */}
        <Link to={service.link}>
          <motion.div whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
            <Button className="w-full group/btn relative overflow-hidden" style={{
            background: isGold ? "linear-gradient(135deg, #C3B68F 0%, #a89860 100%)" : "linear-gradient(135deg, #9D8DF0 0%, #7C6AE8 100%)",
            color: "#1f1a3d"
          }}>
              <span className="relative z-10 flex items-center justify-center w-full">
                {service.cta}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </span>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full" animate={{
              x: ["100%", "-100%"]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }} />
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
  service: typeof complementaryServices[0];
  index: number;
}) => {
  const Icon = service.icon;
  return <motion.div initial={{
    opacity: 0,
    y: 20,
    scale: 0.95
  }} whileInView={{
    opacity: 1,
    y: 0,
    scale: 1
  }} whileHover={{
    y: -4,
    boxShadow: "0 15px 40px -10px rgba(195, 182, 143, 0.25)"
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.4,
    delay: index * 0.08
  }} className="group rounded-xl border border-[#C3B68F]/20 p-5 md:p-6 transition-all duration-300 hover:border-[#C3B68F]/50 relative overflow-hidden card-dark-surface">
      {/* Hover gradient overlay */}
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
      background: "radial-gradient(circle at 30% 30%, rgba(195, 182, 143, 0.08) 0%, transparent 60%)"
    }} />

      <div className="flex items-start gap-4 relative z-10">
        <motion.div whileHover={{
        scale: 1.2,
        rotate: -5
      }} transition={{
        type: "spring",
        stiffness: 300
      }}>
          <Icon className="w-6 h-6 text-[#C3B68F] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(195,182,143,0.5)]" />
        </motion.div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-[#C3B68F] transition-colors duration-300">
              {service.title}
            </h4>
            <span className="text-xs font-medium text-[#C3B68F]/80 whitespace-nowrap px-2 py-0.5 rounded-full border border-[#C3B68F]/30">
              {service.price}
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>;
};
const Tarifs = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden section-gradient-hero-alt">
        {/* Animated background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[120px] opacity-20" style={{
          background: "#C3B68F"
        }} animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }} transition={{
          duration: 8,
          repeat: Infinity
        }} />
          <motion.div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-[150px] opacity-15" style={{
          background: "#7C6AE8"
        }} animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2
        }} />
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-5" style={{
          background: "linear-gradient(135deg, #C3B68F, #7C6AE8)"
        }} animate={{
          rotate: [0, 360]
        }} transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }} />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        }} className="text-center mb-16 md:mb-20">
            <motion.span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider mb-6" style={{
            background: "rgba(195, 182, 143, 0.15)",
            color: "#C3B68F",
            border: "1px solid rgba(195, 182, 143, 0.3)"
          }} initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }}>
              Nos tarifs
            </motion.span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
              <motion.span initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.3,
              duration: 0.6
            }} className="block">
                Des offres claires,
              </motion.span>
              <motion.span initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5,
              duration: 0.6
            }} style={{
              background: "linear-gradient(135deg, #C3B68F 0%, #DCCB99 50%, #a89860 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
                adaptées à vos besoins.
              </motion.span>
            </h1>
            <motion.p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.7,
            duration: 0.6
          }}>
              Des prestations <strong className="text-foreground font-medium">sur-mesure</strong> pour renforcer votre <strong className="text-[#C3B68F] font-medium">présence en ligne</strong> et votre image de marque.
            </motion.p>
          </motion.div>

          {/* Main Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20" style={{
          perspective: "1200px"
        }}>
            {mainServices.map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)}
          </div>

          {/* Maintenance Section */}
          <MaintenanceTarifsSection />

          {/* Packs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos packs <span className="text-[#C3B68F]">tout-en-un.</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Des offres <strong className="text-foreground font-medium">clé en main</strong> qui combinent plusieurs services pour un accompagnement <strong className="text-[#C3B68F] font-medium">complet</strong>.
            </p>
          </motion.div>

          {/* Pack Digital & Branding */}
          <div className="mb-10 md:mb-14">
            <PackDigitalBranding />
          </div>

          {/* Pack Refonte Globale */}
          <div className="mb-20 md:mb-28">
            <PackRefonteGlobale />
          </div>

          {/* Complementary Services */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-10 md:mb-12">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Services complémentaires.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Des prestations additionnelles pour <strong className="text-foreground font-medium">compléter votre projet</strong> et renforcer votre image.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
            {complementaryServices.map((service, index) => <ComplementaryCard key={service.id} service={service} index={index} />)}
          </div>

          {/* CTA Section */}
          <motion.div initial={{
          opacity: 0,
          y: 30,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center rounded-2xl p-8 md:p-12 relative overflow-hidden" style={{
          background: "linear-gradient(135deg, rgba(195, 182, 143, 0.08) 0%, rgba(124, 106, 232, 0.08) 100%)",
          border: "1px solid rgba(195, 182, 143, 0.2)"
        }}>
            {/* Animated border */}
            <motion.div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
            background: "linear-gradient(90deg, transparent, rgba(195, 182, 143, 0.3), transparent)",
            backgroundSize: "200% 100%"
          }} animate={{
            backgroundPosition: ["200% 0", "-200% 0"]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }} />

            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Vous avez un <span className="text-[#C3B68F]">projet</span> en tête ?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Discutons ensemble de vos besoins pour vous proposer une <strong className="text-foreground font-medium">solution adaptée</strong> à votre situation.
            </p>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.98
          }}>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>;
};
export default Tarifs;
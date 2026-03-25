import { motion, Variants } from "framer-motion";
import { 
  Target, 
  Palette, 
  Crown, 
  Sparkles, 
  BookOpen, 
  Package, 
  HeartHandshake,
  CheckCircle,
  Compass,
  Eye,
  Layers,
  Type,
  FileText,
  Printer,
  Mail,
  Video,
  RefreshCcw,
  Shield,
  MessageCircle
} from "lucide-react";

interface Props {
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
    rotateX: -10
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

interface OfferCategory {
  icon: React.ElementType;
  title: string;
  items: {
    icon: React.ElementType;
    text: string;
    highlight?: string;
  }[];
  gradient: string;
  accentColor: string;
}

const offerCategories: OfferCategory[] = [
  {
    icon: Target,
    title: "On part de vous, pas d'un template",
    gradient: "from-[#C3B68F]/20 to-transparent",
    accentColor: "#C3B68F",
    items: [
      {
        icon: FileText,
        text: "Un brief structuré pour clarifier qui vous êtes, ce que vous faites et à qui vous parlez.",
        highlight: "une identité qui vous ressemble, pas un logo générique"
      },
      {
        icon: Eye,
        text: "Analyse de votre positionnement et de vos concurrents.",
        highlight: "vous démarquer au lieu de ressembler à tout le monde"
      },
      {
        icon: Compass,
        text: "2 à 3 mots-clés d'univers (ex. minimal, chaleureux, premium) pour guider toutes les décisions graphiques.",
        highlight: "fini les identités incohérentes"
      }
    ]
  },
  {
    icon: Palette,
    title: "Un univers visuel qui tient la route",
    gradient: "from-[#7C6AE8]/20 to-transparent",
    accentColor: "#7C6AE8",
    items: [
      {
        icon: Layers,
        text: "Un moodboard pour valider l'ambiance avant de toucher au logo.",
        highlight: "moins d'allers-retours, moins de malentendus"
      },
      {
        icon: Sparkles,
        text: "Deux directions créatives pour choisir celle qui vous correspond vraiment.",
        highlight: "vous choisissez en conscience, pas par défaut"
      }
    ]
  },
  {
    icon: Crown,
    title: "Un logo qui marche partout",
    gradient: "from-[#C3B68F]/20 to-transparent",
    accentColor: "#C3B68F",
    items: [
      {
        icon: Sparkles,
        text: "Un logo principal sur-mesure, aussi bien sur écran que sur papier.",
        highlight: "utilisable partout sans bidouillage"
      },
      {
        icon: Layers,
        text: "Déclinaisons (secondaire, simplifiée, horizontal/vertical, noir & blanc).",
        highlight: "lisible et reconnaissable dans tous les formats"
      },
      {
        icon: Target,
        text: "Un pictogramme dédié pour vos avatars, favicons et réseaux sociaux.",
        highlight: "identité forte même en tout petit"
      }
    ]
  },
  {
    icon: Type,
    title: "Des codes visuels clairs et faciles à utiliser",
    gradient: "from-[#7C6AE8]/20 to-transparent",
    accentColor: "#7C6AE8",
    items: [
      {
        icon: Palette,
        text: "Une palette de couleurs complète avec des recommandations d'usage concrètes.",
        highlight: "la même image partout, sans se poser de questions"
      },
      {
        icon: Type,
        text: "Des typographies choisies (titres, textes, accents) avec une hiérarchie claire.",
        highlight: "des supports lisibles et harmonieux"
      },
      {
        icon: Sparkles,
        text: "Des éléments graphiques complémentaires (formes, motifs, fonds).",
        highlight: "vos supports ont l'air de votre marque"
      }
    ]
  },
  {
    icon: BookOpen,
    title: "Une charte pour ne plus jamais se demander \"comment j'utilise mon logo ?\"",
    gradient: "from-[#C3B68F]/20 to-transparent",
    accentColor: "#C3B68F",
    items: [
      {
        icon: FileText,
        text: "Un brandboard synthétique qui rassemble vos éléments clés en une page.",
        highlight: "pratique pour vous et vos partenaires"
      },
      {
        icon: Shield,
        text: "Une mini charte avec règles d'utilisation, tailles minimales, marges de sécurité.",
        highlight: "fini les erreurs qui abîment votre image"
      }
    ]
  },
  {
    icon: Package,
    title: "Des supports prêts à l'emploi - tout de suite",
    gradient: "from-[#7C6AE8]/20 to-transparent",
    accentColor: "#7C6AE8",
    items: [
      {
        icon: Layers,
        text: "Tous les fichiers dans les bons formats (PNG, JPEG, SVG/PDF vectoriel).",
        highlight: "ça marche avec vos imprimeurs et vos outils en ligne"
      },
      {
        icon: Printer,
        text: "250 cartes de visite prêtes à l'impression.",
        highlight: "une image pro dès le premier contact"
      },
      {
        icon: Mail,
        text: "Signature email + visuels pour un réseau social inclus.",
        highlight: "la même image sur tous vos canaux"
      }
    ]
  },
  {
    icon: HeartHandshake,
    title: "On ne vous lâche pas après la livraison",
    gradient: "from-[#C3B68F]/20 to-transparent",
    accentColor: "#C3B68F",
    items: [
      {
        icon: Video,
        text: "Présentation guidée des pistes (en visio ou document commenté).",
        highlight: "vous comprenez les choix et vous validez en confiance"
      },
      {
        icon: RefreshCcw,
        text: "2 à 3 séries d'allers-retours incluses sur la piste choisie.",
        highlight: "une identité dans laquelle vous vous reconnaissez"
      },
      {
        icon: Shield,
        text: "Cession de droits d'exploitation du logo incluse.",
        highlight: "utilisez-le sereinement sur tous vos supports"
      },
      {
        icon: MessageCircle,
        text: "Accompagnement post-livraison pour vos questions d'usage.",
        highlight: "pas seul(e) au moment de déployer votre image"
      }
    ]
  }
];

export const BrandOfferDetailsSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden section-gradient-main">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#C3B68F]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#7C6AE8]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C3B68F]/5 to-transparent rounded-full pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-[#C3B68F]" />
            <span className="text-sm text-foreground-strong">Tout ce qui est inclus</span>
          </motion.div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Votre identité visuelle,{" "}
            <span style={{
              background: "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              complète et clé en main
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chaque élément est là pour une raison. Pas de superflu, que de l'utile.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {offerCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            
            return (
              <motion.div
                key={categoryIndex}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
                style={{ perspective: "1000px" }}
              >
                {/* Card glow effect */}
                <div 
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ background: `${category.accentColor}20` }}
                />
                
                {/* Card */}
                <div 
                  className="relative p-6 md:p-8 rounded-2xl backdrop-blur-sm bg-foreground/[0.03] h-full transition-all duration-500 group-hover:bg-foreground/[0.05]"
                >
                  {/* Background gradient */}
                  <div 
                    className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${category.gradient} rounded-tr-2xl pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
                  />
                  
                  {/* Large background number */}
                  <div 
                    className="absolute top-4 right-4 text-[120px] font-bold leading-none pointer-events-none select-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
                    style={{ color: category.accentColor }}
                  >
                    {String(categoryIndex + 1).padStart(2, '0')}
                  </div>

                  {/* Header */}
                  <div className="relative flex items-start gap-4 mb-6">
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <CategoryIcon 
                        className="w-7 h-7 transition-all duration-300 group-hover:scale-110" 
                        style={{ 
                          color: category.accentColor,
                          filter: `drop-shadow(0 0 8px ${category.accentColor}60)`
                        }} 
                      />
                    </motion.div>
                    
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight pt-1">
                      {category.title}
                    </h3>
                  </div>

                  {/* Items */}
                  <motion.ul 
                    className="space-y-4 relative"
                    variants={containerVariants}
                  >
                    {category.items.map((item, itemIndex) => {
                      return (
                        <motion.li
                          key={itemIndex}
                          variants={itemVariants}
                          className="flex items-start gap-3 group/item"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle 
                              className="w-5 h-5 transition-all duration-300 group-hover/item:scale-110"
                              style={{ color: category.accentColor }}
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-foreground-medium text-sm md:text-base leading-relaxed">
                              {item.text}
                              {item.highlight && (
                                <span 
                                  className="block mt-1 text-sm font-medium"
                                  style={{ color: category.accentColor }}
                                >
                                  → {item.highlight}
                                </span>
                              )}
                            </p>
                          </div>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-foreground/5 border border-border/30 backdrop-blur-sm">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C3B68F] to-[#A89B6F] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C6AE8] to-[#5B4BC7] flex items-center justify-center">
                <Crown className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="text-sm text-foreground-medium">
              <span className="font-semibold text-foreground">7 piliers</span> pour une identité complète
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

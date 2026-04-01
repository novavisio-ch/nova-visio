import { motion, Variants } from "framer-motion";
import { 
  Target, Palette, Crown, Sparkles, BookOpen, Package, HeartHandshake,
  CheckCircle, Compass, Eye, Layers, Type, FileText, Printer, Mail,
  Video, RefreshCcw, Shield, MessageCircle
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95, rotateX: -10 },
  visible: { opacity: 1, y: 0, scale: 1, rotateX: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

interface OfferCategory {
  icon: React.ElementType;
  title: string;
  items: { icon: React.ElementType; text: string; highlight?: string; }[];
  gradient: string;
  accentColor: string;
}

const getOfferCategories = (isFr: boolean): OfferCategory[] => [
  {
    icon: Target,
    title: isFr ? "On part de vous, pas d'un template" : "We start with you — not a template",
    gradient: "from-[#C3B68F]/20 to-transparent",
    accentColor: "#C3B68F",
    items: [
      { icon: FileText, text: isFr ? "Un brief structuré pour clarifier qui vous êtes, ce que vous faites et à qui vous parlez." : "A structured brief to clarify who you are, what you do, and who you're speaking to.", highlight: isFr ? "une identité qui vous ressemble, pas un logo générique" : "an identity that truly reflects you — not a generic logo" },
      { icon: Eye, text: isFr ? "Analyse de votre positionnement et de vos concurrents." : "Positioning and competitor analysis.", highlight: isFr ? "vous démarquer au lieu de ressembler à tout le monde" : "stand out instead of blending in" },
      { icon: Compass, text: isFr ? "2 à 3 mots-clés d'univers (ex. minimal, chaleureux, premium) pour guider toutes les décisions graphiques." : "2–3 brand keywords (e.g. minimal, warm, premium) to guide every design decision.", highlight: isFr ? "fini les identités incohérentes" : "no more inconsistent branding" },
    ]
  },
  {
    icon: Palette,
    title: isFr ? "Un univers visuel qui tient la route" : "A visual world that holds together",
    gradient: "from-[#7C6AE8]/20 to-transparent",
    accentColor: "#7C6AE8",
    items: [
      { icon: Layers, text: isFr ? "Un moodboard pour valider l'ambiance avant de toucher au logo." : "A moodboard to validate the mood before touching the logo.", highlight: isFr ? "moins d'allers-retours, moins de malentendus" : "fewer revisions, fewer misunderstandings" },
      { icon: Sparkles, text: isFr ? "Deux directions créatives pour choisir celle qui vous correspond vraiment." : "Two creative directions so you can choose the one that truly fits.", highlight: isFr ? "vous choisissez en conscience, pas par défaut" : "you choose with confidence, not by default" },
    ]
  },
  {
    icon: Crown,
    title: isFr ? "Un logo qui marche partout" : "A logo that works everywhere",
    gradient: "from-[#C3B68F]/20 to-transparent",
    accentColor: "#C3B68F",
    items: [
      { icon: Sparkles, text: isFr ? "Un logo principal sur-mesure, aussi bien sur écran que sur papier." : "A bespoke primary logo, equally sharp on screen and in print.", highlight: isFr ? "utilisable partout sans bidouillage" : "usable everywhere — no workarounds needed" },
      { icon: Layers, text: isFr ? "Déclinaisons (secondaire, simplifiée, horizontal/vertical, noir & blanc)." : "Variations (secondary, simplified, horizontal/vertical, black & white).", highlight: isFr ? "lisible et reconnaissable dans tous les formats" : "legible and recognisable in every format" },
      { icon: Target, text: isFr ? "Un pictogramme dédié pour vos avatars, favicons et réseaux sociaux." : "A dedicated icon for your avatars, favicons, and social media.", highlight: isFr ? "identité forte même en tout petit" : "strong identity even at tiny sizes" },
    ]
  },
  {
    icon: Type,
    title: isFr ? "Des codes visuels clairs et faciles à utiliser" : "Clear visual codes, easy to use",
    gradient: "from-[#7C6AE8]/20 to-transparent",
    accentColor: "#7C6AE8",
    items: [
      { icon: Palette, text: isFr ? "Une palette de couleurs complète avec des recommandations d'usage concrètes." : "A complete colour palette with practical usage guidelines.", highlight: isFr ? "la même image partout, sans se poser de questions" : "consistent look everywhere — no guesswork" },
      { icon: Type, text: isFr ? "Des typographies choisies (titres, textes, accents) avec une hiérarchie claire." : "Carefully selected fonts (headings, body, accents) with a clear hierarchy.", highlight: isFr ? "des supports lisibles et harmonieux" : "readable, harmonious materials" },
      { icon: Sparkles, text: isFr ? "Des éléments graphiques complémentaires (formes, motifs, fonds)." : "Complementary graphic elements (shapes, patterns, backgrounds).", highlight: isFr ? "vos supports ont l'air de votre marque" : "your materials look like your brand" },
    ]
  },
  {
    icon: BookOpen,
    title: isFr ? "Une charte pour ne plus jamais se demander \"comment j'utilise mon logo ?\"" : "Brand guidelines so you never wonder \"how do I use my logo?\"",
    gradient: "from-[#C3B68F]/20 to-transparent",
    accentColor: "#C3B68F",
    items: [
      { icon: FileText, text: isFr ? "Un brandboard synthétique qui rassemble vos éléments clés en une page." : "A concise brandboard summarising your key elements on one page.", highlight: isFr ? "pratique pour vous et vos partenaires" : "handy for you and your partners" },
      { icon: Shield, text: isFr ? "Une mini charte avec règles d'utilisation, tailles minimales, marges de sécurité." : "A mini style guide with usage rules, minimum sizes, and safe zones.", highlight: isFr ? "fini les erreurs qui abîment votre image" : "no more mistakes that damage your image" },
    ]
  },
  {
    icon: Package,
    title: isFr ? "Des supports prêts à l'emploi - tout de suite" : "Ready-to-use assets — right away",
    gradient: "from-[#7C6AE8]/20 to-transparent",
    accentColor: "#7C6AE8",
    items: [
      { icon: Layers, text: isFr ? "Tous les fichiers dans les bons formats (PNG, JPEG, SVG/PDF vectoriel)." : "All files in the right formats (PNG, JPEG, SVG/PDF vector).", highlight: isFr ? "ça marche avec vos imprimeurs et vos outils en ligne" : "works with your printers and online tools" },
      { icon: Printer, text: isFr ? "250 cartes de visite prêtes à l'impression." : "250 business cards ready to print.", highlight: isFr ? "une image pro dès le premier contact" : "a professional image from day one" },
      { icon: Mail, text: isFr ? "Signature email + visuels pour un réseau social inclus." : "Email signature + social media visuals included.", highlight: isFr ? "la même image sur tous vos canaux" : "consistent branding across all channels" },
    ]
  },
  {
    icon: HeartHandshake,
    title: isFr ? "On ne vous lâche pas après la livraison" : "We don't leave you hanging after delivery",
    gradient: "from-[#C3B68F]/20 to-transparent",
    accentColor: "#C3B68F",
    items: [
      { icon: Video, text: isFr ? "Présentation guidée des pistes (en visio ou document commenté)." : "Guided presentation of concepts (via video call or annotated document).", highlight: isFr ? "vous comprenez les choix et vous validez en confiance" : "you understand the choices and approve with confidence" },
      { icon: RefreshCcw, text: isFr ? "2 à 3 séries d'allers-retours incluses sur la piste choisie." : "2–3 rounds of revisions included on the chosen direction.", highlight: isFr ? "une identité dans laquelle vous vous reconnaissez" : "an identity you truly recognise yourself in" },
      { icon: Shield, text: isFr ? "Cession de droits d'exploitation du logo incluse." : "Logo usage rights transfer included.", highlight: isFr ? "utilisez-le sereinement sur tous vos supports" : "use it freely across all your materials" },
      { icon: MessageCircle, text: isFr ? "Accompagnement post-livraison pour vos questions d'usage." : "Post-delivery support for any usage questions.", highlight: isFr ? "pas seul(e) au moment de déployer votre image" : "you're not alone when rolling out your brand" },
    ]
  }
];

export const BrandOfferDetailsSection = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";
  const offerCategories = getOfferCategories(isFr);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden section-gradient-main">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#C3B68F]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#7C6AE8]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C3B68F]/5 to-transparent rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-16 md:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={headerVariants}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 backdrop-blur-sm mb-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Sparkles className="w-4 h-4 text-[#C3B68F]" />
            <span className="text-sm text-foreground-strong">{isFr ? "Tout ce qui est inclus" : "Everything that's included"}</span>
          </motion.div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {isFr ? "7 piliers." : "7 pillars."}{" "}
            <span style={{ background: "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {isFr ? "Rien de superflu." : "Nothing superfluous."}
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isFr ? "Chaque élément a sa raison d'être. Que de l'utile." : "Every element has a purpose. Only what matters."}
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-6 lg:gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}>
          {offerCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div key={categoryIndex} variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="group relative" style={{ perspective: "1000px" }}>
                <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" style={{ background: `${category.accentColor}20` }} />
                <div className="relative p-6 md:p-8 rounded-2xl backdrop-blur-sm bg-foreground/[0.03] h-full transition-all duration-500 group-hover:bg-foreground/[0.05]">
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${category.gradient} rounded-tr-2xl pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                  <div className="absolute top-4 right-4 text-[120px] font-bold leading-none pointer-events-none select-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" style={{ color: category.accentColor }}>
                    {String(categoryIndex + 1).padStart(2, '0')}
                  </div>
                  <div className="relative flex items-start gap-4 mb-6">
                    <motion.div className="flex-shrink-0" whileHover={{ scale: 1.2, rotate: 10 }}>
                      <CategoryIcon className="w-7 h-7 transition-all duration-300 group-hover:scale-110" style={{ color: category.accentColor, filter: `drop-shadow(0 0 8px ${category.accentColor}60)` }} />
                    </motion.div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight pt-1">{category.title}</h3>
                  </div>
                  <motion.ul className="space-y-4 relative" variants={containerVariants}>
                    {category.items.map((item, itemIndex) => (
                      <motion.li key={itemIndex} variants={itemVariants} className="flex items-start gap-3 group/item">
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle className="w-5 h-5 transition-all duration-300 group-hover/item:scale-110" style={{ color: category.accentColor }} />
                        </div>
                        <div className="flex-1">
                          <p className="text-foreground-medium text-sm md:text-base leading-relaxed">
                            {item.text}
                            {item.highlight && (
                              <span className="block mt-1 text-sm font-medium" style={{ color: category.accentColor }}>
                                → {item.highlight}
                              </span>
                            )}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className="flex justify-center mt-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-foreground/5 backdrop-blur-sm">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C3B68F] to-[#A89B6F] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C6AE8] to-[#5B4BC7] flex items-center justify-center">
                <Crown className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="text-sm text-foreground-medium">
              <span className="font-semibold text-foreground">{isFr ? "7 piliers" : "7 pillars"}</span> {isFr ? "pour une identité complète" : "for a complete brand identity"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

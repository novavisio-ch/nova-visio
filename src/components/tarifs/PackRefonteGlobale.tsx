import { motion } from "framer-motion";
import { RefreshCw, Palette, Monitor, Check, ArrowRight, Search, Lightbulb, PenTool, Layout, Settings, Rocket, Users, TrendingUp, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const targetAudience = [
  {
    icon: History,
    text: "Marques déjà lancées qui ne se reconnaissent plus dans leur identité actuelle.",
  },
  {
    icon: TrendingUp,
    text: "Sites en ligne depuis plusieurs années, devenus peu lisibles, datés ou peu efficaces.",
  },
  {
    icon: Users,
    text: "Entreprises qui ont évolué (positionnement, offres, cible) et ont besoin d'une mise à jour globale cohérente : branding + digital.",
  },
];

const brandingAuditFeatures = [
  { text: "Audit de votre identité actuelle", highlight: ": logo, couleurs, typographies, supports" },
  { text: "Analyse de vos forces, faiblesses", highlight: "et incohérences visuelles" },
  { text: "Clarification", highlight: "de ce qu'il faut conserver, faire évoluer ou abandonner" },
];

const brandingRepositionFeatures = [
  { text: "Atelier ou questionnaire approfondi", highlight: "pour actualiser vos valeurs et objectifs" },
  { text: "2 à 3 mots-clés d'univers", highlight: "(ex. plus premium, plus minimal)" },
  { text: "Moodboard de refonte", highlight: "entre votre histoire et l'image souhaitée" },
];

const brandingIdentityFeatures = [
  { text: "Logo principal refondu", highlight: "(évolution ou refonte totale)" },
  { text: "Déclinaisons de logo", highlight: "(secondaire, simplifiée, horizontal/vertical, N&B)" },
  { text: "Icône / monogramme", highlight: "pour réseaux sociaux, favicon" },
  { text: "Palette de couleurs", highlight: "mise à jour ou repensée" },
  { text: "Nouvelles typographies", highlight: "avec hiérarchie (titres, textes)" },
  { text: "Éléments graphiques", highlight: "(motifs, formes, fonds)" },
];

const brandingToolsFeatures = [
  { text: "Brandboard synthétique", highlight: "avec les nouveaux éléments clés" },
  { text: "Mini charte graphique de refonte", highlight: ": usages, interdits, avant/après" },
];

const webAuditFeatures = [
  { text: "Audit de votre site actuel", highlight: ": structure, ergonomie, contenus" },
  { text: "Analyse de ce qui fonctionne", highlight: "et de ce qui freine vos résultats" },
  { text: "Recommandations", highlight: "sur la nouvelle structure et parcours utilisateur" },
];

const webArchitectureFeatures = [
  { text: "Refonte complète", highlight: "de 6 à 8 pages sur nouvelle arborescence" },
  { text: "Pages clés repensées", highlight: ": Accueil, À propos, Services, Portfolio, Contact" },
  { text: "Organisation de contenus", highlight: "plus claire avec CTA alignés" },
];

const webDesignFeatures = [
  { text: "Webdesign sur-mesure", highlight: "basé sur votre nouvelle identité" },
  { text: "Maquettes pensées", highlight: "pour lisibilité, conversion et UX" },
  { text: "Site responsive", highlight: "(mobile, tablette, desktop)" },
];

const webTechFeatures = [
  { text: "Intégration contenus", highlight: "actualisés (textes, visuels, portfolio)" },
  { text: "Optimisation visuels", highlight: "pour le web" },
  { text: "Bases SEO on-page", highlight: ": titres, méta, structure, URLs" },
];

const webLaunchFeatures = [
  { text: "Mise en ligne", highlight: "sur votre nom de domaine" },
  { text: "Guide ou mini formation", highlight: "pour vos mises à jour en autonomie" },
  { text: "Support post-refonte", highlight: "pendant une période définie" },
];

const mainBullets = [
  "Audit complet de votre identité et de votre site actuel pour identifier ce qui doit évoluer.",
  "Refonte de marque : logo, palette, typographies et univers visuel mis à jour.",
  "Nouvelle charte graphique synthétique pour utiliser facilement votre nouvelle image.",
  "Refonte de votre site vitrine (6 à 8 pages) structurée pour vos objectifs actuels.",
  "Webdesign sur-mesure, responsive et aligné à votre nouvelle identité.",
  "Accompagnement de la phase d'audit à la mise en ligne, pour une transition maîtrisée.",
];

interface FeatureBlockProps {
  icon: React.ElementType;
  title: string;
  features: { text: string; highlight: string }[];
  color: "gold" | "purple";
  delay?: number;
}

function FeatureBlock({ icon: Icon, title, features, color, delay = 0 }: FeatureBlockProps) {
  const isGold = color === "gold";
  const accentColor = isGold ? "#C3B68F" : "#9D8DF0";
  const bgOpacity = isGold ? "rgba(195, 182, 143, 0.1)" : "rgba(124, 106, 232, 0.1)";
  const borderColor = isGold ? "rgba(195, 182, 143, 0.25)" : "rgba(124, 106, 232, 0.25)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="p-4 rounded-lg border"
      style={{ background: bgOpacity, borderColor }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4" style={{ color: accentColor }} />
        <h6 className="font-medium text-sm" style={{ color: accentColor }}>{title}</h6>
      </div>
      <ul className="space-y-1.5">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-xs">
            <Check className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
            <span className="text-white/60">
              <strong className="text-white/80 font-medium">{feature.text}</strong>
              <span className="text-white/50">{feature.highlight}</span>
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function PackRefonteGlobale() {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      {/* Main Pack Card */}
      <div
        className="relative rounded-3xl border overflow-hidden"
        style={{
          background: "linear-gradient(180deg, rgba(15,15,20,0.98) 0%, rgba(25,20,40,0.98) 100%)",
          borderColor: "rgba(124, 106, 232, 0.4)",
        }}
      >
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(124, 106, 232, 0.4), rgba(195, 182, 143, 0.3), transparent)",
            backgroundSize: "300% 100%",
          }}
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Badge centered on top */}
        <motion.div
          className="absolute -top-4 left-0 right-0 flex justify-center z-20"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Badge className="flex items-center gap-2 px-4 py-2 text-sm uppercase tracking-wider shadow-xl bg-gradient-to-r from-[#9D8DF0] via-[#B8A9F5] to-[#C3B68F] text-background">
            <RefreshCw className="w-4 h-4" />
            Refonte Complète
          </Badge>
        </motion.div>

        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 rounded-full blur-[100px] opacity-15"
            style={{ background: "#9D8DF0" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-[120px] opacity-10"
            style={{ background: "#C3B68F" }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />

          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                background: i % 2 === 0 ? "#9D8DF0" : "#C3B68F",
                left: `${15 + i * 18}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </div>

        <div className="relative z-10 p-6 md:p-10 lg:p-12">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12 pt-4">
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -180 }}
                transition={{ duration: 0.5 }}
                className="p-3 rounded-xl"
                style={{ background: "rgba(124, 106, 232, 0.15)" }}
              >
                <RefreshCw className="w-8 h-8 text-[#9D8DF0]" />
              </motion.div>
            </div>

            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Pack Refonte Globale
            </h3>
            <p
              className="text-lg md:text-xl font-medium mb-4"
              style={{
                background: "linear-gradient(135deg, #9D8DF0 0%, #C3B68F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Reprenez le contrôle de votre image
            </p>
            <p className="text-white/60 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              Une refonte <strong className="text-white font-semibold">cohérente</strong> de votre identité visuelle et de votre site web pour{" "}
              <strong className="text-[#9D8DF0] font-medium">aligner votre image</strong> avec le niveau réel de votre activité et vos{" "}
              <strong className="text-white font-semibold">ambitions</strong>.
            </p>
          </div>

          {/* Target Audience */}
          <div className="mb-10 md:mb-14">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-lg md:text-xl font-semibold text-white mb-6 flex items-center gap-3"
            >
              <Users className="w-5 h-5 text-[#9D8DF0]" />
              À qui s'adresse ce pack ?
            </motion.h4>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {targetAudience.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(124, 106, 232, 0.2)" }}
                    className="p-4 md:p-5 rounded-xl border border-[#9D8DF0]/20 hover:border-[#9D8DF0]/40 transition-all duration-300"
                    style={{ background: "rgba(124, 106, 232, 0.05)" }}
                  >
                    <Icon className="w-6 h-6 text-[#9D8DF0] mb-3" />
                    <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Main bullets summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-14 p-5 md:p-6 rounded-xl border"
            style={{
              background: "linear-gradient(135deg, rgba(124, 106, 232, 0.08) 0%, rgba(195, 182, 143, 0.08) 100%)",
              borderColor: "rgba(124, 106, 232, 0.3)",
            }}
          >
            <h4 className="font-display text-lg md:text-xl font-semibold text-white mb-5 flex items-center gap-3">
              <Check className="w-5 h-5 text-[#9D8DF0]" />
              En résumé
            </h4>
            <ul className="grid md:grid-cols-2 gap-3">
              {mainBullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-4 h-4 text-[#9D8DF0] mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Two columns: Branding & Web */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-14">
            {/* Branding Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 md:p-6 rounded-xl border border-[#C3B68F]/30"
              style={{ background: "rgba(195, 182, 143, 0.03)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg" style={{ background: "rgba(195, 182, 143, 0.2)" }}>
                  <Palette className="w-5 h-5 text-[#C3B68F]" />
                </div>
                <h5 className="font-display text-lg font-semibold text-[#C3B68F]">
                  Refonte de marque
                </h5>
              </div>

              <div className="space-y-4">
                <FeatureBlock
                  icon={Search}
                  title="Analyse de l'existant"
                  features={brandingAuditFeatures}
                  color="gold"
                  delay={0}
                />
                <FeatureBlock
                  icon={Lightbulb}
                  title="Repositionnement & univers"
                  features={brandingRepositionFeatures}
                  color="gold"
                  delay={0.1}
                />
                <FeatureBlock
                  icon={PenTool}
                  title="Nouvelle identité visuelle"
                  features={brandingIdentityFeatures}
                  color="gold"
                  delay={0.2}
                />
                <FeatureBlock
                  icon={Layout}
                  title="Outils de cohérence"
                  features={brandingToolsFeatures}
                  color="gold"
                  delay={0.3}
                />
              </div>
            </motion.div>

            {/* Web Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 md:p-6 rounded-xl border border-[#9D8DF0]/30"
              style={{ background: "rgba(124, 106, 232, 0.03)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg" style={{ background: "rgba(124, 106, 232, 0.2)" }}>
                  <Monitor className="w-5 h-5 text-[#9D8DF0]" />
                </div>
                <h5 className="font-display text-lg font-semibold text-[#9D8DF0]">
                  Modernisation digitale
                </h5>
              </div>

              <div className="space-y-4">
                <FeatureBlock
                  icon={Search}
                  title="Audit & stratégie digitale"
                  features={webAuditFeatures}
                  color="purple"
                  delay={0}
                />
                <FeatureBlock
                  icon={Layout}
                  title="Nouvelle architecture & contenus"
                  features={webArchitectureFeatures}
                  color="purple"
                  delay={0.1}
                />
                <FeatureBlock
                  icon={PenTool}
                  title="Nouveau design aligné"
                  features={webDesignFeatures}
                  color="purple"
                  delay={0.2}
                />
                <FeatureBlock
                  icon={Settings}
                  title="Mise à jour technique & SEO"
                  features={webTechFeatures}
                  color="purple"
                  delay={0.3}
                />
                <FeatureBlock
                  icon={Rocket}
                  title="Mise en ligne & accompagnement"
                  features={webLaunchFeatures}
                  color="purple"
                  delay={0.4}
                />
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center pt-6 border-t border-white/10"
          >
            <p className="text-white/50 text-sm mb-6">
              Un accompagnement <strong className="text-white font-medium">complet</strong> pour donner une nouvelle vie à votre image et{" "}
              <strong className="text-[#9D8DF0] font-medium">aligner votre présence digitale</strong> avec vos ambitions.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="relative overflow-hidden px-8"
                style={{
                  background: "linear-gradient(135deg, #9D8DF0 0%, #C3B68F 100%)",
                  color: "#1f1a3d",
                }}
                asChild
              >
                <Link to="/contact">
                  <span className="relative z-10 flex items-center">
                    Demander un devis pour ce pack
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

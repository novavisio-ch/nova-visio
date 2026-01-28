import { motion } from "framer-motion";
import { Package, Palette, Monitor, Check, ArrowRight, Sparkles, Users, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const brandingDeliverables = [
  "Logo principal + déclinaisons (formats print & web)",
  "Icône / monogramme",
  "Palette couleurs + références",
  "Typographies recommandées + hiérarchie",
  "Éléments graphiques (formes, motifs, fonds)",
  "Brandboard (1 page)",
  "Mini charte graphique (PDF)",
  "Carte de visite prête à imprimer",
];

const webDeliverables = [
  "Site vitrine 6 à 8 pages en ligne sur votre nom de domaine",
  "Design sur-mesure aligné avec votre identité",
  "Formulaire de contact fonctionnel",
  "Liens vers réseaux sociaux",
  "Bases SEO sur les pages clés",
  "Guide ou mini tuto pour prendre en main le site",
];

const targetAudience = [
  {
    icon: Users,
    text: "Aux indépendants, studios et petites entreprises qui souhaitent lancer ou refondre leur image avec une identité claire et un site web professionnel.",
  },
  {
    icon: Package,
    text: "Aux projets qui veulent éviter de multiplier les prestataires et recherchent un accompagnement global : branding + site, dans une seule offre.",
  },
  {
    icon: Clock,
    text: "Aux personnes qui manquent de temps et veulent un parcours cadré, des livrables prêts à l'emploi et un résultat facilement utilisable au quotidien.",
  },
];

const brandingFeatures = [
  { text: "Questionnaire de brief structuré", highlight: "pour clarifier activité, valeurs, cible et objectifs" },
  { text: "Analyse de positionnement", highlight: "et de l'univers concurrentiel" },
  { text: "2 à 3 mots-clés d'univers", highlight: "(ex. minimal, chaleureux, premium)" },
  { text: "Moodboard d'univers", highlight: "pour valider l'ambiance visuelle" },
  { text: "Deux directions créatives", highlight: "puis choix de la piste finale" },
  { text: "Logo principal sur-mesure", highlight: "adapté au print et au digital" },
  { text: "Déclinaisons de logo", highlight: "(secondaire, simplifiée, horizontal/vertical, N&B)" },
  { text: "Icône / monogramme", highlight: "pour avatar, favicon et petits formats" },
  { text: "Palette de couleurs complète", highlight: "+ recommandations d'usage" },
  { text: "Typographies", highlight: "avec hiérarchie d'utilisation" },
  { text: "Éléments graphiques complémentaires", highlight: "(formes, motifs, fonds)" },
  { text: "Brandboard synthétique", highlight: "regroupant les éléments clés" },
  { text: "Mini charte graphique", highlight: "avec règles d'utilisation" },
  { text: "Carte de visite", highlight: "prête à l'impression" },
  { text: "Fichiers fournis", highlight: "dans les bons formats (print et web)" },
];

const webFeatures = [
  { text: "Site vitrine complet", highlight: "de 6 à 8 pages" },
  { text: "Design sur-mesure", highlight: "basé sur votre identité visuelle" },
  { text: "Structuration du contenu", highlight: "et de l'arborescence" },
  { text: "Mise en page pensée", highlight: "pour la lisibilité et les CTA" },
  { text: "Site responsive", highlight: "(mobile, tablette, ordinateur)" },
  { text: "Formulaire de contact", highlight: "+ liens réseaux sociaux" },
  { text: "Intégration de vos textes", highlight: "et visuels optimisés" },
  { text: "Bases SEO", highlight: "sur les pages principales" },
  { text: "Mise en ligne du site", highlight: "sur votre nom de domaine" },
];

const processSteps = [
  { step: "1", title: "Prise de contact", description: "Validation du devis" },
  { step: "2", title: "Brief & collecte", description: "Questionnaire et éléments" },
  { step: "3", title: "Phase branding", description: "Moodboard, logo, univers visuel" },
  { step: "4", title: "Validation identité", description: "Brandboard et mini charte" },
  { step: "5", title: "Phase site web", description: "Structure, design, intégration" },
  { step: "6", title: "Ajustements", description: "Aller-retours sur branding + site" },
  { step: "7", title: "Mise en ligne", description: "Livraison de tous les fichiers" },
  { step: "8", title: "Support", description: "Accompagnement post-livraison" },
];

export function PackDigitalBranding() {
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
          background: "linear-gradient(180deg, rgba(15,15,20,0.98) 0%, rgba(20,15,35,0.98) 100%)",
          borderColor: "rgba(195, 182, 143, 0.4)",
        }}
      >
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(195, 182, 143, 0.4), rgba(124, 106, 232, 0.3), transparent)",
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
          <Badge className="flex items-center gap-2 px-4 py-2 text-sm uppercase tracking-wider shadow-xl bg-gradient-to-r from-[#C3B68F] via-[#DCCB99] to-[#9D8DF0] text-background">
            <Sparkles className="w-4 h-4" />
            Pack Recommandé
          </Badge>
        </motion.div>

        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 rounded-full blur-[100px] opacity-15"
            style={{ background: "#C3B68F" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-[120px] opacity-10"
            style={{ background: "#7C6AE8" }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />

          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                background: i % 2 === 0 ? "#C3B68F" : "#9D8DF0",
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
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="p-3 rounded-xl"
                style={{ background: "rgba(195, 182, 143, 0.15)" }}
              >
                <Palette className="w-8 h-8 text-[#C3B68F]" />
              </motion.div>
              <span className="text-2xl text-white/30">+</span>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 rounded-xl"
                style={{ background: "rgba(124, 106, 232, 0.15)" }}
              >
                <Monitor className="w-8 h-8 text-[#9D8DF0]" />
              </motion.div>
            </div>

            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Pack Digital & Branding
            </h3>
            <p
              className="text-lg md:text-xl font-medium mb-4"
              style={{
                background: "linear-gradient(135deg, #C3B68F 0%, #9D8DF0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Identité de marque & site vitrine
            </p>
            <p className="text-white/60 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              Une identité visuelle <strong className="text-white font-semibold">sur-mesure</strong> et un site vitrine complet de{" "}
              <strong className="text-[#C3B68F] font-medium">6 à 8 pages</strong>, conçus ensemble pour une présence en ligne{" "}
              <strong className="text-white font-semibold">cohérente</strong>, professionnelle et prête à être lancée.
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
              <Star className="w-5 h-5 text-[#C3B68F]" />
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
                    whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(195, 182, 143, 0.2)" }}
                    className="p-4 md:p-5 rounded-xl border border-[#C3B68F]/20 hover:border-[#C3B68F]/40 transition-all duration-300"
                    style={{ background: "rgba(195, 182, 143, 0.05)" }}
                  >
                    <Icon className="w-6 h-6 text-[#C3B68F] mb-3" />
                    <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* What you get - Two columns */}
          <div className="mb-10 md:mb-14">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-lg md:text-xl font-semibold text-white mb-6 flex items-center gap-3"
            >
              <Package className="w-5 h-5 text-[#C3B68F]" />
              Ce que vous obtenez
            </motion.h4>

            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {/* Branding Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-5 md:p-6 rounded-xl border border-[#C3B68F]/30"
                style={{ background: "rgba(195, 182, 143, 0.05)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg" style={{ background: "rgba(195, 182, 143, 0.2)" }}>
                    <Palette className="w-5 h-5 text-[#C3B68F]" />
                  </div>
                  <h5 className="font-display text-lg font-semibold text-[#C3B68F]">
                    1. Branding complet
                  </h5>
                </div>
                <ul className="space-y-2">
                  {brandingFeatures.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className="flex items-start gap-2.5"
                    >
                      <Check className="w-4 h-4 text-[#C3B68F] mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-sm">
                        <strong className="text-white font-medium">{feature.text}</strong>{" "}
                        <span className="text-white/50">{feature.highlight}</span>
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Web Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-5 md:p-6 rounded-xl border border-[#9D8DF0]/30"
                style={{ background: "rgba(124, 106, 232, 0.05)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg" style={{ background: "rgba(124, 106, 232, 0.2)" }}>
                    <Monitor className="w-5 h-5 text-[#9D8DF0]" />
                  </div>
                  <h5 className="font-display text-lg font-semibold text-[#9D8DF0]">
                    2. Site vitrine 6 à 8 pages
                  </h5>
                </div>
                <ul className="space-y-2">
                  {webFeatures.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className="flex items-start gap-2.5"
                    >
                      <Check className="w-4 h-4 text-[#9D8DF0] mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-sm">
                        <strong className="text-white font-medium">{feature.text}</strong>{" "}
                        <span className="text-white/50">{feature.highlight}</span>
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mb-10 md:mb-14">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-lg md:text-xl font-semibold text-white mb-6 flex items-center gap-3"
            >
              <Clock className="w-5 h-5 text-[#C3B68F]" />
              Déroulé type de la collaboration
            </motion.h4>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="p-3 md:p-4 rounded-xl border border-white/10 hover:border-[#C3B68F]/40 transition-all duration-300 text-center"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <span
                    className="inline-block text-2xl md:text-3xl font-display font-bold mb-1"
                    style={{
                      background: index < 4 
                        ? "linear-gradient(135deg, #C3B68F, #DCCB99)" 
                        : "linear-gradient(135deg, #9D8DF0, #B8A9F5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step.step}
                  </span>
                  <h6 className="text-white font-medium text-xs md:text-sm mb-0.5">{step.title}</h6>
                  <p className="text-white/40 text-xs">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Deliverables Summary */}
          <div className="mb-10 md:mb-14">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-lg md:text-xl font-semibold text-white mb-6 flex items-center gap-3"
            >
              <Check className="w-5 h-5 text-[#C3B68F]" />
              Livrables
            </motion.h4>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Branding deliverables */}
              <div
                className="p-4 md:p-5 rounded-xl border border-[#C3B68F]/20"
                style={{ background: "rgba(195, 182, 143, 0.03)" }}
              >
                <h6 className="text-[#C3B68F] font-semibold mb-3 flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  Branding
                </h6>
                <ul className="space-y-1.5">
                  {brandingDeliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                      <span className="text-[#C3B68F]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Web deliverables */}
              <div
                className="p-4 md:p-5 rounded-xl border border-[#9D8DF0]/20"
                style={{ background: "rgba(124, 106, 232, 0.03)" }}
              >
                <h6 className="text-[#9D8DF0] font-semibold mb-3 flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  Site web
                </h6>
                <ul className="space-y-1.5">
                  {webDeliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                      <span className="text-[#9D8DF0]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center pt-6 border-t border-white/10"
          >
            <p className="text-white/50 text-sm mb-6">
              Un accompagnement <strong className="text-white font-medium">complet</strong> pour lancer votre présence digitale avec une image <strong className="text-[#C3B68F] font-medium">cohérente et professionnelle</strong>.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="relative overflow-hidden px-8"
                style={{
                  background: "linear-gradient(135deg, #C3B68F 0%, #9D8DF0 100%)",
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

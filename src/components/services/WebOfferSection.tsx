import { CheckCircle, Monitor, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useIsTabletOrMobile } from "@/hooks/use-mobile";
interface BenefitItem {
  text: string;
  bold: string;
}
const siteBenefits: BenefitItem[] = [{
  text: "Site vitrine 6 à 8 pages en ligne sur votre nom de domaine.",
  bold: "6 à 8 pages"
}, {
  text: "Structure claire orientée conversion (prise de contact, devis, réservation).",
  bold: "orientée conversion"
}, {
  text: "Rédaction complète de vos pages clés + FAQ pour répondre aux questions essentielles.",
  bold: "Rédaction complète"
}, {
  text: "Design sur-mesure, aligné avec votre identité visuelle et vos photos.",
  bold: "Design sur-mesure"
}, {
  text: "Site responsive, optimisé pour le SEO et le chargement rapide.",
  bold: "optimisé pour le SEO"
}, {
  text: "Mise en ligne clé en main + guide d'utilisation + 12 mois de support inclus.",
  bold: "12 mois de support"
}, {
  text: "Suivi des performances (statistiques de visites) pour prendre de meilleures décisions.",
  bold: "Suivi des performances"
}, {
  text: "Base évolutive : faites évoluer votre site sans tout recommencer.",
  bold: "Base évolutive"
}];
const landingBenefits: BenefitItem[] = [{
  text: "Brief structuré pour clarifier votre offre, votre cible et l'objectif de la page.",
  bold: "Brief structuré"
}, {
  text: "Structure et rédaction complètes de la landing, optimisées pour la conversion.",
  bold: "optimisées pour la conversion"
}, {
  text: "Design sur‑mesure, responsive, aligné avec votre identité visuelle.",
  bold: "Design sur‑mesure"
}, {
  text: "Formulaire intégré + suivi des conversions pour mesurer vos résultats.",
  bold: "suivi des conversions"
}, {
  text: "Mise en ligne clé en main + mini guide PDF + 30 jours de support inclus.",
  bold: "30 jours de support"
}, {
  text: "Variante A/B sur l'accroche ou le bloc héro pour tester et améliorer vos performances.",
  bold: "Variante A/B"
}, {
  text: "Intégration avec vos outils marketing (emailing, publicités, CRM…).",
  bold: "outils marketing"
}, {
  text: "Chargement ultra-rapide et SEO optimisé pour maximiser votre visibilité.",
  bold: "SEO optimisé"
}];
interface OfferCardProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: BenefitItem[];
  ctaText: string;
  variant: "gold" | "purple";
  icon: React.ReactNode;
  index: number;
  price?: string;
  isMobile: boolean;
}
const formatBenefit = (item: BenefitItem) => {
  const parts = item.text.split(item.bold);
  if (parts.length === 2) {
    return <>
        {parts[0]}<strong className="font-semibold">{item.bold}</strong>{parts[1]}
      </>;
  }
  return item.text;
};
const benefitVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const
    }
  }
};
const OfferCard = ({
  title,
  subtitle,
  description,
  benefits,
  ctaText,
  variant,
  icon,
  index,
  price,
  isMobile
}: OfferCardProps) => {
  const isGold = variant === "gold";
  const accentColor = isGold ? "#C3B68F" : "#7C6AE8";
  const badgeGradient = isGold ? "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)" : "linear-gradient(135deg, #9B8AFF 0%, #7C6AE8 100%)";
  const buttonGradient = isGold ? "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)" : "linear-gradient(135deg, #9B8AFF 0%, #7C6AE8 100%)";
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.95 }} 
      whileInView={{ opacity: 1, y: 0, scale: 1 }} 
      viewport={{ once: true, margin: "-50px" }} 
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }} 
      whileHover={!isMobile ? { y: -12, scale: 1.02 } : undefined} 
      className="group relative h-full"
    >
      {/* Animated gradient border */}
      <motion.div 
        className="absolute -inset-[2px] rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: isGold 
            ? "linear-gradient(135deg, #C3B68F, #DCCB99, #C3B68F, #A69A6E)" 
            : "linear-gradient(135deg, #7C6AE8, #9B8AFF, #7C6AE8, #5B4BC7)",
          backgroundSize: "300% 300%"
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Glow effect on hover */}
      <motion.div 
        className="absolute -inset-4 rounded-3xl blur-2xl pointer-events-none"
        style={{ background: `${accentColor}20` }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={!isMobile ? { opacity: 1, scale: 1 } : undefined}
        whileInView={isMobile ? { opacity: 0.5, scale: 1 } : undefined}
        transition={{ duration: 0.4 }}
      />

      {/* Centered top badge for gold variant - flat bottom touching border (no transform conflict) */}
      {isGold && (
        <div
          className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-full"
          style={{ top: "-2px" }}
        >
          <motion.div
            className="px-5 py-2 text-xs font-semibold shadow-lg"
            style={{
              background: "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)",
              color: "#2D284D",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0"
            }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
          >
            Best-seller
          </motion.div>
        </div>
      )}

      <div 
        className="relative flex flex-col items-start text-left p-8 md:p-10 rounded-3xl bg-card h-full overflow-hidden"
      >
        {/* Floating decorative particles */}
        <motion.div
          className="absolute top-10 right-10 w-2 h-2 rounded-full pointer-events-none"
          style={{ background: accentColor }}
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-20 right-20 w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{ background: accentColor }}
          animate={{ y: [0, -8, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-32 left-10 w-1 h-1 rounded-full pointer-events-none"
          style={{ background: accentColor }}
          animate={{ y: [0, -6, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Title + Badge row */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }} 
          className="flex items-center gap-3 mb-4"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {title}
          </h3>
          <motion.span 
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide"
            style={{ background: badgeGradient, color: "#2D284D" }}
            whileHover={!isMobile ? { scale: 1.05 } : undefined}
          >
            <Sparkles className="w-3 h-3" />
            {isGold ? "Sur-mesure" : "Starter"}
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }} 
          className="mb-6 text-base leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>

        {/* Price display with animated underline */}
        {price && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }} 
            className="mb-6 relative"
          >
            <span className="text-sm text-muted-foreground">dès</span>
            <motion.div 
              className="text-4xl md:text-5xl font-bold"
              style={{ color: accentColor }}
              whileHover={!isMobile ? { scale: 1.05, x: 5 } : undefined}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {price}
            </motion.div>
          </motion.div>
        )}

        {/* Divider with gradient */}
        <motion.div 
          className="w-full h-px mb-6"
          style={{ background: `linear-gradient(90deg, ${accentColor}50, transparent)` }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
        />

        {/* Benefits list */}
        <motion.ul 
          className="space-y-4 mb-10 w-full flex-grow" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.6 + index * 0.2 }
            }
          }}
        >
          {benefits.map((benefit, benefitIndex) => (
            <motion.li 
              key={benefitIndex} 
              variants={benefitVariants} 
              className="flex items-start gap-3 group/item"
              whileHover={!isMobile ? { x: 5 } : undefined}
            >
              <motion.div 
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: buttonGradient }}
                whileHover={!isMobile ? { scale: 1.2, rotate: 10 } : undefined}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <CheckCircle className="w-4 h-4 text-foreground" />
              </motion.div>
              <span className="text-sm leading-relaxed text-[#2D284D]/85">
                {formatBenefit(benefit)}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Button with shine effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.9 + index * 0.2 }} 
          className="mt-auto w-full relative overflow-hidden rounded-xl"
        >
          <Button 
            asChild 
            size="lg" 
            className="w-full rounded-xl px-8 py-6 text-base font-semibold transition-all duration-300 border-0 relative overflow-hidden group/btn" 
            style={{ background: buttonGradient, color: "#2D284D" }}
          >
            <Link to="/contact">
              <span className="relative z-10">{ctaText}</span>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover/btn:opacity-100"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  transform: "translateX(-100%)"
                }}
                whileHover={{ transform: "translateX(100%)" }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </Button>
        </motion.div>

        {/* Decorative gradient corners */}
        <div 
          className="absolute top-0 right-0 w-40 h-40 opacity-20 pointer-events-none"
          style={{ background: `radial-gradient(circle at top right, ${accentColor}40 0%, transparent 60%)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-32 h-32 opacity-15 pointer-events-none"
          style={{ background: `radial-gradient(circle at bottom left, ${accentColor}30 0%, transparent 60%)` }}
        />
      </div>
    </motion.div>
  );
};
export const WebOfferSection = () => {
  const isMobile = useIsTabletOrMobile();

  return <section className="py-16 md:py-32 section-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-10 md:mb-16">
          <motion.div initial={{
          scale: 0
        }} whileInView={{
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-card mb-4 md:mb-6" style={{
          background: "rgba(45,40,77,0.05)"
        }}>
            <span className="text-xs md:text-sm font-medium" style={{
            color: "#2D284D"
          }}>
              💎 Offres sur mesure
            </span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-display-lg font-display font-bold mb-3 md:mb-4" style={{
          color: "#2D284D"
        }}>
            Nos offres web.
          </h2>
          <p className="text-sm sm:text-base md:text-xl max-w-2xl mx-auto" style={{
          color: "#2D284D",
          opacity: 0.7
        }}>
            Deux formats adaptés à vos objectifs,
            <br className="hidden md:block" />
            une même <strong style={{
            color: "#C3B68F"
          }}>exigence de qualité</strong>.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          <OfferCard title="Site vitrine" subtitle="Votre vitrine digitale" description="Une présence en ligne sur‑mesure, pensée pour vos objectifs, qui donne confiance à vos clients et vous génère plus de demandes qualifiées." benefits={siteBenefits} ctaText="Créer mon site vitrine" variant="gold" icon={<Monitor className="w-6 h-6 md:w-8 md:h-8 text-[#2D284D]" />} index={0} price="1'500 CHF" isMobile={isMobile} />
          <OfferCard title="Landing page" subtitle="Une page, un objectif" description="Une page unique et percutante, conçue sur‑mesure sur votre offre pour convertir vos visiteurs en prospects ou clients." benefits={landingBenefits} ctaText="Créer ma landing page" variant="purple" icon={<Rocket className="w-6 h-6 md:w-8 md:h-8 text-[#2D284D]" />} index={1} price="900 CHF" isMobile={isMobile} />
        </div>

        {/* Bottom decorative element */}
        
      </div>
    </section>;
};
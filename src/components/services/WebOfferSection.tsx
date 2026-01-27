import { CheckCircle, Monitor, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  text: "Une seule page, un seul objectif : convertir.",
  bold: "un seul objectif"
}, {
  text: "Message ultra-clair orienté vers l'action immédiate.",
  bold: "action immédiate"
}, {
  text: "Idéale pour une offre spécifique, un lancement ou une campagne.",
  bold: "offre spécifique"
}, {
  text: "Structure optimisée pour capter l'attention et guider vers le CTA.",
  bold: "capter l'attention"
}, {
  text: "Parfaite pour tester une idée ou générer des leads rapidement.",
  bold: "générer des leads"
}, {
  text: "Intégration facile avec vos outils marketing (emailing, ads…).",
  bold: "outils marketing"
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
  price
}: OfferCardProps) => {
  const isGold = variant === "gold";
  const borderColor = isGold ? "#C3B68F" : "#7C6AE8";
  const accentColor = isGold ? "#C3B68F" : "#7C6AE8";
  const glowColor = isGold ? "#C3B68F" : "#7C6AE8";
  const badgeGradient = isGold ? "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)" : "linear-gradient(135deg, #9B8AFF 0%, #7C6AE8 100%)";
  const buttonGradient = isGold ? "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)" : "linear-gradient(135deg, #9B8AFF 0%, #7C6AE8 100%)";
  const bgGradient = isGold ? "radial-gradient(ellipse at top right, rgba(195,182,143,0.08) 0%, transparent 50%)" : "radial-gradient(ellipse at top right, rgba(124,106,232,0.08) 0%, transparent 50%)";
  return <motion.div initial={{
    opacity: 0,
    y: 50,
    rotateY: index === 0 ? -5 : 5
  }} whileInView={{
    opacity: 1,
    y: 0,
    rotateY: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.7,
    delay: index * 0.2,
    ease: "easeOut"
  }} whileHover={{
    y: -8,
    transition: {
      duration: 0.3
    }
  }} className="group relative h-full" style={{
    perspective: "1000px"
  }}>
      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" style={{
      background: `${glowColor}30`
    }} />

      <div className="relative flex flex-col items-start text-left p-8 md:p-10 rounded-3xl border-2 bg-white transition-all duration-500 h-full overflow-hidden" style={{
      borderColor,
      backgroundImage: bgGradient
    }}>
        {/* Title + Badge row */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.3 + index * 0.2
      }} className="flex items-center gap-3 mb-4">
          <h3 className="text-3xl md:text-4xl font-display font-bold" style={{
          color: "#2D284D"
        }}>
            {title}
          </h3>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide" style={{
          background: badgeGradient,
          color: "#2D284D"
        }}>
            <Sparkles className="w-3 h-3" />
            {isGold ? "Premium" : "Starter"}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.4 + index * 0.2
      }} className="mb-6 text-base leading-relaxed" style={{
        color: "#2D284D",
        opacity: 0.7
      }}>
          {description}
        </motion.p>

        {/* Price display */}
        {price && <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.5 + index * 0.2
      }} className="mb-6">
            <span className="text-sm" style={{
          color: "#2D284D",
          opacity: 0.6
        }}>
              dès
            </span>
            <div className="text-4xl md:text-5xl font-bold" style={{
          color: accentColor
        }}>
              {price}
            </div>
            
          </motion.div>}

        {/* Divider */}
        <div className="w-full h-px mb-6" style={{
        background: `${accentColor}30`
      }} />

        {/* Section title */}
        

        {/* Benefits list */}
        <motion.ul className="space-y-4 mb-10 w-full flex-grow" initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={{
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.6 + index * 0.2
          }
        }
      }}>
          {benefits.map((benefit, benefitIndex) => <motion.li key={benefitIndex} variants={benefitVariants} className="flex items-start gap-3 group/item">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-110" style={{
            background: buttonGradient
          }}>
                <CheckCircle className="w-4 h-4 text-[#2D284D]" />
              </div>
              <span className="text-sm leading-relaxed" style={{
            color: "#2D284D",
            opacity: 0.85
          }}>
                {formatBenefit(benefit)}
              </span>
            </motion.li>)}
        </motion.ul>

        {/* CTA Button */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.9 + index * 0.2
      }} className="mt-auto w-full">
          <Button asChild size="lg" className="w-full rounded-xl px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg border-2" style={{
          background: "transparent",
          borderColor: accentColor,
          color: "#2D284D"
        }}>
            <Link to="/contact">{ctaText}</Link>
          </Button>
        </motion.div>

        {/* Decorative corners */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-30 pointer-events-none" style={{
        background: `radial-gradient(circle at top right, ${accentColor}20 0%, transparent 70%)`
      }} />
        <div className="absolute bottom-0 left-0 w-24 h-24 opacity-20 pointer-events-none" style={{
        background: `radial-gradient(circle at bottom left, ${accentColor}20 0%, transparent 70%)`
      }} />
      </div>
    </motion.div>;
};
export const WebOfferSection = () => {
  return <section className="py-24 md:py-32 bg-white overflow-hidden">
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
      }} className="text-center mb-16">
          <motion.div initial={{
          scale: 0
        }} whileInView={{
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6" style={{
          background: "rgba(45,40,77,0.05)"
        }}>
            <span className="text-sm font-medium" style={{
            color: "#2D284D"
          }}>
              💎 Offres sur mesure
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4" style={{
          color: "#2D284D"
        }}>
            Nos offres web
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{
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
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <OfferCard title="Site vitrine" subtitle="Votre vitrine digitale" description="Une présence en ligne complète pour asseoir votre crédibilité et présenter l'ensemble de votre activité." benefits={siteBenefits} ctaText="Choisir cette offre" variant="gold" icon={<Monitor className="w-8 h-8 text-[#2D284D]" />} index={0} price="1'800 CHF" />
          <OfferCard title="Landing page" subtitle="Une page, un objectif" description="Une page unique et percutante pour convertir vos visiteurs en prospects ou clients." benefits={landingBenefits} ctaText="Choisir cette offre" variant="purple" icon={<Rocket className="w-8 h-8 text-[#2D284D]" />} index={1} price="900 CHF" />
        </div>

        {/* Bottom decorative element */}
        
      </div>
    </section>;
};
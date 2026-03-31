import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useIsTabletOrMobile } from "@/hooks/use-mobile";

interface Benefit {
  text: string;
  highlight: string;
}

const webBenefits: Benefit[] = [
  { text: "Gagnez en crédibilité", highlight: "dès les premières secondes" },
  { text: "Convertissez vos visiteurs", highlight: "en clients qualifiés" },
  { text: "Présentez vos offres", highlight: "avec clarté et impact" },
  { text: "Soyez visible sur Google", highlight: "grâce au référencement naturel" },
  { text: "Modifiez votre contenu", highlight: "en toute autonomie" },
  { text: "Un site rapide et fluide", highlight: "sur mobile comme sur ordinateur" },
];

const brandBenefits: Benefit[] = [
  { text: "Soyez reconnu", highlight: "au premier coup d'œil" },
  { text: "Inspirez confiance", highlight: "avant même de parler" },
  { text: "Une image cohérente", highlight: "sur tous vos supports" },
  { text: "Démarquez-vous", highlight: "de vos concurrents" },
  { text: "Un logo professionnel", highlight: "déclinable partout" },
  { text: "Une charte graphique", highlight: "simple à appliquer" },
];

const benefits = [
  {
    text: "Vos clients comprennent ",
    highlight: "en quelques secondes",
    rest: " ce que vous faites - plus besoin d'expliquer 10 fois."
  },
  {
    text: "Vous avez une ",
    highlight: "image pro et cohérente",
    rest: " sur tous vos supports, sans y passer vos soirées."
  },
  {
    text: "Vous ",
    highlight: "attirez les bons clients",
    rest: " - ceux qui comprennent votre valeur et ne négocient pas vos prix."
  },
  {
    text: "Votre ",
    highlight: "charge mentale digitale diminue",
    rest: " : tout est en place, vous pouvez bosser sur votre métier."
  }
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function BenefitsSection() {
  return <section className="section-white py-12 md:py-20 lg:py-28 px-4">
      <div className="container max-w-6xl">
        <div className="text-left">
          {/* Title */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-display-lg lg:text-display-xl font-bold mb-3 md:mb-6 text-center leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#2D284D]">Ce que ça change.</span>
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            <span className="text-[#C9BC8F]">Concrètement.</span>
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p 
            className="text-sm sm:text-base md:text-xl lg:text-2xl text-[#5a5577] mb-6 md:mb-12 lg:mb-16 max-w-3xl leading-relaxed text-center mx-auto font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Quand votre image et votre site{" "}
            <br className="hidden sm:block" />
            font enfin le job.
          </motion.p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-3 sm:gap-5 md:gap-8 lg:gap-10">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex items-start gap-2 md:gap-4"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mt-0.5 md:mt-1">
                  <CheckCircle className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#C9BC8F]" strokeWidth={2} />
                </div>
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-[#6b6487] leading-relaxed">
                  {benefit.text}<span className="font-bold text-[#2D284D]">{benefit.highlight}</span>{benefit.rest}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>;
}

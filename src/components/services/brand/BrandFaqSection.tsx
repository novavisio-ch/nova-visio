import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Sparkles } from "lucide-react";
import { useIsTabletOrMobile } from "@/hooks/use-mobile";

const faqItems = [
  {
    question: "Combien de temps faut-il pour créer une identité visuelle complète ?",
    answer:
      "En général, comptez entre 3 et 6 semaines selon la complexité du projet. Ce délai inclut les phases de découverte, d'exploration créative, les itérations et la finalisation des livrables.",
  },
  {
    question: "Quels fichiers vais-je recevoir à la fin du projet ?",
    answer:
      "Vous recevrez votre logo dans tous les formats nécessaires (PNG, SVG, PDF), les fichiers sources éditables, votre palette de couleurs avec les codes, les typographies recommandées, et une charte graphique PDF qui résume toutes les règles d'usage.",
  },
  {
    question: "Est-ce que vous partez de zéro ou pouvez-vous moderniser un logo existant ?",
    answer:
      "Les deux sont possibles. Nous pouvons créer une identité entièrement nouvelle ou partir de votre logo existant pour le moderniser et le compléter avec une identité visuelle cohérente.",
  },
  {
    question: "Est-ce que l'identité inclut les visuels pour les réseaux sociaux ?",
    answer:
      "La prestation de base inclut les déclinaisons du logo pour les réseaux sociaux (photos de profil, bannières). Les templates de posts et stories sont proposés en option dans nos services complémentaires.",
  },
  {
    question: "Combien de propositions de logo vais-je voir ?",
    answer:
      "Nous présentons généralement 2 à 3 directions créatives distinctes lors de la phase d'exploration. Une fois une direction choisie, nous travaillons ensemble sur les ajustements jusqu'à la version finale.",
  },
  {
    question: "Puis-je utiliser mon identité visuelle sur tous mes supports ?",
    answer:
      "Absolument. L'identité est conçue pour fonctionner sur tous vos supports : site web, réseaux sociaux, cartes de visite, documents, signalétique, etc. La charte graphique vous guide pour chaque utilisation.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

interface FaqItemProps {
  item: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  isMobile: boolean;
}

const FaqItem = ({ item, index, isOpen, onToggle, isMobile }: FaqItemProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute -inset-2 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(195, 182, 143, 0.1), rgba(124, 106, 232, 0.05))",
          filter: "blur(20px)",
        }}
        initial={{ opacity: 0 }}
        whileInView={isMobile ? { opacity: 0.5 } : undefined}
        whileHover={!isMobile ? { opacity: 1 } : undefined}
        viewport={isMobile ? { once: true, margin: "-30px" } : undefined}
        transition={{ duration: 0.5 }}
      />
      
      <motion.div
        className="relative overflow-hidden rounded-xl border"
        initial={{ 
          borderColor: "rgba(195, 182, 143, 0.2)",
          boxShadow: "0 4px 20px -10px rgba(0, 0, 0, 0.1)"
        }}
        whileInView={isMobile ? { 
          boxShadow: "0 10px 25px -10px rgba(195, 182, 143, 0.25)"
        } : undefined}
        whileHover={!isMobile ? { 
          scale: 1.01,
          boxShadow: "0 20px 40px -15px rgba(195, 182, 143, 0.25)",
        } : undefined}
        animate={isOpen ? {
          borderColor: "#C3B68F",
          boxShadow: "0 20px 40px -15px rgba(195, 182, 143, 0.3)"
        } : undefined}
        viewport={isMobile ? { once: true, margin: "-30px" } : undefined}
        transition={{ duration: 0.3 }}
         style={{
           background: isOpen 
             ? "linear-gradient(135deg, hsl(var(--card)), rgba(195, 182, 143, 0.05))" 
             : "hsl(var(--card))",
         }}
      >
        {/* Question button */}
        <button
          onClick={onToggle}
          className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center gap-3 md:gap-4 text-left"
        >
          {/* Number badge */}
          <motion.div
            className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm"
            style={{
              background: isOpen 
                ? "linear-gradient(135deg, #C3B68F, #a89860)" 
                : "linear-gradient(135deg, rgba(195, 182, 143, 0.2), rgba(195, 182, 143, 0.1))",
              color: isOpen ? "#fff" : "#C3B68F",
            }}
            animate={{ 
              rotate: isOpen ? 360 : 0,
              scale: isOpen ? 1.1 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.div>

          {/* Question text */}
           <span
             className="flex-1 font-bricolage text-sm md:text-lg font-medium transition-colors duration-300"
             style={{ color: isOpen ? "#C3B68F" : "hsl(var(--foreground))" }}
           >
            {item.question}
          </span>

          {/* Animated plus icon */}
          <motion.div
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: isOpen 
                ? "linear-gradient(135deg, #C3B68F, #a89860)" 
                : "transparent",
              border: isOpen ? "none" : "2px solid rgba(195, 182, 143, 0.3)",
            }}
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Plus 
              className="w-4 h-4 transition-colors duration-300" 
              style={{ color: isOpen ? "#fff" : "#C3B68F" }}
            />
          </motion.div>
        </button>

        {/* Answer content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              <div className="px-4 md:px-6 pb-4 md:pb-6 pl-14 md:pl-20">
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="relative"
                >
                  {/* Decorative line */}
                  <motion.div
                    className="absolute -left-4 md:-left-6 top-0 bottom-0 w-0.5 rounded-full"
                    style={{ background: "linear-gradient(to bottom, #C3B68F, transparent)" }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  />
                  
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: "rgba(45, 40, 77, 0.8)" }}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export const BrandFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isMobile = useIsTabletOrMobile();

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden section-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(195, 182, 143, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124, 106, 232, 0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(195, 182, 143, 0.15), rgba(195, 182, 143, 0.05))",
              border: "1px solid rgba(195, 182, 143, 0.3)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" style={{ color: "#C3B68F" }} />
            <span className="text-xs md:text-sm font-medium" style={{ color: "#C3B68F" }}>
              Questions fréquentes
            </span>
          </motion.div>

          {/* Title */}
           <h2
             className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-display-lg font-bold mb-3 md:mb-4 text-foreground"
           >
             Des réponses à vos questions
            <br />
            <span className="text-gradient-gold">sur l'identité visuelle.</span>
          </h2>
          
           <p
             className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-muted-foreground"
           >
            Questions fréquentes sur la création de logo et d'identité visuelle avec NOVA VISIO.
          </p>
        </motion.div>

        {/* FAQ Grid - Two columns on desktop */}
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left column */}
          <div className="space-y-4">
            {faqItems.slice(0, 3).map((item, index) => (
              <FaqItem
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                isMobile={isMobile}
              />
            ))}
          </div>
          
          {/* Right column */}
          <div className="space-y-4">
            {faqItems.slice(3).map((item, index) => (
              <FaqItem
                key={index + 3}
                item={item}
                index={index + 3}
                isOpen={openIndex === index + 3}
                onToggle={() => handleToggle(index + 3)}
                isMobile={isMobile}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

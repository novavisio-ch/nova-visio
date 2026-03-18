import { Check, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const deliverables = [
  { text: "Clarification de votre positionnement et de votre univers", highlight: "pour une identité qui vous ressemble." },
  { text: "Moodboard et 2 directions créatives", highlight: "pour choisir l'ambiance qui vous correspond vraiment." },
  { text: "Logo sur-mesure + déclinaisons + icône", highlight: "pour une utilisation fluide sur tous vos supports." },
  { text: "Palette de couleurs, typographies et éléments graphiques", highlight: "pour un univers cohérent et facile à appliquer." },
  { text: "Brandboard + charte graphique", highlight: "pour savoir exactement comment utiliser votre identité." },
  { text: "Fichiers prêts à l'emploi + 250 cartes de visite", highlight: "signature email et visuels pour un réseau social inclus." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export const BrandOfferSection = () => {
  return (
    <section className="py-20 md:py-28 section-white overflow-hidden">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
           <h2
             className="text-2xl sm:text-3xl md:text-4xl lg:text-display-lg font-display font-bold mb-4 text-foreground"
           >
            Notre offre.
          </h2>
          <p className="text-sm sm:text-base md:text-xl max-w-2xl mx-auto text-muted-foreground">
            Un pack complet pour construire une identité
            <br className="hidden md:block" />
            <strong style={{ color: "#C3B68F" }}>unique et mémorable</strong>
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Floating decorative elements */}
          <motion.div
            className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20"
            style={{ background: "linear-gradient(135deg, #C3B68F 0%, #DCCB99 100%)" }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-15"
            style={{ background: "linear-gradient(135deg, #7C6AE8 0%, #9D8DF0 100%)" }}
            animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Best-seller style badge overlapping border */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -top-4 inset-x-0 z-10 flex justify-center"
          >
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide shadow-lg"
              style={{ 
                background: "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)",
                color: "#2D284D" 
              }}
            >
              <Crown className="w-4 h-4" />
              SUR-MESURE
            </div>
          </motion.div>

          <div
            className="group relative flex flex-col md:flex-row gap-8 md:gap-12 items-stretch p-8 md:p-12 rounded-3xl border-2 bg-card transition-all duration-500 hover:shadow-[0_0_60px_-15px_#C3B68F]"
            style={{ borderColor: "#C3B68F" }}
          >
            {/* Left Column - Title and Description */}
            <div className="flex-1 flex flex-col justify-center text-center md:text-left">
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 self-center md:self-start px-4 py-2 rounded-full text-xs font-semibold tracking-wide mb-6"
                style={{ 
                  background: "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)",
                  color: "#2D284D" 
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                POUR : ARTISANS, PME, FREELANCES
              </motion.span>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight"
                style={{ color: "#2D284D" }}
              >
                Logo & identité
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #C3B68F 0%, #a89860 100%)" }}
                >
                  visuelle complète
                </span>
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6 text-lg md:text-xl leading-relaxed"
                style={{ color: "#2D284D", opacity: 0.8 }}
              >
                Une identité visuelle professionnelle pour être reconnu
                et inspirer <strong style={{ color: "#C3B68F" }}>confiance au premier regard</strong>.
              </motion.p>

              {/* Price */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mb-8"
              >
                <span className="text-sm" style={{ color: "#2D284D", opacity: 0.6 }}>
                  dès
                </span>
                <span
                  className="ml-2 text-4xl md:text-5xl font-display font-bold"
                  style={{
                    background: "linear-gradient(135deg, #C3B68F 0%, #a89860 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  900 CHF
                </span>
              </motion.div>

              {/* CTA Button - Desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="hidden md:block"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)",
                    color: "#2D284D",
                  }}
                >
                  <Link to="/contact">Créer mon identité visuelle</Link>
                </Button>
              </motion.div>
            </div>

            {/* Divider */}
            <div
              className="hidden md:block w-px self-stretch"
              style={{ background: "linear-gradient(to bottom, transparent, #C3B68F, transparent)" }}
            />

            {/* Right Column - Deliverables */}
            <motion.div
              className="flex-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p
                className="text-sm font-semibold uppercase tracking-wider mb-6"
                style={{ color: "#C3B68F" }}
              >
                Ce qui est inclus
              </p>
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 group/item"
                  >
                    <Check 
                      className="w-5 h-5 flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/item:scale-125"
                      style={{ 
                        color: "#C3B68F",
                        filter: "drop-shadow(0 0 4px rgba(195, 182, 143, 0.5))"
                      }}
                    />
                    <span style={{ color: "#2D284D" }}>
                      <strong>{item.text}</strong>{" "}
                      <span style={{ opacity: 0.7 }}>{item.highlight}</span>
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Button - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="md:hidden text-center"
            >
              <Button
                asChild
                size="lg"
                className="rounded-xl px-8 py-6 text-base font-semibold transition-all duration-300 w-full"
                style={{
                  background: "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)",
                  color: "#2D284D",
                }}
              >
                <Link to="/contact">Créer mon identité visuelle</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

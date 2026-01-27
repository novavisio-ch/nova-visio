import { Brain, Sparkles, Search, Share2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    id: "ia-strategy",
    icon: Brain,
    title: "IA & stratégie digitale",
    description: (
      <>
        Parcours certifiants autour de <strong className="text-white font-semibold">l'IA générative</strong> et de son usage en marketing digital (IBM, Google Cloud, Coursera).
        <br className="hidden sm:block" />
        <span className="text-white/60">Concrètement : utiliser l'IA pour analyser, optimiser et structurer vos contenus, sans jamais remplacer le regard humain.</span>
      </>
    ),
    accentColor: "#C3B68F",
    delay: 0,
  },
  {
    id: "prompting",
    icon: Sparkles,
    title: "Prompting & assistants IA",
    description: (
      <>
        Formations dédiées au <strong className="text-white font-semibold">prompting avancé</strong> et à la création d'<strong className="text-[#C3B68F] font-medium">assistants IA sur mesure</strong>.
        <br className="hidden sm:block" />
        <span className="text-white/60">Objectif : poser les bonnes questions aux bons outils pour gagner en clarté, en vitesse et en qualité.</span>
      </>
    ),
    accentColor: "#9D8DF0",
    delay: 0.1,
  },
  {
    id: "seo",
    icon: Search,
    title: "Marketing de contenu & SEO",
    description: (
      <>
        Certifications en <strong className="text-white font-semibold">stratégie de content marketing</strong> et en croissance organique.
        <br className="hidden sm:block" />
        <span className="text-white/60">Résultat : des textes pensés pour vos clients, structurés pour les moteurs de recherche et les outils d'IA.</span>
      </>
    ),
    accentColor: "#C3B68F",
    delay: 0.2,
  },
  {
    id: "social",
    icon: Share2,
    title: "Social media & contenu de marque",
    description: (
      <>
        Cours spécialisés en <strong className="text-white font-semibold">social media marketing</strong> et stratégie de contenu.
        <br className="hidden sm:block" />
        <span className="text-white/60">Décliner votre identité sur des posts, stories et campagnes cohérentes avec votre site.</span>
      </>
    ),
    accentColor: "#9D8DF0",
    delay: 0.3,
  },
  {
    id: "responsible",
    icon: ShieldCheck,
    title: "Utilisation responsable de l'IA",
    description: (
      <>
        Certifications sur les <strong className="text-white font-semibold">bonnes pratiques</strong>, limites et <strong className="text-[#C3B68F] font-medium">éthique de l'IA</strong>.
        <br className="hidden sm:block" />
        <span className="text-white/60">L'IA est un co‑équipier : elle accélère le travail, mais les décisions restent humaines.</span>
      </>
    ),
    accentColor: "#C3B68F",
    delay: 0.4,
  },
];

export const SkillsSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0f0d1a 0%, #1f1a3d 50%, #0f0d1a 100%)",
        }}
      />

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(195, 182, 143, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(195, 182, 143, 0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-32 right-[15%] w-48 h-48 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #C3B68F 0%, transparent 70%)",
        }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-[10%] w-36 h-36 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #7C6AE8 0%, transparent 70%)",
        }}
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C3B68F]/30 bg-[#C3B68F]/10 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Brain className="w-4 h-4 text-[#C3B68F]" />
            <span className="text-sm font-medium text-[#C3B68F]">Expertise</span>
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Compétences &{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C3B68F] via-[#DCCB99] to-[#C3B68F]">
                certifications
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C3B68F] to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Des bases solides en design, marketing et IA pour créer des identités et des sites qui fonctionnent vraiment.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isLastOdd = index === skills.length - 1 && skills.length % 2 !== 0;
            
            return (
              <motion.div
                key={skill.id}
                className={`group relative ${isLastOdd ? "md:col-span-2 md:max-w-[calc(50%-12px)] md:mx-auto" : ""}`}
                initial={{ opacity: 0, y: 40, rotateX: -8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: skill.delay,
                  ease: "easeOut",
                }}
                style={{ perspective: "1000px" }}
              >
                {/* Card Glow Effect */}
                <motion.div
                  className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${skill.accentColor}40 0%, transparent 50%, ${skill.accentColor}20 100%)`,
                  }}
                />

                {/* Card */}
                <div
                  className="relative h-full rounded-2xl border border-white/10 backdrop-blur-xl p-6 md:p-8 transition-all duration-500 group-hover:border-[#C3B68F]/40 group-hover:translate-y-[-4px] group-hover:shadow-[0_20px_40px_-15px_rgba(195,182,143,0.25)]"
                  style={{
                    background:
                      "linear-gradient(135deg, hsla(252, 30%, 15%, 0.8) 0%, hsla(252, 30%, 10%, 0.8) 100%)",
                  }}
                >
                  {/* Decorative Corner */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at top right, ${skill.accentColor} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative mb-5 inline-flex"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div
                      className="relative p-3.5 rounded-xl transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${skill.accentColor}15 0%, ${skill.accentColor}05 100%)`,
                        border: `1px solid ${skill.accentColor}30`,
                      }}
                    >
                      <Icon
                        className="w-6 h-6 transition-all duration-300"
                        style={{ color: skill.accentColor }}
                      />

                      {/* Icon Pulse Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        style={{ border: `1px solid ${skill.accentColor}` }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.4, 0, 0.4],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h4 className="font-display text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#C3B68F] transition-colors duration-300">
                    {skill.title}
                  </h4>

                  {/* Description */}
                  <p className="text-white/70 text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {skill.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${skill.accentColor}40, transparent)`,
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: skill.delay + 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import { Brain, Sparkles, Search, Share2, ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";
import { CertificationBadge } from "./CertificationLogos";

type LogoType = "ibm" | "google" | "google-cloud" | "coursera" | "vanderbilt" | "ucdavis" | "meta" | "adobe";

interface Skill {
  id: string;
  icon: typeof Brain;
  title: string;
  description: React.ReactNode;
  accentColor: string;
  delay: number;
  certifications: LogoType[];
}

const skills: Skill[] = [
  {
    id: "ia-strategy",
    icon: Brain,
    title: "IA & stratégie digitale",
    description: (
      <>
        Parcours certifiants autour de <strong className="text-white font-semibold">l'IA générative</strong> et de son usage en marketing digital.
        <br className="hidden sm:block" />
        <span className="text-white/60">Utiliser l'IA pour analyser, optimiser et structurer vos contenus, sans jamais remplacer le regard humain.</span>
      </>
    ),
    accentColor: "#C3B68F",
    delay: 0,
    certifications: ["ibm", "google-cloud", "coursera"],
  },
  {
    id: "prompting",
    icon: Sparkles,
    title: "Prompting & assistants IA",
    description: (
      <>
        Formations dédiées au <strong className="text-white font-semibold">prompting avancé</strong> et à la création d'<strong className="text-[#C3B68F] font-medium">assistants IA sur mesure</strong>.
        <br className="hidden sm:block" />
        <span className="text-white/60">Poser les bonnes questions aux bons outils pour gagner en clarté, en vitesse et en qualité.</span>
      </>
    ),
    accentColor: "#9D8DF0",
    delay: 0.1,
    certifications: ["google", "vanderbilt", "coursera"],
  },
  {
    id: "seo",
    icon: Search,
    title: "Marketing de contenu & SEO",
    description: (
      <>
        Certifications en <strong className="text-white font-semibold">stratégie de content marketing</strong> et en croissance organique.
        <br className="hidden sm:block" />
        <span className="text-white/60">Des textes pensés pour vos clients, structurés pour les moteurs de recherche et les outils d'IA.</span>
      </>
    ),
    accentColor: "#C3B68F",
    delay: 0.2,
    certifications: ["ucdavis", "ibm", "coursera"],
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
    certifications: ["meta", "adobe", "coursera"],
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
    certifications: ["google", "ibm", "coursera"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    rotateX: -15,
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export const SkillsSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, #1f1a3d 0%, #0a0a0f 100%)",
          }}
        />
        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: "conic-gradient(from 180deg at 50% 50%, #C3B68F10 0deg, transparent 60deg, #7C6AE810 120deg, transparent 180deg, #C3B68F10 240deg, transparent 300deg, #7C6AE810 360deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(195, 182, 143, 0.8) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(195, 182, 143, 0.8) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-[5%] w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(195, 182, 143, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-[5%] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124, 106, 232, 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(195, 182, 143, 0.08) 0%, transparent 50%)",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Floating Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#C3B68F]/40 bg-gradient-to-r from-[#C3B68F]/20 to-[#C3B68F]/5 backdrop-blur-md mb-8"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(195, 182, 143, 0.3)" }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Award className="w-5 h-5 text-[#C3B68F]" />
            </motion.div>
            <span className="text-sm font-semibold text-[#C3B68F] tracking-wide uppercase">Expertise certifiée</span>
          </motion.div>

          <motion.h2 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Compétences &{" "}
            <span className="relative inline-block">
              <motion.span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #C3B68F 0%, #E8DDB5 25%, #C3B68F 50%, #9D8DF0 75%, #C3B68F 100%)",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                certifications
              </motion.span>
              <motion.span
                className="absolute -bottom-3 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-transparent via-[#C3B68F] to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Des bases solides en design, marketing et IA pour créer des identités et des sites qui fonctionnent vraiment.
          </motion.p>
        </motion.div>

        {/* Creative Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ perspective: "1200px" }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            // Make first and last cards span 2 columns on large screens
            const isLarge = index === 0;
            const isCenter = index === 4;
            
            return (
              <motion.div
                key={skill.id}
                variants={cardVariants}
                className={`group relative ${isLarge ? "lg:col-span-2" : ""} ${isCenter ? "lg:col-span-3 lg:max-w-2xl lg:mx-auto" : ""}`}
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ 
                  y: -8,
                  rotateY: 2,
                  rotateX: 2,
                  transition: { duration: 0.4 }
                }}
              >
                {/* Animated Border Gradient */}
                <motion.div
                  className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(135deg, ${skill.accentColor} 0%, transparent 40%, ${skill.accentColor}60 60%, transparent 100%)`,
                    filter: "blur(2px)",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* Card */}
                <div
                  className="relative h-full rounded-3xl border border-white/[0.08] backdrop-blur-2xl p-6 md:p-8 overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_30px_60px_-20px_rgba(195,182,143,0.2)]"
                  style={{
                    background: "linear-gradient(145deg, rgba(30, 25, 50, 0.9) 0%, rgba(15, 12, 25, 0.95) 100%)",
                  }}
                >
                  {/* Decorative Background Elements */}
                  <div 
                    className="absolute top-0 right-0 w-48 h-48 opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at top right, ${skill.accentColor} 0%, transparent 60%)`,
                    }}
                  />
                  <div 
                    className="absolute bottom-0 left-0 w-32 h-32 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at bottom left, ${skill.accentColor} 0%, transparent 60%)`,
                    }}
                  />

                  {/* Large Background Number */}
                  <motion.span
                    className="absolute top-4 right-6 font-display text-[120px] md:text-[150px] font-black leading-none select-none pointer-events-none"
                    style={{ 
                      color: skill.accentColor,
                      opacity: 0.03,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.03, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: skill.delay + 0.2 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Animated Ring */}
                    <div className="relative mb-6 inline-block">
                      <motion.div
                        className="relative p-4 rounded-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${skill.accentColor}20 0%, ${skill.accentColor}05 100%)`,
                          border: `1px solid ${skill.accentColor}30`,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon 
                          className="w-7 h-7" 
                          style={{ color: skill.accentColor }}
                        />
                        
                        {/* Orbiting Ring */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{ border: `2px solid ${skill.accentColor}` }}
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.6, 0, 0.6],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: index * 0.3,
                          }}
                        />
                      </motion.div>

                      {/* Floating Particles */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1.5 h-1.5 rounded-full"
                          style={{ 
                            backgroundColor: skill.accentColor,
                            top: `${20 + i * 25}%`,
                            left: `${80 + i * 10}%`,
                          }}
                          animate={{
                            y: [0, -15, 0],
                            opacity: [0, 0.6, 0],
                            scale: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.4,
                          }}
                        />
                      ))}
                    </div>

                    {/* Title */}
                    <motion.h4 
                      className="font-display text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-500"
                      style={{
                        backgroundImage: `linear-gradient(135deg, white 0%, ${skill.accentColor} 100%)`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                    >
                      {skill.title}
                    </motion.h4>

                    {/* Description */}
                    <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 group-hover:text-white/75 transition-colors duration-500">
                      {skill.description}
                    </p>

                    {/* Certification Logos */}
                    <CertificationBadge logos={skill.certifications} />
                  </div>

                  {/* Bottom Accent Line with Animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[3px]"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${skill.accentColor}, transparent)`,
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: skill.delay + 0.4 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          className="text-center text-xs text-white/25 mt-12 md:mt-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Les logos cités font référence aux programmes de formation suivis. Nova Visio n'est pas affilié officiellement à ces marques.
        </motion.p>
      </div>
    </section>
  );
};

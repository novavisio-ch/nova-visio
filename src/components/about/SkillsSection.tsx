import { Brain, Sparkles, Search, Share2, ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";
import { CertificationBadge } from "./CertificationLogos";
import { useLanguage } from "@/hooks/use-language";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -15, scale: 0.9 },
  visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export const SkillsSection = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const skills: Skill[] = [
    {
      id: "ia-strategy",
      icon: Brain,
      title: isFr ? "IA & stratégie digitale" : "AI & digital strategy",
      description: isFr ? (
        <>Parcours certifiants autour de <strong className="text-foreground font-semibold">l'IA générative</strong> et de son usage en marketing digital.{" "}<br className="hidden sm:block" /><span className="text-muted-foreground">Utiliser l'IA pour analyser, optimiser et structurer vos contenus, sans jamais remplacer le regard humain.</span></>
      ) : (
        <>Certified training in <strong className="text-foreground font-semibold">generative AI</strong> and its application in digital marketing.{" "}<br className="hidden sm:block" /><span className="text-muted-foreground">Using AI to analyse, optimise, and structure your content — without ever replacing the human touch.</span></>
      ),
      accentColor: "#C3B68F", delay: 0, certifications: ["ibm", "google-cloud", "coursera"],
    },
    {
      id: "prompting",
      icon: Sparkles,
      title: isFr ? "Prompting & assistants IA" : "Prompting & AI assistants",
      description: isFr ? (
        <>Formations dédiées au <strong className="text-foreground font-semibold">prompting avancé</strong> et à la création d'<strong className="text-[#C3B68F] font-medium">assistants IA sur mesure</strong>.{" "}<br className="hidden sm:block" /><span className="text-muted-foreground">Poser les bonnes questions aux bons outils pour gagner en clarté, en vitesse et en qualité.</span></>
      ) : (
        <>Specialised training in <strong className="text-foreground font-semibold">advanced prompting</strong> and building <strong className="text-[#C3B68F] font-medium">custom AI assistants</strong>.{" "}<br className="hidden sm:block" /><span className="text-muted-foreground">Asking the right questions to the right tools for more clarity, speed, and quality.</span></>
      ),
      accentColor: "#9D8DF0", delay: 0.1, certifications: ["google", "vanderbilt", "coursera"],
    },
    {
      id: "seo",
      icon: Search,
      title: isFr ? "Marketing de contenu & SEO" : "Content marketing & SEO",
      description: isFr ? (
        <>Certifications en <strong className="text-foreground font-semibold">stratégie de content marketing</strong> et en croissance organique.{" "}<br className="hidden sm:block" /><span className="text-muted-foreground">Des textes pensés pour vos clients, structurés pour les moteurs de recherche et les outils d'IA.</span></>
      ) : (
        <>Certifications in <strong className="text-foreground font-semibold">content marketing strategy</strong> and organic growth.{" "}<br className="hidden sm:block" /><span className="text-muted-foreground">Copy written for your clients, structured for search engines and AI tools.</span></>
      ),
      accentColor: "#C3B68F", delay: 0.2, certifications: ["ucdavis", "ibm", "coursera"],
    },
    {
      id: "social",
      icon: Share2,
      title: isFr ? "Social media & contenu de marque" : "Social media & brand content",
      description: isFr ? (
        <>Cours spécialisés en <strong className="text-foreground font-semibold">social media marketing</strong> et stratégie de contenu.{" "}<br className="hidden sm:block" /><span className="text-muted-foreground">Décliner votre identité sur des posts, stories et campagnes cohérentes avec votre site.</span></>
      ) : (
        <>Specialised courses in <strong className="text-foreground font-semibold">social media marketing</strong> and content strategy.{" "}<br className="hidden sm:block" /><span className="text-muted-foreground">Bringing your identity to life through posts, stories, and campaigns that align with your website.</span></>
      ),
      accentColor: "#9D8DF0", delay: 0.3, certifications: ["meta", "adobe", "coursera"],
    },
    {
      id: "responsible",
      icon: ShieldCheck,
      title: isFr ? "Utilisation responsable de l'IA" : "Responsible AI use",
      description: isFr ? (
        <>Certifications sur les <strong className="text-foreground font-semibold">bonnes pratiques</strong>, limites et <strong className="text-[#C3B68F] font-medium">éthique de l'IA</strong>.{" "}<br className="hidden sm:block" /><span className="text-muted-foreground">L'IA est un co‑équipier : elle accélère le travail, mais les décisions restent humaines.</span></>
      ) : (
        <>Certifications in <strong className="text-foreground font-semibold">best practices</strong>, limitations, and <strong className="text-[#C3B68F] font-medium">AI ethics</strong>.{" "}<br className="hidden sm:block" /><span className="text-muted-foreground">AI is a teammate: it speeds up work, but the decisions stay human.</span></>
      ),
      accentColor: "#C3B68F", delay: 0.4, certifications: ["google", "ibm", "coursera"],
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 section-skills-bg" />
        <motion.div className="absolute inset-0 opacity-30" style={{ background: "conic-gradient(from 180deg at 50% 50%, #C3B68F10 0deg, transparent 60deg, #7C6AE810 120deg, transparent 180deg, #C3B68F10 240deg, transparent 300deg, #7C6AE810 360deg)" }} animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />
      </div>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(195, 182, 143, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(195, 182, 143, 0.8) 1px, transparent 1px)`, backgroundSize: "100px 100px" }} />
      <motion.div className="absolute top-20 left-[5%] w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(195, 182, 143, 0.15) 0%, transparent 70%)", filter: "blur(40px)" }} animate={{ y: [0, -40, 0], x: [0, 20, 0], scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-20 right-[5%] w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(124, 106, 232, 0.12) 0%, transparent 70%)", filter: "blur(60px)" }} animate={{ y: [0, 30, 0], x: [0, -30, 0], scale: [1, 1.15, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(195, 182, 143, 0.08) 0%, transparent 50%)", filter: "blur(80px)" }} animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div className="text-center mb-16 md:mb-24" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <motion.div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C3B68F]/20 to-[#C3B68F]/5 backdrop-blur-md mb-8" initial={{ opacity: 0, scale: 0.8, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(195, 182, 143, 0.3)" }}>
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Award className="w-5 h-5 text-[#C3B68F]" />
            </motion.div>
            <span className="text-sm font-semibold text-[#C3B68F] tracking-wide uppercase">{isFr ? "Expertise certifiée" : "Certified expertise"}</span>
          </motion.div>

          <motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            {isFr ? "Compétences &" : "Skills &"}{" "}
            <span className="relative inline-block">
              <motion.span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #C3B68F 0%, #E8DDB5 25%, #C3B68F 50%, #9D8DF0 75%, #C3B68F 100%)", backgroundSize: "200% 200%" }} animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                {isFr ? "certifications." : "certifications."}
              </motion.span>
              <motion.span className="absolute -bottom-3 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-transparent via-[#C3B68F] to-transparent" initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }} />
            </span>
          </motion.h2>

          <motion.p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
            {isFr ? (
              <>Des bases solides en <strong className="text-foreground font-medium">design, marketing et IA</strong>{" "}<br className="md:hidden" />pour créer des identités et des sites qui <strong className="text-foreground font-medium">fonctionnent vraiment</strong>.</>
            ) : (
              <>Strong foundations in <strong className="text-foreground font-medium">design, marketing, and AI</strong>{" "}<br className="md:hidden" />to build identities and websites that <strong className="text-foreground font-medium">actually work</strong>.</>
            )}
          </motion.p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} style={{ perspective: "1200px" }}>
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isLarge = index === 0;
            return (
              <motion.div key={skill.id} variants={cardVariants} className={`group relative ${isLarge ? "lg:col-span-2" : ""}`} style={{ transformStyle: "preserve-3d" }} whileHover={{ y: -8, rotateY: 2, rotateX: 2, transition: { duration: 0.4 } }}>
                <motion.div className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `linear-gradient(135deg, ${skill.accentColor} 0%, transparent 40%, ${skill.accentColor}60 60%, transparent 100%)`, filter: "blur(2px)" }} animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                <div className="relative h-full rounded-3xl backdrop-blur-2xl p-6 md:p-8 overflow-hidden transition-all duration-500 group-hover:shadow-[0_30px_60px_-20px_rgba(195,182,143,0.2)] card-glass-surface">
                  <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-700" style={{ background: `radial-gradient(circle at top right, ${skill.accentColor} 0%, transparent 60%)` }} />
                  <div className="absolute bottom-0 left-0 w-32 h-32 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700" style={{ background: `radial-gradient(circle at bottom left, ${skill.accentColor} 0%, transparent 60%)` }} />
                  <motion.span className="absolute top-4 right-6 font-display text-[120px] md:text-[150px] font-black leading-none select-none pointer-events-none" style={{ color: skill.accentColor, opacity: 0.03 }} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 0.03, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: skill.delay + 0.2 }}>
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>
                  <div className="relative z-10">
                    <div className="relative mb-6 inline-block">
                      <motion.div className="relative p-4 rounded-2xl" style={{ background: `linear-gradient(135deg, ${skill.accentColor}20 0%, ${skill.accentColor}05 100%)`, border: `1px solid ${skill.accentColor}30` }} whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Icon className="w-7 h-7" style={{ color: skill.accentColor }} />
                        <motion.div className="absolute inset-0 rounded-2xl" style={{ border: `2px solid ${skill.accentColor}` }} animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: index * 0.3 }} />
                      </motion.div>
                      {[...Array(3)].map((_, i) => (
                        <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full" style={{ backgroundColor: skill.accentColor, top: `${20 + i * 25}%`, left: `${80 + i * 10}%` }} animate={{ y: [0, -15, 0], opacity: [0, 0.6, 0], scale: [0.5, 1, 0.5] }} transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.4 }} />
                      ))}
                    </div>
                    <motion.h4 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-500" style={{ backgroundImage: `linear-gradient(135deg, hsl(var(--foreground)) 0%, ${skill.accentColor} 100%)`, WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                      {skill.title}
                    </motion.h4>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 group-hover:text-foreground-medium transition-colors duration-500">{skill.description}</p>
                    <CertificationBadge logos={skill.certifications} />
                  </div>
                  <motion.div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, transparent, ${skill.accentColor}, transparent)` }} initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 0.6 }} viewport={{ once: true }} transition={{ duration: 1, delay: skill.delay + 0.4 }} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p className="text-center text-xs text-muted-foreground mt-12 md:mt-16 max-w-2xl mx-auto leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}>
          {isFr
            ? "Les certifications présentées ont été obtenues via des plateformes d'enseignement en ligne reconnues. Elles attestent de compétences validées par des organismes tels qu'IBM, Google, Meta et d'autres institutions de référence."
            : "The certifications listed were earned through recognised online learning platforms. They attest to skills validated by organisations such as IBM, Google, Meta, and other leading institutions."}
        </motion.p>
      </div>
    </section>
  );
};

import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Palette, Layers, Rocket, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const servicesFr = [{
  id: "strategy", title: "Stratégie & architecture", subtitle: "de site",
  description: "On ne commence jamais par le design. On commence par comprendre ce que vous vendez, à qui, et comment votre site doit guider vos visiteurs.",
  icon: LayoutGrid, number: "01", gradient: "from-amber-500/20 via-yellow-500/10 to-transparent"
}, {
  id: "identity", title: "Identité visuelle", subtitle: "appliquée au web",
  description: "Vos couleurs, typos et éléments graphiques déclinés sur le web pour une image cohérente du logo à la dernière page.",
  icon: Palette, number: "02", gradient: "from-rose-500/20 via-pink-500/10 to-transparent"
}, {
  id: "webdesign", title: "Webdesign", subtitle: "& UX/UI",
  description: "Des interfaces qui ne font pas juste \"beau\" - elles sont lisibles, intuitives et pensées pour convertir.",
  icon: Layers, number: "03", gradient: "from-violet-500/20 via-purple-500/10 to-transparent"
}, {
  id: "landing", title: "Pages de vente", subtitle: "& landing pages",
  description: "Une page, un objectif, un message clair. Des arguments qui convainquent et des CTA qui font cliquer.",
  icon: Rocket, number: "04", gradient: "from-cyan-500/20 via-blue-500/10 to-transparent"
}, {
  id: "conversion", title: "Systèmes", subtitle: "de conversion",
  description: "Formulaires, tunnels, automatisations - pour que vos visiteurs ne restent pas de simples visiteurs.",
  icon: TrendingUp, number: "05", gradient: "from-emerald-500/20 via-green-500/10 to-transparent"
}];

const servicesEn = [{
  id: "strategy", title: "Strategy & architecture", subtitle: "for your site",
  description: "We never start with design. We start by understanding what you sell, who you sell it to, and how your site should guide your visitors.",
  icon: LayoutGrid, number: "01", gradient: "from-amber-500/20 via-yellow-500/10 to-transparent"
}, {
  id: "identity", title: "Visual identity", subtitle: "applied to web",
  description: "Your colours, fonts and graphic elements brought to life on the web for a cohesive image from logo to last page.",
  icon: Palette, number: "02", gradient: "from-rose-500/20 via-pink-500/10 to-transparent"
}, {
  id: "webdesign", title: "Webdesign", subtitle: "& UX/UI",
  description: "Interfaces that don't just look good — they're readable, intuitive and built to convert.",
  icon: Layers, number: "03", gradient: "from-violet-500/20 via-purple-500/10 to-transparent"
}, {
  id: "landing", title: "Sales pages", subtitle: "& landing pages",
  description: "One page, one goal, one clear message. Compelling arguments and CTAs that actually get clicks.",
  icon: Rocket, number: "04", gradient: "from-cyan-500/20 via-blue-500/10 to-transparent"
}, {
  id: "conversion", title: "Conversion", subtitle: "systems",
  description: "Forms, funnels, automations — so your visitors don't stay just visitors.",
  icon: TrendingUp, number: "05", gradient: "from-emerald-500/20 via-green-500/10 to-transparent"
}];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export const ServicesOverviewSection = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { language } = useLanguage();
  const isFr = language === "fr";
  const services = isFr ? servicesFr : servicesEn;

  return <section className="py-20 md:py-24 pb-8 md:pb-12 section-white overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-20 left-10 w-72 h-72 bg-[#C3B68F]/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C3B68F]/10 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      <div className="container relative z-10">
        <motion.div className="text-center mb-16 md:mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C3B68F]/10 mb-6" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Sparkles className="w-4 h-4 text-[#C3B68F]" />
            <span className="text-sm font-medium text-[#C3B68F]">{isFr ? "Nos expertises" : "Our expertise"}</span>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {isFr ? " Nos services de " : " Our "}
            <span className="relative">
              <span className="text-gradient-gold">{isFr ? "création web." : "web design services."}</span>
              <motion.span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#C3B68F] to-[#DCCB99] rounded-full" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }} />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {isFr ? (
              <>Tout ce qu'il faut pour transformer votre site <br className="md:hidden" />en un <strong className="text-foreground font-medium">outil qui travaille</strong> pendant que vous dormez.</>
            ) : (
              <>Everything you need to turn your website <br className="md:hidden" />into a <strong className="text-foreground font-medium">tool that works</strong> while you sleep.</>
            )}
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          {services.map((service, index) => {
          const Icon = service.icon;
          const isHovered = hoveredService === service.id;
          const isLarge = index === 0 || index === 3;
          return <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`group relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer ${isLarge ? "xl:col-span-2" : ""}`} onMouseEnter={() => { setHoveredService(service.id); setActiveIndex(index); }} onMouseLeave={() => setHoveredService(null)} whileHover={{ y: -8 }}>
                <div className={`absolute inset-0 transition-all duration-500 ${isHovered ? "bg-[#0B0B0F]" : "bg-card"}`} />
                <motion.div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }} />
                <div className={`relative z-10 p-6 md:p-8 ${isLarge ? "lg:p-10" : ""}`}>
                  <div className="flex items-start justify-between mb-8">
                    <motion.span className={`font-display text-5xl md:text-6xl font-bold transition-colors duration-300 ${isHovered ? "text-white/20" : "text-foreground/15"}`} animate={{ scale: isHovered ? 1.1 : 1, x: isHovered ? 10 : 0 }} transition={{ duration: 0.3 }}>{service.number}</motion.span>
                    <motion.div className={`transition-all duration-300 ${isHovered ? "text-[#C3B68F]" : "text-muted-foreground"}`} animate={{ rotate: isHovered ? 12 : 0, scale: isHovered ? 1.25 : 1 }} transition={{ duration: 0.3 }}><Icon className="w-7 h-7 md:w-8 md:h-8" /></motion.div>
                  </div>
                  <div className="mb-6">
                    <h3 className={`font-display text-2xl md:text-3xl font-bold transition-colors duration-300 leading-tight ${isHovered ? "text-white" : "text-foreground"}`}>{service.title}</h3>
                    <span className="text-lg md:text-xl font-medium text-[#C3B68F]">{service.subtitle}</span>
                    <p className={`mt-4 text-sm md:text-base leading-relaxed transition-colors duration-300 ${isHovered ? "text-white/70" : "text-muted-foreground"}`}>{service.description}</p>
                  </div>
                </div>
                <motion.div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none" style={{ background: `radial-gradient(circle at bottom right, ${isHovered ? "rgba(195, 182, 143, 0.3)" : "rgba(195, 182, 143, 0.1)"}, transparent 70%)` }} animate={{ scale: isHovered ? 1.5 : 1 }} transition={{ duration: 0.4 }} />
                <motion.div className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none" style={{ boxShadow: isHovered ? "inset 0 0 0 1px rgba(195, 182, 143, 0.5), 0 20px 40px -15px rgba(0, 0, 0, 0.3)" : "inset 0 0 0 0px transparent" }} transition={{ duration: 0.3 }} />
              </motion.div>;
          })}
          
          <motion.div className="md:col-span-2 xl:col-span-2 rounded-2xl md:rounded-3xl overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
            <div className="relative h-full" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)" }}>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C3B68F]/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#C3B68F]/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C3B68F]/20 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-[#C3B68F]" />
                    <span className="text-xs font-medium text-[#C3B68F] uppercase tracking-wider">{isFr ? "En résumé" : "In a nutshell"}</span>
                  </div>
                  
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                    {isFr ? <>De la stratégie à la conversion,{" "}<span className="text-[#C3B68F]">tout est couvert</span></> : <>From strategy to conversion,{" "}<span className="text-[#C3B68F]">we've got it covered</span></>}
                  </h3>
                  
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                    {isFr ? "Pas besoin de jongler entre 5 prestataires. On gère tout, du premier brief jusqu'aux premiers résultats." : "No need to juggle between 5 providers. We handle everything, from the first brief to the first results."}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {(isFr ? [
                    { value: "5", label: "Expertises" },
                    { value: "100%", label: "Sur-mesure" },
                    { value: "0", label: "Template" },
                    { value: "24h", label: "Réponse" },
                  ] : [
                    { value: "5", label: "Specialities" },
                    { value: "100%", label: "Bespoke" },
                    { value: "0", label: "Templates" },
                    { value: "24h", label: "Response" },
                  ]).map((stat, index) => <motion.div key={index} className="text-center p-3 rounded-xl bg-white/5" whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}>
                      <div className="font-display text-xl md:text-2xl font-bold text-[#C3B68F]">{stat.value}</div>
                      <div className="text-xs text-white/60">{stat.label}</div>
                    </motion.div>)}
                </div>
                
                <a href="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-foreground transition-all duration-300 hover:gap-3 hover:shadow-lg hover:shadow-[#C3B68F]/25 w-full" style={{ background: "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)" }}>
                  {isFr ? "Discuter de votre projet" : "Discuss your project"}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C3B68F]/50 to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="mt-16 flex justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
        </motion.div>
      </div>
    </section>;
};

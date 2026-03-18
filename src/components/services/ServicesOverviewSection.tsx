import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Palette, Layers, Rocket, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
const services = [{
  id: "strategy",
  title: "Stratégie & architecture",
  subtitle: "de site",
  description: "Définition de vos objectifs, structure des pages et parcours utilisateur pensés pour guider vos visiteurs vers l'action.",
  icon: LayoutGrid,
  number: "01",
  gradient: "from-amber-500/20 via-yellow-500/10 to-transparent"
}, {
  id: "identity",
  title: "Identité visuelle",
  subtitle: "appliquée au web",
  description: "Déclinaison de votre charte graphique sur le web : couleurs, typographies et éléments visuels cohérents.",
  icon: Palette,
  number: "02",
  gradient: "from-rose-500/20 via-pink-500/10 to-transparent"
}, {
  id: "webdesign",
  title: "Webdesign",
  subtitle: "& UX/UI",
  description: "Interfaces modernes et intuitives, conçues pour offrir une expérience fluide sur tous les écrans.",
  icon: Layers,
  number: "03",
  gradient: "from-violet-500/20 via-purple-500/10 to-transparent"
}, {
  id: "landing",
  title: "Pages de vente",
  subtitle: "& landing pages",
  description: "Pages optimisées pour la conversion, avec des arguments clairs et des appels à l'action stratégiques.",
  icon: Rocket,
  number: "04",
  gradient: "from-cyan-500/20 via-blue-500/10 to-transparent"
}, {
  id: "conversion",
  title: "Systèmes",
  subtitle: "de conversion",
  description: "Tunnels de vente, formulaires et automatisations pour transformer vos visiteurs en clients.",
  icon: TrendingUp,
  number: "05",
  gradient: "from-emerald-500/20 via-green-500/10 to-transparent"
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
export const ServicesOverviewSection = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return <section className="py-20 md:py-32 section-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-20 left-10 w-72 h-72 bg-[#C3B68F]/10 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C3B68F]/10 rounded-full blur-3xl" animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16 md:mb-20" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C3B68F]/10 border border-[#C3B68F]/20 mb-6" initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
            <Sparkles className="w-4 h-4 text-[#C3B68F]" />
            <span className="text-sm font-medium text-[#C3B68F]">Nos expertises</span>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
             Nos services de{" "}
            <span className="relative">
              <span className="text-gradient-gold">création web.</span>
              <motion.span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#C3B68F] to-[#DCCB99] rounded-full" initial={{
              scaleX: 0
            }} whileInView={{
              scaleX: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5,
              duration: 0.6
            }} />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Une approche complète pour concevoir des expériences web 
            qui convertissent et marquent les esprits.
          </p>
        </motion.div>

        {/* Services Grid - Bento Style */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }}>
          {services.map((service, index) => {
          const Icon = service.icon;
          const isHovered = hoveredService === service.id;
          const isLarge = index === 0 || index === 3;
          return <motion.div key={service.id} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className={`
                  group relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer
                  ${isLarge ? "xl:col-span-2" : ""}
                `} onMouseEnter={() => {
            setHoveredService(service.id);
            setActiveIndex(index);
          }} onMouseLeave={() => setHoveredService(null)} whileHover={{
            y: -8
          }}>
                {/* Card background */}
                 <div className={`
                     absolute inset-0 transition-all duration-500
                     ${isHovered ? "bg-[hsl(var(--foreground))]" : "bg-card border border-border"}
                   `} />
                
                {/* Gradient overlay on hover */}
                <motion.div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} initial={{
              opacity: 0
            }} animate={{
              opacity: isHovered ? 1 : 0
            }} transition={{
              duration: 0.3
            }} />

                {/* Content */}
                <div className={`relative z-10 p-6 md:p-8 ${isLarge ? "lg:p-10" : ""}`}>
                  <div className="flex items-start justify-between mb-8">
                    {/* Number */}
                     <motion.span className={`
                         font-display text-5xl md:text-6xl font-bold transition-colors duration-300
                         ${isHovered ? "text-background/20" : "text-muted/50"}
                       `} animate={{
                  scale: isHovered ? 1.1 : 1,
                  x: isHovered ? 10 : 0
                }} transition={{
                  duration: 0.3
                }}>
                      {service.number}
                    </motion.span>
                    
                    {/* Icon */}
                     <motion.div className={`
                         transition-all duration-300
                         ${isHovered ? "text-[#C3B68F]" : "text-muted-foreground"}
                       `} animate={{
                  rotate: isHovered ? 12 : 0,
                  scale: isHovered ? 1.25 : 1
                }} transition={{
                  duration: 0.3
                }}>
                      <Icon className="w-7 h-7 md:w-8 md:h-8" />
                    </motion.div>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-6">
                     <h3 className={`
                         font-display text-2xl md:text-3xl font-bold transition-colors duration-300 leading-tight
                         ${isHovered ? "text-background" : "text-foreground"}
                       `}>
                      {service.title}
                    </h3>
                    <span className={`
                        text-lg md:text-xl font-medium transition-colors duration-300
                        ${isHovered ? "text-[#C3B68F]" : "text-[#C3B68F]"}
                      `}>
                      {service.subtitle}
                    </span>
                    
                    {/* Description */}
                     <p className={`
                         mt-4 text-sm md:text-base leading-relaxed transition-colors duration-300
                         ${isHovered ? "text-background/70" : "text-muted-foreground"}
                       `}>
                      {service.description}
                    </p>
                  </div>

                </div>

                {/* Decorative corner accent */}
                <motion.div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none" style={{
              background: `radial-gradient(circle at bottom right, ${isHovered ? "rgba(195, 182, 143, 0.3)" : "rgba(195, 182, 143, 0.1)"}, transparent 70%)`
            }} animate={{
              scale: isHovered ? 1.5 : 1
            }} transition={{
              duration: 0.4
            }} />

                {/* Hover border glow */}
                <motion.div className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none" style={{
              boxShadow: isHovered ? "inset 0 0 0 1px rgba(195, 182, 143, 0.5), 0 20px 40px -15px rgba(0, 0, 0, 0.3)" : "inset 0 0 0 0px transparent"
            }} transition={{
              duration: 0.3
            }} />
              </motion.div>;
        })}
          
          {/* Synthesis Block - Inside Grid */}
          <motion.div className="md:col-span-2 xl:col-span-2 rounded-2xl md:rounded-3xl overflow-hidden" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }}>
            <div className="relative h-full" style={{
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)"
          }}>
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C3B68F]/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#C3B68F]/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                {/* Header */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C3B68F]/20 border border-[#C3B68F]/30 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-[#C3B68F]" />
                    <span className="text-xs font-medium text-[#C3B68F] uppercase tracking-wider">En résumé</span>
                  </div>
                  
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                    Un accompagnement complet,{" "}
                    <span className="text-[#C3B68F]">de la stratégie à la conversion</span>
                  </h3>
                  
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                    Des outils de croissance pensés pour clarifier votre message et transformer vos visiteurs en clients.
                  </p>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[{
                  value: "5",
                  label: "Expertises"
                }, {
                  value: "100%",
                  label: "Sur-mesure"
                }, {
                  value: "0",
                  label: "Template"
                }, {
                  value: "24h",
                  label: "Réponse"
                }].map((stat, index) => <motion.div key={index} className="text-center p-3 rounded-xl bg-white/5 border border-white/10" whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.08)"
                }}>
                      <div className="font-display text-xl md:text-2xl font-bold text-[#C3B68F]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>)}
                </div>
                
                {/* CTA */}
                <a href="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-gray-900 transition-all duration-300 hover:gap-3 hover:shadow-lg hover:shadow-[#C3B68F]/25 w-full" style={{
                background: "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)"
              }}>
                  Discuter de votre projet
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              
              {/* Bottom decorative border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C3B68F]/50 to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom accent line */}
        <motion.div className="mt-16 flex justify-center" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.6
      }}>
          
        </motion.div>
      </div>
    </section>;
};
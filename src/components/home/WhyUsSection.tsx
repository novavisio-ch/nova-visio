import { MessageCircle, Users, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useIsTabletOrMobile } from "@/hooks/use-mobile";

const reasons = [
  {
    icon: MessageCircle,
    title: "Zéro jargon",
    description: "On parle comme des humains. Pas de \"synergie UX\" ni de \"paradigme digital\".",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Users,
    title: "Un vrai\naccompagnement",
    description: "On ne vous lâche pas après la livraison. On reste là tant que vous avez besoin.",
    gradient: "from-purple-500/20 to-purple-500/5"
  },
  {
    icon: Shield,
    title: "Qualité > quantité",
    description: "On prend peu de projets à la fois. Chacun a notre attention complète.",
    gradient: "from-emerald-500/20 to-emerald-500/5"
  },
  {
    icon: Star,
    title: "Résultats,\npas promesses",
    description: "On ne vend pas du rêve. On construit des outils qui travaillent pour vous.",
    gradient: "from-amber-500/20 to-amber-500/5"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

// Mobile-specific animation that triggers on scroll
const mobileCardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    boxShadow: "0 20px 40px -15px rgba(195, 182, 143, 0.3)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

export function WhyUsSection() {
  const isMobile = useIsTabletOrMobile();

  return (
    <section className="py-12 md:py-20 lg:py-28 relative overflow-hidden px-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 md:w-72 h-32 md:h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 md:w-96 h-40 md:h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header with animated accent */}
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 mb-3 md:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-[10px] md:text-sm font-medium text-primary">Notre différence</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-display-lg mb-2 md:mb-4 leading-tight">
            NOVA VISIO.
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            <span className="text-gradient-gold">La différence.</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
            >
              {/* Card */}
              <motion.div 
                className="relative h-full p-4 sm:p-5 md:p-8 rounded-xl md:rounded-2xl bg-card/50 backdrop-blur-sm overflow-hidden"
                initial={{ 
                  boxShadow: "none"
                }}
                whileInView={isMobile ? { 
                  boxShadow: "0 20px 40px -15px rgba(195, 182, 143, 0.3)"
                } : undefined}
                whileHover={!isMobile ? { 
                  y: -8,
                  boxShadow: "0 20px 40px -15px rgba(195, 182, 143, 0.3)"
                } : undefined}
                viewport={isMobile ? { once: true, margin: "-50px" } : undefined}
                transition={{ duration: 0.5 }}
              >
                {/* Gradient background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${reason.gradient}`}
                  initial={{ opacity: 0 }}
                  whileInView={isMobile ? { opacity: 1 } : undefined}
                  whileHover={!isMobile ? { opacity: 1 } : undefined}
                  viewport={isMobile ? { once: true, margin: "-50px" } : undefined}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Decorative corner accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-12 md:w-20 h-12 md:h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"
                  initial={{ opacity: 0 }}
                  whileInView={isMobile ? { opacity: 1 } : undefined}
                  whileHover={!isMobile ? { opacity: 1 } : undefined}
                  viewport={isMobile ? { once: true, margin: "-50px" } : undefined}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Large number */}
                  <span className="text-2xl md:text-5xl font-bold text-primary/80 leading-none mb-2 md:mb-4 block">
                    {index + 1}
                  </span>

                  {/* Icon */}
                  <motion.div 
                    className="mb-2 md:mb-6"
                    whileInView={isMobile ? { scale: 1.1 } : undefined}
                    whileHover={!isMobile ? { scale: 1.25 } : undefined}
                    viewport={isMobile ? { once: true, margin: "-50px" } : undefined}
                    transition={{ duration: 0.3 }}
                  >
                    <reason.icon className="w-6 h-6 md:w-10 md:h-10 text-primary mx-auto" />
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3 
                    className="text-sm md:text-lg font-bold mb-1 md:mb-3 whitespace-pre-line"
                    initial={{ color: "inherit" }}
                    whileInView={isMobile ? { color: "hsl(var(--primary))" } : undefined}
                    whileHover={!isMobile ? { color: "hsl(var(--primary))" } : undefined}
                    viewport={isMobile ? { once: true, margin: "-50px" } : undefined}
                    transition={{ duration: 0.3 }}
                  >
                    {reason.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-xs md:text-base lg:text-lg leading-relaxed">
                    {reason.description}
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={isMobile ? { scaleX: 1 } : undefined}
                  whileHover={!isMobile ? { scaleX: 1 } : undefined}
                  viewport={isMobile ? { once: true, margin: "-50px" } : undefined}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { MessageCircle, Users, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: MessageCircle,
    title: "Langage simple",
    description: "Sans jargon technique, nous vous expliquons tout clairement.",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Users,
    title: "Accompagnement\npas à pas",
    description: "Nous vous guidons à chaque étape de votre transformation digitale.",
    gradient: "from-purple-500/20 to-purple-500/5"
  },
  {
    icon: Shield,
    title: "Clarté et durabilité",
    description: "La priorité à la clarté et à la durabilité, pas aux solutions miracles.",
    gradient: "from-emerald-500/20 to-emerald-500/5"
  },
  {
    icon: Star,
    title: "Qualité maximale",
    description: "Un nombre limité de projets simultanés pour une attention totale.",
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

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28 relative overflow-hidden px-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-40 md:w-72 h-40 md:h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-48 md:w-96 h-48 md:h-96 bg-purple-500/5 rounded-full blur-3xl"
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
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary">Notre différence</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-display-lg mb-3 md:mb-4 leading-tight">
            Pourquoi choisir <span className="text-gradient-gold">NOVA VISIO</span> ?
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
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
            >
              {/* Card */}
              <motion.div 
                className="relative h-full p-5 sm:p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden transition-all duration-500"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px -15px rgba(195, 182, 143, 0.3)"
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Large number */}
                  <span className="text-4xl md:text-5xl font-bold text-primary/80 leading-none mb-4 block">
                    {index + 1}
                  </span>

                  {/* Icon */}
                  <div className="mb-4 md:mb-6">
                    <reason.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto transition-transform duration-300 group-hover:scale-125" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300 whitespace-pre-line">
                    {reason.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">
                    {reason.description}
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
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

import { CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";

const benefits = [
  {
    title: "On vous reconnaît",
    description: "Vos clients savent que c'est vous avant même de lire votre nom."
  },
  {
    title: "Vous inspirez confiance",
    description: "Une image pro dit \"je prends mon activité au sérieux\" - sans avoir à le dire."
  },
  {
    title: "Vous gagnez du temps",
    description: "Fini de vous demander quelle couleur ou quelle typo utiliser. Tout est défini."
  },
  {
    title: "Ça reste cohérent",
    description: "Site, réseaux, documents - même image partout, sans effort."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export const BrandBenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2 className="text-display-md text-foreground mb-4">
             L'impact.{" "}
            <span className="text-gradient-gold">Immédiat.</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Une identité qui <strong className="text-foreground font-medium">simplifie votre quotidien</strong>{" "}
            <br className="md:hidden" />
            et change la <strong className="text-foreground font-medium">perception</strong> de vos clients.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#C3B68F] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

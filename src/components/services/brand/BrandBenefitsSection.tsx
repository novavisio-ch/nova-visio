import { CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";

const benefits = [
  {
    title: "Reconnaissance immédiate",
    description: "Vos clients vous reconnaissent en un coup d'œil, quel que soit le support."
  },
  {
    title: "Image professionnelle",
    description: "Votre image inspire plus de confiance et de professionnalisme."
  },
  {
    title: "Gain de temps",
    description: "Vos supports sont plus simples à créer, car les règles sont claires."
  },
  {
    title: "Cohérence dans la durée",
    description: "Votre communication est cohérente (site, réseaux, documents)."
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
             Vos bénéfices avec une{" "}
            <span className="text-gradient-gold">identité visuelle claire.</span>
          </h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Une identité visuelle professionnelle simplifie votre quotidien et renforce la perception de votre marque.
            <br className="hidden md:block" />
            {" "}
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
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#C3B68F]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#C3B68F] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

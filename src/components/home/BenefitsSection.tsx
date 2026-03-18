import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    text: "Vos clients comprennent ",
    highlight: "en quelques secondes",
    rest: " ce que vous faites et comment travailler avec vous."
  },
  {
    text: "Vous bénéficiez d'une ",
    highlight: "image professionnelle, cohérente et alignée",
    rest: " sur toutes vos plateformes."
  },
  {
    text: "Vous ",
    highlight: "vendez plus facilement",
    rest: ", sans devoir passer tout votre temps à \"gérer le digital\"."
  },
  {
    text: "Votre ",
    highlight: "charge mentale liée au digital diminue",
    rest: ", vous pouvez vous concentrer sur votre cœur de métier."
  }
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function BenefitsSection() {
  return <section className="bg-white py-12 md:py-20 lg:py-28 px-4">
      <div className="container max-w-6xl">
        <div className="text-left">
          {/* Title */}
          <motion.h2 
            className="text-xl sm:text-2xl md:text-display-lg lg:text-display-xl font-bold mb-3 md:mb-6 text-center leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-slate-900">Vos </span>
            <span className="text-accent">bénéfices.</span>
            
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p 
            className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-600 mb-6 md:mb-12 lg:mb-16 max-w-3xl leading-relaxed text-center mx-auto font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ce que vous gagnez en clarifiant votre image
            <br className="hidden sm:block" />
            et votre présence en ligne avec NOVA VISIO.
          </motion.p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-3 sm:gap-5 md:gap-8 lg:gap-10">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex items-start gap-2 md:gap-4"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mt-0.5 md:mt-1">
                  <CheckCircle className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 text-accent" strokeWidth={2} />
                </div>
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-slate-800 leading-relaxed">
                  {benefit.text}<span className="font-bold text-slate-900">{benefit.highlight}</span>{benefit.rest}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>;
}
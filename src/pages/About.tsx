import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Feather, Sparkles, Handshake, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { SkillsSection } from "@/components/about/SkillsSection";
import { ClientLocationsSection } from "@/components/about/ClientLocationsSection";
const values = [{
  icon: Sparkles,
  title: "Clarté",
  description: "Des solutions simples et compréhensibles."
}, {
  icon: Eye,
  title: "Structure",
  description: "Une approche méthodique et organisée."
}, {
  icon: Feather,
  title: "Simplicité",
  description: "L'essentiel, sans superflu."
}, {
  icon: Handshake,
  title: "Pédagogie",
  description: "Nous vous accompagnons et vous formons."
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
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};
const About = () => {
  return <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-display-lg lg:text-display-xl mb-4 md:mb-6 leading-tight">
              À <span className="text-gradient-gold">Propos.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-body-lg text-muted-foreground">
              Au-delà de la confusion digitale, il y a la clarté.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="pb-12 md:pb-16 lg:pb-20 px-4">
        <div className="container max-w-6xl">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-50px"
        }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {/* Introduction Block - Large - Lift & Glow */}
            <motion.div variants={itemVariants} whileHover={{
            y: -8,
            boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.2)",
            transition: {
              duration: 0.3
            }
          }} className="md:col-span-2 lg:col-span-2 p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-secondary/80 to-secondary/40 border border-border/30 backdrop-blur-sm cursor-pointer">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">Notre histoire</span>
              </div>
              <p className="text-sm sm:text-base md:text-body-lg text-foreground/90 leading-relaxed mb-3 md:mb-4">
                NOVA VISIO est né d'un constat simple : beaucoup d'entrepreneurs se sentent perdus face au digital.
              </p>
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                Entre les multiples plateformes, les tendances changeantes et le jargon technique, créer une présence en ligne cohérente peut sembler insurmontable. Nous sommes là pour simplifier tout cela.
              </p>
            </motion.div>

            {/* Vision Block - Small - Scale & Rotate */}
            <motion.div variants={itemVariants} whileHover={{
            scale: 1.03,
            rotate: 1,
            transition: {
              duration: 0.3
            }
          }} className="p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-sm cursor-pointer">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">Vision</span>
              </div>
              <p className="text-foreground/90 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
                Créer des solutions visuelles qui marquent les esprits, en offrant une approche sur-mesure, pensée et centrée sur une idée forte :{" "}
                <span className="text-primary font-semibold">nos clients sont nos partenaires</span>.
              </p>
            </motion.div>


            {/* Values Grid - Different animations for each */}
            {values.map((value, index) => <motion.div key={index} variants={itemVariants} whileHover={index === 0 ? {
            scale: 1.05,
            transition: {
              duration: 0.3
            }
          } : index === 1 ? {
            y: -10,
            x: 5,
            transition: {
              duration: 0.3
            }
          } : index === 2 ? {
            rotate: -2,
            scale: 1.02,
            transition: {
              duration: 0.3
            }
          } : {
            y: -6,
            boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.25)",
            transition: {
              duration: 0.3
            }
          }} className={`p-4 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl border border-border/30 backdrop-blur-sm cursor-pointer transition-colors duration-300 hover:border-primary/40 group ${index === 0 ? "bg-gradient-to-br from-[#2a2550]/80 to-[#1a1535]/60" : index === 1 ? "bg-gradient-to-br from-[#252040]/80 to-[#15122a]/60" : index === 2 ? "bg-gradient-to-br from-[#1f1a3d]/80 to-[#12101f]/60" : "bg-gradient-to-br from-[#2d2855]/80 to-[#1c1838]/60"}`}>
                <motion.div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4" whileHover={{
              rotate: 360,
              transition: {
                duration: 0.5
              }
            }}>
                  <value.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </motion.div>
                <h3 className="text-lg md:text-display-sm mb-1 md:mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">{value.description}</p>
              </motion.div>)}

            {/* Mission Block - Wide - Slide up & Border glow */}
            <motion.div variants={itemVariants} whileHover={{
            y: -6,
            borderColor: "hsl(var(--primary) / 0.5)",
            transition: {
              duration: 0.3
            }
          }} className="md:col-span-2 p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#1e1a35]/90 to-[#0f0d1a]/70 border border-border/30 backdrop-blur-sm cursor-pointer">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">Notre mission</span>
              </div>
              <p className="text-sm sm:text-base md:text-body-lg text-foreground/90 leading-relaxed">
                Nous accompagnons les marques locales et internationales dans la création d'identités fortes, de contenus impactants et de sites web performants.{" "}
                <span className="text-primary font-semibold">Chaque projet est une collaboration unique</span>, et notre mission est de le sublimer.
              </p>
            </motion.div>

            {/* Workflow Block - Full Width - Subtle lift */}
            <motion.div variants={itemVariants} whileHover={{
            y: -4,
            boxShadow: "0 30px 60px -20px hsl(var(--primary) / 0.15)",
            transition: {
              duration: 0.4
            }
          }} className="md:col-span-2 lg:col-span-3 p-5 sm:p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-r from-secondary/60 via-secondary/40 to-primary/10 border border-border/30 backdrop-blur-sm cursor-pointer">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-xl sm:text-2xl md:text-display-md mb-4 md:mb-6 leading-tight">
                  Notre façon de <span className="text-gradient-gold">travailler</span>
                </h2>
                <p className="text-sm sm:text-base md:text-body-lg leading-relaxed mb-6 md:mb-8 text-accent">
                  De l'identité visuelle à la création de votre site internet, nous offrons des solutions complètes et modulables.
                </p>
                <Button variant="gold" size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/contact">
                    Parlons de votre projet
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Locations Section */}
      <ClientLocationsSection />

      {/* Skills & Certifications Section */}
      <SkillsSection />
    </Layout>;
};
export default About;
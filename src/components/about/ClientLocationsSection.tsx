import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function ClientLocationsSection() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const countries = [
    { name: isFr ? "Suisse" : "Switzerland", flag: "🇨🇭" },
    { name: isFr ? "France" : "France", flag: "🇫🇷" },
    { name: isFr ? "Maroc" : "Morocco", flag: "🇲🇦" },
    { name: isFr ? "Émirats Arabes Unis" : "United Arab Emirates", flag: "🇦🇪" },
    { name: isFr ? "États-Unis" : "United States", flag: "🇺🇸" },
    { name: "Qatar", flag: "🇶🇦" },
  ];

  return (
    <section className="py-12 md:py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      </div>
      <div className="container max-w-5xl relative z-10">
        <motion.div className="text-center mb-10 md:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <motion.div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 mb-4 md:mb-6" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Globe className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-[10px] md:text-sm font-medium text-primary">{isFr ? "Rayonnement international" : "International reach"}</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-display-md mb-3 md:mb-4 leading-tight">
            {isFr ? <>Nos clients à travers le{" "}<span className="text-gradient-gold">monde.</span></> : <>Our clients around the{" "}<span className="text-gradient-gold">world.</span></>}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            {isFr ? "Nous accompagnons des entrepreneurs et entreprises dans plusieurs pays" : "We work with entrepreneurs and businesses across multiple countries"}
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          {countries.map((country, index) => (
            <motion.div key={country.name} variants={itemVariants} whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3 } }} className="group relative">
              <div className="flex flex-col items-center gap-3 p-4 md:p-6 rounded-2xl bg-card/50 backdrop-blur-sm transition-all duration-300">
                <motion.span className="text-4xl md:text-5xl lg:text-6xl" animate={{ y: [0, -5, 0] }} transition={{ duration: 2 + index * 0.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}>
                  {country.flag}
                </motion.span>
                <span className="text-xs md:text-sm font-medium text-foreground/80 text-center group-hover:text-primary transition-colors duration-300">{country.name}</span>
                <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} />
      </div>
    </section>
  );
}

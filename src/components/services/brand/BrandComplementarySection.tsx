import { Layout, FileText, Monitor, Plus } from "lucide-react";
import { motion } from "framer-motion";
const services = [{
  id: "social",
  icon: Layout,
  title: "Templates réseaux sociaux",
  description: "Posts, stories et bannières aux couleurs de votre marque, prêts à être personnalisés pour vos publications.",
  gradient: "from-[#C3B68F]/20 to-[#DCCB99]/10"
}, {
  id: "presentation",
  icon: FileText,
  title: "Supports de présentation",
  description: "Slides et PDF professionnels pour vos présentations commerciales, propositions et documents clients.",
  gradient: "from-[#7C6AE8]/20 to-[#9D8DF0]/10"
}, {
  id: "web",
  icon: Monitor,
  title: "Adaptation au site web",
  description: "Accompagnement pour intégrer votre nouvelle identité à votre site web existant ou en création.",
  gradient: "from-[#C3B68F]/20 to-[#7C6AE8]/10"
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
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
      ease: "easeOut" as const
    }
  }
};
export const BrandComplementarySection = () => {
  return;
};
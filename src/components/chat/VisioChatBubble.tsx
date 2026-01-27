import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { VisioChatWindow } from "./VisioChatWindow";

export function VisioChatBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <VisioChatWindow onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>

      {/* Floating Bubble */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg flex items-center justify-center glow-gold"
        style={{
          background: "linear-gradient(135deg, hsl(43 35% 67%), hsl(40 28% 55%))",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        aria-label={isOpen ? "Fermer le chat" : "Parler avec Visio"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 md:w-7 md:h-7 text-background" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-background" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse animation when closed */}
        {!isOpen && (
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(135deg, hsl(43 35% 67% / 0.4), hsl(40 28% 55% / 0.4))",
            }}
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{
              scale: [1, 1.3, 1.3],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}
      </motion.button>
    </>
  );
}

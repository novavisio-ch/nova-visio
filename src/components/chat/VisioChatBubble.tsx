import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { VisioChatWindow } from "./VisioChatWindow";
import visioRobot from "@/assets/visio-robot.png";

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

      {/* Floating Bubble + Label */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2">
        {/* Label */}
        <AnimatePresence>
          {!isOpen && (
            <motion.span
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-md whitespace-nowrap pointer-events-none"
              style={{
                background: "linear-gradient(135deg, hsl(43 35% 72%), hsl(40 28% 60%))",
                color: "hsl(249 30% 15%)",
              }}
            >
              Une question ?
            </motion.span>
          )}
        </AnimatePresence>

        {/* Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg flex items-center justify-center overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, hsl(43 35% 72%), hsl(40 28% 60%))",
            boxShadow: "0 4px 20px rgba(195, 182, 143, 0.4), 0 0 40px rgba(195, 182, 143, 0.2)",
          }}
          whileHover={{ scale: 1.08 }}
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
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
            </motion.div>
          ) : (
            <motion.div
              key="robot"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: [0, -3, 0]
              }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ 
                scale: { duration: 0.2 },
                opacity: { duration: 0.2 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-9 h-9 sm:w-11 sm:h-11"
            >
              <img 
                src={visioRobot} 
                alt="Visio" 
                className="w-full h-full object-contain drop-shadow-md"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse animation when closed */}
        {!isOpen && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, hsl(43 35% 67% / 0.3), hsl(40 28% 55% / 0.3))",
              }}
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{
                scale: [1, 1.4, 1.4],
                opacity: [0.5, 0, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, hsl(43 35% 67% / 0.2), hsl(40 28% 55% / 0.2))",
              }}
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{
                scale: [1, 1.6, 1.6],
                opacity: [0.3, 0, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.3,
              }}
            />
          </>
        )}
        </motion.button>
      </div>
    </>
  );
}

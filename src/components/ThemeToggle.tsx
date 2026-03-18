import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-14 h-7 rounded-full p-0.5 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #1f1a3d 0%, #2D284D 100%)"
          : "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)",
        border: isDark
          ? "1px solid rgba(195, 182, 143, 0.3)"
          : "1px solid rgba(195, 182, 143, 0.6)",
        boxShadow: isDark
          ? "0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "0 2px 8px rgba(195, 182, 143, 0.3), inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
      aria-label={isDark ? "Passer en mode jour" : "Passer en mode nuit"}
    >
      {/* Icons in background */}
      <Sun
        className="absolute left-1.5 w-3.5 h-3.5 transition-opacity duration-300"
        style={{
          color: isDark ? "rgba(195, 182, 143, 0.3)" : "#8B7A4A",
          opacity: isDark ? 0.4 : 1,
        }}
      />
      <Moon
        className="absolute right-1.5 w-3.5 h-3.5 transition-opacity duration-300"
        style={{
          color: isDark ? "#C3B68F" : "rgba(139, 122, 74, 0.3)",
          opacity: isDark ? 1 : 0.4,
        }}
      />

      {/* Sliding circle */}
      <motion.div
        className="w-6 h-6 rounded-full shadow-md"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #0a0a12 0%, #1f1a3d 100%)"
            : "#FFFDF7",
          boxShadow: isDark
            ? "0 1px 4px rgba(0,0,0,0.4)"
            : "0 1px 4px rgba(195, 182, 143, 0.4)",
        }}
        animate={{
          x: isDark ? 0 : 26,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </button>
  );
}

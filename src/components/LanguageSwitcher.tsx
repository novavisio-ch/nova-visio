import { useLanguage, Language } from "@/hooks/use-language";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  const options: { value: Language; label: string }[] = [
    { value: "fr", label: "FR" },
    { value: "en", label: "EN" },
  ];

  return (
    <div className={cn("flex items-center gap-0.5 rounded-full p-0.5", className)} style={{
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.12)",
    }}>
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setLanguage(opt.value)}
          className={cn(
            "px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-300 tracking-wide",
            language === opt.value
              ? "text-background shadow-sm"
              : "text-foreground/60 hover:text-foreground/90"
          )}
          style={language === opt.value ? {
            background: "linear-gradient(135deg, hsl(43 35% 67%), hsl(40 28% 55%))",
          } : undefined}
          aria-label={`Switch to ${opt.label}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

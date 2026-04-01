import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";

type ConsentStatus = "pending" | "accepted" | "refused";

export function CookieConsent() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => { localStorage.setItem("cookie-consent", "accepted"); setIsVisible(false); };
  const handleRefuse = () => { localStorage.setItem("cookie-consent", "refused"); setIsVisible(false); };
  const handleClose = () => { localStorage.setItem("cookie-consent", "refused"); setIsVisible(false); };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-up">
      <div className="relative w-full max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-4 md:p-6">
        <button onClick={handleClose} className="absolute top-3 right-3 p-1.5 border border-gray-400 rounded hover:bg-gray-100 transition-colors" aria-label={t("cookie.close")}>
          <X className="w-4 h-4 text-gray-600" />
        </button>
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex-1 pr-8 lg:pr-0">
            <h2 className="text-base md:text-lg font-bold text-gray-900 mb-2">{t("cookie.title")}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{t("cookie.text")}</p>
          </div>
          {showPreferences ? (
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-3 text-sm">
                <label className="flex items-center gap-2"><input type="checkbox" checked disabled className="w-3.5 h-3.5 accent-primary" /><span className="text-gray-700">{t("cookie.essential")}</span></label>
                <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="w-3.5 h-3.5 accent-primary" /><span className="text-gray-700">{t("cookie.analytics")}</span></label>
                <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="w-3.5 h-3.5 accent-primary" /><span className="text-gray-700">{t("cookie.marketing")}</span></label>
              </div>
              <div className="flex gap-2">
                <Button variant="gold" size="sm" onClick={handleAccept}>{t("cookie.save")}</Button>
                <Button variant="outline" size="sm" onClick={() => setShowPreferences(false)} className="border-gray-400 text-gray-700 hover:bg-gray-100">{t("cookie.back")}</Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex flex-wrap gap-2">
                <Button variant="gold" size="sm" onClick={handleAccept}>{t("cookie.accept")}</Button>
                <Button variant="outline" size="sm" onClick={handleRefuse} className="border-gray-400 text-gray-700 hover:bg-gray-100">{t("cookie.refuse")}</Button>
                <Button variant="outline" size="sm" onClick={() => setShowPreferences(true)} className="border-gray-400 text-gray-700 hover:bg-gray-100">{t("cookie.preferences")}</Button>
              </div>
              <div className="flex gap-3 text-xs text-gray-500">
                <Link to="/politique-cookies" className="underline hover:text-gray-700 transition-colors">Cookies</Link>
                <Link to="/confidentialite" className="underline hover:text-gray-700 transition-colors">{t("cookie.preferences")}</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

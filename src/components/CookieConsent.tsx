import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

type ConsentStatus = "pending" | "accepted" | "refused";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay to avoid showing immediately on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem("cookie-consent", "refused");
    setIsVisible(false);
  };

  const handleClose = () => {
    // Closing without choice = refuse by default (GDPR compliant)
    localStorage.setItem("cookie-consent", "refused");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl p-6 md:p-8 animate-fade-up">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 border-2 border-gray-800 rounded hover:bg-gray-100 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5 text-gray-800" />
        </button>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 pr-12">
          Gérer le consentement
        </h2>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6">
          Pour offrir les meilleures expériences, nous utilisons des technologies telles que les 
          cookies pour stocker et/ou accéder aux informations des appareils. Le fait de consentir 
          à ces technologies nous permettra de traiter des données telles que le comportement de 
          navigation ou les ID uniques sur ce site. Le fait de ne pas consentir ou de retirer son 
          consentement peut avoir un effet négatif sur certaines caractéristiques et fonctions.
        </p>

        {showPreferences ? (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Préférences de cookies</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" checked disabled className="w-4 h-4 accent-primary" />
                <span className="text-gray-700">Cookies essentiels (requis)</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                <span className="text-gray-700">Cookies analytiques</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                <span className="text-gray-700">Cookies marketing</span>
              </label>
            </div>
            <div className="mt-4 flex gap-3">
              <Button variant="gold" onClick={handleAccept}>
                Enregistrer les préférences
              </Button>
              <Button variant="outline" onClick={() => setShowPreferences(false)} className="border-gray-800 text-gray-800 hover:bg-gray-100">
                Retour
              </Button>
            </div>
          </div>
        ) : (
          <>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button 
                variant="gold" 
                size="lg" 
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-8"
              >
                Accepter
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleRefuse}
                className="flex-1 sm:flex-none px-8 border-gray-800 text-gray-800 hover:bg-gray-100"
              >
                Refuser
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setShowPreferences(true)}
                className="flex-1 sm:flex-none px-8 border-gray-800 text-gray-800 hover:bg-gray-100"
              >
                Voir les préférences
              </Button>
            </div>
          </>
        )}

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link 
            to="/politique-cookies" 
            className="text-gray-700 underline hover:text-gray-900 transition-colors"
          >
            Politique de cookies
          </Link>
          <Link 
            to="/confidentialite" 
            className="text-gray-700 underline hover:text-gray-900 transition-colors"
          >
            Déclaration de confidentialité
          </Link>
        </div>
      </div>
    </div>
  );
}

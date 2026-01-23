import { Link } from "react-router-dom";
import novavisioLogo from "@/assets/novavisio-logo.svg";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="border-t border-border/30 py-12 mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="transition-all">
            <img 
              src={novavisioLogo} 
              alt="NOVA VISIO" 
              className="h-8 w-auto transition-all duration-300"
              style={{ filter: 'brightness(0) invert(1)' }}
              onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(76%) sepia(14%) saturate(746%) hue-rotate(9deg) brightness(91%) contrast(88%)'}
              onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(0) invert(1)'}
            />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-muted-foreground">
            <Link to="/site-web" className="hover:text-primary transition-colors">
              Site web
            </Link>
            <Link to="/identite-visuelle" className="hover:text-primary transition-colors">
              Logo & identité
            </Link>
            <Link to="/a-propos" className="hover:text-primary transition-colors">
              À Propos
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
          </div>

          <p className="text-body-sm text-muted-foreground">
            © {currentYear} NOVA VISIO. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>;
}
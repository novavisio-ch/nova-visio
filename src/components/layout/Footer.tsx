import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 py-12 mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            to="/"
            className="text-display-sm text-foreground hover:text-primary transition-colors"
          >
            NOVA<span className="text-gradient-gold">VISIO</span>
          </Link>

          <div className="flex items-center gap-8 text-body-sm text-muted-foreground">
            <Link to="/a-propos" className="hover:text-primary transition-colors">
              À Propos
            </Link>
            <Link to="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <p className="text-body-sm text-muted-foreground">
            © {currentYear} NOVA VISIO. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

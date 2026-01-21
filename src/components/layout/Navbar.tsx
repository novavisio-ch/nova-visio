import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import novavisioLogo from "@/assets/novavisio-logo.svg";
const navLinks = [{
  href: "/",
  label: "Accueil"
}, {
  href: "/services",
  label: "Services"
}, {
  href: "/notre-approche",
  label: "Notre Approche"
}, {
  href: "/a-propos",
  label: "À Propos"
}];
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "glass py-3" : "py-5 bg-transparent")}>
      <nav className="container flex items-center justify-between">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img src={novavisioLogo} alt="NOVA VISIO" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <Link key={link.href} to={link.href} className={cn("text-body-sm font-medium transition-colors hover:text-primary", location.pathname === link.href ? "text-primary" : "text-foreground/70")}>
              {link.label}
            </Link>)}
          <Button variant="gold" size="default" asChild>
            <Link to="/contact">Parlons de votre projet</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && <div className="md:hidden glass-card mx-4 mt-2 p-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map(link => <Link key={link.href} to={link.href} className={cn("text-body-md font-medium transition-colors py-2", location.pathname === link.href ? "text-primary" : "text-foreground/70")}>
                {link.label}
              </Link>)}
            <Button variant="gold" size="lg" className="mt-4" asChild>
              <Link to="/contact">Parlons de votre projet</Link>
            </Button>
          </div>
        </div>}
    </header>;
}
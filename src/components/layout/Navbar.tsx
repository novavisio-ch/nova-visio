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
      <nav className="w-full px-6 lg:px-12 flex items-center justify-between">
        {/* Logo - Left */}
        <Link to="/" className="text-white hover:text-[#c1b58e] transition-colors flex-shrink-0">
          <img src={novavisioLogo} alt="NOVA VISIO" className="h-10 w-auto [&]:text-inherit" style={{
          filter: 'brightness(0) invert(1)'
        }} onMouseEnter={e => e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(76%) sepia(14%) saturate(746%) hue-rotate(9deg) brightness(91%) contrast(88%)'} onMouseLeave={e => e.currentTarget.style.filter = 'brightness(0) invert(1)'} />
        </Link>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(link => <Link key={link.href} to={link.href} className={cn("font-medium transition-colors hover:text-primary text-display-sm", location.pathname === link.href ? "text-primary" : "text-foreground/70")}>
              {link.label}
            </Link>)}
        </div>

        {/* CTA Button - Right */}
        <div className="hidden md:block flex-shrink-0">
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
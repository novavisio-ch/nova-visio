import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import novavisioLogo from "@/assets/novavisio-logo.svg";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/hooks/use-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainNavLinks = [
  { href: "/", label: "Accueil" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const servicesLinks = [
  { href: "/site-web", label: "Site web" },
  { href: "/identite-visuelle", label: "Logo & identité visuelle" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const logoFilter = "brightness(0) invert(1)";
  const logoHoverFilter = "brightness(0) saturate(100%) invert(76%) sepia(14%) saturate(746%) hue-rotate(9deg) brightness(91%) contrast(88%)";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const isServicesActive = location.pathname === "/site-web" || location.pathname === "/identite-visuelle";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? isLight
            ? "py-2 md:py-3 bg-white/70 backdrop-blur-2xl border-b border-border/30 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            : "py-2 md:py-3 bg-card/60 backdrop-blur-2xl border-b border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]" 
          : "py-3 md:py-5 bg-transparent"
      )}
    >
      <nav className="w-full px-4 md:px-6 lg:px-12 flex items-center justify-between">
        {/* Logo - Left */}
        <Link to="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
          <img
            src={novavisioLogo}
            alt="NOVA VISIO"
            className="h-7 md:h-10 w-auto transition-all duration-300"
            style={{ filter: logoFilter }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = logoHoverFilter)}
            onMouseLeave={(e) => (e.currentTarget.style.filter = logoFilter)}
          />
        </Link>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2">
          {/* Accueil */}
          <Link
            to="/"
            className={cn(
              "font-medium transition-colors hover:text-primary text-sm xl:text-base whitespace-nowrap",
              location.pathname === "/" ? "text-primary" : "text-foreground/70"
            )}
          >
            Accueil
          </Link>

          {/* Services Dropdown - Hover */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button
              className={cn(
                "font-medium transition-colors hover:text-primary text-sm xl:text-base inline-flex items-center gap-1 outline-none whitespace-nowrap",
                isServicesActive ? "text-primary" : "text-foreground/70"
              )}
            >
              Services
              <ChevronDown className={cn("h-4 w-4 transition-transform", isServicesDropdownOpen && "rotate-180")} />
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-card border border-border/50 rounded-md min-w-[200px] py-1 shadow-lg animate-fade-in">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={cn(
                        "block px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-primary",
                        location.pathname === link.href ? "text-primary" : "text-foreground/70"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tarifs */}
          <Link
            to="/tarifs"
            className={cn(
              "font-medium transition-colors hover:text-primary text-sm xl:text-base whitespace-nowrap",
              location.pathname === "/tarifs" ? "text-primary" : "text-foreground/70"
            )}
          >
            Tarifs
          </Link>

          {/* Blog */}
          <Link
            to="/blog"
            className={cn(
              "font-medium transition-colors hover:text-primary text-sm xl:text-base whitespace-nowrap",
              location.pathname === "/blog" ? "text-primary" : "text-foreground/70"
            )}
          >
            Blog
          </Link>

          {/* À propos */}
          <Link
            to="/a-propos"
            className={cn(
              "font-medium transition-colors hover:text-primary text-sm xl:text-base whitespace-nowrap",
              location.pathname === "/a-propos" ? "text-primary" : "text-foreground/70"
            )}
          >
            À propos
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className={cn(
              "font-medium transition-colors hover:text-primary text-sm xl:text-base whitespace-nowrap",
              location.pathname === "/contact" ? "text-primary" : "text-foreground/70"
            )}
          >
            Contact
          </Link>
        </div>

        {/* CTA Button - Right */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <Button variant="gold" size="default" asChild>
            <Link to="/contact">Parlons de votre projet</Link>
          </Button>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-card mx-3 mt-2 p-4 sm:p-6 animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col gap-2 sm:gap-4">
            {/* Accueil */}
            <Link
              to="/"
              className={cn(
                "text-sm sm:text-body-md font-medium transition-colors py-2",
                location.pathname === "/" ? "text-primary" : "text-foreground/70"
              )}
            >
              Accueil
            </Link>

            {/* Services - Expandable */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={cn(
                  "text-sm sm:text-body-md font-medium transition-colors py-2 flex items-center justify-between",
                  isServicesActive ? "text-primary" : "text-foreground/70"
                )}
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    isMobileServicesOpen ? "rotate-180" : ""
                  )}
                />
              </button>
              {isMobileServicesOpen && (
                <div className="flex flex-col pl-4 mt-2 gap-1.5 sm:gap-2 border-l border-border/30">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={cn(
                        "text-xs sm:text-body-sm font-medium transition-colors py-1.5 sm:py-2",
                        location.pathname === link.href ? "text-primary" : "text-foreground/70"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Tarifs */}
            <Link
              to="/tarifs"
              className={cn(
                "text-sm sm:text-body-md font-medium transition-colors py-2",
                location.pathname === "/tarifs" ? "text-primary" : "text-foreground/70"
              )}
            >
              Tarifs
            </Link>

            {/* Blog */}
            <Link
              to="/blog"
              className={cn(
                "text-sm sm:text-body-md font-medium transition-colors py-2",
                location.pathname === "/blog" ? "text-primary" : "text-foreground/70"
              )}
            >
              Blog
            </Link>

            {/* À propos */}
            <Link
              to="/a-propos"
              className={cn(
                "text-sm sm:text-body-md font-medium transition-colors py-2",
                location.pathname === "/a-propos" ? "text-primary" : "text-foreground/70"
              )}
            >
              À propos
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={cn(
                "text-sm sm:text-body-md font-medium transition-colors py-2",
                location.pathname === "/contact" ? "text-primary" : "text-foreground/70"
              )}
            >
              Contact
            </Link>

            <div className="flex items-center justify-center mt-3 sm:mt-4 gap-3">
              <Button variant="gold" size="default" className="flex-1" asChild>
                <Link to="/contact">Parlons de votre projet</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import novavisioLogo from "@/assets/novavisio-logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainNavLinks = [
  { href: "/", label: "Accueil" },
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
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const isServicesActive = location.pathname === "/site-web" || location.pathname === "/identite-visuelle";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3" : "py-5 bg-transparent"
      )}
    >
      <nav className="w-full px-6 lg:px-12 flex items-center justify-between">
        {/* Logo - Left */}
        <Link to="/" className="text-white hover:text-[#c1b58e] transition-colors flex-shrink-0">
          <img
            src={novavisioLogo}
            alt="NOVA VISIO"
            className="h-10 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter =
                "brightness(0) saturate(100%) invert(76%) sepia(14%) saturate(746%) hue-rotate(9deg) brightness(91%) contrast(88%)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(0) invert(1)")}
          />
        </Link>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {/* Accueil */}
          <Link
            to="/"
            className={cn(
              "font-medium transition-colors hover:text-primary text-display-sm",
              location.pathname === "/" ? "text-primary" : "text-foreground/70"
            )}
          >
            Accueil
          </Link>

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "font-medium transition-colors hover:text-primary text-display-sm inline-flex items-center gap-1 outline-none",
                  isServicesActive ? "text-primary" : "text-foreground/70"
                )}
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="bg-card border-border/50 min-w-[200px]"
            >
              {servicesLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link
                    to={link.href}
                    className={cn(
                      "w-full cursor-pointer",
                      location.pathname === link.href ? "text-primary" : ""
                    )}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Blog */}
          <Link
            to="/blog"
            className={cn(
              "font-medium transition-colors hover:text-primary text-display-sm",
              location.pathname === "/blog" ? "text-primary" : "text-foreground/70"
            )}
          >
            Blog
          </Link>

          {/* Contact - removed from center, only in CTA */}
        </div>

        {/* CTA Button - Right */}
        <div className="hidden md:block flex-shrink-0">
          <Button variant="gold" size="default" asChild>
            <Link to="/contact">Parlons de votre projet</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mx-4 mt-2 p-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {/* Accueil */}
            <Link
              to="/"
              className={cn(
                "text-body-md font-medium transition-colors py-2",
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
                  "text-body-md font-medium transition-colors py-2 flex items-center justify-between",
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
                <div className="flex flex-col pl-4 mt-2 gap-2 border-l border-border/30">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={cn(
                        "text-body-sm font-medium transition-colors py-2",
                        location.pathname === link.href ? "text-primary" : "text-foreground/70"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Blog */}
            <Link
              to="/blog"
              className={cn(
                "text-body-md font-medium transition-colors py-2",
                location.pathname === "/blog" ? "text-primary" : "text-foreground/70"
              )}
            >
              Blog
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={cn(
                "text-body-md font-medium transition-colors py-2",
                location.pathname === "/contact" ? "text-primary" : "text-foreground/70"
              )}
            >
              Contact
            </Link>

            <Button variant="gold" size="lg" className="mt-4" asChild>
              <Link to="/contact">Parlons de votre projet</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

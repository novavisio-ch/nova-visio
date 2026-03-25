import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import identityMockup from "@/assets/services/brand-identity-mockup.png";
import { LogosSection } from "@/components/home/LogosSection";

export const BrandIdentityContent = () => {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column - Left */}
          <div className="order-1 lg:order-1">
            <div className="relative">
              <img
                src={identityMockup}
                alt="Moodboard et éléments d'identité visuelle"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Subtle decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl -z-10 blur-2xl" />
            </div>
          </div>

          {/* Text Column - Right */}
          <div className="order-2 lg:order-2 space-y-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight text-foreground">
              Un logo sur Canva, ce n'est pas une identité de marque.
            </h2>

            <div className="space-y-5 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                Votre identité visuelle, c'est ce qui fait que vos clients vous reconnaissent 
                en un coup d'œil - sur votre site, vos réseaux, vos cartes de visite. 
                Un logo seul ne suffit pas. Il faut un système cohérent qui inspire confiance 
                avant même que vous ayez dit un mot.
              </p>

              <p>
                On crée des identités conçues pour durer et s'adapter facilement à tous vos supports. 
                Pas de gadgets, pas de tendances éphémères - une image claire et professionnelle 
                que vous pouvez déployer sans nous rappeler à chaque fois.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-3 transition-all duration-300 group mt-4"
            >
              Discuter de votre projet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Logo Marquee */}
      <LogosSection />
    </section>
  );
};

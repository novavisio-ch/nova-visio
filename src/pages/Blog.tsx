import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import blogSiteVitrineLanding from "@/assets/blog/site-vitrine-vs-landing-page.jpg";
import blogLogoIdentite from "@/assets/blog/logo-identite-visuelle.jpg";
import blogBudgetSiteWeb from "@/assets/blog/budget-site-web-professionnel.jpg";
import { useLanguage } from "@/hooks/use-language";

const Blog = () => {
  const { t, language } = useLanguage();

  const blogPosts = [
    {
      id: 6,
      slug: "budget-site-web-professionnel",
      title: language === "fr"
        ? "Combien investir dans un site web professionnel quand on est artisan ou indépendant ?"
        : "How much should you invest in a professional website as a tradesperson or freelancer?",
      excerpt: language === "fr"
        ? "Les fourchettes de prix du marché, ce que vous payez vraiment, et comment savoir si votre investissement est rentable."
        : "Market price ranges, what you're really paying for, and how to know if your investment is worth it.",
      date: language === "fr" ? "3 Avr 2026" : "3 Apr 2026",
      image: blogBudgetSiteWeb,
    },
    {
      id: 5,
      slug: "logo-identite-visuelle",
      title: language === "fr"
        ? "Pourquoi votre logo n'est pas \"juste un dessin\" : l'impact d'une bonne identité visuelle"
        : "Why your logo isn't \"just a drawing\": the impact of strong brand identity",
      excerpt: language === "fr"
        ? "Un logo bien pensé influence directement la confiance, la perception de votre prix et la mémorisation de votre marque."
        : "A well-designed logo directly influences trust, price perception, and how well people remember your brand.",
      date: language === "fr" ? "9 Mar 2026" : "9 Mar 2026",
      image: blogLogoIdentite,
    },
    {
      id: 4,
      slug: "site-vitrine-vs-landing-page",
      title: language === "fr"
        ? "Site vitrine vs landing page : quel format choisir pour votre activité ?"
        : "Showcase website vs landing page: which format suits your business?",
      excerpt: language === "fr"
        ? "Nous comparons clairement les deux formats et vous aidons à faire le choix le plus adapté à votre activité."
        : "We clearly compare both formats and help you choose the one that best fits your business.",
      date: language === "fr" ? "2 Fév 2026" : "2 Feb 2026",
      image: blogSiteVitrineLanding,
    },
    {
      id: 3,
      slug: "choisir-couleurs-marque",
      title: language === "fr"
        ? "Comment choisir les couleurs de votre marque"
        : "How to choose your brand colours",
      excerpt: language === "fr"
        ? "Des couleurs bien choisies rendent votre marque plus mémorable, plus lisible… et plus désirable."
        : "Well-chosen colours make your brand more memorable, more readable… and more desirable.",
      date: language === "fr" ? "5 Jan 2026" : "5 Jan 2026",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 1,
      slug: "5-erreurs-site-web",
      title: language === "fr"
        ? "5 erreurs courantes qui plombent votre site web (et comment les éviter)"
        : "5 common mistakes that are hurting your website (and how to fix them)",
      excerpt: language === "fr"
        ? "Ces erreurs peuvent nuire à votre crédibilité et faire fuir vos visiteurs. Apprenez à les identifier et les corriger."
        : "These mistakes can harm your credibility and drive visitors away. Learn how to spot and fix them.",
      date: language === "fr" ? "1 Déc 2025" : "1 Dec 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
    },
    {
      id: 2,
      slug: "clarifier-offre-avant-site-web",
      title: language === "fr"
        ? "Clarifier votre offre avant de créer votre site web"
        : "Clarify your offering before building your website",
      excerpt: language === "fr"
        ? "Un site efficace commence bien avant le design : il commence avec une offre claire. Découvrez les 5 étapes essentielles."
        : "An effective website starts well before design: it starts with a clear offering. Discover the 5 essential steps.",
      date: language === "fr" ? "3 Nov 2025" : "3 Nov 2025",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80",
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("blog.page.title.1")} <span className="text-gradient-gold">{t("blog.page.title.highlight")}</span>
            </h1>
            <p className="text-body text-base sm:text-lg md:text-xl leading-relaxed">{t("blog.page.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group glass-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_#C3B68F]">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/90 text-background rounded-full">{t("blog.tag")}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-300">{post.title}</h2>
                    <p className="text-body text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                      {t("blog.readArticle")}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blogSiteVitrineLanding from "@/assets/blog/site-vitrine-vs-landing-page.jpg";
import blogLogoIdentite from "@/assets/blog/logo-identite-visuelle.jpg";
import { useLanguage } from "@/hooks/use-language";

export function BlogSection() {
  const { t, language } = useLanguage();

  const blogPosts = [
    {
      id: 5,
      slug: "/blog/logo-identite-visuelle",
      title: language === "fr"
        ? "Pourquoi votre logo n'est pas \"juste un dessin\" : l'impact d'une bonne identité visuelle"
        : "Why your logo isn't \"just a drawing\": the impact of strong brand identity",
      image: blogLogoIdentite,
    },
    {
      id: 4,
      slug: "/blog/site-vitrine-vs-landing-page",
      title: language === "fr"
        ? "Site vitrine vs landing page : quel format choisir pour votre activité ?"
        : "Showcase website vs landing page: which format suits your business?",
      image: blogSiteVitrineLanding,
    },
    {
      id: 3,
      slug: "/blog/choisir-couleurs-marque",
      title: language === "fr"
        ? "Comment choisir les couleurs de votre marque"
        : "How to choose your brand colours",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop&q=80",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t("blog.title.1")} <span className="text-gradient-gold">{t("blog.title.highlight")}</span>
          </h2>
          <p className="text-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-center">
            {language === "fr" ? (
              <>Des articles <strong className="text-foreground font-medium">concrets</strong> sur votre site,{" "}
              <br className="md:hidden" />
              votre image et votre <strong className="text-foreground font-medium">présence en ligne</strong>.</>
            ) : (
              <><strong className="text-foreground font-medium">Practical</strong> articles about your website,{" "}
              <br className="md:hidden" />
              your image and your <strong className="text-foreground font-medium">online presence</strong>.</>
            )}
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={post.slug}
              className="group glass-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_#C3B68F] cursor-pointer block"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/90 text-background rounded-full">
                  {t("blog.tag")}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  {t("blog.readArticle")}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center md:text-right">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-body hover:text-primary font-medium transition-all duration-300 hover:gap-3"
          >
            {t("blog.viewAll")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

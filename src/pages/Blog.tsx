import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import blogSiteVitrineLanding from "@/assets/blog/site-vitrine-vs-landing-page.jpg";
import blogLogoIdentite from "@/assets/blog/logo-identite-visuelle.jpg";

const blogPosts = [
  {
    id: 5,
    slug: "logo-identite-visuelle",
    tag: "Article",
    title: "Pourquoi votre logo n'est pas \"juste un dessin\" : l'impact d'une bonne identité visuelle",
    excerpt: "Un logo bien pensé influence directement la confiance, la perception de votre prix et la mémorisation de votre marque.",
    date: "9 Mar 2026",
    image: blogLogoIdentite,
  },
  {
    id: 4,
    slug: "site-vitrine-vs-landing-page",
    tag: "Article",
    title: "Site vitrine vs landing page : quel format choisir pour votre activité ?",
    excerpt: "Nous comparons clairement les deux formats et vous aidons à faire le choix le plus adapté à votre activité.",
    date: "2 Fév 2026",
    image: blogSiteVitrineLanding,
  },
  {
    id: 3,
    slug: "choisir-couleurs-marque",
    tag: "Article",
    title: "Comment choisir les couleurs de votre marque",
    excerpt: "Des couleurs bien choisies rendent votre marque plus mémorable, plus lisible… et plus désirable.",
    date: "5 Jan 2026",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 1,
    slug: "5-erreurs-site-web",
    tag: "Article",
    title: "5 erreurs courantes qui plombent votre site web (et comment les éviter)",
    excerpt: "Ces erreurs peuvent nuire à votre crédibilité et faire fuir vos visiteurs. Apprenez à les identifier et les corriger.",
    date: "1 Déc 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 2,
    slug: "clarifier-offre-avant-site-web",
    tag: "Article",
    title: "Clarifier votre offre avant de créer votre site web",
    excerpt: "Un site efficace commence bien avant le design : il commence avec une offre claire. Découvrez les 5 étapes essentielles.",
    date: "3 Nov 2025",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              On partage ce qu'on <span className="text-gradient-gold">sait.</span>
            </h1>
            <p className="text-body text-base sm:text-lg md:text-xl leading-relaxed">
              Des articles concrets pour prendre de meilleures décisions
              sur votre site, votre image et votre présence en ligne.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group glass-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_#C3B68F]"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Tag */}
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/90 text-background rounded-full">
                      {post.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    
                    <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h2>
                    
                    <p className="text-body text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                      Lire l'article
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

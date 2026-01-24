import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "clarifier-offre-avant-site",
    tag: "Article",
    title: "Clarifier votre offre avant de créer votre site",
    excerpt: "Avant de penser design ou fonctionnalités, la première étape est de définir clairement ce que vous proposez et à qui.",
    date: "15 Jan 2025",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 2,
    slug: "structurer-page-accueil",
    tag: "Guide",
    title: "Structurer une page d'accueil claire et efficace",
    excerpt: "Découvrez les éléments essentiels d'une page d'accueil qui convertit et guide vos visiteurs vers l'action.",
    date: "10 Jan 2025",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 3,
    slug: "identite-visuelle-coherente",
    tag: "Article",
    title: "Construire une identité visuelle cohérente sur le long terme",
    excerpt: "Une identité visuelle forte est le fondement d'une marque mémorable. Voici comment la construire durablement.",
    date: "5 Jan 2025",
    image: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c3c?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 4,
    slug: "optimiser-seo-site-vitrine",
    tag: "Guide",
    title: "Optimiser le SEO de votre site vitrine",
    excerpt: "Les bases du référencement naturel pour rendre votre site visible sur Google et attirer des visiteurs qualifiés.",
    date: "28 Déc 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 5,
    slug: "erreurs-site-web-eviter",
    tag: "Article",
    title: "5 erreurs courantes à éviter sur votre site web",
    excerpt: "Ces erreurs peuvent nuire à votre crédibilité et faire fuir vos visiteurs. Apprenez à les identifier et les corriger.",
    date: "20 Déc 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 6,
    slug: "choisir-couleurs-marque",
    tag: "Guide",
    title: "Comment choisir les couleurs de votre marque",
    excerpt: "La psychologie des couleurs et leur impact sur la perception de votre entreprise par vos clients potentiels.",
    date: "15 Déc 2024",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop&q=80",
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
              Ressources et <span className="text-gradient-gold">articles</span>
            </h1>
            <p className="text-body text-base sm:text-lg md:text-xl leading-relaxed">
              Une sélection de contenus pour vous aider à clarifier votre présence en ligne,
              structurer vos offres et mieux utiliser le digital.
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

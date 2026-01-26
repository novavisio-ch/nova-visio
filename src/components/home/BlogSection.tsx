import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts: Array<{
  id: number;
  tag: string;
  title: string;
  linkText: string;
  image: string;
}> = [
  // Articles à ajouter ici
];

export function BlogSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Explorer nos <span className="text-gradient-gold">ressources et articles</span>
          </h2>
          <p className="text-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-center">
            Une sélection de contenus pour vous aider à clarifier votre présence en ligne,<br className="hidden md:block" />
            structurer vos offres et mieux utiliser le digital.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group glass-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_#C3B68F] cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/90 text-background rounded-full">
                  {post.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  {post.linkText}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center md:text-right">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-body hover:text-primary font-medium transition-all duration-300 hover:gap-3"
          >
            Voir tous les articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

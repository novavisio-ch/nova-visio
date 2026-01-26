import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import project images
import projectHobbyz from "@/assets/showcase/carousel-hobbyz.png";
import projectSimplia from "@/assets/showcase/carousel-simplia.png";
import projectSynergieGraphic from "@/assets/showcase/carousel-synergiegraphic.png";

const projects = [
  {
    image: projectHobbyz,
    label: "Plateforme e-learning",
  },
  {
    image: projectSimplia,
    label: "Landing page",
  },
  {
    image: projectSynergieGraphic,
    label: "Site vitrine",
  },
];

export const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(0.7);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how centered the section is in the viewport
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
      const maxDistance = windowHeight / 2 + rect.height / 2;

      // Calculate scale based on distance from center (0.7 to 1)
      const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
      const newScale = 0.7 + (1 - normalizedDistance) * 0.3;

      setScale(Math.max(0.7, Math.min(1, newScale)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-display-md text-gray-900 mb-4">
            Quelques projets réalisés par{" "}
            <span className="text-gradient-gold">NOVA VISIO</span>
          </h2>
          <p className="text-body-md text-gray-600 max-w-2xl mx-auto">
            Sites web, pages de vente et interfaces d'applications conçus sur mesure pour nos clients.
          </p>
        </div>

        {/* Carousel Frame with scroll animation */}
        <div
          className="mx-auto transition-transform duration-500 ease-out"
          style={{
            transform: `scale(${scale})`,
            maxWidth: "90%",
          }}
        >
          <div
            className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#C3B68F]/20"
            style={{
              boxShadow: "0 0 60px rgba(195, 182, 143, 0.15), 0 0 120px rgba(195, 182, 143, 0.05)",
            }}
          >
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
                align: "center",
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-0">
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="pl-0">
                    {/* Browser mockup frame */}
                    <div className="bg-gray-900 rounded-t-lg">
                      {/* Browser top bar */}
                      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700">
                        <div className="flex gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-red-500" />
                          <span className="w-3 h-3 rounded-full bg-yellow-500" />
                          <span className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="bg-gray-800 rounded-md px-3 py-1.5 text-gray-400 text-xs md:text-sm truncate max-w-md mx-auto">
                            www.novavisio.fr
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Screenshot content */}
                    <div className="relative aspect-video bg-gray-100">
                      <img
                        src={project.image}
                        alt={project.label}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                      {/* Project label badge */}
                      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                        <span 
                          className="inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 rounded-full text-gray-900 text-sm md:text-base font-semibold shadow-lg"
                          style={{
                            background: "linear-gradient(135deg, #DCCB99 0%, #C3B68F 100%)",
                          }}
                        >
                          {project.label}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation arrows */}
              <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-0 shadow-lg" />
              <CarouselNext className="right-4 bg-white/90 hover:bg-white border-0 shadow-lg" />
            </Carousel>

            {/* Dots indicator */}
            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-[#C3B68F] w-6 md:w-8"
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                  aria-label={`Aller au projet ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Combien de temps faut-il pour créer une identité visuelle complète ?",
    answer:
      "En général, comptez entre 3 et 6 semaines selon la complexité du projet. Ce délai inclut les phases de découverte, d'exploration créative, les itérations et la finalisation des livrables.",
  },
  {
    question: "Quels fichiers vais-je recevoir à la fin du projet ?",
    answer:
      "Vous recevrez votre logo dans tous les formats nécessaires (PNG, SVG, PDF), les fichiers sources éditables, votre palette de couleurs avec les codes, les typographies recommandées, et une charte graphique PDF qui résume toutes les règles d'usage.",
  },
  {
    question: "Est-ce que vous partez de zéro ou pouvez-vous moderniser un logo existant ?",
    answer:
      "Les deux sont possibles. Nous pouvons créer une identité entièrement nouvelle ou partir de votre logo existant pour le moderniser et le compléter avec une identité visuelle cohérente.",
  },
  {
    question: "Est-ce que l'identité inclut les visuels pour les réseaux sociaux ?",
    answer:
      "La prestation de base inclut les déclinaisons du logo pour les réseaux sociaux (photos de profil, bannières). Les templates de posts et stories sont proposés en option dans nos services complémentaires.",
  },
  {
    question: "Combien de propositions de logo vais-je voir ?",
    answer:
      "Nous présentons généralement 2 à 3 directions créatives distinctes lors de la phase d'exploration. Une fois une direction choisie, nous travaillons ensemble sur les ajustements jusqu'à la version finale.",
  },
  {
    question: "Puis-je utiliser mon identité visuelle sur tous mes supports ?",
    answer:
      "Absolument. L'identité est conçue pour fonctionner sur tous vos supports : site web, réseaux sociaux, cartes de visite, documents, signalétique, etc. La charte graphique vous guide pour chaque utilisation.",
  },
];

export const BrandFaqSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Central FAQ Container */}
        <div
          className="mx-auto max-w-4xl rounded-3xl border-2 bg-white px-6 py-12 md:px-12 md:py-16"
          style={{
            borderColor: "#C3B68F",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Title */}
          <div className="mb-12 text-center">
            <h2
              className="mb-4 font-bricolage text-2xl font-bold md:text-3xl lg:text-4xl"
              style={{ color: "#2D284D" }}
            >
              Des réponses à vos questions
              <br />
              sur l'identité visuelle
            </h2>
            <p
              className="mx-auto max-w-2xl text-base md:text-lg"
              style={{ color: "#2D284D", opacity: 0.7 }}
            >
              Questions fréquentes sur la création de logo et d'identité visuelle avec NOVA VISIO.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="last:border-b-0"
                style={{ borderColor: "rgba(195, 182, 143, 0.3)" }}
              >
                <AccordionTrigger
                  className="py-5 text-left font-bricolage text-base font-medium hover:no-underline md:text-lg [&[data-state=open]>svg]:rotate-45"
                  style={{ color: "#2D284D" }}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-5 text-sm leading-relaxed md:text-base"
                  style={{ color: "#2D284D", opacity: 0.8 }}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

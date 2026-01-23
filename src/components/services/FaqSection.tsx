import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Combien de temps faut‑il pour créer un site web ?",
    answer: "La durée dépend de la taille du site et du niveau de préparation de votre contenu. En moyenne, un site vitrine simple demande entre 4 et 8 semaines, de la clarification du projet jusqu'à la mise en ligne.",
  },
  {
    question: "Est‑ce que je dois déjà avoir mon logo et mon identité visuelle ?",
    answer: "Ce n'est pas obligatoire. Si vous avez déjà une identité, nous la reprenons et l'adaptons au web. Si ce n'est pas le cas, nous pouvons d'abord créer ou clarifier votre identité visuelle, puis construire le site à partir de ces bases.",
  },
  {
    question: "Est‑ce que je pourrai modifier mon site moi‑même ensuite ?",
    answer: "Oui. Les sites sont conçus pour que vous puissiez mettre à jour vos textes, images et certains blocs de contenu sans compétences techniques avancées. Une courte prise en main est prévue à la fin du projet.",
  },
  {
    question: "Est‑ce que vous vous occupez de l'hébergement et du nom de domaine ?",
    answer: "Nous pouvons vous conseiller sur le choix de l'hébergeur et du nom de domaine, et vous aider à les configurer. L'hébergement et le nom de domaine restent à votre nom, pour que vous gardiez le contrôle sur vos accès.",
  },
  {
    question: "Est‑ce que le site sera adapté au mobile ?",
    answer: "Oui, tous les sites sont pensés en responsive. Le design et la structure sont travaillés pour être lisibles et efficaces sur ordinateur, tablette et smartphone.",
  },
  {
    question: "Est‑ce que vous faites aussi le texte du site ?",
    answer: "Nous pouvons vous accompagner sur la structure des pages et vous guider pour rédiger des textes clairs et orientés résultats. Selon vos besoins, nous pouvons également proposer une prestation de rédaction plus complète.",
  },
  {
    question: "Proposez‑vous des paiements en plusieurs fois ?",
    answer: "Oui, selon le montant du projet, il est possible de répartir le paiement en plusieurs étapes (par exemple : acompte au lancement, paiement intermédiaire, solde à la mise en ligne).",
  },
  {
    question: "Que se passe‑t‑il si j'ai déjà un site, mais que je veux le refondre ?",
    answer: "Nous analysons d'abord votre site actuel (structure, contenus, performance, image), puis nous décidons ensemble s'il est plus pertinent de partir d'une base existante ou de repartir sur une nouvelle structure plus claire.",
  },
  {
    question: "Est‑ce que vous vous occupez aussi du SEO ?",
    answer: "Nous travaillons le référencement \"de base\" : structure des pages, titres, hiérarchie des contenus, bonnes pratiques techniques et rédactionnelles. Pour une stratégie SEO avancée, nous pouvons vous orienter ou compléter avec des actions spécifiques.",
  },
  {
    question: "Comment se passe le suivi après la mise en ligne ?",
    answer: "Après la mise en ligne, une phase d'ajustements est prévue. Nous pouvons ensuite mettre en place un accompagnement ponctuel ou régulier pour faire évoluer votre site, ajouter des pages ou améliorer certains parcours au fil du temps.",
  },
];

export const FaqSection = () => {
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
              sur la création de site web
            </h2>
            <p
              className="mx-auto max-w-2xl text-base md:text-lg"
              style={{ color: "#2D284D", opacity: 0.7 }}
            >
              Une sélection de questions que l'on nous pose souvent avant de
              lancer un projet avec NOVA VISIO.
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

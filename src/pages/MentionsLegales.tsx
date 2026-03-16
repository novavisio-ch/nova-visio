import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
export default function MentionsLegales() {
  return <Layout>
      <div className="min-h-screen bg-background py-16 md:py-24">
        <div className="container max-w-4xl px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
              Mentions légales
            </h1>

            <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 space-y-10">
              {/* Section 1 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                  1. Éditeur du site
                </h2>
                <p className="text-muted-foreground mb-4">
                  Le site https://www.novavisio.ch est exploité par :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><span className="font-medium text-foreground">Nom / raison sociale :</span> Nova Visio</li>
                  <li><span className="font-medium text-foreground">Forme juridique :</span> Entreprise individuelle</li>
                  
                  <li><span className="font-medium text-foreground">Adresse postale :</span>Adresse postale : 1226 Thônex - Suisse</li>
                  <li><span className="font-medium text-foreground">Numéro de TVA :</span> Non assujetti à la TVA.</li>
                </ul>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                  2. Direction de la publication
                </h2>
                <p className="text-muted-foreground">
                  Responsable de la publication : le propriétaire de Nova Visio.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                  3. Hébergeur du site
                </h2>
                <p className="text-muted-foreground mb-4">
                  Le site est hébergé par :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><span className="font-medium text-foreground">Hébergeur :</span> GoDaddy.com, LLC</li>
                  <li><span className="font-medium text-foreground">Adresse :</span> 2155 E. GoDaddy Way, Tempe, AZ 85284, USA</li>
                  <li><span className="font-medium text-foreground">Site web :</span>{" "}
                    <a href="https://www.godaddy.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      https://www.godaddy.com
                    </a>
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                  4. Propriété intellectuelle
                </h2>
                <p className="text-muted-foreground">
                  Sauf mention contraire, l'ensemble des éléments présents sur ce site (textes, images, graphismes, logo, icônes, mise en page, etc.) est la propriété exclusive de Nova Visio ou fait l'objet d'une autorisation d'utilisation. Toute reproduction, représentation, adaptation ou diffusion, totale ou partielle, sur quelque support que ce soit, est interdite sans l'autorisation écrite préalable de Nova Visio.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                  5. Données personnelles
                </h2>
                <p className="text-muted-foreground mb-4">
                  Les informations recueillies via les formulaires (nom, prénom, adresse e‑mail, téléphone, message, etc.) sont utilisées uniquement pour répondre aux demandes et échanges commerciaux. Les données ne sont pas transmises à des tiers, sauf obligation légale ou prestataires techniques intervenant pour le fonctionnement du site (hébergement, outils de mesure d'audience, etc.).
                </p>
                <p className="text-muted-foreground">
                  Vous pouvez demander l'accès, la rectification ou la suppression des informations vous concernant en écrivant à l'adresse e‑mail de contact indiquée ci‑dessus.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                  6. Limitation de responsabilité
                </h2>
                <p className="text-muted-foreground mb-4">
                  Les informations fournies sur ce site le sont à titre indicatif et général. Nova Visio s'efforce de les maintenir exactes et à jour, mais ne peut garantir leur exhaustivité ni l'absence d'erreurs, et décline toute responsabilité en cas d'utilisation qui en serait faite.
                </p>
                <p className="text-muted-foreground">
                  Le site peut contenir des liens vers des sites tiers sur lesquels Nova Visio n'exerce aucun contrôle ; aucune responsabilité n'est engagée concernant leur contenu ou leurs pratiques.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                  7. Droit applicable et for juridique
                </h2>
                <p className="text-muted-foreground">
                  Le présent site et les présentes mentions légales sont soumis au droit suisse. En cas de litige, et à défaut d'accord amiable, les tribunaux compétents sont ceux du canton de … (sous réserve de dispositions légales impératives).
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>;
}
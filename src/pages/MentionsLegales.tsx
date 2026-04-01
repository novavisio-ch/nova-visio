import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export default function MentionsLegales() {
  const { t } = useLanguage();
  return (
    <Layout>
      <div className="min-h-screen bg-background py-16 md:py-24">
        <div className="container max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">{t("legal.title")}</h1>
            <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 space-y-10">
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">{t("legal.s1.title")}</h2>
                <p className="text-muted-foreground mb-4">{t("legal.s1.intro")}</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><span className="font-medium text-foreground">{t("legal.s1.name")}</span> Nova Visio</li>
                  <li><span className="font-medium text-foreground">{t("legal.s1.form")}</span> {t("legal.s1.formValue")}</li>
                  <li><span className="font-medium text-foreground">{t("legal.s1.address")}</span> {t("legal.s1.addressValue")}</li>
                  <li><span className="font-medium text-foreground">{t("legal.s1.vat")}</span> {t("legal.s1.vatValue")}</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">{t("legal.s2.title")}</h2>
                <p className="text-muted-foreground">{t("legal.s2.text")}</p>
              </section>
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">{t("legal.s3.title")}</h2>
                <p className="text-muted-foreground mb-4">{t("legal.s3.intro")}</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><span className="font-medium text-foreground">{t("legal.s3.host")}</span> Hostinger International Ltd.</li>
                  <li><span className="font-medium text-foreground">{t("legal.s3.address")}</span> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</li>
                  <li><span className="font-medium text-foreground">{t("legal.s3.website")}</span>{" "}
                    <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.hostinger.fr</a>
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">{t("legal.s4.title")}</h2>
                <p className="text-muted-foreground">{t("legal.s4.text")}</p>
              </section>
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">{t("legal.s5.title")}</h2>
                <p className="text-muted-foreground mb-4">{t("legal.s5.p1")}</p>
                <p className="text-muted-foreground">{t("legal.s5.p2")}</p>
              </section>
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">{t("legal.s6.title")}</h2>
                <p className="text-muted-foreground mb-4">{t("legal.s6.p1")}</p>
                <p className="text-muted-foreground">{t("legal.s6.p2")}</p>
              </section>
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">{t("legal.s7.title")}</h2>
                <p className="text-muted-foreground">{t("legal.s7.text")}</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

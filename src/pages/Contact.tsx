import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";
import { Send, Clock, MessageSquare } from "lucide-react";
import { ReferralCtaSection } from "@/components/home/ReferralCtaSection";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { useIsTabletOrMobile } from "@/hooks/use-mobile";
import { ZcalEmbed } from "@/components/ZcalEmbed";
import { useLanguage } from "@/hooks/use-language";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const isMobile = useIsTabletOrMobile();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    message: "",
  });

  useEffect(() => {
    const sujet = searchParams.get("sujet");
    if (sujet) {
      setFormData((prev) => ({ ...prev, projectType: sujet }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const contactSchema = z.object({
      firstName: z.string().min(1, t("validation.firstName")).max(50, t("validation.max50")).trim(),
      lastName: z.string().min(1, t("validation.lastName")).max(50, t("validation.max50")).trim(),
      email: z.string().email(t("validation.email")).max(100, t("validation.max100")),
      projectType: z.string().optional(),
      message: z.string().min(10, t("validation.message.min")).max(2000, t("validation.message.max")).trim(),
    });

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const firstError = result.error.errors[0]?.message || t("contact.form.validation.desc");
      toast({
        title: t("contact.form.validation.title"),
        description: firstError,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const validatedData = result.data;
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert({
          first_name: validatedData.firstName,
          last_name: validatedData.lastName,
          email: validatedData.email,
          project_type: validatedData.projectType || null,
          message: validatedData.message,
        });

      if (dbError) throw dbError;

      const { error: emailError } = await supabase.functions.invoke("send-contact-email", {
        body: validatedData,
      });

      if (emailError) console.warn("Email notification failed:", emailError);

      toast({
        title: t("contact.form.success.title"),
        description: t("contact.form.success.desc"),
      });

      setFormData({ firstName: "", lastName: "", email: "", projectType: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: t("contact.form.error.title"),
        description: t("contact.form.error.desc"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-display-lg lg:text-display-xl mb-4 md:mb-6 leading-tight">
              {t("contact.title.1")}
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              <span className="text-gradient-gold">{t("contact.title.highlight")}</span>
            </h1>
            <p className="text-sm sm:text-base md:text-body-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              {t("contact.subtitle.1")} <strong className="text-foreground font-medium">{t("contact.subtitle.bold1")}</strong>.{" "}
              <br className="md:hidden" />
              {t("contact.subtitle.2")}{" "}
              <br className="md:hidden" />
              {t("contact.subtitle.3")} <strong className="text-foreground font-medium">{t("contact.subtitle.bold2")}</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16 lg:pb-20 px-4">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="glass-card p-5 sm:p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="firstName" className="text-xs sm:text-body-sm text-foreground">{t("contact.form.firstName")}</Label>
                  <Input id="firstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required className="bg-input/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground text-sm md:text-base" placeholder={t("contact.form.firstName.placeholder")} />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="lastName" className="text-xs sm:text-body-sm text-foreground">{t("contact.form.lastName")}</Label>
                  <Input id="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required className="bg-input/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground text-sm md:text-base" placeholder={t("contact.form.lastName.placeholder")} />
                </div>
              </div>

              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="email" className="text-xs sm:text-body-sm text-foreground">{t("contact.form.email")}</Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="bg-input/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground text-sm md:text-base" placeholder={t("contact.form.email.placeholder")} />
              </div>

              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="projectType" className="text-xs sm:text-body-sm text-foreground">{t("contact.form.projectType")}</Label>
                <Select value={formData.projectType} onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                  <SelectTrigger className="bg-input/50 border-border/50 focus:border-primary text-foreground text-sm md:text-base">
                    <SelectValue placeholder={t("contact.form.projectType.placeholder")} />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="appel-decouverte">{t("contact.form.projectType.call")}</SelectItem>
                    <SelectItem value="site-vitrine">{t("contact.form.projectType.website")}</SelectItem>
                    <SelectItem value="landing-page">{t("contact.form.projectType.landing")}</SelectItem>
                    <SelectItem value="identite-visuelle">{t("contact.form.projectType.brand")}</SelectItem>
                    <SelectItem value="pack-digital-branding">{t("contact.form.projectType.packDigital")}</SelectItem>
                    <SelectItem value="pack-refonte-globale">{t("contact.form.projectType.packRefonte")}</SelectItem>
                    <SelectItem value="maintenance">{t("contact.form.projectType.maintenance")}</SelectItem>
                    <SelectItem value="other">{t("contact.form.projectType.other")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="message" className="text-xs sm:text-body-sm text-foreground">{t("contact.form.message")}</Label>
                <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4} className="bg-input/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground resize-none text-sm md:text-base" placeholder={t("contact.form.message.placeholder")} />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t("contact.form.submitting") : (<>{t("contact.form.submit")}<Send className="w-4 h-4 md:w-5 md:h-5 ml-2" /></>)}
              </Button>

              <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4">{t("contact.form.reassurance")}</p>
            </form>

            <div className="mt-8 md:mt-12 grid sm:grid-cols-2 gap-4 md:gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} whileHover={!isMobile ? { y: -6, boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.2)" } : undefined} animate={isMobile ? { boxShadow: "0 15px 30px -10px hsl(var(--primary) / 0.15)" } : undefined} className="glass-card p-4 md:p-6 flex items-start gap-3 md:gap-4 cursor-pointer">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm md:text-display-sm mb-0.5 md:mb-1">{t("contact.whatNext.fast.title")}</h3>
                  <p className="text-[11px] sm:text-body-sm text-muted-foreground">{t("contact.whatNext.fast.desc")}</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} whileHover={!isMobile ? { y: -6, boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.2)" } : undefined} animate={isMobile ? { boxShadow: "0 15px 30px -10px hsl(var(--primary) / 0.15)" } : undefined} className="glass-card p-4 md:p-6 flex items-start gap-3 md:gap-4 cursor-pointer">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm md:text-display-sm mb-0.5 md:mb-1">{t("contact.whatNext.noPressure.title")}</h3>
                  <ul className="text-[11px] sm:text-body-sm text-muted-foreground space-y-0.5">
                    <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span><span>{t("contact.whatNext.noPressure.item1")}</span></li>
                    <li className="flex items-start gap-1.5"><span className="text-primary mt-0.5">•</span><span>{t("contact.whatNext.noPressure.item2")}</span></li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <div className="mt-10 md:mt-14">
              <h2 className="text-lg md:text-xl font-semibold text-center mb-6">
                {t("contact.booking.title")} <span className="text-primary">{t("contact.booking.highlight")}</span>
              </h2>
              <ZcalEmbed />
            </div>
          </div>
        </div>
      </section>
      <ReferralCtaSection />
    </Layout>
  );
};

export default Contact;

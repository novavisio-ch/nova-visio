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
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { useIsTabletOrMobile } from "@/hooks/use-mobile";

// Validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, "Prénom requis").max(50, "50 caractères max").trim(),
  lastName: z.string().min(1, "Nom requis").max(50, "50 caractères max").trim(),
  email: z.string().email("Email invalide").max(100, "100 caractères max"),
  projectType: z.string().optional(),
  message: z.string().min(10, "Minimum 10 caractères").max(2000, "2000 caractères max").trim(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const isMobile = useIsTabletOrMobile();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
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
    setErrors({});
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      toast({
        title: "Erreur de validation",
        description: "Veuillez corriger les erreurs du formulaire.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const validatedData = result.data;
      
      // Save to database
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

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke("send-contact-email", {
        body: validatedData,
      });

      if (emailError) {
        console.warn("Email notification failed:", emailError);
      }

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons sous 24 à 48 heures.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-display-lg lg:text-display-xl mb-4 md:mb-6 leading-tight">
              Réservons <span className="text-gradient-gold">15 minutes.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-body-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Un appel gratuit pour faire le point sur votre situation
              et voir si on peut travailler ensemble.
              Pas de discours commercial, juste une conversation utile.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-12 md:pb-16 lg:pb-20 px-4">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="glass-card p-5 sm:p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="firstName" className="text-xs sm:text-body-sm text-foreground">
                    Prénom
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground text-sm md:text-base"
                    placeholder="Votre prénom"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="lastName" className="text-xs sm:text-body-sm text-foreground">
                    Nom
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground text-sm md:text-base"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="email" className="text-xs sm:text-body-sm text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-input/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground text-sm md:text-base"
                  placeholder="votre@email.com"
                />
              </div>

              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="projectType" className="text-xs sm:text-body-sm text-foreground">
                  Type de projet
                </Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger className="bg-input/50 border-border/50 focus:border-primary text-foreground text-sm md:text-base">
                    <SelectValue placeholder="Sélectionnez un type de projet" />
                  </SelectTrigger>
                   <SelectContent className="bg-background border-border">
                     <SelectItem value="appel-decouverte">Appel découverte gratuit (15 min)</SelectItem>
                     <SelectItem value="site-vitrine">Site vitrine</SelectItem>
                     <SelectItem value="landing-page">Landing page</SelectItem>
                     <SelectItem value="identite-visuelle">Identité visuelle & logo</SelectItem>
                     <SelectItem value="pack-digital-branding">Pack Digital & Branding</SelectItem>
                     <SelectItem value="pack-refonte-globale">Pack Refonte Globale</SelectItem>
                     <SelectItem value="maintenance">Suivi & Maintenance</SelectItem>
                     <SelectItem value="other">Autre / Question</SelectItem>
                   </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="message" className="text-xs sm:text-body-sm text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-input/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground resize-none text-sm md:text-base"
                  placeholder="Décrivez votre projet et vos objectifs..."
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    Envoyer ma demande
                    <Send className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* What happens next */}
            <div className="mt-8 md:mt-12 grid sm:grid-cols-2 gap-4 md:gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={!isMobile ? { y: -6, boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.2)" } : undefined}
                animate={isMobile ? { boxShadow: "0 15px 30px -10px hsl(var(--primary) / 0.15)" } : undefined}
                className="glass-card p-4 md:p-6 flex items-start gap-3 md:gap-4 cursor-pointer"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm md:text-display-sm mb-0.5 md:mb-1">Réponse rapide</h3>
                  <p className="text-[11px] sm:text-body-sm text-muted-foreground">
                    Nous vous répondrons sous 24 à 48 heures.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={!isMobile ? { y: -6, boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.2)" } : undefined}
                animate={isMobile ? { boxShadow: "0 15px 30px -10px hsl(var(--primary) / 0.15)" } : undefined}
                className="glass-card p-4 md:p-6 flex items-start gap-3 md:gap-4 cursor-pointer"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm md:text-display-sm mb-0.5 md:mb-1">Sans pression</h3>
                  <ul className="text-[11px] sm:text-body-sm text-muted-foreground space-y-0.5">
                    <li className="flex items-start gap-1.5">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Discussion constructive</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Solutions adaptées</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

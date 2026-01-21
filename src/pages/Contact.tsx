import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

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
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display-lg md:text-display-xl mb-6">
              Parlons de votre <span className="text-gradient-gold">projet</span>
            </h1>
            <p className="text-body-lg text-muted-foreground">
              Un premier échange, sans engagement de votre part, est le meilleur moyen de débuter. Nous sommes là pour écouter et vous proposer des pistes concrètes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-body-sm text-foreground">
                    Prénom
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                    placeholder="Votre prénom"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-body-sm text-foreground">
                    Nom
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-body-sm text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-input/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  placeholder="votre@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType" className="text-body-sm text-foreground">
                  Type de projet
                </Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger className="bg-input/50 border-border/50 focus:border-primary text-foreground">
                    <SelectValue placeholder="Sélectionnez un type de projet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Site Web</SelectItem>
                    <SelectItem value="branding">Branding / Identité de marque</SelectItem>
                    <SelectItem value="social">Réseaux Sociaux</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-body-sm text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-input/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground resize-none"
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
                    Envoyer mon message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* What happens next */}
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-display-sm mb-1">Réponse rapide</h3>
                  <p className="text-body-sm text-muted-foreground">
                    Nous vous répondrons sous 24 à 48 heures.
                  </p>
                </div>
              </div>
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-display-sm mb-1">Sans pression</h3>
                  <p className="text-body-sm text-muted-foreground">
                    Discussion constructive, solutions adaptées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

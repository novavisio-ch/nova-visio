import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const NotFound = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-6xl md:text-8xl font-bold text-gradient-gold">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">{t("notfound.subtitle")}</p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/"><Home className="w-5 h-5 mr-2" />{t("notfound.cta")}</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

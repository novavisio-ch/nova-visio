import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { VisioChatBubble } from "@/components/chat/VisioChatBubble";
import Index from "./pages/Index";
import SiteWeb from "./pages/SiteWeb";
import IdentiteVisuelle from "./pages/IdentiteVisuelle";
import Tarifs from "./pages/Tarifs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogArticle5Erreurs from "./pages/BlogArticle5Erreurs";
import BlogArticleClarifierOffre from "./pages/BlogArticleClarifierOffre";
import BlogArticleCouleurs from "./pages/BlogArticleCouleurs";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/site-web" element={<SiteWeb />} />
          <Route path="/identite-visuelle" element={<IdentiteVisuelle />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/5-erreurs-site-web" element={<BlogArticle5Erreurs />} />
          <Route path="/blog/clarifier-offre-avant-site-web" element={<BlogArticleClarifierOffre />} />
          <Route path="/blog/choisir-couleurs-marque" element={<BlogArticleCouleurs />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          {/* Redirect old /services route to /site-web */}
          <Route path="/services" element={<SiteWeb />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <VisioChatBubble />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

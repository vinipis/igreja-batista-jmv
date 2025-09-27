import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import Ministerios from "./pages/Ministerios";
import ProjetoVidaFuturo from "./pages/ProjetoVidaFuturo";
import SonhoDeNatal from "./pages/SonhoDeNatal";
import PodcastDepoisDeCristo from "./pages/PodcastDepoisDeCristo";
import Eventos from "./pages/Eventos";
import Contato from "./pages/Contato";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/ministerios" element={<Ministerios />} />
            <Route path="/projeto-vida-futuro" element={<ProjetoVidaFuturo />} />
            <Route path="/sonho-de-natal" element={<SonhoDeNatal />} />
            <Route path="/podcast-depois-de-cristo" element={<PodcastDepoisDeCristo />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sitemap" element={<Sitemap />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

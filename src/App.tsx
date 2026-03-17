import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import Ministerios from "./pages/Ministerios";
import ProjetoVidaFuturo from "./pages/ProjetoVidaFuturo";
import SonhoDeNatal from "./pages/SonhoDeNatal";
import PodcastDepoisDeCristo from "./pages/PodcastDepoisDeCristo";
import Eventos from "./pages/Eventos";
import Contato from "./pages/Contato";
import Sitemap from "./pages/Sitemap";
import LinkBio from "./pages/LinkBio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const SiteLayout = () => (
  <div className="min-h-screen flex flex-col">
    <Navigation />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Standalone - sem header/footer */}
          <Route path="/link" element={<LinkBio />} />

          {/* Páginas com Layout */}
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/ministerios" element={<Ministerios />} />
            <Route path="/projeto-vida-futuro" element={<ProjetoVidaFuturo />} />
            <Route path="/sonho-de-natal" element={<SonhoDeNatal />} />
            <Route path="/podcast-depois-de-cristo" element={<PodcastDepoisDeCristo />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

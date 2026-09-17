import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";

const QuemSomos = lazy(() => import("./pages/QuemSomos"));
const Ministerios = lazy(() => import("./pages/Ministerios"));
const ProjetoVidaFuturo = lazy(() => import("./pages/ProjetoVidaFuturo"));
const SonhoDeNatal = lazy(() => import("./pages/SonhoDeNatal"));
const PodcastDepoisDeCristo = lazy(() => import("./pages/PodcastDepoisDeCristo"));
const Eventos = lazy(() => import("./pages/Eventos"));
const Contato = lazy(() => import("./pages/Contato"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const LinkBio = lazy(() => import("./pages/LinkBio"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-church-primary border-t-transparent" />
  </div>
);

const SiteLayout = () => (
  <div className="min-h-screen flex flex-col">
    <Navigation />
    <main className="flex-1">
      <Suspense fallback={<PageFallback />}>
        <Outlet />
      </Suspense>
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
        <Suspense fallback={<PageFallback />}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

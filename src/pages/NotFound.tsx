import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Search, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="border-church-primary text-church-primary">
              Página não encontrada
            </Badge>
            <h1 className="text-6xl lg:text-8xl font-bold text-church-primary">404</h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
              Oops! Esta página não existe
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A página que você está procurando pode ter sido movida, removida ou talvez você tenha digitado o endereço incorretamente.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-church-primary hover:bg-church-primary/90">
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Voltar ao Início
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/sitemap">
                <Search className="h-4 w-4 mr-2" />
                Mapa do Site
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contato">
                <MessageCircle className="h-4 w-4 mr-2" />
                Entre em Contato
              </Link>
            </Button>
          </div>

          <div className="bg-muted/50 rounded-2xl p-6 text-left">
            <h3 className="font-semibold text-church-primary mb-3">Páginas mais visitadas:</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link 
                to="/ministerios" 
                className="text-muted-foreground hover:text-church-primary transition-colors"
              >
                • Ministérios
              </Link>
              <Link 
                to="/eventos" 
                className="text-muted-foreground hover:text-church-primary transition-colors"
              >
                • Eventos
              </Link>
              <Link 
                to="/projeto-vida-futuro" 
                className="text-muted-foreground hover:text-church-primary transition-colors"
              >
                • Projeto Vida & Futuro
              </Link>
              <Link 
                to="/contato" 
                className="text-muted-foreground hover:text-church-primary transition-colors"
              >
                • Contato
              </Link>
              <Link 
                to="/sonho-de-natal" 
                className="text-muted-foreground hover:text-church-primary transition-colors"
              >
                • Sonho de Natal
              </Link>
              <Link 
                to="/podcast-depois-de-cristo" 
                className="text-muted-foreground hover:text-church-primary transition-colors"
              >
                • Podcast
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

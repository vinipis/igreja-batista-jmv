import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const NavLinks = ({ mobile = false, onClose = () => {} }) => (
    <>
      <Link
        to="/"
        className={`transition-colors hover:text-church-primary ${
          isActive("/") ? "text-church-primary font-semibold" : "text-foreground"
        } ${mobile ? "block py-2" : ""}`}
        onClick={onClose}
      >
        Home
      </Link>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className={`transition-colors hover:text-church-primary ${
              location.pathname.startsWith("/quem-somos") ? "text-church-primary font-semibold" : "text-foreground"
            } ${mobile ? "justify-start p-0 h-auto py-2" : ""}`}
          >
            Quem Somos
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          <DropdownMenuItem asChild>
            <Link to="/quem-somos" onClick={onClose}>
              Nossa História
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/ministerios" onClick={onClose}>
              Ministérios
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/projeto-vida-futuro" onClick={onClose}>
              Projeto Vida & Futuro
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/sonho-de-natal" onClick={onClose}>
              Sonho de Natal
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/podcast-depois-de-cristo" onClick={onClose}>
              Podcast Depois de Cristo
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link
        to="/eventos"
        className={`transition-colors hover:text-church-primary ${
          isActive("/eventos") ? "text-church-primary font-semibold" : "text-foreground"
        } ${mobile ? "block py-2" : ""}`}
        onClick={onClose}
      >
        Eventos
      </Link>

      <Link
        to="/contato"
        className={`transition-colors hover:text-church-primary ${
          isActive("/contato") ? "text-church-primary font-semibold" : "text-foreground"
        } ${mobile ? "block py-2" : ""}`}
        onClick={onClose}
      >
        Contato
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Igreja Batista JMV" className="h-10 w-10" />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-church-primary">Igreja Batista JMV</h1>
            <p className="text-xs text-muted-foreground">Uma Igreja Leve e Profunda</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-4 pt-6">
              <div className="flex items-center space-x-3 pb-4 border-b">
                <img src={logo} alt="Igreja Batista JMV" className="h-8 w-8" />
                <div>
                  <h2 className="font-bold text-church-primary">Igreja Batista JMV</h2>
                  <p className="text-xs text-muted-foreground">Uma Igreja Leve e Profunda</p>
                </div>
              </div>
              <nav className="flex flex-col space-y-2">
                <NavLinks mobile onClose={() => setIsOpen(false)} />
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navigation;
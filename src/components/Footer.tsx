import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-church-dark text-church-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Informações Principais */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Igreja Batista JMV" className="h-12 w-12" />
              <div>
                <h3 className="text-lg font-bold">Igreja Batista JMV</h3>
                <p className="text-sm text-church-white/80">Uma Igreja Leve e Profunda</p>
              </div>
            </div>
            <p className="text-sm text-church-white/70 leading-relaxed">
              Uma igreja que ama, cuida e proclama que só Jesus pode curar. 
              Caminhamos juntos sem hierarquias, vivendo a recuperação como um processo diário ao lado de Cristo.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-church-white/70 hover:text-church-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ministerios" className="text-sm text-church-white/70 hover:text-church-gold transition-colors">
                  Ministérios
                </Link>
              </li>
              <li>
                <Link to="/projeto-vida-futuro" className="text-sm text-church-white/70 hover:text-church-gold transition-colors">
                  Projeto Vida & Futuro
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="text-sm text-church-white/70 hover:text-church-gold transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-church-white/70 hover:text-church-gold transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Ministérios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ministérios</h4>
            <ul className="space-y-2 text-sm text-church-white/70">
              <li>Casais</li>
              <li>Homens</li>
              <li>União Feminina</li>
              <li>Juventude 180º</li>
              <li>Ministério Infantil</li>
              <li>Ministério de Louvor</li>
              <li>Recepção</li>
              <li>Ministério de Mídias</li>
              <li>Melhor Idade</li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-church-gold flex-shrink-0" />
                <div className="text-sm text-church-white/70">
                  <p>Jardim Maria Virginia</p>
                  <p>São Paulo, SP</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-church-gold flex-shrink-0" />
                <span className="text-sm text-church-white/70">(11) 0000-0000</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-church-gold flex-shrink-0" />
                <span className="text-sm text-church-white/70">igreja.batistajmv@gmail.com</span>
              </div>
              
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-1 text-church-gold flex-shrink-0" />
                <div className="text-sm text-church-white/70">
                  <p>Domingos: 10 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-church-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-church-white/60">
              © {currentYear} Igreja Batista Jardim Maria Virginia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/sitemap" className="text-sm text-church-white/60 hover:text-church-gold transition-colors">
                Mapa do Site
              </Link>
              <Link to="/politica-privacidade" className="text-sm text-church-white/60 hover:text-church-gold transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
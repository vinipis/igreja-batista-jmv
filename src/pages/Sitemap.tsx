import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Users, BookOpen, Calendar, Phone, Star, Heart, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const sitemap = [
    {
      categoria: "Páginas Principais",
      icone: Home,
      links: [
        { nome: "Home", url: "/", descricao: "Página inicial com informações gerais da igreja" },
        { nome: "Quem Somos", url: "/quem-somos", descricao: "Nossa história, missão e valores cristãos" },
        { nome: "Contato", url: "/contato", descricao: "Formulário de contato e informações para entrar em contato" },
        { nome: "Eventos", url: "/eventos", descricao: "Calendário de eventos e atividades da igreja" }
      ]
    },
    {
      categoria: "Ministérios e Projetos",
      icone: Users,
      links: [
        { nome: "Ministérios", url: "/ministerios", descricao: "Conheça todos os ministérios disponíveis na igreja" },
        { nome: "Projeto Vida & Futuro", url: "/projeto-vida-futuro", descricao: "Cursos gratuitos e capacitação profissional" },
        { nome: "Sonho de Natal", url: "/sonho-de-natal", descricao: "Espetáculo natalino anual da igreja" },
        { nome: "Podcast Depois de Cristo", url: "/podcast-depois-de-cristo", descricao: "Podcast com reflexões e ensinamentos cristãos" }
      ]
    }
  ];

  const ministerios = [
    "Casais", "Homens", "União Feminina", "Juventude 180º", 
    "Ministério Infantil", "Ministério de Louvor", "Recepção", 
    "Ministério de Mídias", "Melhor Idade"
  ];

  const projetos = [
    "Projeto Vida & Futuro",
    "Sonho de Natal - O Rei Nasceu",
    "Podcast Depois de Cristo"
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="border-church-primary text-church-primary">
            Mapa do Site
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-church-primary">
            Navegue pelo nosso site
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Encontre facilmente todas as páginas e informações disponíveis no site da 
            Igreja Batista Jardim Maria Virginia.
          </p>
        </div>

        {/* Estrutura Principal */}
        <div className="space-y-8 mb-16">
          {sitemap.map((secao, index) => {
            const IconComponent = secao.icone;
            return (
              <Card key={index} className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl text-church-primary flex items-center">
                    <IconComponent className="h-6 w-6 mr-3" />
                    {secao.categoria}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {secao.links.map((link, linkIndex) => (
                      <Link 
                        key={linkIndex}
                        to={link.url}
                        className="block p-4 rounded-lg border hover:shadow-elegant transition-shadow group"
                      >
                        <h3 className="font-semibold text-church-primary group-hover:text-church-rose transition-colors">
                          {link.nome}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {link.descricao}
                        </p>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Seções Detalhadas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Ministérios */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-church-primary flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                Ministérios
              </CardTitle>
              <CardDescription>
                Todos os ministérios disponíveis na igreja
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {ministerios.map((ministerio, index) => (
                  <li key={index} className="text-sm">
                    <Link 
                      to="/ministerios" 
                      className="text-muted-foreground hover:text-church-primary transition-colors"
                    >
                      • {ministerio}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Projetos Especiais */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-church-primary flex items-center">
                <Star className="h-5 w-5 mr-2" />
                Projetos Especiais
              </CardTitle>
              <CardDescription>
                Iniciativas e projetos desenvolvidos pela igreja
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {projetos.map((projeto, index) => (
                  <li key={index} className="text-sm">
                    <span className="text-muted-foreground">• {projeto}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Tipos de Eventos */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-church-primary flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Tipos de Eventos
              </CardTitle>
              <CardDescription>
                Categorias de eventos e atividades regulares
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    to="/eventos" 
                    className="text-muted-foreground hover:text-church-primary transition-colors"
                  >
                    • Cultos Regulares
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/eventos" 
                    className="text-muted-foreground hover:text-church-primary transition-colors"
                  >
                    • Escola Bíblica Dominical
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/eventos" 
                    className="text-muted-foreground hover:text-church-primary transition-colors"
                  >
                    • Reuniões de Ministérios
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/eventos" 
                    className="text-muted-foreground hover:text-church-primary transition-colors"
                  >
                    • Atividades Especiais
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/eventos" 
                    className="text-muted-foreground hover:text-church-primary transition-colors"
                  >
                    • Confraternizações
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Informações Adicionais */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-church-primary text-center mb-6">
              Informações sobre o Site
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Acessibilidade</h3>
                <p>Este site foi desenvolvido seguindo padrões de acessibilidade web para garantir que todos possam navegar facilmente.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Responsividade</h3>
                <p>Nosso site é totalmente responsivo, funcionando perfeitamente em computadores, tablets e smartphones.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Atualizações</h3>
                <p>As informações são atualizadas regularmente para manter a comunidade informada sobre eventos e atividades.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Contato</h3>
                <p>Para sugestões sobre o site ou dificuldades de navegação, entre em contato através da página de contato.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Não encontrou o que procurava?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e teremos prazer em ajudá-lo a encontrar a informação que precisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <button className="px-6 py-3 bg-white text-church-primary rounded-lg font-semibold hover:bg-white/90 transition-colors">
                <Phone className="h-4 w-4 mr-2 inline" />
                Entre em Contato
              </button>
            </Link>
            <Link to="/">
              <button className="px-6 py-3 bg-church-gold text-church-dark rounded-lg font-semibold hover:bg-church-gold/90 transition-colors">
                <Home className="h-4 w-4 mr-2 inline" />
                Voltar ao Início
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
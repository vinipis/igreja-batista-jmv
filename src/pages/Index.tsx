import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Users, BookOpen, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Index = () => {
  const proximosEventos = [
    {
      titulo: "Encontros da Juventude 180º",
      data: "20/03/2025",
      categoria: "Juventude",
      descricao: "Encontro especial para jovens com louvor, palavra e comunhão."
    },
    {
      titulo: "Reunião de Casais",
      data: "22/03/2025", 
      categoria: "Casais",
      descricao: "Momento especial para casais crescerem juntos na fé."
    },
    {
      titulo: "União Feminina",
      data: "25/03/2025",
      categoria: "Mulheres", 
      descricao: "Encontro das mulheres para oração, estudo e fellowship."
    }
  ];

  const ministerios = [
    { nome: "Casais", icone: Heart },
    { nome: "Homens", icone: Users },
    { nome: "União Feminina", icone: Heart },
    { nome: "Juventude 180º", icone: Star },
    { nome: "Ministério Infantil", icone: Heart },
    { nome: "Ministério de Louvor", icone: Star }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-church-gold text-church-dark">
                Uma Igreja Leve e Profunda
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Que segue os{" "}
                <span className="text-church-gold">passos de Jesus</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Uma igreja que ama, cuida e proclama que só Jesus pode curar. 
                Caminha junto sem hierarquias, vivendo a recuperação como um processo diário ao lado de Cristo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-church-gold text-church-dark hover:bg-church-gold/90">
                  <Link to="/ministerios">
                    Conheça nossos Ministérios
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-church-dark">
                  <Link to="/contato">Entre em Contato</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-church-gold/20 blur-3xl rounded-full"></div>
                <img 
                  src={logo} 
                  alt="Igreja Batista JMV" 
                  className="relative w-80 h-80 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Bem-vindo Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="border-church-primary text-church-primary">
              Bem-vindo
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-church-primary">
              Igreja Batista Jd. Maria Virginia
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprometida com a missão de Deus, leva o evangelho a todos, brilha onde estiver e reparte com generosidade. 
              Vai onde Jesus quer ir, dizendo sim para o que Ele diz sim.
            </p>
            <Button asChild variant="outline" size="lg" className="border-church-primary text-church-primary hover:bg-church-primary hover:text-white">
              <Link to="/ministerios">Saiba mais sobre nós</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-church-primary text-church-primary">
              Próximos Eventos
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-church-primary">
              Fique por dentro de tudo que acontece
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {proximosEventos.map((evento, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{evento.categoria}</Badge>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{evento.data}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{evento.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{evento.descricao}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/eventos">Ver todos os eventos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ministérios Preview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-church-primary text-church-primary">
              Nossos Ministérios
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-church-primary">
              Encontre seu lugar na família
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Temos ministérios para todas as idades e momentos da vida. Venha fazer parte da nossa comunidade.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {ministerios.map((ministerio, index) => {
              const IconComponent = ministerio.icone;
              return (
                <Card key={index} className="text-center p-4 hover:shadow-soft transition-shadow">
                  <CardContent className="space-y-2 p-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-medium">{ministerio.nome}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-church-primary hover:bg-church-primary/90">
              <Link to="/ministerios">
                Conheça todos os ministérios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Projeto Vida & Futuro */}
      <section className="py-16 lg:py-24 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-church-dark">
              Projeto Vida & Futuro
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold text-church-dark/80">
              Capacitando pessoas para o futuro
            </h3>
            <p className="text-lg text-church-dark/70 leading-relaxed">
              Oferecemos cursos 100% gratuitos para a comunidade. 
              Acreditamos que o conhecimento é uma ferramenta poderosa para abrir portas e criar novas oportunidades.
            </p>
            <Button asChild size="lg" variant="outline" className="border-church-dark text-church-dark hover:bg-church-dark hover:text-white">
              <Link to="/projeto-vida-futuro">Saiba mais sobre o projeto</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
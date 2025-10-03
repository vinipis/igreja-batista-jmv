import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users, Heart, Star, BookOpen, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const Eventos = () => {
  const [filtroAtivo, setFiltroAtivo] = useState("todos");

  const eventos = [
    {
      id: 1,
      titulo: "Encontros da Juventude 180º",
      data: "20/03/2025",
      horario: "19:30",
      local: "Igreja Batista JMV",
      categoria: "juventude",
      tipo: "Juventude 180º",
      descricao: "Encontro especial para jovens com louvor, palavra, dinâmicas e comunhão. Um momento para crescer na fé ao lado de outros jovens.",
      icone: Star,
      cor: "church-gold"
    },
    {
      id: 2,
      titulo: "Reunião de Casais",
      data: "22/03/2025",
      horario: "19:00",
      local: "Salão da Igreja",
      categoria: "casais",
      tipo: "Casais",
      descricao: "Momento especial para casais crescerem juntos na fé. Estudos bíblicos, dinâmicas e oração voltados para o fortalecimento do matrimônio.",
      icone: Heart,
      cor: "church-primary"
    },
    {
      id: 3,
      titulo: "União Feminina",
      data: "25/03/2025",
      horario: "14:30",
      local: "Igreja Batista JMV",
      categoria: "mulheres",
      tipo: "União Feminina",
      descricao: "Encontro das mulheres para oração, estudo da palavra e fellowship. Um momento de comunhão e crescimento espiritual.",
      icone: Heart,
      cor: "church-rose"
    },
    {
      id: 4,
      titulo: "Reunião de Homens",
      data: "28/03/2025",
      horario: "19:30",
      local: "Igreja Batista JMV",
      categoria: "homens",
      tipo: "Reunião de Homens",
      descricao: "Discipulado masculino focado em liderança cristã, paternidade e responsabilidade espiritual.",
      icone: Users,
      cor: "church-dark"
    },
    {
      id: 5,
      titulo: "Ministério Infantil - Atividade Especial",
      data: "30/03/2025",
      horario: "15:00",
      local: "Salão Infantil",
      categoria: "criancas",
      tipo: "Crianças",
      descricao: "Atividade especial para as crianças com histórias bíblicas, brincadeiras, lanche e muita diversão.",
      icone: Star,
      cor: "church-orange"
    },
    {
      id: 6,
      titulo: "Café com a Melhor Idade",
      data: "02/04/2025",
      horario: "15:00",
      local: "Salão da Igreja",
      categoria: "melhor-idade",
      tipo: "Melhor Idade",
      descricao: "Tarde especial para nossos irmãos da terceira idade com café, bolo, comunhão e palavra edificante.",
      icone: Coffee,
      cor: "church-gold"
    },
    {
      id: 7,
      titulo: "Escola Bíblica Dominical",
      data: "Todo Domingo",
      horario: "09:00",
      local: "Igreja Batista JMV",
      categoria: "todos",
      tipo: "Outros",
      descricao: "Estudo sistemático da Bíblia para todas as idades. Classes divididas por faixa etária com professores qualificados.",
      icone: BookOpen,
      cor: "church-primary"
    },
    {
      id: 8,
      titulo: "Pequenos grupos",
      data: "Quinzenalmente",
      horario: "20:00",
      local: "Encontros Rotativos",
      categoria: "todos",
      tipo: "Outros",
      descricao: "Momento especial de oração congregacional, súplicas, intercessão e louvor. Venha buscar a face de Deus conosco.",
      icone: Heart,
      cor: "church-primary"
    }
  ];

  const categorias = [
    { id: "todos", nome: "Todos", icone: Users },
    { id: "casais", nome: "Casais", icone: Heart },
    { id: "homens", nome: "Homens", icone: Users },
    { id: "mulheres", nome: "Mulheres", icone: Heart },
    { id: "juventude", nome: "Juventude", icone: Star },
    { id: "criancas", nome: "Crianças", icone: Star },
    { id: "melhor-idade", nome: "Melhor Idade", icone: Coffee }
  ];

  const eventosFiltrados = filtroAtivo === "todos" 
    ? eventos 
    : eventos.filter(evento => evento.categoria === filtroAtivo);

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="border-church-primary text-church-primary">
            Próximos Eventos
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-church-primary">
            Fique por dentro de tudo que acontece
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Participe dos nossos eventos e atividades. Há sempre algo especial acontecendo 
            para toda a família na Igreja Batista JMV.
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-12">
          <Tabs value={filtroAtivo} onValueChange={setFiltroAtivo} className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 mb-8">
              {categorias.map((categoria) => {
                const IconComponent = categoria.icone;
                return (
                  <TabsTrigger key={categoria.id} value={categoria.id} className="text-xs lg:text-sm">
                    <IconComponent className="h-4 w-4 mr-1 lg:mr-2" />
                    <span className="hidden sm:inline">{categoria.nome}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Lista de Eventos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {eventosFiltrados.map((evento) => {
            const IconComponent = evento.icone;
            return (
              <Card key={evento.id} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{evento.tipo}</Badge>
                    <div className={`w-8 h-8 bg-gradient-to-br from-${evento.cor} to-${evento.cor}/80 rounded-full flex items-center justify-center`}>
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{evento.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {evento.descricao}
                  </CardDescription>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-church-primary" />
                      <span>{evento.data}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-church-primary" />
                      <span>{evento.horario}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-church-primary" />
                      <span>{evento.local}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Informações Gerais */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-church-primary">
              Informações Gerais
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Localização</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-church-primary" />
                    <span>Igreja Batista Jardim Maria Virginia</span>
                  </div>
                  <p className="ml-6">Jardim Maria Virginia, São Paulo - SP</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Horários Regulares</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-church-primary" />
                    <span>Domingos: 9h (EBD) e 18h (Culto)</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-church-primary" />
                    <span>Pequenos Grupos: Encontros Quinzenais</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Venha participar conosco!
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Nossa igreja é um lugar de acolhimento e crescimento espiritual. 
            Todos são bem-vindos para participar dos nossos eventos e atividades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-church-primary">
              <Link to="/contato">Entre em Contato</Link>
            </Button>
            <Button asChild size="lg" className="bg-church-gold text-church-dark hover:bg-church-gold/90">
              <Link to="/ministerios">Conheça os Ministérios</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
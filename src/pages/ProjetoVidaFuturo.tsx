import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Clock, Award, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const ProjetoVidaFuturo = () => {
  const cursos = [
    {
      nome: "Informática Básica",
      duracao: "3 meses",
      descricao: "Aprenda os fundamentos da informática, navegação na internet e ferramentas básicas.",
      icone: BookOpen
    },
    {
      nome: "Artesanato",
      duracao: "2 meses", 
      descricao: "Desenvolva suas habilidades manuais e crie produtos únicos.",
      icone: Heart
    },
    {
      nome: "Culinária",
      duracao: "2 meses",
      descricao: "Técnicas culinárias básicas e receitas para empreender ou uso pessoal.",
      icone: Target
    },
    {
      nome: "Costura",
      duracao: "4 meses",
      descricao: "Do básico ao avançado, aprenda a costurar e criar suas próprias peças.",
      icone: Award
    }
  ];

  const beneficios = [
    {
      titulo: "100% Gratuito",
      descricao: "Todos os cursos são oferecidos sem nenhum custo para a comunidade.",
      icone: Heart
    },  
    {
      titulo: "Certificado",
      descricao: "Receba certificado de conclusão reconhecido ao final do curso.",
      icone: Award
    },
    {
      titulo: "Instrutores Qualificados", 
      descricao: "Professores experientes e dedicados ao ensino de qualidade.",
      icone: Users
    },
    {
      titulo: "Horários Flexíveis",
      descricao: "Diversas opções de horários para se adequar à sua rotina.",
      icone: Clock
    }
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="border-church-primary text-church-primary">
            Projeto Vida & Futuro
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-church-primary">
            Capacitando pessoas para o futuro
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            O <strong>Projeto Vida & Futuro</strong> nasceu no coração da Igreja com um propósito especial: 
            <strong> capacitar e transformar vidas</strong> por meio da educação e do aprendizado. 
            Acreditamos que o conhecimento é uma ferramenta poderosa para abrir portas e criar novas oportunidades, 
            por isso, oferecemos cursos <strong>100% gratuitos</strong> para a comunidade.
          </p>
        </div>

        {/* Objetivo */}
        <div className="bg-gradient-warm rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-church-dark mb-4">
              Nosso Objetivo
            </h2>
            <p className="text-lg text-church-dark/80 leading-relaxed">
              Proporcionar formação em áreas essenciais, tanto para o crescimento profissional 
              quanto para o bem estar social. Queremos ver vidas transformadas através do conhecimento 
              e da oportunidade de desenvolver novas habilidades.
            </p>
          </div>
        </div>

        {/* Cursos Oferecidos */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-church-primary">
              Cursos Oferecidos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça os cursos disponíveis e encontre aquele que mais se adequa aos seus objetivos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cursos.map((curso, index) => {
              const IconComponent = curso.icone;
              return (
                <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{curso.nome}</CardTitle>
                    <Badge variant="secondary" className="mx-auto">
                      {curso.duracao}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {curso.descricao}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Benefícios */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-church-primary">
              Por que escolher nossos cursos?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => {
              const IconComponent = beneficio.icone;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-soft transition-shadow">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{beneficio.titulo}</h3>
                    <p className="text-sm text-muted-foreground">{beneficio.descricao}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Como Participar */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-church-primary">
              Como Participar?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <div className="w-8 h-8 bg-church-primary text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="font-semibold">Entre em Contato</h3>
                <p className="text-sm text-muted-foreground">
                  Entre em contato conosco através do formulário ou telefone para se inscrever.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-church-primary text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="font-semibold">Escolha seu Curso</h3>
                <p className="text-sm text-muted-foreground">
                  Informe qual curso você tem interesse e verificaremos a disponibilidade.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-church-primary text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="font-semibold">Comece a Aprender</h3>
                <p className="text-sm text-muted-foreground">
                  Participe das aulas e desenvolva novas habilidades para o seu futuro.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Pronto para transformar seu futuro?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e dê o primeiro passo para desenvolver novas habilidades 
            e criar novas oportunidades em sua vida.
          </p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-church-primary">
            <Link to="/contato">Quero me inscrever</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjetoVidaFuturo;
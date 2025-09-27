import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Clock, Award, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const ProjetoVidaFuturo = () => {
  const motivacoes = [
    {
      titulo: "Amor em Ação",
      descricao: "Levamos cuidado prático às famílias, com alimentos, roupas e apoio emocional. O amor de Cristo precisa ser visto e sentido em atitudes que alcançam o próximo.",
      icone: Heart
    },
    {
      titulo: "Palavra que Transforma",
      descricao: "Acreditamos que toda mudança verdadeira começa com o evangelho. Por isso, cada ação está enraizada na Palavra de Deus, que gera fé, esperança e vida nova.",
      icone: BookOpen
    },
    {
      titulo: "Comunidade e Esperança",
      descricao: "Não caminhamos sozinhos. Criamos espaços de acolhimento e comunhão, fortalecendo vínculos e oferecendo novas perspectivas para famílias e jovens.",
      icone: Users
    },
    {
      titulo: "Serviço e Futuro",
      descricao: "Servimos hoje acreditando que o futuro pode ser diferente. Cada gesto de solidariedade é uma semente plantada em fé, que dará frutos para a glória de Deus.",
      icone: Target
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
            Transformando vidas com fé e esperança
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            O <strong>Projeto Vida e Futuro</strong> é uma iniciativa da nossa igreja que nasce do desejo de levar esperança, 
            cuidado e transformação para além das quatro paredes do templo. Ele une fé e ação prática, buscando atender 
            não apenas às necessidades espirituais, mas também sociais e emocionais de pessoas e famílias da nossa comunidade.
          </p>
        </div>

        {/* O que é o projeto */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-church-primary mb-6 text-center">
              O que é o Projeto Vida e Futuro?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
              O Projeto Vida e Futuro é uma iniciativa da nossa igreja que nasce do desejo de levar esperança, 
              cuidado e transformação para além das quatro paredes do templo. Ele une fé e ação prática, buscando 
              atender não apenas às necessidades espirituais, mas também sociais e emocionais de pessoas e famílias 
              da nossa comunidade.
            </p>
          </div>
        </div>

        {/* Como começou */}
        <div className="bg-gradient-warm rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-church-dark mb-6 text-center">
              Como o projeto começou?
            </h2>
            <p className="text-lg text-church-dark/80 leading-relaxed text-center mb-4">
              O projeto surgiu da percepção de que muitas pessoas precisam mais do que palavras, precisam de acolhimento, 
              orientação e oportunidades. A igreja entendeu que não bastava apenas oferecer culto e ensino, mas também 
              criar pontes reais que conectem a Palavra de Deus à vida prática.
            </p>
            <p className="text-lg font-semibold text-church-dark text-center">
              Assim nasceu o Projeto Vida e Futuro: uma resposta ao chamado de ser igreja no cotidiano.
            </p>
          </div>
        </div>

        {/* Nossa Visão */}
        <div className="mb-16">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-church-primary">
              Nossa Visão
            </h2>
            <p className="text-xl font-semibold text-church-secondary">
              Servir hoje, construindo o amanhã
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O Projeto Vida e Futuro nasceu com o propósito de unir fé e ação, levando o amor de Cristo para dentro da comunidade. 
              Queremos ser instrumentos de transformação espiritual e social, mostrando que em Jesus sempre há esperança e um futuro melhor.
            </p>
            <blockquote className="text-lg italic text-church-primary font-medium max-w-2xl mx-auto border-l-4 border-church-primary pl-6 my-8">
              "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, 
              e não de mal, para vos dar o fim que desejais."
              <footer className="text-sm mt-2 text-muted-foreground">— Jeremias 29:11</footer>
            </blockquote>
          </div>
        </div>

        {/* O que nos move */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-church-primary">
              O Que Nos Move
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {motivacoes.map((motivacao, index) => {
              const IconComponent = motivacao.icone;
              return (
                <Card key={index} className="p-6 hover:shadow-elegant transition-shadow">
                  <CardContent className="space-y-4 p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{motivacao.titulo}</h3>
                        <p className="text-muted-foreground leading-relaxed">{motivacao.descricao}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Olhar para o futuro */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-church-primary">
              Olhar para o futuro
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O nome do projeto não é por acaso: acreditamos que em Cristo sempre há futuro. Por isso, nosso desejo é ampliar 
              o alcance, fortalecer parcerias e envolver cada vez mais pessoas nessa missão.
            </p>
            <blockquote className="text-lg italic text-church-primary font-medium border-l-4 border-church-primary pl-6 my-6">
              "Portanto, meus amados irmãos, sede firmes e constantes, sempre abundantes na obra do Senhor, 
              sabendo que, no Senhor, o vosso trabalho não é vão."
              <footer className="text-sm mt-2 text-muted-foreground">— 1 Coríntios 15:58</footer>
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Faça parte dessa transformação
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como você pode ser parte do Projeto Vida e Futuro, 
            levando esperança e transformação para nossa comunidade.
          </p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-church-primary">
            <Link to="/contato">Entre em contato</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjetoVidaFuturo;
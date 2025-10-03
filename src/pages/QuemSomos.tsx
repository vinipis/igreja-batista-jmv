import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Users, Lightbulb, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const QuemSomos = () => {
  const valores = [
    {
      titulo: "Amor a Deus e ao próximo",
      versiculo: "Amarás ao Senhor teu Deus de todo o teu coração… e ao teu próximo como a ti mesmo. (Mateus 22:37-39)",
      icone: Heart
    },
    {
      titulo: "Fidelidade à Palavra de Deus",
      versiculo: "Toda a Escritura é divinamente inspirada e proveitosa para ensinar, para redarguir, para corrigir, para instruir em justiça. (2 Timóteo 3:16)",
      icone: BookOpen
    },
    {
      titulo: "Comunhão e Unidade",
      versiculo: "Oh! Quão bom e quão suave é que os irmãos vivam em união! (Salmo 133:1)",
      icone: Users
    },
    {
      titulo: "Serviço e Solidariedade",
      versiculo: "Porque o Filho do homem não veio para ser servido, mas para servir. (Marcos 10:45)",
      icone: Lightbulb
    },
    {
      titulo: "Santidade e Testemunho Cristão",
      versiculo: "Sede santos, porque eu sou santo. (1 Pedro 1:16)",
      icone: Shield
    }
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="border-church-primary text-church-primary">
            Quem Somos
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-church-primary">
            Igreja Batista Jardim Maria Virginia
          </h1>
          <p className="text-xl font-semibold text-church-secondary">
            Há Mais de 50 Anos Transformando Vidas em Nossa Comunidade
          </p>
        </div>

        {/* Nossa História */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Há mais de cinco décadas, a Igreja Batista Jardim Maria Virgínia tem sido um farol de esperança e transformação. 
              Nossa missão vai além das paredes do templo – buscamos servir e impactar vidas através de projetos que promovem 
              o desenvolvimento pessoal e comunitário.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Oferecemos cursos gratuitos, capacitando pessoas em áreas como Cuidador de Idosos, Primeiros Socorros, 
              Social Media, Libras e instrumentos musicais (violão, teclado, baixo e bateria). Acreditamos que a educação 
              e a cultura são ferramentas poderosas para o crescimento e fortalecimento de nossa sociedade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nosso compromisso com a comunidade também se expressa através da arte e do teatro, proporcionando espetáculos 
              que tocam corações e compartilham mensagens de fé, esperança e amor.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Seguimos firmes em nossa missão de amar, servir e transformar vidas, confiantes de que juntos podemos construir 
              um futuro melhor para todos. Você é nosso convidado para conhecer mais sobre nossos projetos e fazer parte dessa história!
            </p>
          </div>
        </div>

        {/* Nossa Missão */}
        <div className="bg-gradient-warm rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-church-dark mb-6 text-center">
              Nossa Missão
            </h2>
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-church-dark mb-4">
                  Proclamar o Evangelho e Servir com Amor
                </h3>
                <p className="text-lg text-church-dark/80 leading-relaxed mb-4">
                  Nossa missão é anunciar o Evangelho de Jesus Cristo, fazer discípulos e demonstrar o amor de Deus 
                  através do serviço à comunidade. Buscamos levar esperança, transformação e crescimento espiritual 
                  para todas as pessoas.
                </p>
                <blockquote className="text-lg italic text-church-dark font-medium">
                  "Ide por todo o mundo, pregai o evangelho a toda criatura."
                  <footer className="text-sm mt-2">— Marcos 16:15</footer>
                </blockquote>
              </div>
              
              <div className="border-t border-church-dark/20 pt-6 text-center">
                <h3 className="text-xl font-semibold text-church-dark mb-4">
                  Ser uma Igreja que Faz a Diferença
                </h3>
                <p className="text-lg text-church-dark/80 leading-relaxed mb-4">
                  Queremos ser uma igreja acolhedora, onde vidas são restauradas e fortalecidas pela Palavra de Deus. 
                  Nosso desejo é impactar o bairro e além, sendo referência de fé, comunhão e serviço cristão.
                </p>
                <blockquote className="text-lg italic text-church-dark font-medium">
                  "Assim resplandeça a vossa luz diante dos homens, para que vejam as vossas boas obras e 
                  glorifiquem a vosso Pai, que está nos céus."
                  <footer className="text-sm mt-2">— Mateus 5:16</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* O que nos guia */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-church-primary">
              O que nos guia
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossos valores fundamentais baseados na Palavra de Deus
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {valores.map((valor, index) => {
              const IconComponent = valor.icone;
              return (
                <Card key={index} className="p-6 hover:shadow-elegant transition-shadow">
                  <CardContent className="space-y-4 p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">{valor.titulo}</h3>
                        <p className="text-muted-foreground leading-relaxed italic text-sm">
                          {valor.versiculo}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Fechamento */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg font-medium text-church-primary">
              Que possamos juntos glorificar a Deus e continuar sendo uma igreja viva e atuante!
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Faça parte da nossa família
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Conheça mais sobre nossos ministérios, projetos e eventos. 
            Você é sempre bem-vindo em nossa comunidade!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-church-primary">
              <Link to="/contato">Entre em contato</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-church-primary">
              <Link to="/ministerios">Conheça nossos ministérios</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;
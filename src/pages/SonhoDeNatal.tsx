import Seo from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import YouTubeEmbed from "@/components/YouTubeEmbed";

const SonhoDeNatal = () => {
  const detalhesEspetaculo = [
    {
      titulo: "Teatro Emocionante",
      descricao: "Encenação da história do nascimento de Jesus com atores da própria igreja.",
      icone: Star
    },
    {
      titulo: "Música Inspiradora", 
      descricao: "Coral e ministério de louvor apresentando canções natalinas e de adoração.",
      icone: Heart
    },
    {
      titulo: "Dança e Coreografia",
      descricao: "Apresentações de dança que complementam a narrativa bíblica.",
      icone: Users
    },
    {
      titulo: "Cenografia Especial",
      descricao: "Cenários cuidadosamente preparados para transportar o público à época de Jesus.",
      icone: MapPin
    }
  ];

  return (
    <div className="py-16 lg:py-24">
      <Seo
        title="Sonho de Natal | Igreja Batista Jardim Maria Virginia"
        description="Conheça a campanha Sonho de Natal da Igreja Batista JMV e saiba como participar ou ajudar."
        path="/sonho-de-natal"
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="border-church-primary text-church-primary">
            Um Sonho de Natal
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-church-primary">
            O Rei Nasceu
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Assista nosso espetáculo de natal - uma experiência inesquecível que nos transporta 
            para a maior história de amor já contada: o nascimento de Jesus!
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed 
              videoId="zK0crPrLWCI"
              title="Um Sonho de Natal - O Rei Nasceu"
              className="shadow-elegant"
            />
          </div>
        </div>

        {/* Descrição Principal */}
        <div className="bg-gradient-warm rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-church-dark">
              Mais do que um espetáculo
            </h2>
            <p className="text-lg text-church-dark/80 leading-relaxed">
              <strong>Um Sonho de Natal</strong> é uma experiência inesquecível que nos transporta 
              para a maior história de amor já contada: o nascimento de Jesus!
            </p>
            <p className="text-lg text-church-dark/80 leading-relaxed">
              Através de teatro, música, dança e uma produção emocionante, revivemos a chegada do Salvador 
              ao mundo e refletimos sobre o verdadeiro significado do Natal. <strong>Cada cena, cada canção, 
              cada detalhe foi preparado para tocar corações e lembrar que Cristo veio para nos trazer 
              esperança, paz e salvação.</strong>
            </p>
          </div>
        </div>

        {/* Detalhes do Espetáculo */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-church-primary">
              O que você pode esperar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma produção completa que envolve diferentes formas de arte para contar a história mais importante da humanidade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detalhesEspetaculo.map((detalhe, index) => {
              const IconComponent = detalhe.icone;
              return (
                <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{detalhe.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {detalhe.descricao}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Informações do Evento */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-church-primary text-center mb-8">
              Informações do Próximo Espetáculo
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <Calendar className="h-8 w-8 text-church-primary mx-auto" />
                <h3 className="font-semibold">Data</h3>
                <p className="text-muted-foreground">Dezembro 2025</p>
                <p className="text-sm text-muted-foreground">Data será anunciada em breve</p>
              </div>
              <div className="text-center space-y-2">
                <Clock className="h-8 w-8 text-church-primary mx-auto" />
                <h3 className="font-semibold">Horários</h3>
                <p className="text-muted-foreground">Múltiplas sessões</p>
                <p className="text-sm text-muted-foreground">Tarde e noite</p>
              </div>
              <div className="text-center space-y-2">
                <MapPin className="h-8 w-8 text-church-primary mx-auto" />
                <h3 className="font-semibold">Local</h3>
                <p className="text-muted-foreground">Igreja Batista JMV</p>
                <p className="text-sm text-muted-foreground">Jardim Maria Virginia</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                🎭 Entrada Gratuita
              </Badge>
            </div>
          </div>
        </div>

        {/* Histórico */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-church-primary">
              Uma Tradição de Amor
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              O Sonho de Natal se tornou uma tradição em nossa igreja, reunindo a comunidade 
              todos os anos para celebrar o nascimento de nosso Salvador. É um momento especial 
              de evangelização, adoração e comunhão.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-card border rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold text-church-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Pessoas impactadas anualmente</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-church-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Participantes na produção</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-church-primary mb-2">5+</h3>
                <p className="text-muted-foreground">Anos de tradição</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Não perca esta experiência única!
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Marque em sua agenda e venha viver conosco o verdadeiro espírito do Natal. 
            Traga sua família e amigos para esta celebração especial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-church-primary">
              <Link to="/contato">Mais Informações</Link>
            </Button>
            <Button asChild size="lg" className="bg-church-gold text-church-dark hover:bg-church-gold/90">
              <Link to="/eventos">Ver Outros Eventos</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SonhoDeNatal;
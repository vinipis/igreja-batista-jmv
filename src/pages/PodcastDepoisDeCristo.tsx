import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, Calendar, Users, MessageCircle, Play, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import YouTubeEmbed from "@/components/YouTubeEmbed";

const PodcastDepoisDeCristo = () => {
  const temas = [
    {
      titulo: "Vida Cristã Prática",
      descricao: "Dicas e reflexões sobre como viver os ensinamentos de Jesus no dia a dia.",
      icone: Users
    },
    {
      titulo: "Relacionamentos",
      descricao: "Como construir relacionamentos saudáveis baseados nos princípios bíblicos.",
      icone: MessageCircle
    },
    {
      titulo: "Crescimento Espiritual",
      descricao: "Ensinamentos para fortalecer sua fé e intimidade com Deus.",
      icone: Play
    },
    {
      titulo: "Testemunhos",
      descricao: "Histórias reais de transformação e milagres na vida de pessoas comuns.",
      icone: Mic
    }
  ];

  const episodiosRecentes = [
    {
      titulo: "A Importância da Oração",
      data: "15/03/2025",
      duracao: "25 min",
      descricao: "Como desenvolver uma vida de oração mais consistente e significativa."
    },
    {
      titulo: "Perdão: O Caminho da Liberdade",
      data: "08/03/2025", 
      duracao: "30 min",
      descricao: "Entendendo o poder transformador do perdão em nossas vidas."
    },
    {
      titulo: "Fé em Tempos Difíceis",
      data: "01/03/2025",
      duracao: "28 min",
      descricao: "Como manter a fé firme durante os desafios da vida."
    }
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="border-church-primary text-church-primary">
            Podcast Depois de Cristo
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-church-primary">
            Conversas que Transformam
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Um podcast que aborda temas relevantes da vida cristã de forma prática e acessível, 
            ajudando você a crescer na fé e aplicar os ensinamentos de Jesus no cotidiano.
          </p>
        </div>

        {/* Video de Apresentação */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed 
              videoId="fhsGuLn5PAc"
              title="Podcast Depois de Cristo - Apresentação"
              className="shadow-elegant"
            />
          </div>
        </div>

        {/* Sobre o Podcast */}
        <div className="bg-gradient-warm rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-church-dark">
              Sobre o Podcast
            </h2>
            <p className="text-lg text-church-dark/80 leading-relaxed">
              <strong>Depois de Cristo</strong> é mais do que um podcast - é um espaço de diálogo 
              e crescimento espiritual. Através de conversas autênticas e ensinamentos práticos, 
              exploramos como viver uma vida transformada pelo evangelho.
            </p>
            <p className="text-lg text-church-dark/80 leading-relaxed">
              Cada episódio é uma oportunidade de reflexão e aprendizado, abordando temas que fazem 
              diferença na jornada cristã de pessoas reais, com desafios reais.
            </p>
          </div>
        </div>

        {/* Temas Abordados */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-church-primary">
              Temas que Abordamos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conteúdo relevante e aplicável para sua vida cristã.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {temas.map((tema, index) => {
              const IconComponent = tema.icone;
              return (
                <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{tema.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {tema.descricao}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Episódios Recentes */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-church-primary">
              Episódios Recentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confira os últimos episódios e não perca nenhum conteúdo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodiosRecentes.map((episodio, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{episodio.duracao}</Badge>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{episodio.data}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{episodio.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {episodio.descricao}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Ouvir Episódio
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Como Ouvir */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-church-primary">
              Como Ouvir
            </h2>
            <p className="text-lg text-muted-foreground">
              Nosso podcast está disponível nas principais plataformas de áudio e também no YouTube.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <Button variant="outline" className="h-12">
                <Headphones className="h-5 w-5 mr-2" />
                Spotify
              </Button>
              <Button variant="outline" className="h-12">
                <Play className="h-5 w-5 mr-2" />
                YouTube
              </Button>
              <Button variant="outline" className="h-12">
                <Headphones className="h-5 w-5 mr-2" />
                Apple Podcasts
              </Button>
              <Button variant="outline" className="h-12">
                <Headphones className="h-5 w-5 mr-2" />
                Google Podcasts
              </Button>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto bg-card border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-church-primary text-center mb-8">
              Impacto do Podcast
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold text-church-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Episódios publicados</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-church-primary mb-2">1000+</h3>
                <p className="text-muted-foreground">Ouvintes mensais</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-church-primary mb-2">4.8★</h3>
                <p className="text-muted-foreground">Avaliação dos ouvintes</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Faça parte da nossa comunidade!
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Siga nosso podcast e não perca nenhum episódio. Compartilhe com amigos e 
            ajude a espalhar mensagens de fé e esperança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-church-primary">
              <Link to="/contato">Sugira um Tema</Link>
            </Button>
            <Button asChild size="lg" className="bg-church-gold text-church-dark hover:bg-church-gold/90">
              <Link to="/eventos">Eventos da Igreja</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastDepoisDeCristo;
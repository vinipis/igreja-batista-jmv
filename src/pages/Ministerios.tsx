import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Star, Music, UserCheck, Camera, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Ministerios = () => {
  const ministerios = [
    {
      nome: "Casais",
      icone: Heart,
      descricao: "Fortalecendo relacionamentos através da palavra de Deus e comunhão entre casais cristãos.",
      detalhes: "Encontros mensais com estudos bíblicos, dinâmicas e momentos de oração voltados para o fortalecimento do matrimônio.",
      cor: "church-primary"
    },
    {
      nome: "Homens",
      icone: Users,
      descricao: "Discipulado masculino focado em liderança cristã, paternidade e responsabilidade espiritual.",
      detalhes: "Reuniões semanais com estudos específicos para homens, desafios da liderança familiar e crescimento espiritual.",
      cor: "church-dark"
    },
    {
      nome: "União Feminina",
      icone: Heart,
      descricao: "Mulheres unidas em oração, estudo da palavra e apoio mútuo na jornada cristã.",
      detalhes: "Encontros para oração, estudos bíblicos específicos para mulheres e projetos sociais da igreja.",
      cor: "church-rose"
    },
    {
      nome: "Juventude 180º",
      icone: Star,
      descricao: "Jovens transformados pelo evangelho, vivendo uma vida de 180 graus em Cristo.",
      detalhes: "Encontros semanais com louvor, palavra, jogos e atividades voltadas para jovens e adolescentes.",
      cor: "church-gold"
    },
    {
      nome: "Ministério Infantil",
      icone: Heart,
      descricao: "Educação cristã para crianças através de histórias, brincadeiras e ensino bíblico.",
      detalhes: "Escola bíblica dominical, atividades recreativas e ensino da palavra de forma lúdica e apropriada para cada idade.",
      cor: "church-orange"
    },
    {
      nome: "Ministério de Louvor",
      icone: Music,
      descricao: "Adoração e louvor que conduz a congregação à presença de Deus através da música.",
      detalhes: "Ensaios semanais, participação nos cultos e eventos especiais, desenvolvendo talentos musicais para a glória de Deus.",
      cor: "church-primary"
    },
    {
      nome: "Recepção",
      icone: UserCheck,
      descricao: "Primeira impressão de amor e acolhimento para todos que visitam nossa igreja.",
      detalhes: "Treinamento para receber bem visitantes, orientações sobre a igreja e acompanhamento de novos membros.",
      cor: "church-rose"
    },
    {
      nome: "Ministério de Mídias",
      icone: Camera,
      descricao: "Comunicação e tecnologia a serviço do evangelho através de diversas plataformas digitais.",
      detalhes: "Transmissões ao vivo, produção de conteúdo, fotografia de eventos e gestão das redes sociais da igreja.",
      cor: "church-dark"
    },
    {
      nome: "Melhor Idade",
      icone: Clock,
      descricao: "Comunhão e crescimento espiritual para pessoas na terceira idade com atividades especiais.",
      detalhes: "Encontros quinzenais com estudos bíblicos, passeios, confraternizações e acompanhamento pastoral específico.",
      cor: "church-gold"
    }
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="border-church-primary text-church-primary">
            Nossos Ministérios
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-church-primary">
            Encontre seu lugar na família
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Temos ministérios para todas as idades e momentos da vida. Cada ministério é uma oportunidade 
            de servir a Deus e crescer em comunhão com nossos irmãos.
          </p>
        </div>

        {/* Ministérios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ministerios.map((ministerio, index) => {
            const IconComponent = ministerio.icone;
            return (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br from-church-${ministerio.cor} to-church-${ministerio.cor}/80 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{ministerio.nome}</CardTitle>
                  <CardDescription className="text-base">
                    {ministerio.descricao}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ministerio.detalhes}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Quer participar de algum ministério?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como você pode usar seus dons e talentos 
            para servir a Deus e abençoar vidas em nossa comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-church-primary">
              <Link to="/contato">Entre em Contato</Link>
            </Button>
            <Button asChild size="lg" className="bg-church-gold text-church-dark hover:bg-church-gold/90">
              <Link to="/eventos">Ver Próximos Encontros</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministerios;
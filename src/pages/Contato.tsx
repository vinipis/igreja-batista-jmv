import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// no topo do arquivo
const GA_MEASUREMENT_ID = "G-2C9348S1JX"; // seu ID (opcional no event)

// helper
const track = (name: string, params?: Record<string, any>) => {
  const w = window as any;
  if (typeof window !== "undefined" && w.gtag) {
    const payload = { ...(params || {}), debug_mode: true, send_to: GA_MEASUREMENT_ID };
    console.debug("[GA4] event:", name, payload);
    w.gtag("event", name, payload);
  } else {
    console.warn("[GA4] gtag ainda não disponível");
  }
};

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  });

  // Schema de validação
  const contactSchema = z.object({
    nome: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
    email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
    telefone: z.string().trim().optional(),
    assunto: z.string().min(1, "Selecione um assunto"),
    mensagem: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem muito longa")
  });

  const assuntosDisponiveis = [
    "Informações sobre a Igreja",
    "Participar de um Ministério",
    "Projeto Vida & Futuro",
    "Oração e Aconselhamento",
    "Eventos e Atividades",
    "Batismo e Membresia",
    "Sugestões e Feedback",
    "Outros"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validação dos dados
      const validatedData = contactSchema.parse(formData);
      
      // Simular envio (aqui seria integrado com AWS SES ou similar)
      //await new Promise(resolve => setTimeout(resolve, 2000));

      const response = await fetch("/api/contact",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      // 3. evento GA4
      track("form_submitted", {
        form_name: "contato",
        subject: validatedData.assunto,
        has_phone: Boolean(validatedData.telefone),
      });

      // 4. feedback p/ usuário
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Que Deus abençoe!",
      });

      // Limpar formulário
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: ""
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Erro no formulário",
          description: firstError.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Erro ao enviar mensagem",
          description: "Tente novamente ou entre em contato por telefone.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="border-church-primary text-church-primary">
            Entre em Contato
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-church-primary">
            Estamos aqui para você
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tem dúvidas, precisa de oração ou quer conhecer mais sobre nossa igreja? 
            Entre em contato conosco. Será um prazer conversar com você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div>
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-church-primary flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2" />
                  Envie sua mensagem
                </CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome *</Label>
                      <Input
                        id="nome"
                        type="text"
                        value={formData.nome}
                        onChange={(e) => handleInputChange("nome", e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input
                        id="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange("telefone", e.target.value)}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="assunto">Assunto *</Label>
                      <Select value={formData.assunto} onValueChange={(value) => handleInputChange("assunto", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          {assuntosDisponiveis.map((assunto) => (
                            <SelectItem key={assunto} value={assunto}>
                              {assunto}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem *</Label>
                    <Textarea
                      id="mensagem"
                      value={formData.mensagem}
                      onChange={(e) => handleInputChange("mensagem", e.target.value)}
                      placeholder="Compartilhe conosco sua dúvida, pedido de oração ou como podemos ajudá-lo..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-church-primary hover:bg-church-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    * Campos obrigatórios. Suas informações serão tratadas com privacidade e segurança.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-6">
            {/* Informações Principais */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-church-primary">
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-church-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Endereço</h3>
                    <p className="text-muted-foreground text-sm">
                      Igreja Batista Jardim Maria Virginia<br />
                      Jardim Maria Virginia<br />
                      São Paulo - SP
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-church-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-muted-foreground text-sm">(11) 0000-0000</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-church-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground text-sm">contato@igrejabatistajmv.com.br</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Horários */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-church-primary flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Horários de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Domingos</span>
                  <span className="text-muted-foreground">9h (EBD) • 18h (Culto)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Quartas-feiras</span>
                  <span className="text-muted-foreground">19h30 (Oração)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Secretaria</span>
                  <span className="text-muted-foreground">Seg-Sex: 9h às 17h</span>
                </div>
              </CardContent>
            </Card>

            {/* Como Chegar */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-church-primary">
                  Como Chegar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Estamos localizados no Jardim Maria Virginia, região de fácil acesso por transporte público e particular.
                </p>
                <Button variant="outline" className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Ver no Google Maps
                </Button>
              </CardContent>
            </Card>

            {/* Emergências */}
            <div className="bg-church-primary/10 border border-church-primary/20 rounded-lg p-4">
              <h3 className="font-semibold text-church-primary mb-2">
                Emergências Pastorais
              </h3>
              <p className="text-sm text-muted-foreground">
                Para situações de emergência que necessitem de acompanhamento pastoral urgente, 
                entre em contato pelo telefone: <strong>(11) 9999-9999</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
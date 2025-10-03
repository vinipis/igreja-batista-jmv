🌳 Igreja Batista JMV

Este é o repositório do site oficial da Igreja Batista Jardim Maria Virgínia (JMV).
Nosso desejo é usar a tecnologia para apoiar a missão da igreja: proclamar Jesus, cuidar de pessoas e caminhar juntos em fé.

Aqui você vai encontrar todo o código e configurações que fazem o site funcionar.

✨ Objetivo

Compartilhar informações sobre a igreja e seus ministérios

Divulgar eventos e atividades

Facilitar o contato com a secretaria e a liderança

Ser um canal de bênção na internet

🚀 O que usamos por aqui

Frontend: React + Vite + TailwindCSS

Backend/API: Node.js (Express)

Infraestrutura: Docker + Docker Compose

Servidor Web: Nginx

Certificados SSL: Let's Encrypt

Integração AWS: envio de mensagens de contato via SNS

📂 Estrutura básica do projeto
infra/          # Configurações de infraestrutura (Docker, Nginx, API)
src/            # Código do frontend (site)
public/         # Arquivos estáticos (favicon, index.html, imagens)

▶️ Como rodar localmente

Se você quiser testar em sua máquina:

git clone https://github.com/vinipis/igreja-batista-jmv.git
cd igreja-batista-jmv/infra
docker compose up --build


Depois é só abrir:

http://localhost
 → site

http://localhost:3000/api
 → API

🌐 Como publicamos em produção

No servidor, já temos o .env configurado com as variáveis da AWS e do domínio.

Sempre que precisar atualizar algo no site:

git pull origin main
docker compose -f infra/docker-compose.yml up -d --build


O Certbot já está preparado para renovar automaticamente os certificados SSL.

🤝 Como contribuir

Se você faz parte da igreja e tem dons com tecnologia, design ou comunicação, pode ajudar a melhorar:

Conteúdo e textos do site

Layout e experiência do usuário

Automação e integrações

Toda ajuda é bem-vinda ❤️

📧 Contato

Site: www.igrejabatistajmv.com.br

Email: igreja.batistajmv@gmail.com

👉 Esse projeto é da igreja para a igreja.
Que possamos usar a tecnologia como ferramenta para espalhar a mensagem de Cristo 🙏
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns');

const app = express();
const PORT = process.env.PORT || 3000;

// A API roda atrás do nginx (1 hop). Sem isso, req.ip (e o rate limiter)
// sempre veria o IP interno do container nginx, e o limite viraria
// efetivamente global em vez de por-visitante.
app.set('trust proxy', 1);

// --- Middlewares
// CSP fica só a cargo do nginx (essa API só responde JSON) para evitar
// dois headers Content-Security-Policy divergentes na mesma resposta.
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '1mb' })); // body-parser json
app.use((req, _res, next) => { console.log(`[API] ${req.method} ${req.url}`); next(); });

// CORS: permite teu domínio em produção
const allowOrigin = process.env.ALLOW_ORIGIN || `https://${process.env.SERVER_NAME || ''}`;
app.use(cors({ origin: allowOrigin, methods: ['POST','GET','OPTIONS'] }));

// --- Health
app.get('/health', (_req, res) => res.status(200).json({ ok: true }));

// --- AWS SNS
const region = process.env.AWS_REGION;
const topicArn = process.env.SNS_TOPIC_ARN;
const sns = new SNSClient({ region });

// Formulário de contato de igreja: tráfego baixo, submissões legítimas
// são esporádicas. 5 envios por IP a cada 15min cobre reenvio por erro
// e barra flood automatizado (que geraria custo de SNS sem limite).
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Muitas tentativas de envio. Tente novamente em alguns minutos.' },
});

// --- POST /contact (atenção: sem /api)
app.post('/contact', contactLimiter, async (req, res) => {
  try {
    const { nome, email, telefone = '', assunto, mensagem } = req.body || {};
    if (!nome || !email || !assunto || !mensagem) {
      return res.status(400).json({ error: 'Campos obrigatórios: nome, email, assunto, mensagem' });
    }

    const subject = `Contato do site - ${assunto}`;
    const msg = [
      `Nome: ${nome}`,
      `Email: ${email}`,
      `Telefone: ${telefone}`,
      `Assunto: ${assunto}`,
      '',
      mensagem
    ].join('\n');

    console.log('[SNS] Publicando no tópico:', topicArn);
    const out = await sns.send(new PublishCommand({
      TopicArn: topicArn,
      Subject: subject,
      Message: msg,
      MessageAttributes: {
        fromSite: { DataType: 'String', StringValue: 'igreja-jmv' }
      }
    }));

    console.log('[SNS] OK:', out.MessageId);
    return res.status(200).json({ ok: true, id: out.MessageId });

  } catch (err) {
    console.error('[SNS] ERRO:', err);
    return res.status(500).json({ error: 'Falha ao enviar mensagem' });
  }
});

app.listen(PORT, () => console.log(`API on :${PORT}`));

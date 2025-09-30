const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const AWS = require('aws-sdk');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middlewares
app.use(helmet());
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
AWS.config.update({ region });
const sns = new AWS.SNS();

// --- POST /contact (atenção: sem /api)
app.post('/contact', async (req, res) => {
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
    const out = await sns.publish({
      TopicArn: topicArn,
      Subject: subject,
      Message: msg,
      MessageAttributes: {
        fromSite: { DataType: 'String', StringValue: 'igreja-jmv' }
      }
    }).promise();

    console.log('[SNS] OK:', out.MessageId);
    return res.status(200).json({ ok: true, id: out.MessageId });

  } catch (err) {
    console.error('[SNS] ERRO:', err);
    return res.status(500).json({ error: 'Falha ao enviar mensagem' });
  }
});

app.listen(PORT, () => console.log(`API on :${PORT}`));

const express = require('express');
const AWS = require('aws-sdk');
const cors = require('cors');
const helmet = require('helmet');
const Joi = require('joi');

const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS apenas do seu domínio (configurado via ALLOW_ORIGIN)
const allowOrigin = process.env.ALLOW_ORIGIN || '*';
app.use(cors({ origin: allowOrigin, methods: ['POST','OPTIONS'] }));

AWS.config.update({ region: process.env.AWS_REGION || 'us-east-1' });
const sns = new AWS.SNS({ apiVersion: '2010-03-31' });
const topicArn = process.env.SNS_TOPIC_ARN;

const schema = Joi.object({
  nome: Joi.string().min(3).max(120).required(),
  email: Joi.string().email().required(),
  assunto: Joi.string().min(3).max(120).required(),
  telefone: Joi.string().allow('', null),
  mensagem: Joi.string().min(10).max(5000).required()
});

app.post('/api/contact', async (req, res) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false });
  if (error) return res.status(400).json({ ok: false, errors: error.details });

  const { nome, email, assunto, telefone, mensagem } = value;
  const text =
`Nova mensagem do site:

Nome: ${nome}
Email: ${email}
Telefone: ${telefone || '-'}
Assunto: ${assunto}

Mensagem:
${mensagem}`;

  try {
    await sns.publish({
      TopicArn: topicArn,
      Subject: `[Site] ${assunto} - ${nome}`,
      Message: text
    }).promise();

    return res.status(204).send();
  } catch (e) {
    console.error('SNS publish error', e);
    return res.status(502).json({ ok: false });
  }
});

app.get('/api/health', (_, res) => res.json({ ok: true }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API on :${port}`));

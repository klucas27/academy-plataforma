import { OpenAI } from 'openai';

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export async function gerarPergunta() {
  const prompt = `Gere uma pergunta de múltipla escolha sobre JavaScript 
  (uso de for, while, laços de repetições, arrays e outros assuntos para logicas com js).

Formato JSON:
{
  "enunciado": "..."
  "codigo": "...",
  "alternativas": { "a": "...", "b": "...", "c": "...", "d": "..." },
  "respostaCorreta": "..."
}

A pergunta deve conter (Obrigatoriamente):
- Um pequeno trecho de código.
- enunciado: Qual é a saída?
- codigo: codigo do enunciado.
- 4 alternativas (a, b, c, d).
- Informe a resposta correta em 'respostaCorreta'.  

`;

  const resposta = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7
  });

  const texto = resposta.choices[0].message.content;

  try {
    return JSON.parse(texto);
  } catch (e) {
    console.error('Erro ao interpretar JSON:', texto);
    throw new Error('Resposta inválida da IA');
  }
}

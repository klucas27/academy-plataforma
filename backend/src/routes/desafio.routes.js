import express from 'express';
import { gerarPergunta } from '../services/openai.service.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const pergunta = await gerarPergunta();
    const { correta, ...semResposta } = pergunta;
    res.json(semResposta);
  } catch (e) {
    res.status(500).json({ erro: e.message });
  }
});

export default router;

import './loadEnv.js'

import express from 'express';
import cors  from 'cors'
import desafioRoutes from './routes/openai.routes.js';
import usersRoutes from './routes/users.routes.js';


// console.log("Chave OpenAI:", process.env.OPENAI_API_KEY);  // Adicione isso para verificar se a chave está sendo carregada

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

app.use('/api', desafioRoutes);
app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

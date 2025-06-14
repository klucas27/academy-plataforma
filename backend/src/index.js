import './loadEnv.js'

console.log("✅ Iniciando servidor...");


import express from 'express';
import cors  from 'cors'
import desafioRoutes from './routes/openai.routes.js';
import usersRoutes from './routes/users.routes.js';

console.log("✅ Rotas importadas com sucesso:", {
  users: typeof usersRoutes,
  openai: typeof desafioRoutes,
});

// console.log("Chave OpenAI:", process.env.OPENAI_API_KEY);  // Adicione isso para verificar se a chave está sendo carregada

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

app.use('/openaiuse', desafioRoutes);
app.use('/users', usersRoutes);

console.log("✅ Middleware e rotas registrados.");


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

import express from 'express';
import { createUsersTable, checkUser } from '../models/users.js';

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        // Garante que a tabela existe antes de qualquer operação
        await createUsersTable();

        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
        }

        const user = await checkUser(username, password);
        if (user) {
            res.json({ success: true, user });
        } else {
            res.status(401).json({ success: false, error: 'Usuário ou senha incorretos.' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro no servidor.' });
    }
});

router.get('/test', (req, res) => res.json({ ok: true }));


export default {router};

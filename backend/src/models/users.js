import pool from '../database/db.js'

// Cria a tabela 'users' caso não exista
export async function createUsersTable() {
    const sql = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            vidas INT DEFAULT 5,
            pontos INT DEFAULT 0
        )
    `;
    await pool.query(sql);
}

// Verifica se usuário e senha existem na tabela
export async function checkUser(username, password) {
    const [rows] = await pool.query(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password]
    );
    return rows.length > 0 ? rows[0] : null;
}
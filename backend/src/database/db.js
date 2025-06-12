import mysql from 'mysql2';
import '../loadEnv.js'


const pool = mysql.createPool({
    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    database: process.env.DATABASE_BD,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err.message);
  } else {
    // console.log('✅ Conectado ao MySQL com sucesso!');
    connection.release(); // libera a conexão pro pool
  }
});


export default pool.promise();
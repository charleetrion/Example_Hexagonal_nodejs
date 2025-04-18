// Aquí configuramos la conexión a MySQL.
// Se carga la configuración desde .env
// conexión MySQL y se exporta para ser utilizada en userRepository.js 

require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT 
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Error al conectar a MySQL:", err);
    return;
  }
  console.log("✅ Conectado a MySQL");
});

module.exports = connection;

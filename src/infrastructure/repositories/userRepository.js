// Este archivo maneja las consultas SQL para la entidad User
// Se implementan funciones para obtener, crear y eliminar usuarios desde la base de datos
// Devuelve instancias de User 

const connection = require("../database/mysqlConnection");
const User = require("../../domain/user");

class UserRepository {
  getAllUsers(callback) {
    connection.query("SELECT * FROM users", (err, results) => {
      if (err) return callback(err, null);
      const users = results.map(row => new User(row.id, row.name, row.lastname, row.email, row.create_at));
      callback(null, users);
    });
  }

  getUserById(id, callback) {
    connection.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      if (results.length === 0) return callback(null, null);
      const user = new User(results[0].id, results[0].name, results[0].lastname, results[0].email, results[0].create_at);
      callback(null, user);
    });
  }

  createUser(name, lastname, email, callback) {
    const sql = "INSERT INTO users (name, lastname, email) VALUES (?, ?, ?)";
    connection.query(sql, [name, lastname, email], (err, result) => {
      if (err) return callback(err, null);
      callback(null, { id: result.insertId, name, lastname, email });
    });
  }

  deleteUser(id, callback) {
    connection.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, result.affectedRows > 0);
    });
  }
}

module.exports = new UserRepository();

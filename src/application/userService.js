// reglas de negocio antes de acceder al repositorio, Valida datos antes de enviarlos al repositorio
// Lógica de negocio para verificar si el usuario existe antes de eliminarlo

const userRepository = require("../infrastructure/repositories/userRepository");

class UserService {
  getAllUsers(callback) {
    userRepository.getAllUsers(callback);
  }

  getUserById(id, callback) {
    if (!Number.isInteger(Number(id))) {
      return callback({ error: "El ID debe ser un número válido" }, null);
    }
    userRepository.getUserById(id, callback);
  }

  createUser(name, lastname, email, callback) {
    if (!name || !lastname || !email) {
      return callback({ error: "Todos los campos son obligatorios" }, null);
    }
    userRepository.createUser(name, lastname, email, callback);
  }

  deleteUser(id, callback) {
    userRepository.deleteUser(id, (err, deleted) => {
      if (err) return callback(err, null);
      if (!deleted) return callback({ error: "Usuario no encontrado" }, null);
      callback(null, { message: `Usuario con ID ${id} eliminado` });
    });
  }
}

module.exports = new UserService();

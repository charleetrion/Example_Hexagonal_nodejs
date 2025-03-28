// las funciones que manejarán las solicitudes HTTP
// Llama a userService para manejar la lógica de cada operación
 
const userService = require("../../application/userService");

class UserController {
  getAllUsers(req, res) {
    userService.getAllUsers((err, users) => {
      if (err) return res.status(500).json({ error: "Error al obtener usuarios" });
      res.json(users);
    });
  }

  getUserById(req, res) {
    const { id } = req.params;
    userService.getUserById(id, (err, user) => {
      if (err) return res.status(400).json(err);
      if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
      res.json(user);
    });
  }

  createUser(req, res) {
    const { name, lastname, email } = req.body;
    userService.createUser(name, lastname, email, (err, user) => {
      if (err) return res.status(400).json(err);
      res.status(201).json(user);
    });
  }

  deleteUser(req, res) {
    const { id } = req.params;
    userService.deleteUser(id, (err, result) => {
      if (err) return res.status(400).json(err);
      res.json(result);
    });
  }
}

module.exports = new UserController();

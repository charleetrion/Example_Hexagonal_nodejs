// Se Define las rutas y las conecta con el controlador
// rutas para usuarios y las conecta con userController 

const express = require("express");
const validateUser = require("../middlewares/validationMiddleware");
const userController = require("../controllers/userController");

const router = express.Router();

// Ruta para crear un usuario con validación
router.get("/", userController.getAllUsers);  
router.post("/", validateUser, userController.createUser);
router.get("/:id", userController.getUserById);
router.delete("/:id", userController.deleteUser);

module.exports = router;

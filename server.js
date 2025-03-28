// Configuro Express y usa las rutas definidas en userRoutes.js  

require("dotenv").config();
const express = require("express");
const userRoutes = require("./src/infrastructure/routes/userRoutes");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente 🚀");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

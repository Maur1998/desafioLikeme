const { findAll, agregar } = require("./operaciones");

const express = require("express");

const app = express();
const cors = require("cors");

app.listen(3000, console.log("Servidor iniciado"));
app.use(express.json());
app.use(cors());

app.get("/posts", async (req, res) => {
  try {
    const datos = await findAll();
    return res.json(datos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    await agregar(titulo, url, descripcion);
    res.send("Datos agregados exitosamente");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

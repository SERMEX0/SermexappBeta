require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

// 🔗 Conexión a MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "+julioo+", // Cambia esto si tienes contraseña en tu MySQL
  database: "sermex_db"
});

db.connect(err => {
  if (err) {
    console.error("❌ Error de conexión a MySQL:", err);
    return;
  }
  console.log("📡 Conectado a MySQL");
});

// 🔐 Ruta de Login
app.post("/login", (req, res) => {
  const { correo, password } = req.body;

  console.log("Correo recibido:", correo);
  console.log("Contraseña recibida:", password);

  db.query("SELECT * FROM usuarios WHERE correo = ?", [correo], (err, results) => {
    if (err) return res.status(500).json({ error: "Error en el servidor" });

    if (results.length === 0) return res.status(401).json({ error: "Usuario no encontrado" });

    const user = results[0];

    // 🛡️ Comparar contraseña ingresada con la almacenada en la BD
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: "Error al comparar contraseña" });

      if (!isMatch) return res.status(401).json({ error: "Contraseña incorrecta" });

      // 🔑 Generar token de autenticación
      const token = jwt.sign({ id: user.id, correo: user.correo }, "secreto", { expiresIn: "1h" });

      res.json({ mensaje: "Inicio de sesión exitoso", token });
    });
  });
});

// 🔏 Ruta para Registrar Usuario (Guarda la contraseña encriptada)
app.post("/register", (req, res) => {
  const { correo, password } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).json({ error: "Error al encriptar contraseña" });

    db.query("INSERT INTO usuarios (correo, password) VALUES (?, ?)", [correo, hash], (err, result) => {
      if (err) return res.status(500).json({ error: "Error al registrar usuario" });

      res.json({ mensaje: "Usuario registrado correctamente" });
    });
  });
});

// 🚀 Iniciar Servidor
app.listen(5000, () => {
  console.log("✅ Servidor corriendo en http://localhost:5000");
});

app.get("/", (req, res) => {
  res.send("🚀 Servidor funcionando correctamente");
});

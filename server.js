const express = require("express");
const path = require("path");

//Conexion de rutas del API
const productosRoutes = require("./src/routes/rutasProductos");
const authRoutes = require("./src/routes/rutasAutenticacion");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

app.use("/api", productosRoutes);
app.use("/api", authRoutes);

app.get("/", (req,res)=>{
    res.send("API de la Taquería funcionando 🌮");
});

app.listen(3000, ()=>{
console.log("Servidor corriendo en puerto 3000");
});


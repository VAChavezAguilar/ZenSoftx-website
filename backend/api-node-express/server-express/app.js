const express = require("express");
const app = express();

app.listen(3000, ()=>{
    console.log("El servidor esta ejecutandose en http://localhost:3000/");
})

app.use(express.json());
app.use((req, res, next) => {
    console.log(`Ruta solicitada: ${req.url}`);
    next();
})

app.get('/', (req, res) => {
    res.send("ZenSoftx en Línea");
})

app-get('/usuarios', (req, res) => {
    res.send("Usuarios registrados en el sistema")
})

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    res.send(`ID del usuario dentro del sistema: ${id}`);
})

const fs = require("fs");

app.get("/usuarios", (req, res) =>{
    const data = fs.readFileSync('./usuarios.json');
})


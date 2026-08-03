import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generateToken, createHash, comparePassword } from "./auth.js";
import { verifyToken, permitirRoles } from "./middlewares.js";

dotenv.config();

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

const userDemo = [
    {
        id: 10,
        nombre: "Daniel Bravo",
        email: "dani_pro@email.com",
        rol: "admin",
        hash: createHash("12345")
    }
]

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email !== userDemo.email) {
        return res.status(401).json({ msg: "Credenciales invalidas" });
    }

    const coincide = comparePassword(password, userDemo.hash);
    if (!coincide) {
        return res.status(401).json({ msg: "Credenciales invalidas" });
    }

    const token = generateToken(userDemo);
    res.json({
        msg: "Login exitoso",
        token
    });
})

app.get("/perfil", verifyToken, (req, res) => {
    res.json({
        msg: "Bienvenido usuario"
    });
})

app.get("/admin", verifyToken, permitirRoles("admin"), (req, res) => {
    res.json({
        msg: "Bienvenido administrador"
    });
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Servidor iniciado");
});


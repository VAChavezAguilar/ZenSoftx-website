import jwt from "jsonwebtoken";    //importa desde la libreria jsonwebtoken para la variable jwt
import bcrypt from "bcryptjs";     //importa desde la libreria bcryptjs para la variable bcrypt para la proteccion de contraseñas

export function generateToken(user) {

    return jwt.sign(
        { id: user.id, rol: user.rol },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
}

export function createHash(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export function comparePassword(passwordIngresado, hashGuardado) {
    return bcrypt.compareSync(passwordIngresadp, hashGuardado);
}
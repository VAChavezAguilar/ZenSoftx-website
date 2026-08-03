import jwt from "jsonwebtoken"; //importamos la libreria jsonwebtoken para el manejo de tokens

export function verifyToken(req, res, next) {

    const token = req.headers.authorizations?.split("")[1]; //obtiene el token del encabezado de autorizacion
    if (!token) {
        return res.status(401).json({ msg: "Acceso denegado, no hay token" });
    } try {
        const user = jwt.verify(token, process.env.JWT_SECRET);   //Verifica el token, utilizando la clave secreta
        req.user = user;  //Agrega la informacion del usuario al objeto de la peticion
        next(); //Permite que la peticion continue al siguiente middleware o ruta
    } catch (error) {
        return res.status(403).json({ msg: "Token invalido o expirado" });
    }

}

export function permitirRoles(...permitirRoles) {
    return (req, res, next) => {
        const rolUser = req.user?.rol;   //Obtiene el rol del usuario desde el objeto de solicitud
        if (!permitirRoles.includes(rolUser)) {
            return res.status(403).json({ msg: "No tienes permiso para acceder a esta ruta" });
        }
        next();   //Continua con el siguiene middleware o ruta
    }
}
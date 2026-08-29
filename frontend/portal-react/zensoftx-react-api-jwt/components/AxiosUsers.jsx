import { useState } from "react";
import { getAxiosUsers } from "../api/usersAxios";

export default function AxiosUsers(){

    const {users, setUsers} = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    const loadUsers = async() => {
        try {
            setLoading(true);
            setError("");
            const dato = await getAxiosUsers();
            setUsers(dato);
        } catch (error) {

            const mensaje = error.response? `Error del servidor ${error.response.status}` : error.message;
            setError(mensaje);
            setUsers([]);
        }finally{
            setLoading(false);
        }
    };

    return (
        <section>
            <h2>Usuarios con Axios</h2>
            <button onClick={loadUsers}>Cargar usuarios con Axios</button>

            {loading && <p>Cargando datos...</p>}
            {error && <p className="error">{error}</p>}

            <ul>
                {users.map((user) => (
                    <li key={user.id}> {user.name} - {user.email}</li>
                ))}
            </ul>
        </section>
    );

}
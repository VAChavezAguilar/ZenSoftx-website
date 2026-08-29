import { useState } from "react";
import { getFetchUsers } from "../api/usersFetch";

export default function FetchUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const loadUsers = async() =>{
        try {
            setLoading(true);
            setError("");
            const dato = await getFetchUsers();
            setUsers(dato);
        } catch (error) {
            setError(error.message);
            setUsers([]);
        } finally{
            setLoading(false);
        }
    };

    return (
        
        <section className="card">
            <h2>Usuarios con Fetch</h2>
            <p></p>

            <button onClick={loadUsers}>Cargar usuarios con Fetch</button>

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

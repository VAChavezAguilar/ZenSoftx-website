import { useEffect, useState } from "react";

export default function Usuario() {

    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        async function cargarDatos() {
            const res = await fetch("https:// ");
            const data = await res.json();

            setUsuario(data);
        }

        cargarDatos();
    }, []);

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {usuario.map((u) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
        </div>
    );
}
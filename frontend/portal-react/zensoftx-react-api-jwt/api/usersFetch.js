export const getFetchUsers = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
    }

    const datos = await response.json();

    if (!Array.isArray(datos)) {
        throw new Error("La respuesta no es un array de usuarios");
    }

    return datos;
};
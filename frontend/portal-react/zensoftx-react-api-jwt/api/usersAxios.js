import axios from "axios";

export const getAxiosUsers = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");

    if (!Array.isArray(data)) {
        throw new Error("La respuesta no es un array de usuarios");
    }
    return data;
}
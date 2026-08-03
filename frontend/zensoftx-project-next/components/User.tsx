type UserProps = {
    nombre: string;
}

export default function User({nombre}: UserProps) {
    return <h1>{nombre}</h1>
}
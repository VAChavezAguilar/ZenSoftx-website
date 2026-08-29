export const dynamic = "force-dynamic"

type Automation ={
    id : number
    name : string
    price : number
    description : string
}

const products : Automation[] = [
    {id: 1, name: "Sincronización Inteligente de Leads CRM", price: 170, description: "Flujo automatizado que analiza los nuevos contactos entrantes con la API de OpenAI (GPT-4o), califica el perfil del lead y sincroniza automáticamente los datos en HubSpot CRM y listas de Mailchimp."},
    {id: 2, name: "Procesamiento de Pagos y Notificaciones Slack", price: 180, description: "Flujo automatizado para procesar pagos"},
    {id: 3, name: "Generación y Envío Automático de Facturas", price: 190, description: "Flujo automatizado para generar y enviar facturas a los clientes"} 
]

type Props = {
    params: Promise<{id: number}>
}

export default async function ProductPage({params}: Props) {
    const {id} = await params
    const product = products.find((item) => item.id === id)
    const dateConsult = new Date().toLocaleString()

    if(!product) {
        return <h1>Automatizacion no encontrada</h1>
    }
    return (
        <main>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>Fecha de consulta: {dateConsult}</p>
        </main>
    )
}

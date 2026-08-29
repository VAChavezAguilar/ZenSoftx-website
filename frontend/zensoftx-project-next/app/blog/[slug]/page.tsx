type Post = {
    slug: string
    title: string
    content: string
}

const posts : Post[] = [
    {
        slug: "nextjs-frontend",
        title: "Next.js for routes in frontend",
        content: "Permite crear rutas dinamicas para el proyecto"
    },
    {
        slug: "nextjs-backend",
        title: "Next.js for api routes",
        content: "Permite crear rutas dinamicas para el proyecto"
    }
]

export function generateStaticParams() {
    return posts.map((post)=>({
        slug: post.slug
    }))
}

type Props = {
    params : Promise<{slug : string}>
}

export default async function PostPage({params}: Props) {
    const {slug} = await params
    const post = posts.find((item) => item.slug === slug)

    if(!post){
        return <h1>Article is not exist</h1>
    }
    return (
        <article>
            <h1>{post?.title}</h1>
            <p>{post?.content}</p>
        </article>
    );
}


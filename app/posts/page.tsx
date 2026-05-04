import Link from "next/link";

type Post = {
    id: number;
    title: string;
};

async function getTime() {
    const res = await fetch("http://localhost:3000/api/time", {
        next: { revalidate: 10 },
    });
    return res.json();
}

async function getPosts(): Promise<Post[]> {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //     cache: "force-cache", // Generación Estática por defecto
    // });



    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 10 }, // Generación Estática con Revalidación cada 10 segundos
    });

    // Static Site Generation (SSG) Genera la página en tiempo de compilación
    return res.json();
}

export default async function PostsPage() {
    const posts = await getPosts();
    const time = await getTime();

    return (
        <main>
            <h1>Posts</h1>

            <p>Hora generación: {time.time}</p>


            <Link href="/">Volver al inicio</Link>

            {posts.slice(0, 5).map((post) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </main>
    );
}

/**
 * Usar force-cache (SSG, Static Generation) cuando:
 *   - Datos casi nunca cambian
 *   - Ej: documentación, landing pages, contenido estático
 * Usar next: { revalidate: number }  ISR (Incremental Static Regeneration) cuando:
 *   - Datos cambian ocasionalmente
 *   - Ej:
 *     blog
 *     productos
 *     dashboards ligeros
 */
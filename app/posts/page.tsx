import Link from "next/link";

type Post = {
    id: number;
    title: string;
};

// 1. Calculamos la hora directamente usando JavaScript puro
// sin depender de un fetch a nuestro propio servidor apagado.
function getTime() {
    return { time: new Date().toLocaleTimeString() };
}

async function getPosts(): Promise<Post[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 10 }, // Generación Estática con Revalidación cada 10 segundos
    });
    return res.json();
}

// 2. Exportamos esta constante para decirle a Next.js que TODA esta página
// (incluyendo la hora que calculamos arriba) debe revalidarse cada 10 segundos.
export const revalidate = 10;

export default async function PostsPage() {
    const posts = await getPosts();
    const time = getTime(); // Ya no necesitamos 'await' porque no es asíncrona

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
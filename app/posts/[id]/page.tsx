type Post = {
    id: number;
    title: string;
    body: string;
};

async function getPost(id: string): Promise<Post> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "force-cache",
    });

    return res.json();
}

export default async function PostPage({
    params,
}: {
    params: { id: string };
}) {
    const post = await getPost(params.id);

    return (
        <main>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </main>
    );
}
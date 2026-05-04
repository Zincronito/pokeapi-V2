export async function GET() {
    const offset = Math.floor(Math.random() * 100) + 1;
    const limit = 20;

    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );

    const data = await res.json();

    return Response.json({
        offset,
        timestamp: new Date().toISOString(),
        random: Math.random(),
        results: data.results,
    });
}
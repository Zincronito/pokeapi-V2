export async function getPokemons(cacheOption?: RequestInit) {
    const offset = Math.floor(Math.random() * 100) + 1;
    const limit = 20;

    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
        cacheOption
    );

    const data = await res.json();

    return {
        offset,
        timestamp: new Date().toISOString(),
        random: Math.random(),
        results: data.results,
    };
}
export async function getPokemons(cacheOption?: RequestInit) {
    // Aquí está la clave: Volvemos a generar un número aleatorio cada vez
    const offset = Math.floor(Math.random() * 100) + 1; 
    const limit = 20;

    // 1. Obtenemos la lista básica
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
        cacheOption
    );
    const data = await res.json();

    // 2. Por cada Pokémon en la lista, hacemos fetch a su URL de detalles
    const pokemonsConDetalles = await Promise.all(
        data.results.map(async (pokemon: { name: string; url: string }) => {
            const detalleRes = await fetch(pokemon.url);
            const detalle = await detalleRes.json();
            
            return {
                id: detalle.id,
                name: detalle.name,
                image: detalle.sprites.other['official-artwork'].front_default,
                types: detalle.types.map((t: any) => t.type.name),
            };
        })
    );

    return {
        offset,
        timestamp: new Date().toISOString(),
        results: pokemonsConDetalles, 
    };
}
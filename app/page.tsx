import Link from "next/link";
import PokemonList from "./components/pokemonLIst";
import { getPokemons } from "./lib/getPokemons";

async function getData() {
    // 'no-store' obliga a Next.js a ejecutar la petición de nuevo cada que recargas
    return getPokemons({ cache: "no-store" });
}

export default async function Page() {
    const data = await getData();

    return (
        <main>
            <PokemonList data={data} title="SSR - Pokémon Aleatorios" />
            
            <div style={{ marginTop: '20px' }}>
                <Link href="/force-cache">Ir a página estática (force-cache)</Link>
            </div>
        </main>
    );
}
import Link from "next/link";
import PokemonList from "../components/pokemonLIst";
import {getPokemons} from "../lib/getPokemons";

async function getData() {
    return getPokemons({ next: { revalidate: 10 } })
}


export default async function Page() {
    const data = await getData();

    return (
        <main>
            <PokemonList data={data} title="ISR - revalidate 10s" />
            <Link href="/">Volver</Link>
        </main>
    );
}
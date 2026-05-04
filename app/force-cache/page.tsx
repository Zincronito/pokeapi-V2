import Link from "next/link";
import PokemonList from "../components/pokemonLIst";
import { getPokemons } from "../lib/getPokemons";



async function getData() {
    return getPokemons({ cache: "force-cache" });
}


export default async function Page() {
    const data = await getData();

    return (
        <main>
            <PokemonList data={data} title="SSG - force-cache" />
            <Link href="/">Volver</Link>
        </main>
    );
}
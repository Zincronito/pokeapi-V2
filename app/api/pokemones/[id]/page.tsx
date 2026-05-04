import { getPokemons } from "@/app/lib/getPokemons";

// Definimos que params es una Promesa
export default async function Page({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}) {
    const { id } = await params;

    const poke = await getPokemons();

    return (
        console.log(poke)
    );
}
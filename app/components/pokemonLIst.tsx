import Image from "next/image";

// Definimos el tipo de nuestros datos enriquecidos
type Pokemon = {
    id: number;
    name: string;
    image: string;
    types: string[];
};

export default function PokemonList({ data, title }: { data: any, title: string }) {
    return (
        <section>
            <h2>{title}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {data.results.map((pokemon: Pokemon) => (
                    <div key={pokemon.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                        
                        <Image 
                            src={pokemon.image} 
                            alt={pokemon.name} 
                            width={150} 
                            height={150} 
                            // priority={true} // Útil si son las primeras imágenes que se ven en la pantalla
                        />
                        
                        <h3 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h3>
                        
                        <p style={{ color: '#666' }}>
                            Tipos: {pokemon.types.join(', ')}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
type Pokemon = {
    name: string;
    url: string;
};

type Props = {
    data: {
        offset: number;
        timestamp: string;
        random: number;
        results: Pokemon[];
    };
    title: string;
};

export default function PokemonList({ data, title }: Props) {
    return (
        <div>
            <h1>{title}</h1>

            <p><strong>Offset:</strong> {data.offset}</p>
            <p><strong>Timestamp:</strong> {data.timestamp}</p>
            <p><strong>Random:</strong> {data.random}</p>

            <ul>
                {data.results.map((p, i) => (
                    <li key={i}>{p.name}</li>
                ))}
            </ul>
        </div>
    );
}
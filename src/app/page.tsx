import { dataPokemons } from "@/interfaces/IPokemon.interface";

async function dataPokemon(): Promise<dataPokemons> {
  const maxLimit: number = 20;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=${maxLimit}`);
  const data: dataPokemons = await response.json();

  data.results.forEach((pokemon, index) => {
    pokemon.id = index + 1
  })

  return data;
}

export default async function Home() {
  const { results } = await dataPokemon();

  return (
    <>
      <h1>Hello Word</h1>
      {results.map((pokemon) => (
          <div key={pokemon.id}>
            <p>{pokemon.name}</p>
          </div>
        ))}
    </>
  )
} 
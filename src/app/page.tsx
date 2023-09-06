import { dataPokemons } from "@/interfaces/IPokemon.interface";

export default async function Home() {
  const maxLimit: number = 20;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=${maxLimit}`);
  const data: dataPokemons = await response.json();

  data.results.forEach((pokemon, index) => {
    pokemon.id = index +1
  })
  
  const { results } = data;
  console.log(results)

  return (
    <>
      <h1>Hello Word</h1>
        {results.map((pokemon) => (
          <p key={ pokemon.id }>{ pokemon.name }</p>
        ))}
    </>
  )
}
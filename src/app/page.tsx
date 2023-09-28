import { dataPokemons } from "@/interfaces/IPokemon.interface";
import CardsPokemon from "@/components/CardsPokemon";
import BtnMore from "@/components/BtnMore";

import style from "@/styles/pages/_home.module.scss"

async function dataPokemon(): Promise<dataPokemons> {
  const maxLimit: number = 20;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?&limit=${maxLimit}`);
  const data: dataPokemons = await response.json();

  data.results.forEach((pokemon, index) => {
    pokemon.id = index + 1;
  });

  return data;
};

// link para conseguir a imagem do pokemon através deste link: https://github.com/PokeAPI/pokeapi/issues/346

export default async function Home() {
  const { results } = await dataPokemon();

  return (
    <main className={style.home_container}>
      {results.map((pokemon) => (
        <CardsPokemon
          key={pokemon.id}
          pokeId={pokemon.id as number}
          name={pokemon.name}
        />
      ))}

      <BtnMore />
    </main>
  )
}
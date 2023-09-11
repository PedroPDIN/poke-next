import Image from "next/image";
import Link from "next/link";
import { dataPokemons } from "@/interfaces/IPokemon.interface";

import style from "@/styles/pages/_home.module.scss"

async function dataPokemon(): Promise<dataPokemons> {
  const maxLimit: number = 40;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?&limit=${maxLimit}`);
  const data: dataPokemons = await response.json();

  data.results.forEach((pokemon, index) => {
    pokemon.id = index + 1
  });

  return data;
};

// link para conseguir a imagem do pokemon através deste link: https://github.com/PokeAPI/pokeapi/issues/346

export default async function Home() {
  const { results } = await dataPokemon();

  return (
    <main className={ style.home_container }>
      {results.map((pokemon) => (
        <article key={pokemon.id} className={ style.card_container }>
          <div className={ style.numeric_id_pokemon }>
            <b>{`#${pokemon.id}`}</b>
          </div>

          <div className={ style.img_pokemon}>
            <Image
              className={ style.img }
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
              fill
            />
          </div>

          <p className={style.name_pokemon}>{pokemon.name}</p>
          
          <Link className={ style.btn_description } href={`/pokemon/${pokemon.id}`}>Descrição</Link>
        </article>
      ))}
    </main>
  )
}
import ControlsPagination from "@/components/ControlsPagination";
import CardsPokemon from "@/components/CardsPokemon";
import { dataPokemons } from "@/interfaces/IPokemon.interface";

import styled from "@/styles/pages/_pokemons.module.scss";
  
async function paginationPokemon(page: number | undefined): Promise<dataPokemons> {
  const limit: number = 40;
  let offSet: number = 0;

  if (page) {
    offSet = ((page - 1) * limit);
  };

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`);
  const data: dataPokemons = await response.json();

  data.results.forEach((pokemon, index) => {
    pokemon.id = +offSet + (index + 1);
  });

  return data;
};


export default async function Pokemons({ searchParams }: { searchParams: { page: string | undefined } }) {
  const { page } = searchParams;
  const { count, results } = await paginationPokemon(+page!);
  const countCard = 40;
  const amountPage = Math.ceil(count / countCard);

  return (
    <section className={styled.pokemons_container}>
      {results.map((pokemon) => (
        <CardsPokemon
          key={pokemon.id}
          pokeId={pokemon.id as number}
          name={pokemon.name}
          alternativeId={ 
            pokemon.url.split("/").at(-2) as string
          }
        />
      ))}

      <div className={styled.pokemons_pagination}>
        <ControlsPagination  amountPage={amountPage} />
      </div>
    </section>
  )
};
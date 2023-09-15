import ControlsPagination from "@/components/ControlsPagination";
import CardsPokemon from "@/components/CardsPokemon";
import { dataPokemons } from "@/interfaces/IPokemon.interface";

import styled from "@/styles/pages/_pokemons.module.scss";

function calcPagination(page: number): {initial: string, limit: string} {
  const maxLimit: number = 40;
  const limit: string = (page * maxLimit).toString();
  const initial: string = (+limit - maxLimit).toString();
  
  return {
    initial,
    limit,
  };
};

async function dataPokemon(page: number | undefined) {
  let offSet: string = "0";
  let limit: string = "40";

  if (page) {
    const { initial, limit } = calcPagination(page);

    offSet = initial;
    limit;
  };

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=${limit}`);
  const data: dataPokemons = await response.json();

  data.results.forEach((pokemon, index) => {
    pokemon.id = +offSet + (index + 1);
  });

  return data;
}


export default async function Pokemons({ searchParams }: { searchParams: { page: string | undefined } }) {
  const { page } = searchParams;
  const { count, results } = await dataPokemon(+page!);
  const countCart = 40;
  const amountPage = Math.ceil(count / countCart);

  return (
    <section className={styled.pokemons_container}>
      {results.map((pokemon) => (
        <CardsPokemon
          key={pokemon.id}
          pokeId={pokemon.id as number}
          name={pokemon.name} />
      ))}

      <div className={styled.pokemons_pagination}>
        <ControlsPagination  amountPage={amountPage} />
      </div>

    </section>
  )
}
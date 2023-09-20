import ControlsPagination from "@/components/ControlsPagination";
import CardsPokemon from "@/components/CardsPokemon";
import { dataPokemons } from "@/interfaces/IPokemon.interface";

import styled from "@/styles/pages/_pokemons.module.scss";

async function validateCount(end: number, limit: number): Promise<number> {
  const currentCount: number = end;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${currentCount}&limit=${limit}`);
  const data: dataPokemons = await response.json();

  if (data.results.length === 0) {
    return data.count - 1;
  };

  return data.count;
};

async function dataPokemon(page: number | undefined): Promise<dataPokemons> {
  const limit: number = 40;
  let offSet: number = 0;

  if (page) {
    offSet = (page * limit);
  };
  
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=${limit}`);
  const data: dataPokemons = await response.json();
  const currentCount: number = await validateCount(data.count, limit);
  data.count = currentCount;

  data.results.forEach((pokemon, index) => {
    pokemon.id = +offSet + (index + 1);
  });

  return data;
};


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
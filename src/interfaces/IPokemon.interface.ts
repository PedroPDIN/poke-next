interface dataPokemon {
  id?: number
  name: string,
  url: string,
};

export interface dataPokemons {
  count: number,
  next: null | string,
  previous: null | string,
  results: dataPokemon[],
};

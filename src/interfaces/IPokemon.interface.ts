export interface dataPokemon {
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

export interface infoPokemon {
  name: string,
  img: string,
  height: number,
  weight: number,
  types: string[],
};

export interface searchPokemon {
  id: number,
  name: string,
  img: string,
};

import { StaticImageData } from "next/image"

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
  img: string | StaticImageData,
  height: number,
  weight: number,
  types: string[],
};

export interface searchPokemon {
  id: number,
  name: string,
  urlImg: string | StaticImageData,
};

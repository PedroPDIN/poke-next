import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { infoPokemon } from "@/interfaces/IPokemon.interface";

import style from "@/styles/pages/_pokemon.module.scss";

type TypesPoke = {
  type: {
    name: string,
    url: string,
  };
};

type Poke = {
  name: string,
  height: number,
  weight: number,
  types: TypesPoke[],
};

async function dataPokemon(id: string): Promise<infoPokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data: Poke = await response.json();
  const types = data.types.map((poke) => poke.type.name);

  return {
    name: data.name,
    img: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`,
    height: data.height,
    weight: data.weight,
    types 
  };
};

export default async function Pokemon({ params }: { params: { id: string } }) {
  const { name, img, height, weight, types } = await dataPokemon(params.id);

  return (
    <section className={style.pokemon_container}>
      <article className={style.pokemon_content}>
        <Link className={style.nav_content} href="/">
          <BiArrowBack />
          Voltar
        </Link>

        <h1 className={style.title}>{name}</h1>

        <div className={style.img_container}>
          <Image src={img} alt={name} fill />
        </div>

        <div className={style.info_container}>
          <span>Altura: <p>{`${height / 10} m`}</p></span>
          <span>Peso: <p>{`${weight / 10} kg`}</p></span>
        </div>

        {types && (
          <div className={style.types_container}>
            <span className={style.title_types}>Tipos: </span>
            {types.map((type) => (
              <span className={`style_type_${type}`} key={type}>
                {type}
              </span>
            ))}
          </div>
        )}
      </article>
    </section>

  )
};
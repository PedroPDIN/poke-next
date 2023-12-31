import Image from "next/image";
import { StaticImageData } from "next/image";
import { infoPokemon } from "@/interfaces/IPokemon.interface";
import pokeball from "../../../../public/images/pokeball-2.png";
import BtnBack from "@/components/BtnBack";

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
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
};

async function dataPokemon(id: string): Promise<infoPokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data: Poke = await response.json();
  const urlAnimated: string = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
  const gifPoke: string | StaticImageData = !urlAnimated ? pokeball : urlAnimated;
  const types = data.types.map((poke) => poke.type.name);

  return {
    name: data.name,
    img: gifPoke,
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

        <div className={ style.btn_back_pokemon}>
          <BtnBack typePage="pokemon" />
        </div>

        <h1 className={style.title}>{name}</h1>

        <div className={style.img_container}>
          <Image
            fill
            src={img}
            alt={name}
            className={style.img}
            sizes="100vw"
          />
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
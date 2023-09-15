import Image from "next/image";
import Link from "next/link";

import style from "@/styles/components/_cardsPokemon.module.scss";

interface Props {
  pokeId: number,
  name: string,
};

export default function CardsPokemon({ pokeId, name }: Props) { 
  return (
    <article>
      <div key={pokeId} className={style.card_container}>
        <div className={style.numeric_id_pokemon}>
          <b>{`#${pokeId}`}</b>
        </div>

        <div className={style.img_pokemon}>
          <Image
            className={style.img}
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokeId}.svg`}
            alt={name}
            fill
          />
        </div>

        <p className={style.name_pokemon}>{name}</p>

        <Link className={style.btn_description} href={`/pokemon/${pokeId}`}>Descrição</Link>
      </div>
    </article>
  )
};
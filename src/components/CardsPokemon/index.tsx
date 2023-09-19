import Link from "next/link";
import ImageCard from "../ImageCard";

import style from "@/styles/components/_cardsPokemon.module.scss";

interface Props {
  pokeId: number,
  name: string,
};

export default function CardsPokemon({ pokeId, name }: Props) {
  const urlImageApi: string = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokeId}.svg`;

  return (
    <article>
      <div key={pokeId} className={style.card_container}>
        <div className={style.numeric_id_pokemon}>
          <b>{`#${pokeId}`}</b>
        </div>

        <div className={style.img_pokemon}>
          <ImageCard name={name} url={urlImageApi} />
        </div>

        <p className={style.name_pokemon}>{name}</p>

        <Link className={style.btn_description} href={`/pokemon/${pokeId}`}>Descrição</Link>
      </div>
    </article>
  )
};
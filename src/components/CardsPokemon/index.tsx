import Link from "next/link";
import ImageCard from "../ImageCard";

import style from "@/styles/components/_cardsPokemon.module.scss";

interface Props {
  pokeId: number,
  name: string,
  alternativeId?: string | number,
};

export default function CardsPokemon({ pokeId, name, alternativeId }: Props) {
  const urlImageApi: string = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokeId}.svg`;
  let currentId: number;

  if (+alternativeId! === pokeId || !alternativeId) {
    currentId = pokeId
  } else {
    currentId = +alternativeId!
  };


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

        <Link className={style.btn_description} href={`/pokemon/${currentId}`}>Descrição</Link>
      </div>
    </article>
  )
};
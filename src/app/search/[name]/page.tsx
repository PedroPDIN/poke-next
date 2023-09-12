import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { searchPokemon } from "@/interfaces/IPokemon.interface";

import style from "@/styles/pages/_search.module.scss";

type typePoke = {
  id: number,
  name: string,
}

async function dataSearch(name: string): Promise<searchPokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data: typePoke = await response.json();

  return {
    id: data.id,
    name: data.name,
    img: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`,
  };
}

export default async function SearchPokemon({ params }: { params: { name: string } }) {
  const { id, name, img } = await dataSearch(params.name.toLowerCase())

  return (
    <section className={style.search_container}>

      <article className={style.nav_content}>
        <Link className={style.btn_back} href="/">
          <BiArrowBack />
          Página Inicial
        </Link>

        <span
          className={style.info_search}
        >
          Resultado de <span className={style.name}>{`${params.name}`}</span>.
        </span>
      </article>


      <article className={style.card_container}>
        <div className={style.card_content}>
          <div className={style.numeric_id_pokemon}>
            <b>{`#${id}`}</b>
          </div>

          <div className={style.img_pokemon}>
            <Image
              className={ style.img }
              src={img}
              alt={name}
              fill
            />
          </div>

          <span className={style.name_pokemon}>{name}</span>

          <Link
            className={style.btn_description}
            href={`/pokemon/${id}`}
          >
            Descrição
          </Link>
        </div>
      </article>
    </section>
  )
}
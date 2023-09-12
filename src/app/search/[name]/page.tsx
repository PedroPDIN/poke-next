import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { searchPokemon } from "@/interfaces/IPokemon.interface";

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
  const { id, name, img } = await dataSearch(params.name)

  return (
    <section>

      <article>
        <Link href="/">
          <BiArrowBack />
          Voltar
        </Link>

        <span>Resultado de <span>{`${name}`}</span></span>

      </article>

      <article>
        <div>
          <b>{`#${id}`}</b>
        </div>

        <div>
          <Image
            src={img}
            alt={name}
            fill
          />
        </div>

        <p>{name}</p>

        <Link href={`/pokemon/${id}`}>Descrição</Link>
      </article>
    </section>
  )
}
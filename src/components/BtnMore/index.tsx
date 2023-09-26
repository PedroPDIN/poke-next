'use client'

import { useRouter } from "next/navigation";
import { BiSolidRightArrowCircle } from "react-icons/bi";

import style from "../../styles/components/_btnMore.module.scss";

export default function BtnMore() {
  const router = useRouter();

  const onClickEvent = (): void => {
    localStorage.removeItem("page");
    router.push("/pokemons?page=2");
  }

  return (
    <button
      type="button"
      className={ style.more_container }
      onClick={() => onClickEvent()}
    >
      Ver Mais
      <BiSolidRightArrowCircle />
    </button>
  )
};
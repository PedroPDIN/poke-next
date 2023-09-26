'use client'

import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

import style from "../../styles/components/_btnBack.module.scss";

export default function BtnBack() {
  const router = useRouter();

  return (
    <button
      type="button"
      className={style.nav_content_back}
      onClick={() => router.back()}
    >
      <BiArrowBack />
      Voltar
    </button>
  )
}
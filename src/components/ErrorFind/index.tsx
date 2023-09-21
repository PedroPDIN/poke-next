'use client'

import Link from "next/link";
import { GoAlertFill } from "react-icons/go";

import style from "@/styles/components/_errorFind.module.scss";

export default function ErrorFind() {
  return (
    <section className={style.error_search_container}>
      <article className={style.error_search_content}>
        <GoAlertFill className={style.icon_error} />
        <p className={style.message_error}
        >
          <b>Ops!!!</b> Não foi possível encontrar esse Pokémon ou houve uma falha na conexão no servidor.
        </p>

        <div className={style.solution_content}>
          <Link className={style.btn_back} href="/">Voltar Para a Página Inicial</Link>
          <span className={style.division_word}>OU</span>
          <p className={style.message_solution}>Tente procurar por outro <span>Pokémon</span>.</p>
        </div>
      </article>
    </section>
  )
};
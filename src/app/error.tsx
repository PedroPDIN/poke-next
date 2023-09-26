'use client'

import { useEffect } from "react";

import style from "../styles/components/_errorMain.module.scss";

export default function ErrorHome({
  error
}: {
  error: Error & {digest?: string}
  }) {
  
  useEffect(() => {
    console.log(error)
  }, [error])
  
  return (
    <main className={ style.error_main_container}>
      <h1>Erro no servidor, tente novamente mais tarde.</h1>
    </main>
  )
}
import Image from "next/image"
import SearchInput from "../SearchInput";

import style from "@/styles/components/_header.module.scss";

export default function Header() {
  return (
    <header className={style.header_container}>
      <div className={style.header_title}>
        <Image
          className={style.icon}
          src="/images/pokeball.png"
          alt="icone da pokebola"
          width="42"
          height="42"
        />
        <h1>Poke<span>Next</span></h1>
      </div>
      
      <div className={style.header_search}>
        <SearchInput  />
      </div>
    </header>
  )
}
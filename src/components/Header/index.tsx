import Image from "next/image"
import Link from "next/link";
import SearchInput from "../SearchInput";

import style from "@/styles/components/_header.module.scss";

export default function Header() {
  return (
    <header className={style.header_container}>
      <Link href="/" className={style.nav_link}>
        <div className={style.header_title}>
          <Image
            className={style.icon}
            src="/images/pokeball.png"
            alt="icone da pokebola"
            width="42"
            height="42"
          />
          <h1>Poké<span>Next</span></h1>
        </div>
      </Link>
      
      <div className={style.header_search}>
        <SearchInput  />
      </div>
    </header>
  )
}
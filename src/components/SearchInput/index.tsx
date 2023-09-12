'use client'

import { useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

import style from "@/styles/components/_searchInput.module.scss";

export default function SearchInput() {
  const [namePoke, setNamePoke] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNamePoke(e.target.value)
  };

  return (
    <div className={style.search_container}>
      <input
        type="text"
        placeholder="ex: pikachu"
        value={namePoke}
        name={namePoke}
        onChange={onChange}
      />
      <Link
        className={style.icon_content}
        href={`/search/${namePoke}`}
        onClick={() => setNamePoke("")}
      >
        <AiOutlineSearch className={ style.icon } />
      </Link>
    </div>
  )
}
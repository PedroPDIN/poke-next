'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

import style from "@/styles/components/_searchInput.module.scss";

export default function SearchInput() {
  const [namePoke, setNamePoke] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNamePoke(e.target.value)
  };

  const handleKeyRedirect = (e: React.KeyboardEvent<HTMLInputElement>): void => { 
    if (e.key === "Enter") {
      router.push(`/search/${namePoke}`);
      setNamePoke("");
    };
  };

  return (
    <div className={style.search_container}>
      <input
        type="text"
        placeholder="ex: Pikachu"
        value={namePoke}
        name={namePoke}
        onChange={handleChange}
        onKeyDown={handleKeyRedirect}
      />
      <Link
        className={style.icon_content}
        href={`/search/${namePoke}`}
        onClick={() => setNamePoke("")}
      >
        <AiOutlineSearch className={style.icon} />
      </Link>
    </div>
  )
};
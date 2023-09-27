'use client'

import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

interface Props {
  typePage: 'search' | 'pokemon';
};

export default function BtnBack({ typePage }: Props) {
  const router = useRouter();

  return (
    <button
      type="button"
      className={`nav_content_back_${typePage}`}
      onClick={() => router.back()}
    >
      <BiArrowBack />
      Voltar
    </button>
  )
};

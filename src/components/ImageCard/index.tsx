'use client'

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import pokeball from "../../../public/images/pokeball-2.png";

interface Props {
  name: string,
  url: string | StaticImageData,
};

export default function ImageCard({ name, url }: Props) {
  const [img, setImg] = useState<string | StaticImageData>(url);
  const [nameAlt, setNameAlt] = useState<string>(name);

  return (
    <Image
      src={img}
      alt={nameAlt}
      fill
      priority={ true }
      onError={() => {
        setImg(pokeball);
        setNameAlt("Image Pokemon not found");
      }}
      style={{
        objectFit: 'contain',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    />
  );
};
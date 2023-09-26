'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import styled from "@/styles/components/_controlsPagination.module.scss";

interface Props {
  amountPage: number;
};

export default function ControlsPagination({ amountPage }: Props) {
  const [page, setPage] = useState<string>(localStorage.getItem("page") || "2");
  const router = useRouter();
  
  const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    localStorage.setItem("page", value.toString());
    const pageLocal: string = localStorage.getItem("page") as string
    setPage(pageLocal);
  };

  router.push(`/pokemons/?page=${page}`)

  return (
    <Stack spacing={2}>
      <Pagination
        className={styled.pagination_content}
        count={amountPage}
        page={+page}
        onChange={handleChange}
        size='small'
        variant='outlined'
        shape='rounded'
        showFirstButton
        showLastButton 
      />
    </Stack>
  )
};

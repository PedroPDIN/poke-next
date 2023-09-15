'use client'

import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation';

import styled from "@/styles/components/_controlsPagination.module.scss";

interface Props {
  amountPage: number;
}

export default function ControlsPagination({ amountPage }: Props) {
  const [page, setPage] = useState<number>(2);
  const route = useRouter();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  
  route.push(`/pokemons/?page=${page}`);

  return (
    <Stack spacing={2}>
      <Pagination
        className={styled.pagination_content}
        count={amountPage}
        page={page}
        onChange={handleChange}
        size='small'
        variant='outlined'
        shape='rounded'
        showFirstButton
        showLastButton 
      />
    </Stack>
  )
}
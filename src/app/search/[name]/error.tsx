'use client'

import { useEffect } from "react"
import ErrorFind from "@/components/ErrorFind";

export default function SearchError({
  error,
}:
  {
    error: Error & { digest?: string},
  }) {
    
  useEffect(() => {
    console.error(error);
  }, [error])
  
  return (
    <>
      <ErrorFind />
    </>
  )
};
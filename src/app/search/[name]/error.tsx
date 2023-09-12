'use client'

import { useEffect } from "react"

export default function SearchError({
  error,
  reset,
}:
  {
    error: Error & { digest?: string},
    reset: () => void,
  }) {
    
  useEffect(() => {
    console.error(error);
  }, [error])
  
  return (
    <section>
      <h1>Pokemon não encontrado :(</h1>
      <button onClick={() => reset()}>Tentar de novo?</button>
    </section>
  )
}
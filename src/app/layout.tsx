import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import '../styles/main.scss';

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokemon Next',
  description: 'Website all Pokemons',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>
          <Header />
            {children}
          <Footer />
      </body>
    </html>
  )
}

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { CartProvider } from 'react-use-cart'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: '400',
  subsets: ['latin'],
 })

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <SessionProvider session={session}>
    <CartProvider>
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
    </CartProvider>
  </SessionProvider>
}

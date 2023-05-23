import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { CartProvider } from 'react-use-cart'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'

const poppins = Poppins({ 
  weight: '400',
  subsets: ['latin'],
 })

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <CartProvider>
  <SessionProvider session={session}>
    
    <main className={poppins.className}>
    
      <Navbar />
      <Component {...pageProps} />
    </main>
  </SessionProvider>
  </CartProvider>
}

import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from '../Components/Navbar/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Navbar/>
    <Component {...pageProps} />
  </>
}
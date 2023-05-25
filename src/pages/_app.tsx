import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "@/components/navbar/navbar";
import Styles from '@/styles/wrapper_width.module.css'
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Navbar />
    <div className={Styles.wrapper}>
    <Component {...pageProps} />
    </div>
  </>
}

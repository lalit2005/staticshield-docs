import 'nextra-theme-docs/style.css'
import Head from 'next/head'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>{/* <base href="https://staticshield-docs.vercel.app/" /> */}</Head>
      <Component {...pageProps} />
    </>
  )
}

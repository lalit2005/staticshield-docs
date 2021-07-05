import 'nextra-theme-docs/style.css'
import Head from 'next/head'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <base href="/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

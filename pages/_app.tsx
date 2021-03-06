import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp

import Head from 'next/head'
import Header from "../components/Header/Header"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='border-b border-gray-300'>
        <Header />
      </header>
    </div>
  )
}

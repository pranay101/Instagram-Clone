import Head from 'next/head'
import Header from "../components/Header/Header"
import Stories from  "../components/Stories/Stories"
import Timeline from  "../components/Timeline/Timeline"
import ProfileSection from  "../components/ProfileSection/ProfileSection"

export default function Home() {
  return (
    <div className='h-screen'>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='border-b border-gray-300'>
        <Header />
      </header>
      <main >
        <div>
          <Stories />
          <Timeline />
        </div>
        <div>
            <ProfileSection />
        </div>
      </main>
    </div>
  )
}

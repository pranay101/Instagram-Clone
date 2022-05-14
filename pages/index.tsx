import Head from 'next/head'
import Header from '../components/Header/Header'
import Stories from '../components/Stories/Stories'
import Timeline from '../components/Timeline/Timeline'
import ProfileSection from '../components/ProfileSection/ProfileSection'
import PeopleYouMayKnow from '../components/PoepleYouMayKnow/PeopleYouMayKnow'

export default function Home() {
  return (
    <div className="h-screen bg-gray-50">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-b border-gray-300">
        <Header />
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-5xl mx-auto">
        <section className="col-span-2">
          <Stories />
          <Timeline />
        </section>
        <section className=""> 
          <ProfileSection name={''} username={''} />
          <PeopleYouMayKnow />
        </section>
      </main>
    </div>
  )
}

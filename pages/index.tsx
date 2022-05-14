import Head from 'next/head'
import Header from '../components/Header/Header'
import Stories from '../components/Stories/Stories'
import Timeline from '../components/Timeline/Timeline'
import ProfileSection from '../components/ProfileSection/ProfileSection'
import PeopleYouMayKnow from '../components/PoepleYouMayKnow/PeopleYouMayKnow'

export default function Home() {
  return (
    <div className=" bg-gray-50">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='sticky top-0 z-50'>
        <Header />
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-5xl mx-auto">
        <section className="col-span-2 overflow-y-scroll">
          <Stories />
          <Timeline />
        </section>
        <section className="h-fit hidden xl:inline-grid sticky top-20 md:col-span-1"> 
          <ProfileSection name={''} username={''} />
          <PeopleYouMayKnow />
        </section>
      </main>
    </div>
  )
}

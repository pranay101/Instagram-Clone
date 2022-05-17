import Head from 'next/head'
import Header from '../components/Header/Header'
import Stories from '../components/Stories/Stories'
import Timeline from '../components/Timeline/Timeline'
import ProfileSection from '../components/ProfileSection/ProfileSection'
import PeopleYouMayKnow from '../components/PoepleYouMayKnow/PeopleYouMayKnow'
import NavigationButtons from '../components/Header/NavigationButtons/NavigationButtons'
import NavigationButtonsMobile from '../components/Header/NavigationButtons/NavigationButtonMobile'

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
      <div className='sm:inline-grid sticky bg-white bottom-0 z-[100] lg:hidden border-t border-gray-400'>
        <NavigationButtonsMobile />
      </div>
    </div>
  )
}

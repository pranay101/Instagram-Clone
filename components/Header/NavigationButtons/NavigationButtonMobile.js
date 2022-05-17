import React from 'react'
import {
  HomeIcon,
  DocumentAddIcon,
  FireIcon,
  HeartIcon,
  EmojiHappyIcon,
  FilmIcon
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'

const NavigationButtonsMobile = () => {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div className="flex w-screen flex-row justify-evenly space-x-4 py-3 ">
      <HomeIcon className="navbtn" color="#1a1b1c" />
      <FireIcon className="navbtn" color="#1a1b1c" />
      <DocumentAddIcon className="navbtn" color="#1a1b1c" />
      <HeartIcon className="navbtn" color="#1a1b1c" />
      {session ? (  
          <img
            className="h-7 w-7 rounded-full object-cover group-active:"
            src={session?.user?.image}
            alt="profile picture"
            onClick={signOut}
          />
      ) : (
        <EmojiHappyIcon onClick={signOut} className="navbtn" color="#1a1b1c" />
      )}
    </div>
  )
}

export default NavigationButtonsMobile

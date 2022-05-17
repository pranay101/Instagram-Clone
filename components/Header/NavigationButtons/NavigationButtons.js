import React from 'react'
import {
    HomeIcon,
    ChatAlt2Icon,
    FireIcon,
    HeartIcon,
    EmojiHappyIcon,
  } from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'

const NavigationButtons = () => {
    const { data: session } = useSession()
  return (
      <>
    <div className=" hidden flex-row justify-center space-x-4 lg:flex">
      <HomeIcon className="navbtn" color="#1a1b1c" />
      <ChatAlt2Icon className="navbtn" color="#1a1b1c" />
      <FireIcon className="navbtn" color="#1a1b1c" />
      <HeartIcon className="navbtn" color="#1a1b1c" />
      {session ? (  
          <img
            className="h-7 w-7 rounded-full object-cover group-active:"
            src={session.user.image}
            alt="profile picture"
            onClick={signOut}
          />
      ) : (
        <EmojiHappyIcon onClick={signOut} className="navbtn" color="#1a1b1c" />
      )}
    </div>

    
    </>
  )
}

export default NavigationButtons

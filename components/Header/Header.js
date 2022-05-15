import React from 'react'
import {
  CameraIcon,
  HomeIcon,
  ChatAlt2Icon,
  FireIcon,
  HeartIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'

function Header() {
  return (
    <div className=" shadow-sm border-b bg-white">
      <div className='flex justify-between items-center max-w-5xl lg:mx-auto'>

        <div className='relative  lg:inline-grid h-16 w-24 cursor-pointer'>
          <Image src={"https://links.papareact.com/ocw"}
          layout={"fill"}
          objectFit={"contain"}/>
        </div>

        <div className="mt-2 rounded-md">
          <input
            className=" w-60 rounded-md bg-gray-100 px-4 p-1.5 focus:outline-none "
            placeholder="Search"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-row justify-center space-x-4">
          <HomeIcon className="navbtn" color="#1a1b1c" />
          <ChatAlt2Icon className="navbtn" color="#1a1b1c" />
          <FireIcon className="navbtn" color="#1a1b1c" />
          <HeartIcon className="navbtn" color="#1a1b1c" />
          <EmojiHappyIcon className="navbtn" color="#1a1b1c" />
        </div>
      </div>
    </div>
  )
}

export default Header

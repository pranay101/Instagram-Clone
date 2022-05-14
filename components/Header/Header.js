import React from 'react'
import {
  CameraIcon,
  HomeIcon,
  ChatAlt2Icon,
  FireIcon,
  HeartIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline'
import InstagramLogo from '../../public/InstagramLogo.png'

function Header() {
  return (
    <nav className="m-auto bg-white">
      <div className="m-auto flex w-9/12 flex-row flex-wrap justify-evenly p-4 pb-2 align-middle">
        <div className="w-1/3">
          <img
            className="flex w-24 object-contain"
            src={
              'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
            }
            alt="instagram-logo"
          />
        </div>
        <div className="w-1/3">
          <input
            className=" m-auto  w-60 rounded-md bg-gray-100 px-4 py-1.5 focus:outline-none "
            placeholder="Search"
            type="text"
            name=""
            id=""
          />
        </div>

        <div className="flex w-1/3 flex-row justify-evenly">
          <HomeIcon className="w-7" color="#1a1b1c" />
          <ChatAlt2Icon className="w-7" color="#1a1b1c" />
          <FireIcon className="w-7" color="#1a1b1c" />
          <HeartIcon className="w-7" color="#1a1b1c" />
          <EmojiHappyIcon className="w-7" color="#1a1b1c" />
        </div>
      </div>
    </nav>
  )
}

export default Header

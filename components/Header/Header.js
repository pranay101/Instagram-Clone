import React from 'react'
import Image from 'next/image'
import NavigationButtons from './NavigationButtons/NavigationButtons'
import { PaperAirplaneIcon } from '@heroicons/react/outline'

function Header() {
  return (
      <div className=" border-b bg-white shadow-sm">
        <div className="flex max-w-5xl items-center justify-between lg:mx-auto">
          <div className="relative hidden h-16 w-24 cursor-pointer lg:inline-grid">
            <Image
              src={'https://links.papareact.com/ocw'}
              layout={'fill'}
              objectFit={'contain'}
            />
          </div>
          <div className="relative h-8 w-8 p-3 ml-5 flex-shrink-0 lg:hidden">
            <Image
              src={'https://links.papareact.com/jjm'}
              layout={'fill'}
              objectFit={'contain'}
            />
          </div>

          <div className="my-2 mx-auto rounded-md">
            <input
              className=" w-60 rounded-md  bg-gray-100 p-1.5 px-4 focus:outline-none "
              placeholder="Search"
              type="text"
              name=""
              id=""
            />
          </div>
          <NavigationButtons/>
          <PaperAirplaneIcon className=" navbtn rotate-45 relative h-12 w-12 p-3 ml-5 flex-shrink-0 lg:hidden" color="#1a1b1c" />
        </div>
      </div>


  )
}

export default Header

import React from 'react'
import {
  BookmarkAltIcon,
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

const Post = () => {
  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center px-5 py-3">
        <img
          className="mr-3 h-12 w-12 rounded-full border p-[2px]"
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/800.jpg"
          alt=""
        />
        <p className="flex-1 text-sm font-bold">Pranay Prajapati</p>
        <DotsHorizontalIcon className="h-6" />
      </div>
      <img
        className="w-full object-cover"
        src="https://images.unsplash.com/photo-1652454159675-11ead6275680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex flex-1 space-x-4 items-center">
          <HeartIconFilled className="btn" />
          <ChatIcon className="btn " />
          <PaperAirplaneIcon className="btn " />
        </div>
        <BookmarkAltIcon className="btn" />
      </div>

      <p className='p-5 truncate'>
        <span className='font-bold mr-1'>Pranay101</span>
        Because this is one single image, and not six separate files, there will be no loading delay when a user hovers over the image
      </p>
      
      <form className='flex items-center' action="">
        <EmojiHappyIcon className='h-7 m-3' />
        <input placeholder='Add a Comment' className='flex-1 border-none focus:ring-0 outline-none' type="text" name="" id="" />
        <button className='font-semibold text-blue-400'>Post</button>
      </form>
    </div>
  )
}

export default Post

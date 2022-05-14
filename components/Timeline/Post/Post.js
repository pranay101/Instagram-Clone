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

const Post = ({username,image,avatar,caption}) => {
  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center px-5 py-3">
        <img
          className="mr-3 h-12 w-12 rounded-full border p-[2px]"
          src={avatar}
          alt=""
        />
        <p className="flex-1 text-sm font-bold">{username}</p>
        <DotsHorizontalIcon className="h-6" />
      </div>
      <img
        className="w-full object-cover"
        src={image} 
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
        <span className='font-bold mr-1'>{username}</span>
        {caption}
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

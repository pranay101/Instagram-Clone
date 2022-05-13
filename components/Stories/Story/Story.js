import React from 'react'

const Story = ({Name,ProfilePicture}) => {
  return (
    <div className='w-24 h-24 m-1 p-1 flex flex-col justify-center align-middle text-center'>
        <div className='rounded-full overflow-hidden w-16 h-16' >
        <img
            className='object-cover'
            src={ProfilePicture} 
            alt={Name + "'s Story"} />
        </div>
        <p className='w-20 text-xs mt-2 truncate font-normal font-sans'>{Name}</p>
    </div>
  )
}

export default Story
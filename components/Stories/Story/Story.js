import React from 'react'

const Story = ({Name,ProfilePicture}) => {
  return (
    <div>
        <div className='rounded-full overflow-hidden w-16 h-16' >
        <img
            className='object-cover'
            src={ProfilePicture} 
            alt={Name + "'s Story"} />
        </div>
        
        <p>{Name}</p>
    </div>
  )
}

export default Story
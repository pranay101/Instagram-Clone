import React from 'react'

const Story = ({ Name, ProfilePicture }) => {
  return (
    <div>
      <img
        className="h-14 w-14 cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] hover:scale-110 transition transform duration-200 ease-out"
        src={ProfilePicture}
        alt={Name + "'s Story"}
      />

      <p className="mt-2 w-14 truncate text-center text-xs font-normal">{Name}</p>
    </div>
  )
}

export default Story

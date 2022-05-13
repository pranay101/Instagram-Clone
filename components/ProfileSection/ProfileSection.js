import React from 'react'

const ProfileSection = ({ name, username }) => {
  return (
    <div>
      <div className=" flex w-1/4 flex-row items-center justify-center align-middle">
        <div className="mr-3 h-14 w-14 overflow-hidden rounded-full">
          <img
            className="object-cover"
            src="https://i.pinimg.com/564x/70/81/fe/7081feab06a54c2e16f67660af38d7a1.jpg"
            alt=""
          />
        </div>
        <div className="mr-4">
          <p className="truncate whitespace-nowrap text-sm font-semibold">
            {name || 'pranayprajapati_._'}
          </p>
          <p className="truncate whitespace-nowrap text-sm font-normal">
            {username || 'PRANAY PRAJAPATI'}
          </p>
        </div>
        <p className='text-blue-500 font-semibold text-sm'>Switch</p>
      </div>
    </div>
  )
}

export default ProfileSection

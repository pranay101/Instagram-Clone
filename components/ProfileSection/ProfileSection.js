import { useSession } from 'next-auth/react'
import React from 'react'
const ProfileSection = ({ name, username }) => {
  const { data: session } = useSession()
  return (
    <div className="mt-14 ml-8 flex flex-row items-center justify-between ">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src={session?.user?.image}
      />
      <div className="mx-3 flex-1">
        <h2 className="font-bold">{name || 'pranayprajapati_._'}</h2>
        <h3 className=" text-sm text-gray-400">
          {username || 'PRANAY PRAJAPATI'}
        </h3>
      </div>
      <button className="cursor-pointer text-sm font-semibold text-blue-500 hover:text-blue-700">
        Switch
      </button>
    </div>
  )
}

export default ProfileSection

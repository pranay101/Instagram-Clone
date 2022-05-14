import React, { useEffect, useState } from 'react'
import faker from '@faker-js/faker'

const PeopleYouMayKnow = () => {
  const [people, setPeople] = useState([])
  useEffect(() => {
    const People = [...Array(5)].map((_, i) => ({
      id: i,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      username: faker.name.firstName(),
      picture: faker.image.avatar(),
    }))
    setPeople(People)
  }, [])

  return (
    <div className="mt-4 pl-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestion For you</h3>
        <button className="text-sm font-semibold text-gray-600">See all</button>
      </div>
      {people.map((user) => (
        <div key={user.id} className="mt-3 flex items-center justify-between">
          <img
            className="h-10 w-10 rounded-full border p-[2px]"
            src={user.picture}
            alt=""
          />
          <div className='flex-1 ml-4'>
            <h2 className='font-semibold text-sm'>{user.username}</h2>
            <h3 className="text-xs text-gray-400 uppercase">{user.name}</h3>
          </div>
          <button className='text-blue-500 text-xs font-bold'>Follow</button>
        </div>
      ))}
    </div>
  )
}

export default PeopleYouMayKnow

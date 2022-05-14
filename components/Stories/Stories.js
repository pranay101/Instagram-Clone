import React, { useEffect, useState } from 'react'
import Story from "./Story/Story"
import { faker } from '@faker-js/faker';

const Stories = () => {
    const [stories, setstories] = useState([])
    useEffect(() => {
      const Stories = [...Array(20)].map((_,i) =>({
          "name":`${faker.name.firstName()} ${faker.name.lastName()}`,
          "username":faker.name.firstName(),
          "picture":faker.image.avatar(),
          "id":i,
      }))
      setstories(Stories)
    }, [])
    
  return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border border-gray-300 rounded-sm overflow-x-scroll scrollbar-hide '>
        {
            stories.map((story,index) =>{
                return <Story key={index} Name={story.name} ProfilePicture={story.picture} />
            })
        }
        </div>
  )
}

export default Stories

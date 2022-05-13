import React from 'react'
import Story from "./Story/Story"

const Stories = () => {
    const stories = [
        {
            "name":"Pranay Prajapati",
            "profile_picture":"https://i.pinimg.com/564x/70/81/fe/7081feab06a54c2e16f67660af38d7a1.jpg",
        },
        {
            "name":"Pranay Prajapati",
            "profile_picture":"https://i.pinimg.com/564x/70/81/fe/7081feab06a54c2e16f67660af38d7a1.jpg",
        },
        {
            "name":"Pranay Prajapati",
            "profile_picture":"https://i.pinimg.com/564x/70/81/fe/7081feab06a54c2e16f67660af38d7a1.jpg",
        },
        {
            "name":"Pranay Prajapati",
            "profile_picture":"https://i.pinimg.com/564x/70/81/fe/7081feab06a54c2e16f67660af38d7a1.jpg",
        },
        {
            "name":"Pranay Prajapati",
            "profile_picture":"https://i.pinimg.com/564x/70/81/fe/7081feab06a54c2e16f67660af38d7a1.jpg",
        },
        {
            "name":"Pranay Prajapati",
            "profile_picture":"https://i.pinimg.com/564x/70/81/fe/7081feab06a54c2e16f67660af38d7a1.jpg",
        },
        {
            "name":"Pranay Prajapati",
            "profile_picture":"https://i.pinimg.com/564x/70/81/fe/7081feab06a54c2e16f67660af38d7a1.jpg",
        },
    ]
  return (
    <div className='w-full'>
        {
            stories.map(story =>{
                return <Story Name={story.name} ProfilePicture={story.profile_picture} />
            })
        }
    </div>
  )
}

export default Stories

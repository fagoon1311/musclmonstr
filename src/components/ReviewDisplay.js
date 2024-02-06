import React from 'react'
import ReviewCard from './ReviewCard'
import { positiveReviewsArray } from '../utils/Constants'

const ReviewDisplay = () => {
  return (
   <div className='py-10'> 
    <div className='flex items-center justify-center flex-col'>
      <h1 className='text-3xl text-[#BF6900]'>What our Clients say</h1>
      <div className='border-b-4 border-[#BF6900] h-3 w-52'></div>
    </div>
  <div className='flex flex-row gap-10 overflow-x-auto py-7'>
    {
        positiveReviewsArray.map((item, index)=>(<ReviewCard key={index} info={item}/>))
    }
  </div>
  </div>
  )
}

export default ReviewDisplay
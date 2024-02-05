import React from 'react'
import ReviewCard from './ReviewCard'
import { positiveReviewsArray } from '../utils/Constants'

const ReviewDisplay = () => {
  return (
  <div className='flex flex-wrap p-2'>
    {
        positiveReviewsArray.map((item, index)=>(<ReviewCard key={index} info={item}/>))
    }
  </div>
  )
}

export default ReviewDisplay
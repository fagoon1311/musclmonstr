import React from 'react'

const ReviewCard = ({ info }) => {
    console.log(info)
    const { title, description} = info
  return (
    <div className=" h-[10rem] relative flex bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md w-full max-w-[18rem] flex-row border-4 border-red-600 ">
   
    <div className="p-3">
      <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-red-600">
        {title}
      </h4>
      <p className="block mb-8 font-sans antialiased font-normal leading-relaxed text-white text-sm">
        {description}
      </p>
      
    </div>
  </div> 
  )
}

export default ReviewCard
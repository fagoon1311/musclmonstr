import React from 'react'

const ReviewCard = ({ info }) => {
    console.log(info)
    const { title, description} = info
  return (
    <div class="flex-shrink-0 relative flex bg-clip-border rounded-xl bg-[#162135] text-gray-700 shadow-md w-[24rem] max-w-full flex-row">
    <div
      class="relative w-1/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
        alt="card" class="object-cover w-full h-full" />
    </div>
    <div class="p-6">
      <h4 class="block mb-2 font-sans text-xl text-[#BF6900] antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {title}
      </h4>
      <p class="block mb-8 font-sans text-sm antialiased font-normal leading-relaxed text-white">
       {description}
      </p>
  
    </div>
  </div>  
  )
}

export default ReviewCard
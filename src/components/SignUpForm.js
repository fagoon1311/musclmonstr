import React from 'react'

const SignUpForm = () => {
  return (
    
    <div><div class="leading-loose rounded-xl">
    <form class="max-w-xl m-4 p-10 bg-[#162135] rounded shadow-xl">
      <p class="text-[#BF6900] font-medium">Not a Member? <span class='text-[#BF6900] font-extrabold'>Sign Up</span></p>
      <div class="">
        <label class="block text-sm text-white my-1" for="cus_name">Name</label>
        <input class="w-full px-5 py-1 text-white bg-black rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name"></input>
      </div>
      <div class="mt-2">
        <label class="block text-sm text-white my-1" for="cus_email">Email</label>
        <input class="w-full px-5  py-1 text-white bg-black rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email"></input>
      </div>
      
    
      <p class="mt-4 text-[#BF6900] font-medium">Payment information</p>
      <div class="">
        <label class="block text-sm text-white my-1" for="cus_name">Card</label>
        <input class="w-full px-2 py-2 text-white bg-black rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name"></input>
      </div>
      <div className='flex justify-between'>
      <div class="mt-4">
        <button class="px-4 py-1 text-white font-light tracking-wider bg-[#BF6900] rounded" type="submit" >Pay</button>
      </div>
      <div class="mt-4">
        <button class="px-4 py-1 text-white font-light tracking-wider bg-[#BF6900] rounded" type="submit" >Close</button>
      </div>
      </div>
    </form>
  </div></div>
  )
}

export default SignUpForm
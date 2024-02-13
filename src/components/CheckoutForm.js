import React from 'react'

const CheckoutForm = ({ setCheckForm }) => {
    const handlePayment = () =>{
        alert("Payment successful")
    }

    const handleCloseForm = () =>{
         setCheckForm(false)
    }

  return (
    <div><div class="leading-loose rounded-xl">
    <form class="max-w-xl m-4 p-10 bg-[#162135] rounded shadow-xl">
      <p class="text-[#BF6900] font-medium">Customer information</p>
      <div class="">
        <label class="block text-sm text-white my-1" for="cus_name">Name</label>
        <input class="w-full px-5 py-1 text-white bg-black rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name"></input>
      </div>
      <div class="mt-2">
        <label class="block text-sm text-white my-1" for="cus_email">Email</label>
        <input class="w-full px-5  py-1 text-white bg-black rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email"></input>
      </div>
      <div class="mt-2">
        <label class=" block text-sm text-white my-1" for="cus_email">Address</label>
        <input class="w-full px-2 py-2 text-white bg-black rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email"></input>
      </div>
      <div class="mt-2">
        <label class="hidden text-sm block text-white my-1" for="cus_email">City</label>
        <input class="w-full px-2 py-2 text-white bg-black rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email"></input>
      </div>
      <div class="inline-block mt-2 w-1/2 pr-1">
        <label class="hidden block text-sm text-white my-1" for="cus_email">Country</label>
        <input class="w-full px-2 py-2 text-white bg-black rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email"></input>
      </div>
      <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
        <label class="hidden block text-sm text-white" for="cus_email">Zip</label>
        <input class="w-full px-2 py-2 text-white bg-black rounded" id="cus_email"  name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email"></input>
      </div>
      <p class="mt-4 text-[#BF6900] font-medium">Payment information</p>
      <div class="">
        <label class="block text-sm text-white my-1" for="cus_name">Card</label>
        <input class="w-full px-2 py-2 text-white bg-black rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name"></input>
      </div>
      <div className='flex justify-between'>
      <div class="mt-4">
        <button class="px-4 py-1 text-white font-light tracking-wider bg-[#BF6900] rounded" type="submit" onClick={handlePayment}>Pay</button>
      </div>
      <div class="mt-4">
        <button class="px-4 py-1 text-white font-light tracking-wider bg-[#BF6900] rounded" type="submit" onClick={handleCloseForm}>Close</button>
      </div>
      </div>
    </form>
  </div></div>
  )
}

export default CheckoutForm
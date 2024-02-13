import React, { useState } from 'react'
import PlanCard from './PlanCard'
import CheckoutForm from './CheckoutForm'

const planDetails = [
  {
    planname:"Standard Plan",
    cost: 49,
    duration:"One Month Access"
  },
  {
    planname:"Quarterly Plan",
    cost: 120,
    duration:"Three Month Access"
  },  
  {
    planname:"Half Yearly Plan",
    cost: 250,
    duration:"Six Month Access"
  },  
  {
    planname:"Yearly Plan",
    cost: 550,
    duration:"One Year Access"
  }
]
const Plans = () => {
  const [checkoutformToggle, setCheckoutFormToggle] = useState(false)
  return (
    <div>
    <div className='flex justify-between py-2 px-10'>
    {
      planDetails.map((plan, index)=>(<PlanCard key={index} info={plan} checkform = {checkoutformToggle} setCheckForm ={setCheckoutFormToggle}/>))
    }
    </div>
    <div className='relative'>
      {
      checkoutformToggle&& (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                {/* <div className="bg-[#162135] rounded-lg p-8 w-[30rem]"> */}
                    <CheckoutForm checkform = {checkoutformToggle} setCheckForm ={setCheckoutFormToggle}/>
                
                </div>
      )}
    </div>
    </div>

  )
}

export default Plans
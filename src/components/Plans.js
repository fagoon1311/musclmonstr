import React from 'react'
import PlanCard from './PlanCard'

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
  return (
    // <div>
    //   <PlanCard  info={planDetails[0]}/>
    // </div>
    <div className='flex justify-between py-2 px-10'>
    {
      planDetails.map((plan, index)=>(<PlanCard key={index} info={plan}/>))
    }
    </div>
  )
}

export default Plans
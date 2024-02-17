import React from 'react'
import { MapPin } from 'lucide-react'

const LocationPopUp = ({ toggle, setToggle }) => {
  return (
    <div className='bg-[#162135] rounded-lg py-2'>
        <h6 className='text-white p-2 mx-4 flex'><MapPin />  <span className='px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </span></h6>
        <h6 className='text-white p-2 mx-4 flex'><MapPin />  <span className='px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </span></h6>
        <h6 className='text-white p-2 mx-4 flex'><MapPin />  <span className='px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </span></h6>
        <button onClick={()=>{setToggle(false)}} className='className="text-white bg-[#BF6900] hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"'>
            Close</button>
    </div>
  )
}

export default LocationPopUp